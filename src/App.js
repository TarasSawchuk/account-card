import React from 'react';
import Accounts from "./components/accounts/Accounts";
import "./App.scss"

const App = () => {
  let usersArr = [
    {username: "John Barton", 
    email: "john.barton@gmail.com", 
    phone: "032-22-333-22" }, 

    {username: "Roy French", 
    email: "john.barton@gmail.com", 
    phone: "032-22-333-22" },

    {username: "Bradley Barnes", 
    email: "john.barton@gmail.com", 
    phone: "032-22-333-22" }
  ]
  return (
    <div className="App">
      <Accounts usersArr={usersArr}/>
    </div>
  );
}

export default App;
