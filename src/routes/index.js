
import { Switch } from 'react-router-dom';
import Route from './Route' ;

import Home from '../pages/Home';
import Error from '../pages/Error';

//rota padrão home, qualquer uma que não for, é direcionado para a pagina de não encontrado
const Routes = () => {
  return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={Error} />
    </Switch>
  )
}

export default Routes;