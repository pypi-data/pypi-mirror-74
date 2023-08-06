'''
This module contains the Model superclass and all corresponding subclasses.
'''

from __future__ import(
	division,
	print_function,
	)

__docformat__ = 'restructuredtext en'
__all__ = ['Daem']

import matplotlib.pyplot as plt
import numpy as np
import warnings

#import exceptions
from .exceptions import(
	ScalarError,
	)

#import helper functions
from .core_functions import(
	assert_len,
	derivatize,
	)

from .model_helper import(
	_calc_p,
	_bd_calc_A,
	_rpo_calc_A,
	)

class Model(object):
	'''
	Class to store model setup. Intended for subclassing, do not call
	directly.
	'''

	def __init__(self, A, t, T):
		'''
		Initialize the superclass.

		Parameters
		----------
		A : 2d array-like
			Array of the transform matrix to convert from time to rate space.
			Rows are timepoints and columns are k/E values. Shape 
			[`nt` x `nk`].

		t : array-like
			Array of time, in seconds. Length `nt`.

		T : scalar or array-like
			Scalar or array of temperature, in Kelvin. If array, length `nt`.
		'''

		#ensure data is in the right form
		nt = len(t)
		t = assert_len(t, nt)
		T = assert_len(T, nt)
		A = assert_len(A, nt)

		#store attributes
		self.A = A
		self.nt = nt
		self.t = t
		self.T = T

	#define a class method for creating instance directly from timedata
	@classmethod
	def from_timedata(self):
		raise NotImplementedError

	#define a class method for creating instance directly from ratedata
	@classmethod
	def from_ratedata(self):
		raise NotImplementedError

	#define a method for calculating the L curve
	def calc_L_curve(
			self, 
			timedata, 
			ax = None, 
			nLam = 150, 
			lam_max = 1e2, 
			lam_min = 1e-3, 
			plot = False):
		'''
		Function to calculate the L-curve for a given model and timedata
		instance in order to choose the best-fit smoothing parameter, lambda.

		Parameters
		----------
		timedata : rp.TimeData
			``rp.TimeData`` instance containing the time and fraction
			remaining arrays to use in L curve calculation.

		ax : None or matplotlib.axis
			Axis to plot on. If `None` and ``plot = True``, automatically 
			creates a ``matplotlip.axis`` instance to return. Defaults to 
			`None`.

		nLam : int
			Number of lambda values to consider. Defaults to 150.

		lam_max : float or int
			Maximum lambda value to search. Defaults to 1e2.

		lam_min : float or int
			Minimum lambda value to search. Defaults to 1e-3.

		plot : Boolean
			Tells the method to plot the resulting L curve or not. Defaults to
			`False`.

		Returns
		-------
		lam_best : float
			The calculated best-fit lambda value.

		axis : None or matplotlib.axis
			If ``plot = True``, returns an updated axis handle with plot.

		Raises
		------
		ScalarError
			If `lam_max` or `lam_min` are not scalar.

		ScalarError
			If `nLam` is not int.

		See Also
		--------
		calc_L_curve
			Package-level method for ``calc_L_curve``.

		References
		----------
		[1] D.C. Forney and D.H. Rothman (2012) Inverse method for calculating
			respiration rates from decay time series. *Biogeosciences*, **9**,
			3601-3612.

		[2] P.C. Hansen (1994) Regularization tools: A Matlab package for 
			analysis and solution of discrete ill-posed problems. *Numerical*
			*Algorithms*, **6**, 1-35.
		'''

		#check that nLam, lam_max, and lam_min are in the right form
		if not isinstance(lam_max, (int, float)):
			raise ScalarError(
				'lam_max must be float or int')

		elif not isinstance(lam_min, (int, float)):
			raise ScalarError(
				'lam_min must be float or int')

		elif not isinstance(nLam, int):
			raise ScalarError(
				'nLam must be int')

		#define arrays
		log_lam_vec = np.linspace(np.log10(lam_min), np.log10(lam_max), nLam)
		lam_vec = 10**log_lam_vec

		res_vec = np.zeros(nLam)
		rgh_vec = np.zeros(nLam)

		#for each lambda value in the vector, calculate the errors
		for i, w in enumerate(lam_vec):
			_, res, rgh = _calc_p(self, timedata, w)
			res_vec[i] = res
			rgh_vec[i] = rgh

		#convert to log space
		res_vec = np.log10(res_vec)
		rgh_vec = np.log10(rgh_vec)

		#remove noise after 6 sig figs
		res_vec = np.around(res_vec, decimals = 6)
		rgh_vec = np.around(rgh_vec, decimals = 6)

		#calculate derivatives and curvature
		dydx = derivatize(rgh_vec, res_vec)
		dy2d2x = derivatize(dydx, res_vec)

		#function for curvature
		k = dy2d2x/(1+dydx**2)**1.5

		#find first occurrance of argmax k, ignoring first and last points
		i = np.argmax(k[1:-1])
		i += 1 #account for the fact that we dropped the first point
		lam_best = lam_vec[i]

		#plot if necessary
		if plot:

			#create axis if necessary
			if ax is None:
				_,ax = plt.subplots(1, 1)

			#plot results
			ax.plot(
				res_vec,
				rgh_vec,
				linewidth=2,
				color='k',
				label='L-curve')

			ax.scatter(
				res_vec[i],
				rgh_vec[i],
				s=50,
				facecolor='w',
				edgecolor='k',
				linewidth=1.5,
				label=r'best-fit $\lambda$')

			#set axis labels and text

			xlab = r'residual error, $\log_{10} \left( \frac{\|\|' \
				r'\mathbf{A}\cdot \mathbf{p} - \mathbf{g} \|\|}{\sqrt{n_{j}}}' \
				r'\right)$'
			ax.set_xlabel(xlab)
			
			ylab = r'roughness, $\log_{10} \left( \frac{\|\| \mathbf{R}' \
				r'\cdot\mathbf{p} \|\|}{\sqrt{n_{l}}} \right)$'

			ax.set_ylabel(ylab)

			label1 = r'best-fit $\lambda$ = %.3f' %(lam_best)
			
			label2 = (
				r'$log_{10}$ (resid. err.) = %.3f' %(res_vec[i]))
			
			label3 = (
				r'$log_{10}$ (roughness)  = %0.3f' %(rgh_vec[i]))

			ax.text(
				0.5,
				0.95,
				label1 + '\n' + label2 + '\n' + label3,
				verticalalignment='top',
				horizontalalignment='left',
				transform=ax.transAxes)

			#make tight layout
			plt.tight_layout()

			return lam_best, ax

		else:
			return lam_best


