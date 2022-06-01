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


export default function MarcarConsultaPopup(props) {

  const [open, setOpen] = React.useState(true);
  const [nomeUtente,setnomeUtente] = useState('')
  const [NumeroUtente,setNumeroUtente] = useState('')
  const [Notas,setNotas] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.close!=null) props.close()
  
  };

  const handleApagar = () => {
    setOpen(false);
    if (props.close!=null) props.close()
    if (props.delete!=null) props.delete()
  
  };

  const handleCloseSend = () => {
    console.log(Notas)
    // localStorage.setItem('nomeUtente',JSON.stringify(nomeUtente))
    // localStorage.setItem('NumeroUtente',NumeroUtente)
    // localStorage.setItem('Notas',Notas)
    //window.location.reload(false);
   
    
    setOpen(false);
    if (props.submit!=null) props.submit(Notas)
    if (props.close!=null) props.close()
  }




  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Marcar Consulta
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <form noValidate autoComplete="off">
            <Autocomplete
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "0.5vw",
                paddingBottom: "0.25vw",
              }}
              disabled
              defaultValue={props.descricao}
              freeSolo
              id="Titulo"
              disableClearable
              options={utentes.map((option) => option.Name)}
              renderInput={(params) => (
                <TextField
                  variant="filled"
                  multiline
                  rows={4}
                  {...params}
                  label="Descricao"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            <Autocomplete
              sx={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "0.25vw",
                paddingBottom: "0.25vw",
              }}
              freeSolo
              disabled
              defaultValue={props.paciente}
              id="Search Name"
              disableClearable
              options={utentes.map((option) => option.Name)}
              renderInput={(params) => (
                <TextField
                  variant="filled"
                  onChange={(e) => setnomeUtente(e.target.value)}
                  {...params}
                  label="Nome Utente"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
            <Autocomplete
              sx={{
                width: "100%",
                paddingTop: "0.25vw",
                paddingBottom: "0.25vw",
              }}
              disabled
              defaultValue={"999080114"}
              freeSolo
              id="Search Name"
              disableClearable
              options={utentes.map((option) => option.ID)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  disabled
                  variant="filled"
                  onChange={(e) => setNumeroUtente(e.target.value)}
                  label="Numero de Utente"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />

            <TextField
              sx={{
                paddingTop: "0.25vw",
                display: "flex",
              }}
              onChange={(e) => setNotas(e.target.value)}
              multiline
              rows={4}
              label="Notas da consulta"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSend}>Submeter</Button>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleApagar}>Desmarcar</Button>
        </DialogActions>
      </Dialog>

    </div>
  );

}
