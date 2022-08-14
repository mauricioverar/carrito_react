import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
import {Container, Row} from 'reactstrap';
import {listaProductos} from './listaProductos.json';

// function App() {
  console.log(listaProductos)
  // Clase = molde para crear el objeto...App es hija de React.Component(herencia)
class App extends React.Component{
  constructor(){
    super()

    this.state = {
      listaProductos
    } // this hace referencia al atributo propio de la Clase 
  }

// mostrar productos y boton 'Ver ficha'
  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        console.log('MAP ',i) // 0,1,2,3,4.... 5 veces irá a Producto.js
        
        // retornar como props hacia Producto.js , key pertenece a arregloComponentes
        // cada item debe tener su key (unica)
        return (
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock={listaProductos.stock}
          />
        )
      }
    )
    console.log('arregloComponentes ',arregloComponentes) // key pertenece a arregloComponentes
    return (
      <Container>
        <Navegacion titulo='primer sitio compras'/>
        <Row>
          {arregloComponentes}
            
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        </Row>
      </Container>
    )
  }
}

export default App;
