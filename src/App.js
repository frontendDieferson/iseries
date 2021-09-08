import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import EditarGenero from './components/EditarGenero';
import NovoGenero from './components/NovoGenero';
import Generos from './components/Generos';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get('/api')
      .then(res => {
      setData(res.data.data)
    })
  }, [])



  return (
    <Router>
    <div>
      <Header />
      <Route  path='/' exact component={Home} />
      <Route path='/generos/:id' exact component={EditarGenero} />
      <Route path='/generos/novo' exact component={NovoGenero} />
      <Route path='/generos' exact component={Generos} />
    </div>
    </Router>
  )
}

export default App;
