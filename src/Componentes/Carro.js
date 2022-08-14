import React from "react";
import { Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap'
import { listaCarrito } from '../listaCarrito.json'

//let precioTotal

class Carro extends React.Component {
  constructor() {
    super()
    this.state = {
      popoverOpen: false,
      listaCarrito
    }

    this.toggle = this.toggle.bind(this) // compartir con demas métodos    
  }

  toggle() {
    this.setState(prevState => ({
      popoverOpen: !prevState.PopoverOpen
    }))
  }

  render() {
    console.log('carro ')
    const arregloCarrito = this.state.listaCarrito.map(
      (listaCarrito, i) => {

        console.log('i ', i + 1)


        return (

          <tr key={i}>
            <td>{i + 1}</td>
            <td>{listaCarrito.titulo}</td>
            <td>{listaCarrito.precio}</td>
          </tr>
        )
      }
    )

    console.log('arregloCarrito ', arregloCarrito) // key null

    console.log('listaCarrito ', listaCarrito)

    //    let precioTotal = 0
    //console.log(precioTotal)
    let Total = 0

    const arregloTotal = this.state.listaCarrito.map(
      (listaCarrito, j) => {
        // this.precioTotal = (parseInt(listaCarrito.precio))
        // Total += this.precioTotal
        Total += parseInt(listaCarrito.precio) * 1000

        console.log(Total, listaCarrito.precio, listaCarrito.stock) // this.precioTotal, listaCarrito.precio)

        return (
          Total
          // 1000
        )
      }
    )
    console.log('arregloTotal ', arregloTotal, Total) // key
    // carrito icono cantidad
    //debugger

    return (
      <div>
        <Button id="Popover1" color="info">
          <span className="material-icons">
            shopping_cart
          </span>
          <Badge color="secondary">{arregloCarrito.length}</Badge>
        </Button>

        {/* err 
          tarjet = Popover{id}
          placement = desplegar hacia abajo
          toggle = on/off
        */}
        <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
          <PopoverHeader>Listado de compras</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {arregloCarrito}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>{Total} CLP</td>
                </tr>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    )
  }

}
export default Carro