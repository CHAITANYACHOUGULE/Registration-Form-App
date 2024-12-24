
import './App.css';
import React, { useState } from 'react';

function App() {


    const [values, setvalues] = useState({
      firstname: '',
      email: '',
      password: ''
    })

    const handleChanges = (e) =>{
      setvalues({...values, [e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) =>{
      console.log(values)
    }


  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
          <label htmlform="firstname">First Name</label>
          <input type = 'text' placeholder='Enter your name' name='firstname' onChange = {(e) => handleChanges(e)} required/>

          <label htmlform="email">Email</label>
          <input type = "email" placeholder='Enter your email' name='email' onChange = {(e) => handleChanges(e)} required/>

          <label htmlform="password">Password</label>
          <input type = "password" placeholder='Enter password' name='password' onChange = {(e) => handleChanges(e)} required/>

          <button type='submit'>Submit</button>
      </form>
      
    </div>
  );
}

export default App;
