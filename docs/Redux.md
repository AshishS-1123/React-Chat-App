# Redux

All redux related boilerplate code is placed in ```src/redux```.

### Basics of Redux

Redux is a library for managing the state of our app. All the data we need it placed in a centralized store, which can then be accessed by components when they need.
<br><br>
To create a store, the ```{ createStore }``` function must be imported from redux.
A store is created as
```javascript
const store = createStore(reducers, initState, enhancers)
```

The values stored in this store can be read by components, but cannot be modified directly. If some components wants to change a value in the store, they must dispatch an action.
An action is a simple javascript object containing key-value pairs. By convention, the first key is the type of action that needs to be performed. The second key is the payload, representing that data needed to calculate the new state based on which action was performed.
For example, if user wishes to sign in, then the action will be
```javascript
const SignInAction = {
  type: "SIGN_IN",
  payload: {userName: "userName", password: 'test@1234'}
}
```

After an action is dispatched, a reducer is used for calculating the value of new state. Reducers are pure functions that take the current state and action as parameter,
and calculate the new state based on these values.
Reducers must be pure functions. The output they produce depends only on the current state and action. They should not produce any side effects. This makes sure that the result of reducer is predictable and makes testing easier.

### Code Structure

- ```actions``` - This folder contains definitions of all actions.
- ```constants``` - This folder defines actions types and stores then as constants.
- ```reducers``` - This folder contains reducers for each actions.
- ```store.jsx``` - This file contains the actual store with all the necessary settings.

### Actions

##### Auth Actions

Auth actions are used for authenticating the user- Sign In, Sign Out and Sing Up.
When these actions are dispatched, we also need to perform some API requests to the firebase server.
For example, when signing in, we need to check if a user exists or if the password is correct. But according to the principles of Redux, we cannot perform any side effect.


This is where Thunk comes in. Thunk is a middleware for Redux.
Using Thunk, we can perform some asynchronous activity like fetching some data from the server, and after that is complete, log the user in successfully.

For example, consider the SignIn action,

```javascript
function signInUser(userName, password) {

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(userName, password)
        .then(result => {
            dispatch({
              type: actionTypes.SIGN_IN,
              payload: { userName, password }
            })
        })
        .catch(error => {
            dispatch({
              type: actionTypes.ERROR_SIGN_IN,
              error: "Incorrect Password"
            })
        })
  }
}
```

Let's look at this code line by line.

The code defines a ```signInUser``` method. This method takes 2 paramters- the userName and the password.
Normally, the action would just return an object containing the type and payload for that action.

But since we are using Thunk and want to perform requests to the backend, we will return an arrow function that dispatches the required action.
This dispatch occurs only after we recieve some data/error from the backend.

The arrow function takes a couple of parameters-
  - **dispatch** - *function to dispatch actions*
  - **getState** - *function to get the current state*
  - **{getFirebase, getFirestore}** -  *function for getting the firebase and firestore instances*

In this function, we first create and instance of firebase so that we can interact with the backend.
Then this firebase object is used to peform authentication using the email and password we provided.

The signInWithEmailAndPassword function returns a promise. If the user was authenticated successfully, then we dispatch the SIGN_IN action that enters the users credentials into the state.
Otherwise, we dispatch a ERROR_SIGN_IN action which informs the user that some error occured.

### Reducers

##### Auth Reducer

The auth reducer is executed when any action related to authenticating the user is dispatched.
The Auth reducer is a function that takes 2 parameters, state and action. It returns the new state based on the value of the current state and the action.

In the Auth reducer, we first check what kind of action has been dispatched- SIGN_IN, ERROR_SIGN_IN, etc. If the SIGN_IN action was dispatched, then it updates the state with the username and password given in the payload of the action.
In case some error occured with signin, then the ERROR_SIGN_IN action would be recieved. In this case, we set the userName and password to empty strings and set the authError to the error string recieved in the payload. This error will be used in the components to inform the user exactly what error occured.

##### Root Reducer

As the application scales, there are going to be lots of reducers for various features- SignIn, SignOut, SignUp, SendMessage, etc. Inorder to manage to store easily, we combine all the reducers into a single reducer that we can pass to the store.

This is done using the ```combineReducers``` method from *Redux*.

```javascript
  const rootreducer = combineReducers({
    auth: authReducer,
    chat: chatreducer
  })
```

The combineReducers method takes an object containing various reducers as key value pairs and returns a single reducer.
