import React from 'react';
import ViewList from './components/viewList/ViewList';
import UserForm from './components/userForm/UserForm';
import './App.css';

const initialState = {
  route: 'list', // || form
}

function App() {
  return (
    <div className="App">
      <ViewList />
      <UserForm />
    </div>
  );
}

export default App;
