import React from 'react'
import {CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import './Producto.css'
import FichaProducto from './FichaProducto'
   
class Producto extends React.Component{

  render(){
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
        </CardBody>
      </Card>
      </Col>
    )
  }
}

export default Producto
