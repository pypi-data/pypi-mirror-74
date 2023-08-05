# Easyway Contributing and Setup



## Requirements
1. Python 3.6 or higher

2. Django 2.2.2

3. Virtualenv

4. Venv

   

## How to install
1. Navigate to easyway_backend folder

```
cd easyway_backend
```

2. Create virtual environment by typing

```
python -m venv venv
```
3. Activate the virual environment as follows

```
source venv/bin/activate
```

4. Install project based requirements by typing

```
pip install -r dev_requirements.txt
```
5. Make the migrations as follows:

```
python manage.py makemigrations
```
Then:
```
python manage.py migrate
```

5. Create superuser to monitor models from admin page
```
python manage.py createsuperuser
```

6. Run the server as follows:
```
python manage.py runserver
```



