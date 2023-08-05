set PATH=C:\Program Files\Python37;C:\Program Files\Python37\Scripts;%PATH%
virtualenv -p "C:\Program Files\Python37\python.exe" .
call .\Scripts\activate
cd dist3
FOR %%a IN (*.whl) DO pip install %%a
cd ..\tests
python -m unittest discover
