import numpy as np

def run_from_ipython():
	try:
		__IPYTHON__
		return True
	except NameError:
		return False



