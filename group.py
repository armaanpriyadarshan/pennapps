import os
import shutil

dir = 'data'

for filename in os.listdir(dir):
    if filename.endswith('.jpg'):
        species_name = '_'.join([f.capitalize() for f in filename.split('_')[:2]])

        species_folder = os.path.join(dir, species_name)
        if not os.path.exists(species_folder):
            os.makedirs(species_folder)

        source = os.path.join(dir, filename)
        destination = os.path.join(species_folder, filename)
        shutil.move(source, destination)
