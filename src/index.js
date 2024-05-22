import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/usuario';
import FormularioInicioSesion from './componentes/formularioInicioSesion';
import Contador from './componentes/contadorClass';
import ContadorFuncional from './componentes/ContadorFuncional';
import './estilos/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    const [sesion, cambiarEstadoSesion] = useState(true)
    return(
        <div className='contenedor'>
            {sesion === true ? 
            <div>
                <Usuario/> 
                {/* <Contador cantidadAIncrementar = {10} cantidadADisminuir = {5}/> */}
                <ContadorFuncional cantidadAIncrementar = {10} cantidadADisminuir = {8} />
                <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
            </div>
            :
            <div>
                <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
                {/* <button onClick={() => setSesion(true)}>Iniciar Sesión</button> */}
            </div>
            }
        </div>
    );
};

root.render(<App/>);
