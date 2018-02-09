import React, { Component } from "react";

class CreateUser extends Component {
  state = {
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.save(this.state);
        }}>
          <div>First Name: <input onChange={(e) => {
            this.setState({first_name: e.target.value});
          }} /></div>
          <div>Last Name: <input onChange={(e) => {
            this.setState({last_name: e.target.value});
          }} /></div>
          <div>Address: <input onChange={(e) => {
            this.setState({address: e.target.value});
          }} /></div>
          <div>Phone: <input onChange={(e) => {
            this.setState({phone: e.target.value});
          }} /></div>
          <div>Occupation: <input onChange={(e) => {
            this.setState({occupation: e.target.value});
          }} /></div>
          <div>Avatar: <input onChange={(e) => {
            this.setState({avatar: e.target.value});
          }} /></div>
          <button>Create</button>
        </form>
      </div>);
  }
}

export default (CreateUser);
