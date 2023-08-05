mkdir release
cd dist3
FOR %%a IN (*.whl) DO copy %%a ..\release
