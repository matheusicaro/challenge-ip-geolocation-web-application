## FRONT-END FOR CODERBYTE'S FULL STACK PROJECT CHALLENGE.

## Summary:

1. [Intro](#intro)
2. [Project Screen Shot](#project-screen-shot)
3. [Installation and Setup Instructions](#installation-and-setup-instructions))
4. [Folder Structure](#folder-structure)
5. [Project Specifications](#project-specifications)
6. [To Do List](#to-do-list)


## Intro:

Web application developed for Coderbyte's Full Stack developer challenge. <br>
More details of the challenge can be accessed at [this link](https://github.com/matheusicaro/coderbyte-full-stack-project/tree/master).


## Project Screen Shot

![front-end](https://github.com/matheusicaro/coderbyte-full-stack-project/blob/master/data/front-end.gif)


## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

1. clone the repository: `git clone https://github.com/matheusicaro/coderbyte-full-stack-project.git`
2. Access the backend folder by the terminal: `cd front-end`
3. Installation: `npm install`  
4. To Start Server: `npm start`  
5. To Visit App: `localhost:3000/`  


## Folder Structure

```
-- src/assets _________________: static project files like image, json, etc.
-- src/components _____________: generic components for global use in the project
-- src/constants ______________: general constants such as messages, warnings, etc.
-- src/pages __________________: paging components like home, page_1, page_2, etc.
-- src/routes _________________: application routes to pages
-- src/services _______________: business rules layer for resource provisioning, external API, etc.
-- src/store __________________: store for application status control
-- src/store/ducks ____________: store configuration according to the ducks pattern
-- src/store/ducks/*folder ____: store states
-- src/utils __________________: useful project functions
```  

## Project Specifications

- Used [React and Typescript](https://www.typescriptlang.org/pt/docs/handbook/react.html)
- Used [Material-UI](https://material-ui.com/) and [Styled Components](https://styled-components.com/) lib for styling 
- Used [Redux-Saga](https://redux-saga.js.org/) for store management along with the [Ducks pattern](https://github.com/erikras/ducks-modular-redux)
- Used [Reack Hooks](https://reactjs.org/docs/hooks-intro.html) with stateful and stateless components.
- Used [Husky](https://typicode.github.io/husky/#/) for analyzing lint tests and configurations before committing to the repository


## To Do List:  

Due to the availability of time to implement the solution for the proposed challenge, some tasks that are not mandatory for the challenge, but essential to deliver a solution, are pending below:

1. Unit testing and integration
2. component testing
3. CSS style tests
