import os
import shutil

data = 'data'

for dir in os.listdir(data):
    species = os.path.join(data, dir)

    if os.path.isdir(species):
        num = len([f for f in os.listdir(species) if f.endswith('.jpg')])

        if num < 32:
            shutil.rmtree(species)
            print(f'deleted {species} (contained {num} images)')
