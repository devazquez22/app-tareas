
import React, { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por ${nombre} (${email}): ${mensaje}`);
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
