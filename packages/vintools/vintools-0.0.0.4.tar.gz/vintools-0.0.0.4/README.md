### vintools


To get started:
```
pip install vintools
```

```
import vintools as v
```

To update packages in a jupyter notebook:
```
v.update.to_pypi(package_path, pw_file, commit_msg)
```

One requirement is to have a text file set up as follows:
```
twine-username
twine-password
```
