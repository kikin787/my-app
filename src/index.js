import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/usuario';
import FormularioInicioSesion from './componentes/formularioInicioSesion';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
    const [sesion, cambiarEstadoSesion] = useState(false)
    return(
        <>
            {sesion === true ? 
            <div>
                <Usuario/> 
                <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesión</button>
            </div>
            :
            <div>
                <p>No has iniciado sesion</p>
                <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
                {/* <button onClick={() => setSesion(true)}>Iniciar Sesión</button> */}
            </div>
            }
        </>
    );
};

root.render(<App/>);
