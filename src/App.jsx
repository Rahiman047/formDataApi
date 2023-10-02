import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DisplayUsers from "./DisplayUsers";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const submitClicked = (e) => {
    e.preventDefault();
    const newId = uuidv4();
    const newUser = {
      name,
      email,
      id: newId,
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setName("");
    setEmail("");
  };

  const delUser = (id) => {
    const deletedUsersList = users.filter((eachUser) => {
      return eachUser.id !== id;
    });
    console.log(deletedUsersList);
    setUsers(deletedUsersList);
  };

  return (
    <div>
      <form className="form-cont" onSubmit={submitClicked}>
        <h1 className="form-heading">Controlled Inputs</h1>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="name">
            Name:-
          </label>
          <input type="text" id="name" className="form-input" />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Email:-
          </label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-input-comp">
          <label className="form-label" htmlFor="email">
            Password:-
          </label>
          <input type="password" id="password" className="form-input" />
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
