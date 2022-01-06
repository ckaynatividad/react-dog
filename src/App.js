
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Dog from './views/DogDetail';
import DogsView from './views/DogsList';



function App() {
  return (
    <div className="App">
      <h1>doggy adoption</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={DogsView} />
          <Route exact path="/:id" component={Dog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
