# Optum-GraphQL
In order to run the POC you'll need three terminal windows, four if you'd like to run the interface to call GraphQL from React in the browser. 

## List of Services
- Mock services run on port 5000.
- Federated GraphQL service runs on port 4000.
- User GraphQL service runs on port 4001.
- Order GraphQL service runs on port 4002.
- Medications GraphQL service runs on port 4003.
- React interface runs on port 3000.


## Mock services
```
cd services
yarn install
yarn start
```

## GraphQL instances for User, Order and Medication
The command below will start all sub GraphQL services cuncurrently.
```
cd apollo
yarn install
yarn start
```

## Federated GraphQL
The Federated GraphQL must be run after the other three services are running. Navigate to http://localhost:4000 to view the GraphQL playground.
```
cd apollo
yarn run federated
```

## React Interface
The React App demonstrates how to make a call from the client side. 
```
cd interface
yarn install
yarn start 
```

## Sample Query
```
{
  user(id: "047017a4-1e89-46e6-8bea-aff3a94c6010") {
    id
    firstname
    lastname
    name
    age
    birthdate
    managedUsers {
      id
      firstname
      lastname
      name
      age
      birthdate
    }
    orders {
      medication
      estimatedDeliveryDate
      message
    }
    medications {
      id
      name
    }
  }
}

```

