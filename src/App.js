// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Menu from "./componentes/Menu";
import Home from "./pages/Home";
import TareasPendientes from "./pages/TareasPendientes";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <div className="contenido">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tareas" component={TareasPendientes} />
          <Route path="/acerca-de" component={AcercaDe} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
