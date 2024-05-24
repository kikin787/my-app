import React from "react";
import {Titulo} from "./titulo";
import styled from 'styled-components';

const Usuario = () => {
    const pais = 'Meixco';
    const amigos = ['Kikin', 'Enrique', 'Pedro']
    return(
      <div>
      <Titulo />
      <Titulo usuario = {amigos[2]} color = "yellow"/>
      <Parrafo>Tú lista de amigos es</Parrafo>
        <p>Has iniciado sesión</p>
        {pais && <p>Tú eres de {pais}</p>}
        <ul>
          {amigos.map((amigo, idx) => <li key={idx}> {amigo} </li>)}
        </ul>
        <Parrafo>Saludos</Parrafo>
      </div>
    );
  }

  const Parrafo = styled.p`
    margin: 20px 0;
  `;

  export default Usuario;