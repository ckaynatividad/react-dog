
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import Enemy from './views/EnemyDetail';
import EnemiesView from './views/EnemiesList';
import EnemyEdit from './views/EditEnemy/EnemyEdit';
import AddEnemy from './views/AddEnemy/AddEnemy';



function App() {
  return (
    <div className="App">
      <h1>ʕ•ᴥ•ʔ</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={EnemiesView} />
          <Route exact path="/admin" component={AddEnemy} />
          <Route exact path="/:id/edit" component={EnemyEdit} />
          <Route exact path="/:id" component={Enemy} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
