# Optum-GraphQL
In order to run the POC you'll need three terminal windows, four if you'd like to run the interface to call GraphQL from React in the browser. 

## Running the mock services
```
cd services
nodemon index
```
Mock services run on port 3001

## Running the 3 GraphQL instances for User, Order and Medication
```
cd apollo
npm start
```
User service runs on port 4001
Order service runs on port 4002
Medications service runs on port 4001

## Running the Federated GraphQL
```
cd apollo/federated
nodemon index
```
Federated GraphQL runs on port 4000. Navigate to http://localhost:4000 to view the GraphQL playground.

## Running the React Interface
```
cd interface
npm start 
```

