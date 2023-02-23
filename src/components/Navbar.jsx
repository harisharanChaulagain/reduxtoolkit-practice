import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <div className="nav-item">
              HOME
            </div>
            <div className="nav-item">
              ABOUT
            </div>
            <div className="nav-item">
              PROJECTS
            </div>
            <div className="nav-item">
              CODE
            </div>
            <div className="nav-item">
              CONTACT
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
