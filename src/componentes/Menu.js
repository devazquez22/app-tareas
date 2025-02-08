
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tareas">Tareas Pendientes</Link></li>
        <li><Link to="/acerca-de">Acerca de</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
