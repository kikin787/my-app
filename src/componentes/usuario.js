import React from "react";
import {TituloRojo,TituloAzul} from "./titulo";

const Usuario = () => {
    const pais = undefined;
    const amigos = ['Kikin', 'Perro', 'Gato']
    return(
      <div>
      <TituloAzul/>
      <TituloRojo/>
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