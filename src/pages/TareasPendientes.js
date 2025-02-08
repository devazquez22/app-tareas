
import React, { useState } from "react";

function TareasPendientes() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea(""); 
    }
  };

  return (
    <div>
      <h1>Tareas Pendientes</h1>
      <form>
        <label>
          Nueva Tarea:
          <input
            type="text"
            value={nuevaTarea}
            onChange={handleInputChange}
            placeholder="Escribe tu tarea"
          />
        </label>
        <button type="button" onClick={agregarTarea}>Agregar</button>
      </form>
      <h2>Lista de Tareas</h2>
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Tarea</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tarea}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TareasPendientes;
