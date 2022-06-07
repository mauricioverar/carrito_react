import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Producto from './Componentes/Producto';
import {Container, Row} from 'reactstrap';

function App() {
  return (
    <Container>
      <Row>
        <Producto
          titulo="Headphones Blue"
          imagen="https://i.pinimg.com/474x/75/9c/6f/759c6f86f8ced7ce1be4973c85ed4cb0.jpg"
          descripcion="audifonos azules"
          precio="39.990" />
        <Producto
          titulo="Nintendo Switch"
          imagen="https://images-na.ssl-images-amazon.com/images/I/71ivrWiYkLL._AC_.jpg"
          descripcion="Consola Nintendo Switch Black"
          precio="229.000"
        />
        <Producto
          titulo="Consola SONY PS4"
          imagen="https://estaticos.elperiodico.com/resources/jpg/9/8/playstation-sony-1370947347089.jpg"
          descripcion="Consola PS4 SLIM 500GB "
          precio="199.990"
        />
        <Producto
          titulo="Consola XBOX ONE"
          imagen="https://compass-ssl.xbox.com/assets/dd/2e/dd2ef163-a130-403a-a394-a5b11c1533c8.jpg?n=Xbox-Family_Image-0_X1S-1111_496x279.jpg"
          descripcion="Consola Xbox One solo juegos digitales "
          precio="229.000"
        />
        <Producto
          titulo="Consola New Nintendo 2DS"
          imagen="https://http2.mlstatic.com/nintendo-2ds-xl-black-and-turquoise-nuevo-D_NQ_NP_615117-MLM27995821063_082018-F.jpg"
          descripcion="2DS XL Black Turqoise"
          precio="129.990"
        />

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
  );
}

export default App;
