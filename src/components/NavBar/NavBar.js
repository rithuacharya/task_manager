import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return(
    <div>
      <nav>
        <ul className="pl-0 d-flex justify-content-between flex-wrap">
          <div className="d-flex align-items-start">
            <NavLink className="btn btn-primary text-center mr-2" to="/" exact={true}>All</NavLink>
            <NavLink className="btn btn-primary text-center mr-2" to="/pending">Pending</NavLink>
            <NavLink className="btn btn-primary text-center mr-2" to="/completed">Completed</NavLink>
          </div>
            <NavLink className="btn btn-light text-center" to="/create">Create</NavLink>
        </ul>
        <ul className="pl-0 d-none">
          <NavLink className="btn btn-primary text-center" to="/create">Create</NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;