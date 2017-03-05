## Bloc Chat

An in browser chat room. Users can create a username, create chatrooms, and chat with other users.

## Bloc Frontend Project Starter

A starter application for student projects in Bloc's [Frontend Web Development Course](https://www.bloc.io/frontend-development-bootcamp).

## Technologies Used

This application uses Angular and Firebase.

## Possible updates

The database could be reorganized so that instead of messages being stored in a separate table they would be sorted under their room. This would reduce the load on the database because it is a real time database and using Queries the way it is currently setup could cause it to crash. Being able to just sort the messages in chronological order is a better method. 

Currently the chat room doesn't allow users to just press enter to send a message, they have to click send and then clear the message. This should be changed for a better user experience.

Going a step further with this application users could be given roles to only allow room creation with a certain level of privileges or to have private rooms.