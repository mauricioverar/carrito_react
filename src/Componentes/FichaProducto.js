import React from 'react'
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap'
import { listaCarrito } from '../listaCarrito.json'
// import { listaProductos } from '../listaProductos.json'

class FichaProducto extends React.Component {
  constructor(props) {

    super()
    this.state = {
      modal: false,
      listaCarrito,
      stock: props.props.stock
    }

    // console.log('props.props.stock ', props.props.stock)

    this.toggle = this.toggle.bind(this) // compartir con demas métodos
    this.agregarCarrito = this.agregarCarrito.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  agregarCarrito() {
    
    // this.setState({ count: this.state.count - 1 });
    // console.log('state.stock ', this.state.stock)
    if (this.state.stock > 0) {
      listaCarrito.push({
        "titulo": this.props.props.titulo,
        "precio": this.props.props.precio
      })
      this.setState(prevState => ({
        modal: !prevState.modal
      }))

      this.setState(prevState => ({
        stock: prevState.stock - 1
      }))
      
      /* listaProductos.push({
        "stock": this.state.stock // "clave": valor
      })
 */
    }
  }

  render() {
    // console.log('new state.stock ', this.state.stock)

    return (
      <> 
      {/* frakwin */}
      <Container>
        <h6> stock: {this.state.stock}</h6> 
        <Button onClick={this.toggle}>Ver ficha</Button>


        <Modal isOpen={this.state.modal}>
          {/* React en jov pro */} R jpro
          <ModalHeader>{this.props.props.titulo}</ModalHeader>

          <ModalBody>
            <CardImg src={this.props.props.imagen} />
            <p>detalle: </p>
            {this.props.props.descripcion}
            <p>Valor: <b>{this.props.props.precio}</b> pesos.</p>
            <p>Hay: <b>{this.state.stock}</b> unidades disponibles.</p>

          </ModalBody>

          <ModalFooter className='modalFooter'>
            {/* <Button color='primary' onClick={this.agregarCarrito}>Agregar</Button> */}
            <Button color='primary' onMouseUp={this.agregarCarrito}
              onClick={this.props.props.boton} >Agregar</Button>
              
            <Button color='secondary'
              onClick={this.toggle}>Volver</Button>
            {/* {this.props.props.boton} */}
            
          </ModalFooter>

        </Modal>
      </Container>
      </>
    )
  }
}
export default FichaProducto
