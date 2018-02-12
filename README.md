

## Part 1. Practice HTTP

* After doing a yarn start, notice what is happening in the web page. 
* Notice the url http://localhost:5100
* Notice the the url http://localhost:4000/users
* Why are there 2 different URLs 5100 vs 4000 ?
* Use postman to practice making a http get request to get all users
* Use postman to practice making a http get request to get one user
* Use postman to practice making a http post request to create a user
* Use postman to practice making a http put request to change a user
* Use postman to practice making a http delete request to remove a user


## Part 2. Practice Fetch and React
Postman is fine, but this is only for testing. It is of no use to our software itself. We need our code to be able to make http requests to servers.

* Look at state.js and set the users state to an empty array 
* Notice there are no longer any users showing up in the web page.
* Change the App component from a function component to a class component
* Code the componentDidMount lifecycle method in the App component
* Code a fetch call in Apps's componentDidMount to make a Get request to http://localhost:4000/users
* In the fetch's second then, code this.SetState({users});
* Change App to use ListOfUsers instead of ListOfUsersContainer
* Add a state property to App with a key of users value [];
* Make sure App provides ListOfUsers a prop called users, and sends in this.state.users

## Part 3. Practice Fetch Post
* Look at the CreateUser component
* The state of this component is an object that represents the user you are about to create
* Typing in the text boxes updates the information in this object
* Look at the onSubmit event, the component expects that a function called `save` is on its props
* Code a function that does a fetch call that does a POST to http://localhost:4000/users
* the user object should be included in the body
* Be creative, where should you code the fetch call, does it matter?
* Make sure that function gets into CreateUser props.save somehow
* Observe the network tab to see if your fetch is working, db.json should be updating.
* If everything is working, does the web page show the new user you just created? Should it?

## Part 4. Practice Fetch and Redux
We have used fetch to retrieve data from the server and change data on the server. This is fine but we stopped using redux. We need to be able to use fetch with redux. I dont' want App to care about users. I don't want to pass props. By default, redux doesn't work with fetch. We need to add another tool to add this capability. 
* Use the redux thunk checklist.
* Setup the redux thunk middleware in store.js
* Create the action creator functions for the things we are doing, getUsers, saveUser ..etc
* Move the fetch code into these actions.
* Change the code to use Containers again.