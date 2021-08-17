
import {Link} from 'react-router-dom';

export default function Erro() {
  if (document.querySelector('.container').classList[1]) {
    let classe = document.querySelector('.container').classList[1];
    document.querySelector('.container').classList.remove(classe.toString())
  }
  document.querySelector('.container').classList.add('error');
  return (
    <div>
      <h1>Hum, parece que essa pagina nao existe!</h1><br/>

      <span>Você pode estar procurando:</span> <br/>
      <Link to="/" >Inicio</Link> <br/>
      <Link to="/contato">Contatos</Link><br/>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
 }