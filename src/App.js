
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import AdminEdit from './views/Admin';

import Dog from './views/DogDetail';
import DogsView from './views/DogsList';



function App() {
  return (
    <div className="App">
      <h1>enemies from maplestory that i like</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={DogsView} />
          <Route exact path="/:id/edit" component={AdminEdit} />
          <Route exact path="/:id" component={Dog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
