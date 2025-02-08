
import React from "react";

function AcercaDe() {
  return (
    <div>
      <h2>Acerca de nuestra aplicación</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/25/Informaci%C3%B3n.jpg"
        alt="Imagen acerca de"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }} // Ajusta el tamaño según lo necesites
      />
      <p>
        Esta aplicación fue diseñada para ayudarte a gestionar tus tareas pendientes de manera sencilla y
        eficiente. Puedes agregar, eliminar y modificar tareas rápidamente.
      </p>
    </div>
  );
}

export default AcercaDe;
