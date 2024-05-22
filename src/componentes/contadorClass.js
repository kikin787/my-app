import React, {Component} from "react";

class Contador extends Component {
    constructor(props){
        super(props);
        this.state = { contador: 0}
    }

    componentDidMount(){
        console.log('El componente se cargó en el dom')
        // ... llamamos a la API ...
    }

    componentDidUpdate(propiedadesAnteriores, estadoAnterior){
        console.log('El componente se actualizó')
        console.log('Propiedades anteriores del componente',propiedadesAnteriores)
        console.log('Estado anterior del componente',estadoAnterior)
    }

    componentWillUnmount(){
        console.log('Adiós componente')
    }

    incrementar(cant){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador + cant
            }
        })}
        
    disminuir(cant){
        this.setState((estadoAnterior) =>{
            return{
                contador: estadoAnterior.contador - cant
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Disminuir</button>
            </div>
        )
    }
}

export default Contador;