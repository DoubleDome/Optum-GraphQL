# Optum-GraphQL
In order to run the POC you'll need three terminal windows, four if you'd like to run the interface to call GraphQL from React in the browser. 

Start by installing all the dependencies.
```
cd services
yarn install
```
```
cd apollo
yarn install
```

## Mock services
Mock services run on port 3001.
```
cd services
npm start
```

## GraphQL instances for User, Order and Medication
User service runs on port 4001.

Order service runs on port 4002.

Medications service runs on port 4001.

The command below will start all the smaller GraphQL services cuncurrently.
```
cd apollo
npm start
```

## Federated GraphQL
Federated GraphQL runs on port 4000. Navigate to http://localhost:4000 to view the GraphQL playground.
```
cd apollo/federated
nodemon index
```

## React Interface
The React App demonstrates how to make a call from the client side. 
```
cd interface
npm start 
```

## Sample Query
```
{
  user(id: "047017a4-1e89-46e6-8bea-aff3a94c6010") {
    id
    name
    age
    birthdate
    managedUsers {
      id
      name
      managedUsers {
        id
      }
    }
    orders {
      id
    }
    medications {
      id
    }
  }
}
```

