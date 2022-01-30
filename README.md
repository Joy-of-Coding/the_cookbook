# the_cookbook

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```md
- Clone the repository onto your local machine
- In order to install all the backend (python) project dependencies, you need to set up and activate a virtual python environment. Venv and Pipenv are recommended.
- Once you have activated your virtual environment, install the project dependencies by running "pip install -r requirements.txt" in your console.
- To initialize the database, run "python manage.py init_db"
- Once the above is done, navigate into the frontend folder using console (i.e "cd frontend" on Windows) and run "npm i" to install all the frontend dependencies.
```

### Running The Project

```md
- Run "python manage.py runserver" to start up the backend server.
- Navigate into the frontend folder using console (i.e "cd frontend" on Windows) and run "npm start" to start the frontend application.
- Once the two servers load, you will be able to access the backend at <http://localhost:8000/> and the frontend at <http://localhost:3000/>.
