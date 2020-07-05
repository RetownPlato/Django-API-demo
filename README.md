`cd demo-project`
`django-admin startproject demo .`
`cd demo`
Using the project's namespace avoids name clashes with external modules
`django-admin startapp backend`
Sync your database
`python manage.py migrate`
Create an initial user named admin with a password of password123.
`python manage.py createsuperuser --email admin@example.com --username admin`
`cd demo/backend` and create a file called serializers.py


