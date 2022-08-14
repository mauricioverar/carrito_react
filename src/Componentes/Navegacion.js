import React from 'react'
import {NavItem, Nav, NavbarBrand, Navbar} from 'reactstrap'
import Carro from './Carro'

// props = titulo 1 vez desde App.js
class Navegacion extends React.Component {
  render() {
    console.log('navega ')
    return(
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>{this.props.titulo}</NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <Carro/>
          </NavItem>
        </Nav>
      </Navbar>
    )
  }
}
export default Navegacion