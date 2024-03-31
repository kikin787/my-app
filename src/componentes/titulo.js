import React from 'react';

const TituloRojo = () => {
    const nombre = 'kikin'
    const color = 'red'
    return (<h1 className='titulo' style={{color: color}}>Hola {nombre}!</h1>);
}

const TituloAzul = () => {
    const nombre = 'kikin'
    const color = 'blue'
    return (<h1 className='titulo' style={{color: color}}>Hola {nombre}!</h1>);
}
 
export {TituloRojo,TituloAzul};