import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import SearchBox from "./components/SearchBox";
import CreateUser from "./components/CreateUser";

function App(props) {
  return (
    <div>
      <SearchBox />
      <ListOfUsersContainer />
      <UserDetailContainer />
      <CreateUser />
    </div>
  );
}

export default App;
