import React from 'react'
import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'
import Series from './Series'
import NovaSerie from './NovaSerie'
import InfoSerie from './InfoSerie'
import Login from './Login'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function App () {
  return (
    <Router>
      <div>
        <Login />
        <Switch>
          <Route path='/Login' exact component={Login} />
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

export default App