class Daem(Model):
	__doc__='''
	Class to calculate the `DAEM` model transform. Used for ramped-temperature
	kinetic problems such as Ramped PyrOx, pyGC, TGA, etc.
	
	Parameters
	----------
	E : array-like
		Array of E values, in kJ/mol. Length `nE`.

	log10omega : scalar, array-like, or lambda function
		Arrhenius pre-exponential factor, either a constant value, array-like
		with length `nE`, or a lambda function of E (in kJ). 

	t : array-like
		Array of time, in seconds. Length `nt`.

	T : array-like
		Array of temperature, in Kelvin. Length `nt`.

	Warnings
	--------
	UserWarning
		If attempting to use isothermal data to create a ``Daem`` model 
		instance.

	See Also
	--------
	RpoThermogram
		``rp.TimeData`` subclass for storing and analyzing RPO 
		time/temperature data.

	EnergyComplex
		``rp.RateData`` subclass for storing and analyzing RPO rate data.

	Examples
	--------
	Creating a DAEM using manually-inputted `E`, `omega`, `t`, and `T`::

		#import modules
		import numpy as np
		import rampedpyrox as rp

		#generate arbitrary data
		t = np.arange(1,100) #100 second experiment
		beta = 0.5 #K/second
		T = beta*t + 273.15 #K
		
		E = np.arange(50, 350) #kJ/mol
		log10omega = 10 #s-1

		#create instance
		daem = rp.Daem(E, log10omega, t, T)

	Creating a DAEM from real thermogram data using the ``rp.Daem.from_timedata``
	class method::

		#import modules
		import rampedpyrox as rp

		#create thermogram instance
		tg = rp.RpoThermogram.from_csv('some_data_file.csv')

		#create Daem instance
		daem = rp.Daem.from_timedata(
			tg, 
			E_max = 350, 
			E_min = 50, 
			nE = 250, 
			log10omega = 10)

	Creating a DAEM from an energy complex using the
	``rp.Daem.from_ratedata`` class method::

		#import modules
		import rampedpyrox as rp

		#create energycomplex instance
		ec = rp.EnergyComplex(E, p0E)

		#create Daem instance
		daem = rp.Daem.from_ratedata(
			ec, 
			beta = 0.08, 
			log10omega = 10, 
			nt = 250, 
			t0 = 0, 
			T0 = 373, 
			tf = 1e4)

	Plotting the L-curve of a Daem to find the best-fit lambda value::

		#import modules
		import matplotlib.pyplot as plt

		#create figure
		fig, ax = plt.subplots(1,1)

		#plot L curve
		lam_best, ax = daem.calc_L_curve(
			tg,
			ax = None, 
			plot = True,
			lam_min = 1e-3,
			lam_max = 1e2,
			nLam = 150)

	**Attributes**

	A : np.ndarray

	E : np.ndarray
		Array of E values, in kJ/mol. Length `nE`.

	nE : int
		Number of activation energy points.

	nt : int
		Number of timepoints.

	t : np.ndarray
		Array of timepoints, in seconds. Length `nt`.

	T : np.ndarray
		Array of temperature, in Kelvin. Length `nt`.

	References
	----------
	[1] R.L Braun and A.K. Burnham (1987) Analysis of chemical reaction 
		kinetics using a distribution of activation energies and simpler 
		models. *Energy & Fuels*, **1**, 153-161.

	[2] B. Cramer (2004) Methane generation from coal during open system
		pyrolysis investigated by isotope specific, Gaussian distributed
		reaction kinetics. *Organic Geochemistry*, **35**, 279-392.

	[3] V. Dieckmann (2005) Modeling petroleum formation from heterogeneous
		source rocks: The influence of frequency factors on activation energy
		distribution and geological prediction. *Marine and Petroleum*
		*Geology*, **22**, 375-390.

	[4] D.C. Forney and D.H. Rothman (2012) Common structure in the
		heterogeneity of plant-matter decay. *Journal of the Royal Society*
		*Interface*, rsif.2012.0122.

	[5] D.C. Forney and D.H. Rothman (2012) Inverse method for calculating
		respiration rates from decay time series. *Biogeosciences*, **9**,
		3601-3612.

	[6] P.C. Hansen (1994) Regularization tools: A Matlab package for analysis
		and solution of discrete ill-posed problems. *Numerical Algorithms*, 
		**6**, 1-35.

	[7] C.C. Lakshmananan et al. (1991) Implications of multiplicity in
		kinetic parameters to petroleum exploration: Distributed activation
		energy models. *Energy & Fuels*, **5**, 110-117.

	[8] J.E. White et al. (2011) Biomass pyrolysis kinetics: A comparative
		critical review with relevant agricultural residue case studies.
		*Journal of Analytical and Applied Pyrolysis*, **91**, 1-33.
	'''

	def __init__(self, E, log10omega, t, T):

		#warn if T is scalar
		if isinstance(T, (int, float)):
			warnings.warn(
				'Attempting to use isothermal data for RPO run! T is a scalar'
				' value of: %r. Consider using an isothermal model type'
				' instead.' % T, UserWarning)

		elif len(set(T)) == 1:
			warnings.warn(
				'Attempting to use isothermal data for RPO run! T is a scalar'
				' value of: %r. Consider using an isothermal model type'
				' instead.' % T[0], UserWarning)

		#get log10omega into the right format
		if hasattr(log10omega,'__call__'):
			log10omega = log10omega(E)

		#calculate A matrix
		A = _rpo_calc_A(E, log10omega, t, T)

		super(Daem, self).__init__(A, t, T)

		#store Daem-specific attributes
		nE = len(E)
		self.log10omega = assert_len(log10omega, nE)
		self.E = assert_len(E, nE)
		self.nE = nE

	@classmethod
	def from_timedata(
			cls, 
			timedata, 
			E_max = 350, 
			E_min = 50, 
			log10omega = 10, 
			nE = 250):
		'''
		Class method to directly generate an ``rp.Daem`` instance using data
		stored in an ``rp.TimeData`` instance.

		Parameters
		----------
		timedata : rp.TimeData
			``rp.TimeData`` instance containing the time array to use
			for creating the DAEM.

		E_max : int
			The maximum activation energy value to consider, in kJ/mol.
			Defaults to 350.

		E_min : int
			The minimum activation energy value to consider, in kJ/mol.
			Defaults to 50.

		log10omega : scalar, array-like, or lambda function
			Arrhenius pre-exponential factor, either a constant value, array-
			likewith length `nE`, or a lambda function of E. Defaults to 10.
		
		nE : int
			The number of activation energy points. Defaults to 250.

		Warnings
		--------
		UserWarning
			If attempting to create a DAEM with an isothermal timedata 
			instance.

		See Also
		--------
		from_ratedata
			Class method to directly generate an ``rp.Daem`` instance using 
			data stored in an ``rp.RateData`` instance.
		'''

		#warn if timedata is not RpoThermogram
		td_type = type(timedata).__name__

		if td_type not in ['RpoThermogram']:
			warnings.warn(
				'Attempting to calculate p distribution using an isothermal'
				' timedata instance of type %r. Consider using rp.RpoThermogram' 
				' instance instead' % td_type, UserWarning)

		#generate E, t, and T array
		E = np.linspace(E_min, E_max, nE)
		t = timedata.t
		T = timedata.T

		return cls(E, log10omega, t, T)

	@classmethod
	def from_ratedata(
			cls, 
			ratedata, 
			beta = 0.08, 
			log10omega = 10, 
			nt = 250,
			t0 = 0, 
			T0 = 373, 
			tf = 1e4):
		'''
		Class method to directly generate an ``rp.Daem`` instance using data
		stored in an ``rp.RateData`` instance.

		Parameters
		----------
		ratedata : rp.RateData
			``rp.RateData`` instance containing the E array to use for
			creating the DAEM. 

		beta : int or float
			Temperature ramp rate to use in model, in Kelvin/second. Defaults
			to 0.08 (*i.e.* 5K/min)

		log10omega : scalar, array-like, or lambda function
			Arrhenius pre-exponential factor, either a constant value, array-
			likewith length `nE`, or a lambda function of E. Defaults to 10.

		nt : int
			The number of time points to use. Defaults to 250.

		t0 : int or float
			The initial time to be used in the model, in seconds. Defaults 
			to 0.

		T0 : int or float
			The initial temperature to be used in the model, in Kelvin.
			Defaults to 373.

		tf : int or float
			The final time to be used in the model, in seconds. Defaults to
			10,000.

		Warnings
		--------
		UserWarning
			If attempting to create a DAEM with a non-EnergyComplex ratedata 
			instance.

		See Also
		--------
		from_timedata
			Class method to directly generate an ``rp.Daem`` instance using data
			stored in an ``rp.TimeData`` instance.

		'''

		#warn if ratedata is not EnergyComplex
		rd_type = type(ratedata).__name__

		if rd_type not in ['EnergyComplex']:
			warnings.warn(
				'Attempting to calculate isotopes using a ratedata instance of'
				' type %r. Consider using rp.EnergyComplex instance instead'
				% rd_type, UserWarning)

		#generate E, t, and T array
		E = ratedata.E
		t = np.linspace(t0, tf, nt)
		T = T0 + beta*t

		return cls(E, log10omega, t, T)


