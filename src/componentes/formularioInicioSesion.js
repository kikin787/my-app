import React, {useState} from "react";
import styles from '../estilos/formularioInicioSesion.module.css'
// import 

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('')

    const onChange = (evento)=> {
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value)
        }
        else if (evento.target.name === 'password'){
            cambiarPassword(evento.target.value)
        }
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(usuario === 'Carlos' && password === '123'){
            props.cambiarEstadoSesion(true);
        } else{
            alert('Los datos son incorrectos')
            cambiarUsuario('');
            cambiarPassword('');
        }
    }

    return (  
        <form action="" onSubmit={onSubmit} className={styles.formulario}>
            <h1>No has iniciado sesion</h1>
            <div>
                <label htmlFor = "usuario" className={styles.label}>Usuario</label>
                <input
                    type="text" 
                    name="usuario" 
                    id= "usuario"
                    value= {usuario}
                    onChange = {onChange}
                    className={styles.input}
                />
            </div>
            <div>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value= {password}
                    onChange= {onChange}
                    className={styles.input}
                />
            </div>
            <button className={styles.boton}>Iniciar Sesión</button>
        </form>

    );
}
 
export default FormularioInicioSesion;