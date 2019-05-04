import React, { Component } from "react";

class Form extends Component {
  
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value} = event.target; 
  }; 

  handleFormSubmit = event => {
    event.preventDefault(); 
    alert('Username: ${this.state.username}\nPassword:')
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
