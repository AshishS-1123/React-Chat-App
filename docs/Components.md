# Components

All components have been placed into various folders and sub folders based on their function.
All of these components are present in the ```src``` folder.

- ```auth/SignIn.jsx```
  This component is rendered on the home page when the user wishes to sign in.

- ```auth/SignUp.jsx```
  This component is rendered on home page when user wishes to sign up.

- ```layout/Home.jsx```
  This component renders home page and all its components.

- ```layout/HomePage```
  This folder contains all components that are rendered on the home page.
  The home page is divided into 2 parts- Left Pane and Right Pane.

  - ```layout/HomePage/LeftPane```
    The left pane contain information about the app- the app name, icon, some text.

  - ```layout/HomePage/RightPane```
    Depending on what button was clicked, the RightPane renders different components like SignUp, SignOut, HomeButtons

  - ```layout/HomePage/HomeButtons```
    This component contains button for signing up/in. When these buttons are clicked, the repective components are rendered

- ```layout/ChatPage```
  This folder contains all components that are rendered on the chat page.

  - ```layout/ChatPage/ChatList.jsx```
    This component displays a list of contacts that the signed in user has.
    It will also contain a search bar that the user can use to search their contacts.
    Clicking on any contact will show the user's chats with that contact.

  - ```layout/ChatPage/ChatContainer.jsx```
    This component contains the chat cards containing the messages, a form to type new messages, and a header showing who the recipient is.

  - ```layout/ChatPage/SenderHeader.jsx```
    This component show information about the recipient in the chat. It displays the name, email and profile pic of recipient.

  - ```layout/ChatPage/SignOut.jsx```
    This is a simple button present in the ChatList component that the user can press the log out of their account.

  - ```layout/ChatPage/ChatContainer```
    This folder contains 
