# the_cookbook

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

> 1) Clone the repository onto your local machine
> 2) In order to install all the backend (python) project dependencies, you need to set up and activate a virtual python environment. Venv and Pipenv are recommended: ```python3 -m venv .venv```
>
>> If you are using unix (mac or linux) and having issues during the installation process try the following steps depending on your OS:
>>
>> - Linux: ```sudo apt-get install wheel postgresql libpq-dev python3-dev psycopg2-binary```
>> - Mac: ```pip3 install psycopg2-binary```, then [[https://brew.sh/|homebrew]] ```'/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh>)"'``` then ```brew install postgresql```
>>
>
> 3) Once you have activated your virtual environment, install the project dependencies by running ```pip3 install -r requirements.txt``` in your console.
>
>> If you are having issues setting up a virtual environment, double check that your IDE has the necessary plugins (i.e Python for VsCode)
>
> 4) To initialize the database, run ```python3 manage.py init_db```
> 5) Once the above is done, run ```npm i``` to install all the frontend dependencies.

### Running The Project

> 1) Run ```python3 manage.py runserver``` to start up the backend server.
> 2) Run ```npm start``` to start the frontend application.
> 3) Once the two servers load, you will be able to access the frontend at <http://localhost:3000/> and the backend at <http://localhost:8000/api/recipes/>.
