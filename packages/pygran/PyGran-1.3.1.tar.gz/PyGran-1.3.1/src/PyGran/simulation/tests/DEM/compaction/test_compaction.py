import PyGranSim as simulation
from PyGranParams import organic

def test_run():

	# Create a dictionary of physical parameters
	params = {

		# Define the system
		'boundary': ('p','p','p'), # fixed BCs
		'box':  (-0.001, 0.001, -0.001, 0.001, 0, 0.004), # simulation box size

		# Define component(s)
		'species': ({'material': organic, 'radius': ('constant', 2e-4)}, ),

		# Timestep
		'dt': 1e-6,

		# Apply gravitional force in the negative direction along the z-axis
		'gravity': (9.81, 0, 0, -1),

		# Number of simulation steps (non-PyGran variable)
		'nsteps': 2.5e4,

		# Import surface mesh
		'mesh': {
			'wallZ': {'file': 'tests/DEM/compaction/mesh/square.stl', 'mtype': 'mesh/surface/stress', 'material': organic, \
				'args': {'scale': 1e-3,'move': (0, 0, 1e-3)}}
			},
	}

	# Create an instance of the DEM class
	with simulation.DEM(**params) as sim:

		# Setup a primitive wall along the xoy plane at z=0
		sim.setupWall(species=1, wtype='primitive', plane='zplane', peq = 0.0)

		# Insert 200 particles
		insert = sim.insert(species=1, value=200, freq=params['nsteps']/3)
		sim.run(params['nsteps'], params['dt'])
		sim.remove(insert)

		# Move wall at constant speed
		moveZ = sim.moveMesh(name='wallZ', linear=(0, 0, -0.03))
		sim.run(params['nsteps'] * 2, params['dt'])
		sim.remove(moveZ)

		# Relax the system
		moveZ = sim.moveMesh(name='wallZ', linear=(0, 0, 0.01))
		sim.run(params['nsteps'] * 2, params['dt'])
