import React from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/usuario';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sesion = true;


const App = () => sesion === true ? <Usuario /> : <p>No has iniciado sesion</p>

root.render(<App/>);
