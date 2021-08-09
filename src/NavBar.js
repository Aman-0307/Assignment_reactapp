import React, { Fragment, useState } from "react";

const NavBar = ({ setStep }) => {
  return (
    <Fragment>
      <div className="Navbar">
      <a className="navbartext"> Navbar</a>
      <div className="leftside">
      <div className="links">
      
          <a onClick={() => setStep(0)}>Home</a>
          <a onClick={() => setStep(1)}>Tasks</a>
          <a onClick={() => setStep(2)}>User</a>
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default NavBar;

