import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DisplayUsers from "./DisplayUsers";

import "./App.css";

function App() {
  const submitClicked = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); //this will refer to the <form>..</form>
    const name = formData.get("name"); // o/p will be the text entered in the input.
    console.log([...formData.entries()]); //this will generate the o/p of all the entries in the output field in the form of array

    const newUser = Object.fromEntries(formData); // this will give the o/p as the object so that we can directly send the data
    console.log(newUser);
  };

  return (
    <div>
      <form className="form-cont" onSubmit={submitClicked}>
        <h1 className="form-heading">Controlled Inputs</h1>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="name">
            Name:-
          </label>
          <input type="text" id="name" className="form-input" name="name" />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Email:-
          </label>
          <input type="email" id="email" className="form-input" name="email" />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Password:-
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            name="password"
          />
        </div>
        <div className="submit-btn-cont">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      {/* {users.map((eachUser) => {
        return (
          <DisplayUsers {...eachUser} key={eachUser.id} delUser={delUser} />
        );
      })} */}
    </div>
  );
}

export default App;
