import React from 'react';
import './Nav.css';
function Nav() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark shadow">
  {/* <!-- Brand/logo --> */}
  <div className='container'>
  <a className="navbar-brand text-success font-italic font-weight-bold" href="#">EatEat</a>
  <input type="text" className='rounded p-1  text-center outline ' placeholder='Search' />
  
  {/* <!-- Links --> */}
  <ul className="navbar-nav ">
    <li className="nav-item ">
      <a className="nav-link h5 text-success " href="#">Login</a>
    </li>
    <li className="nav-item mx-3 ">
      <a className="nav-link h5 text-success" href="#">New User</a>
    </li>
    <li className="nav-item">
      <a className="nav-link h5 text-success" href="#">
      <div className="dropdown">
  <a type="button" className=" bg-dark text-success dropdown-toggle" data-toggle="dropdown">
    Norsk
  </a>
  <div className="dropdown-menu mt-3 bg-dark">
    <a className="dropdown-item text-success" href="#">English</a>
    <a className="dropdown-item text-success" href="#">Svensk</a>
    <a className="dropdown-item text-success" href="#">Dansk</a>
  </div>
</div>
      </a>
    </li>
  </ul>
  </div>
</nav>
    )
}

export default Nav
