release: python leadmanager/manage.py migrate --noinput
web: gunicorn --pythonpath leadmanager leadmanager.wsgi --log-file -