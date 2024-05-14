import React from 'react';

const Titulo = ({usuario = 'Usuario', color = 'grey'}) => {
    return (<h1 className='titulo' style={{color: color}}>Hola {usuario}!</h1>);
}

// const TituloAzul = (props) => {
//     const color = 'blue'
//     return (<h1 className='titulo' style={{color: color}}>Hola {props.user}!</h1>);
// }
 
export {Titulo};

