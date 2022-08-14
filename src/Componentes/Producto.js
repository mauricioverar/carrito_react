import React from 'react'
// import {Button, CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import {CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import './Producto.css'
import FichaProducto from './FichaProducto'

// function Producto(props){
  // props = (key),titulo,imagen,descripcion,precio,(stock)... 5 veces vendrá desde App.js
   
class Producto extends React.Component{

// mostrar card del producto
  render(){
  //console.log('this.props ',this.props.key) //

    return(
      <Col sm='4'>
      <Card className='Card' body outline color='primary'>
        aprendiendo react {this.props.stock}
        <CardImg src={this.props.imagen}/>
        <CardBody>
          <CardTitle>{this.props.titulo} </CardTitle>
          <CardSubtitle><b>Valor </b>{this.props.precio}</CardSubtitle>
          <CardText>{this.props.descripcion}</CardText>

          <FichaProducto props={this.props}/>
          {/* <Button className='Button'>Comprar</Button>
          <Button className='Button'>Ver</Button> */}          
        </CardBody>
      </Card>
      </Col>
    )
  }
}

export default Producto