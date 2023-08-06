Judge
=====

Django-Judge is an autograder that comes with a key feature of being blazingly fast compared to other coding problem autograders you might have used before.

Detailed documentation is in the "docs" directory.

Quick start
-----------

1. Add "coder" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'coder',
    ]

2. Include the polls URLconf in your project urls.py like this::

    path('coder/', include('coder.urls')),

3. Run ``python manage.py migrate`` to create the polls models.

4. Start the development server and visit http://127.0.0.1:8000/admin/
   to create a poll (you'll need the Admin app enabled).

5. Visit http://127.0.0.1:8000/coder/ to get on with it.
