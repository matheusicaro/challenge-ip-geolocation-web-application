## REST API FOR CODERBYTE'S FULL STACK PROJECT CHALLENGE.

## Summary:

1. [Intro](#intro)
2. [Project Screen Shot](#project-screen-shot)
3. [Installation and Setup Instructions](#installation-and-setup-instructions))
4. [Folder Structure](#folder-structure)
5. [Project Specifications](#project-specifications)
6. [To Do List](#to-do-list)


## Intro:

API Rest developed for Coderbyte's Full Stack developer challenge. <br>
More details of the challenge can be accessed at [this link](https://github.com/matheusicaro/coderbyte-full-stack-project/tree/master).


## Project Screen Shot

![back-end](https://github.com/matheusicaro/coderbyte-full-stack-project/blob/master/data/back-end.gif)


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

1. clone the repository: `git clone https://github.com/matheusicaro/coderbyte-full-stack-project.git`
2. Access the backend folder by the terminal: `cd back-end`
3. Installation: `npm install`
4. Decide which key will be used: <br><br>
    **OPTION_1)** *in the project environment settings it is already filled with a public key that until now (2021-09-09) is accessible.*<br><br>
    **OPTION_2)** if you don't have a key or the option 1 don't works, your will need create an account at [ipgeolocation](https://ipgeolocation.io/timezone-api.html) and generate your key for this api. Then, insert your key generated into the environment file in: `/back-end/.env` => `GEOLOCATION_API_KEY=your_key`<br>
    
5. To Start Server: `npm start`  
6. To Check Health Api: `localhost:4001/api/v1/health`
7. To Documentation Api: `localhost:4000/api-docs`  


## Folder Structure

```
-- src/config ___________________________: layer for configurations of essential services such as logger, environment, etc.
-- src/routes ___________________________: API routes
-- src/api ______________________________: API business layer
-- src/api/constants ____________________: layer for general constants such as messages, warnings, etc.r
-- src/api/controllers __________________: layer for controllers for handling requests
-- src/api/exceptions ___________________: layer for custom exceptions for API
-- src/api/integration __________________: layer for integration of external services such as PAI and others
-- src/api/models _______________________: layer for structured objects for runtime use
-- src/api/services _____________________: layer for business rules that responds to requests.
-- src/tests ____________________________: application unit tests
```  

## Project Specifications

- Used [Node.js](https://nodejs.org/en/) with [xpress](https://expressjs.com/) and with [TypeScript](https://www.typescriptlang.org/)
- Used [Jest](https://jestjs.io/) for unit testing
- Used [Husky](https://typicode.github.io/husky/#/) for analyzing lint tests and configurations before committing to the repository

## To Do List:  

Due to the availability of time to implement the solution for the proposed challenge, some tasks that are not mandatory for the challenge, but essential to deliver a solution, are pending below:

1. Increase unit test and integration coverage

![back-end-test-coverage](https://github.com/matheusicaro/coderbyte-full-stack-project/blob/master/data/back-end-test-coverage.PNG)
