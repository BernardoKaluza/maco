import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar'

import Home from './Containers/Home'
import About from './Containers/about'
import Perfil from './Containers/Perfil'

import Login from './Containers/Login'

import PesquisaUtente from './Containers/PesquisaUtente';
import Register from './Containers/Register';
import PerfilPaciente from './Containers/PerfilPaciente';
import Calendario from './Containers/Calendario';
import FormPaciente from './Containers/FormPaciente';
import { red } from '@mui/material/colors';


import { ThemeProvider, createTheme} from '@mui/material/styles';

import DemoApp from './components/DemoApp'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ea6a47',
    },
    secondary: {
      main: '#0091d5',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
     
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/home' element={<Home/>} />
       <Route path='/Perfil' element={<Perfil/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/Login' element={<Login/>} />
       <Route path='/Calendario' element={<Calendario/>} />
       <Route path='/PesquisaUtente' element={<PesquisaUtente/>} />
       <Route path='/Register' element={<Register/>} />
       <Route path='/PerfilPaciente' element={<PerfilPaciente/>} />
       <Route path='/Calendario' element={<Calendario/>} />
       <Route path='/FormPaciente' element={<FormPaciente/>} />
       <Route path='/Demo' element={<DemoApp/>} />
      </Routes>
    </Router>
    </ThemeProvider>
  );

}

export default App;
