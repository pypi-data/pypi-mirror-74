#cython: language_level=2
from __future__ import division

import os
import importlib

from songfinder import __appName__, __arch__

try:
	fileName = os.path.splitext( os.path.split(__file__)[1] )[0]
	module = importlib.import_module('%s.lib.%s_%s'%(__appName__, fileName, __arch__))
	print("Using compiled version %s module"%fileName)
	globals().update(
		{n: getattr(module, n) for n in module.__all__} if hasattr(module, '__all__')
		else
		{k: v for (k, v) in module.__dict__.items() if not k.startswith('_')
	})
except (ImportError, NameError):
	# print(traceback.format_exc())

	def distance_len(mot, mot_ref):
		taille = len(mot)+1
		taille_ref = len(mot_ref)+1
		line1 = range(taille_ref)
		line2 = [1]+[0]*(taille_ref-1)
		for i in range(1,taille):
			for j in range(1,taille_ref):
				if mot_ref[j-1] == mot[i-1]:
					substitution = 0
				else:
					substitution = 1
				line2[j] = min(line1[j]+1, line2[j-1]+1,line1[j-1]+substitution)
			line1 = line2[:]
			line2 = [i+1]+[0]*(taille_ref-1)

		return  1-line1[taille_ref-1]/taille

	def distance_jar(mot, mot_ref):
		taille_ref = len(mot_ref)
		taille = len(mot)

		if taille > taille_ref:
			taille_inter = taille_ref
			mot_inter = mot_ref
			taille_ref = taille
			mot_ref = mot
			taille = taille_inter
			mot = mot_inter

		eloignement = max(taille,taille_ref)//2-1
		match = 0
		transpose = 0
		lettre_match = []
		lettre_match_ref = []
		indice_match_ref = []
		for i,lettre in enumerate(mot):
			for j in range(max(0,i-eloignement),min(taille_ref,i+eloignement+1)):
				if lettre == mot_ref[j]:
					if j not in indice_match_ref:
						match += 1
						lettre_match.append(lettre)
						indice_match_ref.append(j)
						break
		indice_match_ref.sort()
		lettre_match_ref = [mot_ref[j] for j in indice_match_ref]

		for i,lettre in enumerate(lettre_match):
			if lettre != lettre_match_ref[i]:
				transpose += 1
		if match:
			return 1.*0.333*(match/taille+match/taille_ref+match-transpose/match)
		return 0

	def distance_mai(mot, mot_ref):

		taille = len(mot)
		div = max(taille*2, len(mot_ref)*2) -1

		couples = [mot[i:i+2] for i in range(taille-1)]
		lettres = list(mot) + couples

		commun = [lettre for lettre in lettres if lettre in mot_ref]
		return len(commun)/div
