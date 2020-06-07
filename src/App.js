import React, { Component } from "react";
import ViewList from "./components/viewList/ViewList";
import UserForm from "./components/userForm/UserForm";
import "./App.css";

class App extends Component {
  state = {
    route: "form",
  };
  render() {
    const { route } = this.state;
    return (
      <div className="App">
        {route === 'list' && <ViewList />}
        { route === 'form' && <UserForm />}
      </div>
    );
  }
}

export default App;
