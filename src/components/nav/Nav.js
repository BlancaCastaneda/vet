
import './Nav.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
          <ul type="none" className="menu">
              <li className="item">
                <Link to="/">Home</Link>
              </li>

              <li className="item">
                <Link to="/equipo">Equipo</Link>
              </li>

              <li className="item">
                <Link to="/servicios">Servicios</Link>
              </li>

              <li className="item">
                <Link to="/perros">Perros</Link>
              </li>
              
              <li className="item"><a href="#">Agenda tu cita</a></li>
              <li className="item"><a href="#">Contactanos</a></li>
          </ul>
      </nav>
      
    </div>
  );
}

export default Nav;