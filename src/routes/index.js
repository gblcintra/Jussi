
import { Switch } from 'react-router-dom';
import Route from './Route' ;

import Home from '../pages/Home';
import Error from '../pages/Error';


const Routes = () => {
  return(
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="*" component={Error} />
    </Switch>
  )
}

export default Routes;