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
