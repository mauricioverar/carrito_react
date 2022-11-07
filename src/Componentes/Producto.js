import React from 'react'
import {CardImg, Col, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'
import './Producto.css'
import FichaProducto from './FichaProducto' // trae con props
   
class Producto extends React.Component{
  // constructor(props) {
    // console.log(props.tasks.length);
  // }

  render(){
    console.log('this.props.stock ', this.props.stock)
        
    return(
      <>
      <Col sm='4'>
      <Card className='Card' body outline color='primary'>
        Producto {this.props.stock}
        <CardImg src={this.props.imagen}/>
        <CardBody>
          <CardTitle>{this.props.titulo} </CardTitle>
          <CardSubtitle><b>Valor </b>{this.props.precio}</CardSubtitle>
          <CardText>{this.props.descripcion}</CardText>

          <FichaProducto props={this.props}/>       
        </CardBody>
      </Card>
      </Col>
      </>
    )
  }
}

export default Producto
