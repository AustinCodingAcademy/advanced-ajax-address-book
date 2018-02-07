

## Part 1. Implement Fetch with React

* After doing a yarn start, notice what is happening in the web page. 
* Notice the url http://localhost:5100
* Notice the the url http://localhost:4000/users
* Look at state.js and set the users state to an empty array 
* Notice there are no longer any users showing up in the web page.
* Change the App component from a function component to a class component
* Code the componentDidMount lifecycle method in the App component
* Code a fetch call in Apps's componentDidMount to make a Get request to http://localhost:4000/users
* In the fetch's second then, code this.SetState({users});
* Change App to use ListOfUsers instead of ListOfUsersContainer
* Add a state property with a key of users value [];
* Make sure App provides ListOfUsers a prop called users, and sends in this.state.users
