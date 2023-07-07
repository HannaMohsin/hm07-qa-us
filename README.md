# Sprint 7 project
## Project Summary
This project covers testing the Urban Grocers app's api endpoints, status codes and response bodies.
## Technologies Utilized
Git and Github/
Postman/
Node JS/
Jest/
Javascript/
apiDocs and Swagger
## Testing summary 
2 tests were performed for each request (GET, POST, DELETE and PUT)\
- For GET, I tested that a kit would be returned with the response code 200, and that the body would contain the name of the kit.\
- For POST, I tested if creating a kit would return a status code of 201, and that the name in the body was "Picnic"\
- For DELETE, I tested being able to delete a kit with the status code 200, and that the body response would return as "true"\
- For PUT, I tested if changing the kit would return status code of 200, and that the body response would be true.
## Steps
- Clone or download repository
- In the command line, open directory
- Install npm if not already initialized with ```npm init```
- Install jest if not already initialized with ```npm jest```
- Run tests with ```npx jest directory/filename.test```, replacing ```directory/filename.test``` with your directory path