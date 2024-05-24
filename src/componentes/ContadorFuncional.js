import React, {useState} from "react";
import styles from '../estilos/contador-funcional.module.css'
import Boton from "../elementos/Boton";

const ContadorFuncional = (props)=>{
    const [contador, cambiarContador] = useState(0)

    const incrementar = (cantidad) => cambiarContador(contador + cantidad)
        // Puede ser de esta manera o de la de disminuir

    const disminuir = (cantidad) => cambiarContador((anteriorContador) => anteriorContador - cantidad)

    return(
        <div>
            <h1>Contador: {contador}</h1>
            {/* <button onClick={() => incrementar(props.cantidadAIncrementar)} className={styles.boton}>+</button>
            <button onClick={() => disminuir(props.cantidadADisminuir)} className={styles.boton}>-</button> */}
            <Boton negro marginRight onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
        </div>
    )
}

export default ContadorFuncional;