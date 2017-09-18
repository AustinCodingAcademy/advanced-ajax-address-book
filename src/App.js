import React, { Component } from "react";
import "./App.css";
import {connect} from "react-redux";
import {loadUsers} from "./actions";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListofUsersContainer from "./containers/ListOfUsersContainer";
import CreateUser from "./components/CreateUser";
import SearchBox from "./components/SearchBox";


class App extends Component {
 constructor() {
   super();
   this.state = {users: []};
  }
//  a special method called by React when your components 
// are ready to do something
// this starts any actions that are going to do a fetch call
 componentDidMount() {
    this.props.loadUsers();
  }
 render() {
   return (
      <div>
        <SearchBox />
        <ListofUsersContainer />
        <CreateUser />
        <UserDetailContainer />
      </div>
   );
 }
}
function mapDispatchToProps(dispatch) {
 return {
      loadUsers:function(user){
        dispatch(loadUsers(user));
      }
    }
  }
  
export default connect(null,mapDispatchToProps)(App);