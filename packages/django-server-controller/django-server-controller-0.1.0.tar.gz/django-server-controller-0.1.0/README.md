# django-server-controller

Django server controllers, e.g. UwsgiController.

## Install

```shell
pip install django-server-controller
```

## Examples

**example_ctrl.py**

```python
from django_server_controller import UwsgiController
import example_pro

EXAMPLE_PRO_BASE_DIR = "/apprun/example-pro/"

try:
    from example_localsettings import *
except ImportError:
    pass

controller = UwsgiController(example_pro, EXAMPLE_PRO_BASE_DIR)
main = controller.get_controller()

if __name__ == "__main__":
    main()
```

**example_ctrl Usage**

```shell
C:\Workspace\example-pro>python example-ctrl.py
Usage: example-ctrl.py [OPTIONS] COMMAND [ARGS]...

Options:
  --help  Show this message and exit.

Commands:
  reload   Reload uwsgi server.
  restart  Restart uwsgi server.
  start    Start uwsgi server.
  status   Get uwsgi server status.
  stop     Stop uwsgi server.
```

## wsgi.ini file paths

- os.path.abspath(os.path.join(os.path.dirname(project.&#95;&#95;file&#95;&#95;), "wsgi.ini"))
- os.path.abspath(os.path.join(base_dir, "./etc/wsgi.ini"))
- os.path.abspath("wsgi.ini")

**Chrooted to base_dir before find wsgi.ini**

## Suggest project folders

- /apprun/example-pro/
   - /apprun/example-pro/web/
   - /apprun/example-pro/web/static/
   - /apprun/example-pro/web/media/
   - /apprun/example-pro/logs/
   - /apprun/example-pro/tmp/
   - /apprun/example-pro/etc/
   - /apprun/example-pro/uwsgi.pid

## Releases

### v0.1.0 2020/07/25

- First release.
