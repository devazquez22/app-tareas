
import React from "react";

function Home() {
  return (
    <div>
      <h2>Bienvenido a la Aplicación de Tareas Pendientes</h2>
      <img
        src="https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_640.png"
        alt="Imagen de bienvenida"
        style={{ width: "100%", maxWidth: "600px", height: "auto" }} // Puedes ajustar el tamaño
      />
      <p>Gestiona tus tareas de manera eficiente. Añade, edita y organiza tus tareas pendientes.</p>
    </div>
  );
}

export default Home;
