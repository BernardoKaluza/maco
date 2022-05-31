import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react'

import Autocomplete from '@mui/material/Autocomplete';

import {utentes} from '../data/utentes.js'


export default function CalendarPopup() {

  const [open, setOpen] = React.useState(false);
  const [nomeUtente,setnomeUtente] = useState('')
  const [NumeroUtente,setNumeroUtente] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSend = () => {

    console.log("AAAAAAAAAAAAAAAAA"+nomeUtente)
    localStorage.setItem('nomeUtente',JSON.stringify(nomeUtente))
    localStorage.setItem('NumeroUtente',NumeroUtente)
    //window.location.reload(false);

    setOpen(false);
  };
  const setnomeUtente2 = () => {
    console.log("yes")
  }

  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Marcar Consulta
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Marcar consulta para dia 30/2/2022</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecione o paciente:
          </DialogContentText>
          <form noValidate autoComplete="off" >
          <Autocomplete
            sx={{width:'50%', alignItems:'center', justifyContent:'center'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.Name)}
            renderInput={(params) => (
              <TextField
                onChange={(e) => setnomeUtente(e.target.value)}
                onInputChange={setnomeUtente2} 
                {...params}
                label="Pesquisar Nome"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
           <Autocomplete
            sx={{width:'50%'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.ID)}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={(e) => setNumeroUtente(e.target.value)}

                label="Numero de Utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSend}>Subscribe</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}