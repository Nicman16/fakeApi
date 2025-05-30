import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AppProvider } from './contexto/contexto'
import { supabase } from "./supabase";

import Aleatorios from './componentes/Aleatorios'
import Capturados from './componentes/Capturados'
import Favoritos from './componentes/Favoritos'
import Listas from './componentes/Listas'
import Pokemon from './componentes/Pokemon'
import Usuario from './componentes/Usuario'
import Menu from './componentes/Menu'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import './App.css'

function App() {
const [usuario, setUsuario] = useState(null);
const [cargando, setCargando] = useState(true);

useEffect(() => {
async function verificarSesion() {
const { data: { session } } = await supabase.auth.getSession();
setUsuario(session?.user || null);
setCargando(false);
}
verificarSesion();

// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {

setUsuario(session?.user || null);
});
}, []);

if (cargando) return <p>Cargando...</p>;

return (
    <AppProvider>
    <Router>

      {usuario && <Menu />}

      <Routes>
        <Route path='/' element={usuario ? <Listas /> : <Navigate to="/Login"/>} />
        <Route path='/Aleatorios' element={usuario ? <Aleatorios /> : <Navigate to="/Login" />} />
        <Route path='/Capturados' element={usuario ? <Capturados /> : <Navigate to="/Login" />} />
        <Route path='/Favoritos' element={usuario ? <Favoritos /> : <Navigate to="/Login" />} />
        <Route path='/detalle/:name' eelement={usuario ? <Pokemon /> : <Navigate to="/Login" />} />
        <Route path='/Usuarios' element={usuario ? <Usuario /> : <Navigate to="/Login" />} />

        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </Router>
    </AppProvider>
  )
}

export default App
