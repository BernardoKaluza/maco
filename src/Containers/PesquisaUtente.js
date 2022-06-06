//react page with a search form and a table with the results
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Navbar2 from '../components/Navbar2'
import {utentes} from '../data/utentes.js'
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom"

function PesquisaUtente() {
  let navigate = useNavigate();
  const handlenomeChange = (event,value) => {
    console.log(value)
    if(value=="Sofia Wilson"){
      console.log("teste");
      navigate("/PerfilPaciente");
    }
  }

  return (
    <React.Fragment>
      <Navbar2 />
      <Container sx={{justifyContent:'center',alignItems:'center',display:'flex',paddingTop:'3vw',pb:'3vw'}}>
        <h1 sx={{justifyContent:'center',alignItems:'center'}}>Pesquisa de Utentes</h1>
      </Container>
     
        <Grid sx={{Width:"flex",justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={12}>
          <Autocomplete
            sx={{width:'50%', alignItems:'center', justifyContent:'center'}}
            freeSolo
            id="Search Name"
            disableClearable
            onInputChange={(event, value) => {handlenomeChange(event,value)}}
            options={utentes.map((option) => option.Name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pesquisar Nome"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Grid>

        <Grid sx={{height:'5vw',Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex',}} item xs={12}>
        <Box sx={{marginTop:'1.5vw'}}><h2> OU  </h2> </Box>
        </Grid>

        <Grid sx={{Width:"flex",justifyContent:'center',allignItems:'center',display: 'flex'}} item xs={12}>

          <Autocomplete
            sx={{width:'50%'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.ID)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Numero de Utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />

        </Grid>
        <Grid sx={{paddingTop:'3vw',justifyContent:'center',alignItems:'center',display: 'flex'}} container spacing={4} item xs={12}>
          <Grid item xs={6} sx ={{justifyContent:'right',alignItems:'center',display:'flex'}}>
            <NavLink to = '/PerfilPaciente'>
              <Button variant='contained'>
                  Ir
              </Button>
            </ NavLink>
          </Grid>
          <Grid item xs={6} sx ={{justifyContent:'left',alignItems:'center',display:'flex'}} >
            <NavLink to = '/FormPaciente'>
                  <Button  variant='contained'>
                      Adicionar Paciente
                  </Button>
                </NavLink>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}


export default PesquisaUtente;