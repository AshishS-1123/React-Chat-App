# Firestore

### Collections

- **users** - This collection contains information about each user, like their name, email, profile pic, etc.

- **chatMessages** - For each of the chats mentioned in *chats*, this collection contains a list of objects representing messages sent by users of that chat. Each object has a id, text containing the message, the time when it was sent, and the user id who sent it.


### Interfacing Firestore with UI

##### On Sign In

1. Using the UID of user, fetch the list of chats the user is participating in using the **userChats** collection.
2. This list will contain the UID's of different chats.
3. Use the **chats** collection to get the list of all participants. Since functionality for creating groups hasn't been implemented yet, we will assume that only 2 user participate in chats. This means the name of the other participant should be displayed in the users *ChatList* component.
4. By default, the recipient that is first in the list should be the one whose chats are displayed by default.

##### Clicking on Recipient's name

1. After a recipient's card is clicked,
