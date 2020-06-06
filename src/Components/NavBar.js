import React from 'react';
import queen from "../Images/queen.png"


const NavBar = ()=> {
    return(
      <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="/">
    <img src={queen} width={30} height={30} className="d-inline-block align-top"  loading="lazy" />
    The Privilege Project
  </a>
</nav>



    )
}

export default NavBar;