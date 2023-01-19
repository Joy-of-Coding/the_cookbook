# the_cookbook
---

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

> NOTE! both front and backends have to be running in 2 separate terminals and left running.
> 1) Run ```python3 manage.py runserver``` to start up the backend server.
> 2) Run ```npm start``` to start the frontend application.
> 3) Once the two servers load, you will be able to access the frontend at <http://localhost:3000/> and the backend at <http://localhost:8000/api/recipes/>.

---

## Architecture & Design

The cookbook is a full-stack web application composed of a React frontend and a Django REST Framework backend API. The two applications are hosted on different ports at the same server, where the two communicate using REST channels. The backend is responsible for managing database data, authentication, complex data manipulations, and making the data accessible at specified endpoint urls. The responsibility of the frontend is to fetch data from said endpoints, render it to the user in an interface, and allow them to relay data manipulation & access requests to the backend. For the sake of simplicity, one can think of the backend as the kitchen, the api requests as waiters, and the frontend as the seating area and menu.

### Backend - Frontend Interfacing

The backend lives on the `8000` port, while the frontend is on `3000`. The frontend is configured to proxy its requests to the `8000` port, meaning that API requests look at the backend port without having to manually specify this in the request.

### Authentication

This application uses JWT Token Auth for authentication purposes. The workflow is as follows:

1) Frontend loads with no logged-in user, meaning the client is unable to access the private application routes.
2) To log in, the frontend sends a HTTP POST request to ```auth/login/``` containing the user credentials in the request body.
3) The backend validates the credentials, if they are incorrect it sends back a bad response code. If the credentials are correct, the backend will send back a HTTP response with the authentication token and user data.
4) The frontend, upon receiving the response, will save user data to the global auth context and record the auth token in the browser cookies so it's accessible whenever.
5) Going forward, whenever the frontend sends a HTTP request to the backend, it will include the auth token in the request header. This way, the backend will know the request is authorized and serve the data without complaining.
6) When the user signs out, the token is marked as invalid and the user will have to sign in again to create a new one.

### Backend Architecture

Each Django application should:

1) Have a **strictly** defined scope of functionality. Each application should be responsible for something well-defined and self-contained. Unclear app responsibilities and excessive inter-reliance constitute architectural flaws and need to be avoided.
2) With the exception of internal apps (those that provide data to other applications, but not to the client directly), each application should map onto a matching url scope.

### Frontend Architecture

1) Each website page should be a file in ```src/pages``` and mapped to a url using the routes definition in ```App.js```.
2) API interfacing functionality goes into ```src/services```. Services will generally correspond to the Django application they are in charge of interfacing with. You can think of it as having different waiters for dessert, steak, and drinks.
3) Uncategorized but generally-application functions belong in ```src/utils```.
4) Everything that has to do with state and context goes into ```src/hooks```.
5) Application components go into ```src/components```. Components made up of smaller ones should be a folder in ```src/components/composites```.


## Debugging Tips

If you run into the following error:
```
Invalid options object. Dev Server has been initialized using an options object that does not match the API schema.
 - options.allowedHosts[0] should be a non-empty string.```
```
 Try creating a .env.local file with the following contents:
 ```
 DANGEROUSLY_DISABLE_HOST_CHECK=true
 ```
