import React from 'react';
import Navbar from '../components/navbar'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';
import Navbar2 from '../components/Navbar2'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function FormPaciente  ()  {

  const setNota=(nota)=> {
    localStorage.setItem('Notas',nota)
  }

  return (
    <>
      <Navbar2 />
      <Container sx={{width:'30vw'}} >
        <Grid container spacing={1}>
        <Container sx={{justifyContent:'center',alignItems:'center',display:'flex',paddingTop:'5vw',pb:'3vw'}}>
            <h1 sx={{justifyContent:'center',alignItems:'center'}}>Adicionar Utente</h1>
        </Container>

          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Nome Completo' sx ={{width:'99%'}}>
            </TextField>
          </Grid>

          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField InputLabelProps={{shrink: true}} label ='Data de Nascimento' type = 'date' variant='outlined' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField variant='outlined' label ='Número de Utente' sx ={{width:'99%'}}>
            </TextField>
          </Grid>
          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <TextField  onChange={(e) => setNota(e.target.value)} variant='outlined' label ='Nota (opcional)' sx ={{width:'99%'}}>
            </TextField>
          </Grid>

          <Grid item xs={12} sx ={{justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <FormControl >
              <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
              <RadioGroup row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              </RadioGroup>   
            </FormControl>
          </Grid>

          <Grid item xs={12} sx={{height:'5vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
            <NavLink to='/Home'>
              <Button variant='contained'>
                      Adicionar
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FormPaciente;