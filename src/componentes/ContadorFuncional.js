import React, {useState} from "react";

const ContadorFuncional = (props)=>{
    const [contador, cambiarContador] = useState(0)

    const incrementar = (cantidad) => cambiarContador(contador + cantidad)
        // Puede ser de esta manera o de la de disminuir

    const disminuir = (cantidad) => cambiarContador((anteriorContador) => anteriorContador - cantidad)

    return(
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => incrementar(props.cantidadAIncrementar)}>+</button>
            <button onClick={() => disminuir(props.cantidadADisminuir)}>-</button>
        </div>
    )
}

export default ContadorFuncional;