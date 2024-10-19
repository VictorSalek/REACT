import React from "react"
import { Table, Button } from "react-bootstrap"

class Clientes extends React.Component
{
    constructor(props) 
    {
      super(props);
      this.state = {
        ListaDeClientes : []
      }
    }

  // método do obj COMPONENT que monta 1 componente
  componentDidMount()
  {
    this.buscaDadosAPI();
  }

  // método de GET da API
  buscaDadosAPI()
  {
    fetch("http://localhost:3000/Clientes")
      .then(resposta => resposta.json())
      .then(dadosVindoDaAPI => {
         this.setState({ ListaDeClientes : dadosVindoDaAPI })
      })
  }

  apagaCliente = (id) => 
  {
    fetch("http://localhost:3000/Clientes/" + id)
      .then(resposta => {
        if (resposta.ok) {
          alert("API DELETE funcinou!");
          buscaDadosAPI();
        }
        else {
          alert("API DELETE não funcinou!");
        }
      })
  }

  // método do obj COMPONENT que desmonta 1 componente
  componentWillUnmount()
  {
    
  }


  // renderizar conteúdo para o componete CLIENTES
  render() 
    {
      return (
        <Table striped bordered hover>
          <thead>
            <th>No</th>
            <th>CPF</th>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>DATA ANIVERSÁRIO</th>
            <th>Opções</th>
          </thead>
        <tbody>
          {
             // varrer a lista exibindo seus dados
             // comando de repetição usando o map
             this.state.ListaDeClientes.map((cliente) =>
               <tr>
                <td>{ cliente.idClie        }</td>
                <td>{ cliente.cpfClie       }</td>
                <td>{ cliente.nomeClie      }</td>
                <td>{ cliente.emailClie     }</td>
                <td>{ cliente.dataNiverClie }</td>
                <td>
                  <Button variant="primary">Atualizar</Button>
                  <Button variant="danger" onClick={ () => this.apagaCliente(cliente.idClie) }>Excluir</Button>
                </td>
               </tr>
            )
          }
        </tbody>
        </Table>
      )
    }  // end do do método render()


}  // end da classe

export default Clientes;