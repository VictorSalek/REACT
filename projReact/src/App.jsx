import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from "./componentes/Titulo"
import Principal from "./componentes/Principal"
import Clientes from "./componentes/Clientes"
import Sobre from "./componentes/Sobre"
import "bootstrap/dist/css/bootstrap.min.css"
import {Nav} from "react-bootstrap"
import {BrowserRouter,Routes,Link,Route} from "react-router-dom"
import './App.css'

function App() 
{
  /*return <Titulo data="07/10/2024" />
  
  const clientes = 
  [
    {
      idClie       : 1,
      nomeClie     : "Ana Beatriz Cardoso",
      emailClie    : "bia@gmail.com",
      dataNiverClie: "24/12/2024", 
    },
    {
      idClie       : 2,
      nomeClie     : "Carlos Eduardo Gama",
      emailClie    : "cadu@gmail.com",
      dataNiverClie: "10/01/1985", 
    },
    {
      idClie       : 3,
      nomeClie     : "Eduardo Silva",
      emailClie    : "du@gmail.com",
      dataNiverClie: "19/07/1987", 
    },
  ]

  // exibindo dados com o MAP
  return (
     <div>
      { clientes.map((cliente, indice) => 
      (
        <div>{ cliente.nomeClie } - { cliente.emailClie} - { cliente.dataNiverClie } </div>
      ))}
     </div>
  )
  */
  return (
   <div>
     <h1>Montando 1o Aplicação com MENU</h1>
     <BrowserRouter>
     <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link as ={Link} to="/Principal">Página Principal</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as ={Link} to="/Clientes">Clientes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as ={Link} to="/Sobre">Sobre</Nav.Link>
      </Nav.Item>
      </Nav>
  
    <Routes>
      <Route path="/Principal" element={<Principal />}></Route>
      <Route path="/Clientes" element={<Clientes />}></Route>
      <Route path="/Sobre" element={<Sobre />}></Route>
    </Routes>
     </BrowserRouter>
   </div>
  )
}
export default App