class LaplaceTransform(Model):
	__doc__='''
	
	ADD DOCSTRING!
	
	'''

	def __init__(self, k, t, T, logged = False):

		#calculate A matrix
		A = _bd_calc_A(k, t, logged = logged)

		super(LaplaceTransform, self).__init__(A, t, T)

		#store LaplaceTransform-specific attributes
		nk = len(k)
		self.k = assert_len(k, nk)
		self.nk = nk
		self.logged = logged

	@classmethod
	def from_timedata(
			cls, 
			timedata, 
			k_max = 1, 
			k_min = 1e-6, 
			nk = 250,
			logged = False):
		'''
		Class method to directly generate an ``rp.LaplaceTransform`` instance 
		using data stored in an ``rp.TimeData`` instance.

		Parameters
		----------
		timedata : rp.TimeData
			``rp.TimeData`` instance containing the time array to use
			for creating the LaplaceTransform model.

		k_max : int
			The maximum first-order rate constant value to consider, in s-1 if
			not `logged` is `False` or in ln(s-1) if `logged` is `True`.
			Defaults to 1.

		k_min : int
			The minimum first-order rate constant value to consider, in s-1 if
			not `logged` is `False` or in ln(s-1) if `logged` is `True`.
			Defaults to 1e-6.
		
		nk : int
			The number of rate constant points. Defaults to 250.

		logged : boolean
			If `True`, treats inputted `k` array as the natural log of k (i.e. 
			lambda in Forney and Rothman, 2012 notation). If `False`, treats
			`k` as a linear array. Defaults to `False`.

		Warnings
		--------
		UserWarning
			If attempting to create a LaplaceTransform with a non-isothermal 
			timedata instance.

		See Also
		--------
		from_ratedata
			Class method to directly generate an ``rp.LaplaceTransform`` 
			instance using data stored in an ``rp.RateData`` instance.
		'''

		#warn if timedata is not RpoThermogram
		td_type = type(timedata).__name__

		if td_type not in ['BioDecay']:
			warnings.warn(
				'Attempting to calculate p distribution using a non-isothermal'
				' timedata instance of type %r. Consider using rp.BioDecay' 
				' instance instead' % td_type, UserWarning)

		#generate k, t, and T array
		k = np.linspace(k_min, k_max, nk)
		t = timedata.t
		T = timedata.T

		return cls(k, t, T, logged = logged)

	@classmethod
	def from_ratedata(
			cls, 
			ratedata,
			nt = 250,
			t0 = 0,
			tf = 1e5,
			T = 298):
		'''
		Class method to directly generate an ``rp.LaplaceTransform`` instance 
		using data stored in an ``rp.RateData`` instance.

		Parameters
		----------
		ratedata : rp.RateData
			``rp.RateData`` instance containing the k array to use for
			creating the LaplaceTransform. 

		nt : int
			The number of time points to use. Defaults to 250.

		t0 : int or float
			The initial time to be used in the model, in seconds. Defaults 
			to 0.

		tf : int or float
			The final time to be used in the model, in seconds. Defaults to
			100,000.

		T : int or float
			The temperature of the experiment, in Kelvin. Defaults to 298.

		Warnings
		--------
		UserWarning
			If attempting to create a LaplaceTransform with a non-kDistribution 
			ratedata instance.

		See Also
		--------
		from_timedata
			Class method to directly generate an ``rp.LaplaceTransform`` 
			instance using data stored in an ``rp.TimeData`` instance.
		'''

		#warn if ratedata is not EnergyComplex
		rd_type = type(ratedata).__name__

		if rd_type not in ['kDistribution']:
			warnings.warn(
				'Attempting to calculate isotopes using a ratedata instance of'
				' type %r. Consider using rp.kDistribution instance instead'
				% rd_type, UserWarning)

		#generate k, t, and T array
		k = ratedata.k
		t = np.linspace(t0, tf, nt)
		l = ratedata.logged #make sure this gets stored!

		return cls(k, t, T, logged = l)

if __name__ == '__main__':

	import rampedpyrox as rp

