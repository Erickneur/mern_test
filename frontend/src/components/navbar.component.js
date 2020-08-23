import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/"><img width="50px" class="img-fluid mx-auto" src="https://firebasestorage.googleapis.com/v0/b/eedh-mern-test.appspot.com/o/logo.svg?alt=media&token=9d5700e9-99f0-4ff5-a5d0-6617c5713445"></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link">Fiscalías</Link>
            </li>
            <li class="nav-item">
              <Link to="/office/create" className="nav-link">Nueva fiscalía</Link>
            </li>
            <li class="nav-item">
              <Link to="/user/create" className="nav-link">Nuevo usuario</Link>
            </li>
          </ul>
        </div>
      </nav>

    );
  }
}