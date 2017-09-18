import React, { Component } from "react";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsers from "./components/ListOfUsers";
import CreateUser from "./components/CreateUser";
import SearchBox from "./components/SearchBox";
import {connect} from "react-redux";
import {loadUsers} from "./actions";


class App extends Component {
 constructor() {
   super();
   this.state = {users: []};
  }
//  a special method called by React when your components 
// are ready to do something
// this starts any actions that are going to do a fetch call
 componentDidMount() {
    fetch("/users")
    .then( (response) => {
      return response.json();
    }).then((users) => {
      this.setState({users});
    });
  }

 render() {
   return (
     <div>
       <SearchBox />
       <ListOfUsers users={this.state.users} searchText={""} />
       <CreateUser />
       <UserDetailContainer />
     </div>
   );
 }
}
function mapDispatchToProps(dispatch) {
 return {
   loadData() {
     dispatch(loadUsers());
   }
 };
}
export default connect(null,mapDispatchToProps)(App);