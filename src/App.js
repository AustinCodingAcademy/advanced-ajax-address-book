import React, { Component } from "react";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import CreateUser from "./components/CreateUser";
import SearchBox from "./components/SearchBox";
import {connect} from "react-redux";
import {loadUsers} from "./actions";


class App extends Component {
 constructor() {
   super();
   this.state = {users: []};
 }
//  a special method called by REact when your components 
// are ready to do something
// this starts any actions that are going to do a fetch call
 componentDidMount() {
   this.props.loadData();
 }
 render() {
   return (
     <div>
       <SearchBox />
       <ListOfUsersContainer />
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