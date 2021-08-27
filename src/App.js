import './App.css';
import Home from './Containers/Home/Home';
import Receipt from './Components/Routes/Receipt/Receipt';

import { Route, Switch } from 'react-router';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/Receipt' component={Receipt}/>
      </Switch>
    </div>
  );
}

export default App;