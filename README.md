# the_cookbook

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```md
- Clone the repository onto your local machine
- In order to install all the backend (python) project dependencies, you need to set up and activate a virtual python environment. Venv and Pipenv are recommended: "python3 -m venv .venv"
-- in a unix or mac environment, run...
-- and linux "sudo apt-get install wheel postgresql libpq-dev python3-dev psycopg2-binary"
-- and mac install "pip3 install psycopg2-binary", then [[https://brew.sh/|homebrew]] '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' then "brew install postgresql"
- Once you have activated your virtual environment, install the project dependencies by running "pip3 install -r requirements.txt" in your console.
- To initialize the database, run "python3 manage.py init_db"
- Once the above is done, run "npm i" to install all the frontend dependencies.
```

### Running The Project

```md
- Run "python3 manage.py runserver" to start up the backend server.
- Run "npm start" to start the frontend application.
- Once the two servers load, you will be able to access the frontend at <http://localhost:3000/> and the backend at <http://localhost:8000/api/recipes/>.
