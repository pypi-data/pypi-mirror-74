import subprocess
import os
print("Starting...")
print("Converting...")
(stat, output) = subprocess.getstatusoutput("python ExampleScript.py build")
path = os.path.realpath(__file__).split("\\")
path[len(path)-1] = "build"
print("Done...At "+ "\\".join(path))

