import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Aleatorios from './componentes/Aleatorios'
import Capturados from './componentes/Capturados'
import Favoritos from './componentes/Favoritos'
import Listas from './componentes/Listas'
import Pokemon from './componentes/Pokemon'
import Usuario from './componentes/Usuario'
import Menu from './componentes/Menu'
import './App.css'

function App() {

  return (
    <Router>

      <Menu />

      <Routes>
        <Route path='/' element={<Listas />} />
        <Route path='/Aleatorios' element={<Aleatorios />} />
        <Route path='/Capturados' element={<Capturados />} />
        <Route path='/Favoritos' element={<Favoritos />} />
        <Route path='/Pokemon/:name' element={<Pokemon />} />
        <Route path='/Usuario' element={<Usuario />} />
      </Routes>
    </Router>
  )
}

export default App
