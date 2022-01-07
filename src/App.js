
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import AdminEdit from './views/Admin';

import Enemy from './views/EnemyDetail';
import EnemiesView from './views/EnemiesList';



function App() {
  return (
    <div className="App">
      <h1>ʕ•ᴥ•ʔ</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={EnemiesView} />
          <Route exact path="/:id/edit" component={AdminEdit} />
          <Route exact path="/:id" component={Enemy} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
