# React Chat App

This is a messaging app developed using React, Material UI and Firebase

## Design

The mockup for the application has been created using Adobe XD with some borrowed inspiration from the internet.

This is what the final product is expected to look like

<div>

  <img src='/design/Home Page.png' width="49%" style="margin-bottom=0.5%">
  <img src='/design/Log In.png' width="49%" style="margin-bottom=0.5%">
  <img src='/design/Sign Up.png' width="49%" style="margin-bottom=0.5%">
  <img src='/design/Chat List Expanded.png' width="49%" style="margin-bottom=0.5%">
  <img src='/design/Chat List Contracted.png' width="49%" style="margin-bottom=0.5%">
</div>

## Code Architecture

- **src** (contains all the react code)
  - **components** (contains all react components)
    - **auth** (contains signin and signup components for authenticating the user)
    - **chats** (contains components for showing chats of every sender)
    - **layout** (contains components placed in the UI)
      - **ChatPage** (contains components required for chats)
      - **HomePage** (contains components that will be displayed on the home page)
  - **data** (contains dummy data used for local testing)
  - **redux** (contains all redux boilerplate- actions, reducers)
    - **actions** (all actions have been defined here)
    - **contants** (names of actions have been defined here for easy use)
    - **reducers** (contains reducers for every action)
  - **resources** (contains images and icons)

## Running Locally

1. Clone the repository and ```cd``` into it.
2. Install all packages<br>
  &nbsp;&nbsp;&nbsp;&nbsp;```npm install```
3. Start the local server.<br>
  &nbsp;&nbsp;&nbsp;&nbsp;```npm start```

## Dependencies

1. Material UI (for UI)
2. Redux (for managing state)
3. Firebase (as the backend)
4. Redux-Thunk (as middleware for redux for performing API requests)
5. *(Optional)* Firebase Emulators (for using all features of the app locally)
