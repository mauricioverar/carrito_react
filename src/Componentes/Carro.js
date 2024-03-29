import React from "react"
import { Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from 'reactstrap'
import './Carro.css'
import { listaCarrito } from '../listaCarrito.json'

class Carro extends React.Component {
  constructor(props) {
    super()
    this.state = {
      popoverOpen: false,
      listaCarrito,
      stock: listaCarrito.length
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      popoverOpen: !prevState.popoverOpen
    }))
  }

  render() {
    // console.log('listaCarrito ', this.state.listaCarrito)
    // console.log('stock ', this.state.stock)
    // (new Intl.NumberFormat('de-DE').format(number));
    
    const arregloCarrito = this.state.listaCarrito.map(
      (listaCarrito, i) => {

        return (

          <tr key={i}>
            <td>{i + 1}</td>
            <td>{listaCarrito.titulo}</td>
            <td>{listaCarrito.precio}</td>
          </tr>
        )
      }
    )
    let Total = 0

    this.state.listaCarrito.map(
      (listaCarrito, j) => {
        Total += parseInt(listaCarrito.precio) * 1000

        return (
          Total
        )
      }
    )
    // console.log('badge ', arregloCarrito.length)
    return (
      <div>
        <Button id="Popover1" color="info">
          <span className="material-icons">
            shopping_cart
          </span>
          <Badge color="secondary">{listaCarrito.length}</Badge>

          {/* <Badge color="secondary">{arregloCarrito.length}</Badge> */}
        </Button>

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
                  <td className="Total">{(new Intl.NumberFormat('de-DE').format(Total))} CLP</td>
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