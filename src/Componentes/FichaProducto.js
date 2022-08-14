import React from 'react'
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap'
// import './FichaProducto.css'
import { listaCarrito } from '../listaCarrito.json' // ../ directorio raiz
import { listaProductos } from '../listaProductos.json'

// props = (key),titulo,imagen,descripcion,precio,stock... 5 veces vendrá desde Producto.js
class FichaProducto extends React.Component {
  constructor(props) {
    console.log('props ', props.props.stock) // stock de c/u
    console.log('listaCarrito ', listaCarrito) // array vacio

    super()
    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock
    }

    this.toggle = this.toggle.bind(this) // compartir con demas métodos
    this.agregarCarrito = this.agregarCarrito.bind(this)
    console.log('this.state.stock ', this.state.stock)
    //console.log(props.props)

  }

  toggle() {
    console.log('toggle ', this.props) // mostrar en consola al hacer clic en boton
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  agregarCarrito() {
    // this.setState.stock = this.props.props.stock - 1
    if (this.state.stock > 0) {

      listaCarrito.push({
        "titulo": this.props.props.titulo,
        "precio": this.props.props.precio//,      "stock": this.setState.stock
      })
      this.setState(prevState => ({
        modal: !prevState.modal
      }))


      this.setState(prevState => ({
        stock: prevState.stock - 1
      }))
      listaProductos.push({
        "stock": this.state.stock
      })
      
    }
    console.log('listaCarrito ', listaCarrito)
  }

  // mostrar boton 'Ver ficha' q abre modal
  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>Ver ficha</Button>

        <Modal isOpen={this.state.modal}>
          React en jov pro
          <ModalHeader>{this.props.props.titulo}</ModalHeader>

          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>detalle: </p>
            {this.props.props.descripcion}
            <p>Valor: <b>{this.props.props.precio}</b> pesos.</p>
            {/* <p>Hay: <b>{this.props.props.stock}</b> unidades disponibles.</p> */}
            <p>Hay: <b>{this.state.stock}</b> unidades disponibles.</p>

          </ModalBody>

          <ModalFooter className='modalFooter'>
            <Button color='primary' onClick={this.agregarCarrito}>Agregar</Button>
            <Button color='secondary' onClick={this.toggle}>Volver</Button>
          </ModalFooter>

        </Modal>
      </Container>
    )
  }
}
export default FichaProducto