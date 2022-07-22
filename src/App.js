import React, { Component } from "react";

export default class Nome extends Component {
  state ={
    nome:'Flamengo'
  }
  mensagem = () => ('Maior do mundo é o Flamengo')

  menssenger = () => {
    return(
      <div>
        <p> Flamengo foi fundado em 17 de novembro de 1895 para as disputas de remo. A entrada da equipe no futebol aconteceu em 1912. Atualmente, o time rubro-negro é o maior vencedor da história do Campeonato Carioca, com 31 títulos. Segundo diversas pesquisas, é o clube com o maior número de torcedores do País. </p>
      </div>
    );
  }
  Soma = ()=> (10+10)
 Conta = (x)=> {
  return x*3;
 };

 Add = (x,y) => {
  return x+y
  
 } 


render (){
  return (
    <div>
  <h1>{this.mensagem()}</h1>
  {this.menssenger()}
   <p>{this.Soma()}</p>
   <p>{this.Conta(7)}</p>
   <p>{this.Add(3,10)}</p>
    </div>
  )
}
}