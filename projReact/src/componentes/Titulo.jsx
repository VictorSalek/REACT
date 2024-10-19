import logo from "../imagens/react.jpg"

function Titulo({data})
{
  let nome = "Márcia Correa";
  let caminho = "https://pt.wikipedia.org/wiki/React_%28JavaScript%29";
  return (
    <div>
      <img src= { logo } width= { 120 }></img>
      <h2>Seja Bem Vindo, { nome } </h2>
      <p><h4>Data último acesso { data ? data: "01/01/1900" }</h4></p>
    </div>

  )
}


export default Titulo
