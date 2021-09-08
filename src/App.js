import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import EditarGenero from './components/EditarGenero';
import NovoGenero from './components/NovoGenero';
import NovaSerie from './components/NovaSerie';
import Generos from './components/Generos';
import Header from './components/Header';
import Home from './components/Home';
import Series from './components/Series';
import InfoSerie from './components/InfoSerie';

function App() {


  return (
    <Router>
    <div>
      <Header />
      <Switch>

      <Route  path='/' exact component={Home} />
      <Route path='/generos' exact component={Generos} />
      <Route path='/generos/novo' exact component={NovoGenero} />
      <Route path='/generos/:id' exact component={EditarGenero} />
      <Route path='/series' exact component={Series} />
      <Route path='/series/novo' exact component={NovaSerie} />
      <Route path='/series/:id' exact component={InfoSerie} />
      </Switch>
    </div>
    </Router>
  )
}

export default App;
