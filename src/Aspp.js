import React from 'react';
import './App.css';

import {Container, Row} from 'reactstrap';

import {listaProductos} from './listaProductos.json';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
// import { useState, useEffect } from "react";

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      listaProductos
    }
  }

  /* function App() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      setTasks(data)
    }, [])

    return (
      <>
      <Navegacion tasks/>
      <Producto tasks= {tasks}/>

      </>
    )    
  } */


  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
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
    return (
      <Container>
        <Navegacion titulo='Sitio de compras'/>
        <Row>
          {arregloComponentes}
        </Row>
      </Container>
    )
  }
}

export default App;
