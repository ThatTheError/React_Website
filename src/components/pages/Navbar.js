import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">GoPaL</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <Link to="/" class="nav-link active" id='navlink'>Home</Link>
        </li>
        <li class="nav-item">
            <Link to="/About" class="nav-link" id='navlink'>About-Us</Link>
        </li>
        <li class="nav-item">
        <Link to="/Contact" class="nav-link" id='navlink'>Contact-Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}


export default Navbar;