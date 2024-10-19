import React from "react";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import pessoa1 from '../imagens/pessoa1.jpg';
import pessoa2 from '../imagens/pessoa2.jpg';


function Principal()
{
    return (
      <div>
        <h3>Clientes felizes é o foco do nosso negócio!</h3>
        <Container>
        <Row>
          <Col xs={6} md={4}>
             <Image src={pessoa1} rounded />
          </Col>
          <Col xs={6} md={4}>
             <Image src={pessoa2} roundedCircle />
          </Col>
        </Row>
        </Container>
      </div>  
    )
}

export default Principal;