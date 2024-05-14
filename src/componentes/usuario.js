import React from "react";
import {Titulo} from "./titulo";

const Usuario = () => {
    const pais = 'Meixco';
    const amigos = ['Kikin', 'Enrique', 'Pedro']
    return(
      <div>
      <Titulo />
      <Titulo usuario = {amigos[2]} color = "yellow"/>
      <p>Tú lista de amigos es</p>
        <p>Has iniciado sesión</p>
        {pais && <p>Tú eres de {pais}</p>}
        <ul>
          {amigos.map((amigo, idx) => <li key={idx}> {amigo} </li>)}
        </ul>
        <p>Saludos</p>
      </div>
    );
  }

  export default Usuario;