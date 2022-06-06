import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DateTimePicker } from '@mui/x-date-pickers';

import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Autocomplete from '@mui/material/Autocomplete';

import {utentes} from '../data/utentes.js'


// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function MarcarConsultaPopup(props) {

  const [open, setOpen] = React.useState(true);
  const [Titulo,setTitulo] = useState('')
  const [data, setData] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.close!=null) props.close(true)
  
  };
  const handleCloseSend = () => {
    console.log("handleCloseSend", data)
    console.log(Titulo)
    console.log(nomeUtente)
    console.log(numeroUtente)

    // localStorage.setItem('nomeUtente',JSON.stringify(nomeUtente))
    // localStorage.setItem('NumeroUtente',NumeroUtente)
    // localStorage.setItem('Titulo',Titulo)



    //window.location.reload(false);
    
    setOpen(false);
    if (props.submit!=null) props.submit(Titulo,nomeUtente, data) //! REPARAR
    if (props.close!=null) props.close()
  }


  const [nomeUtente, setnomeUtente] = React.useState('');
  const [numeroUtente, setnumeroUtente] = React.useState('');


  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Marcar Consulta
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Marcar Consulta</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off" >
            <TextField 
              InputLabelProps={{shrink: true}} 
              label ='Data de Marcação (Opcional)' 
              type = 'date' variant='outlined' 
              onChange={(e) => setData(e.target.value)}
              sx ={{width:'99%'}}>

            </TextField>
              <TextField
                sx={{
                  display:'flex',
                  paddingTop:'0.5vw',
                  paddingBottom:'0.25vw',
                }}
                multiline
                rows={4}
                onChange={(e) => setTitulo(e.target.value)}

                label="Descricao"

              />
          <Autocomplete
            sx={{width:'100%', alignItems:'center', justifyContent:'center',paddingTop:'0.25vw',paddingBottom:'0.25vw'}}
            freeSolo
            id="Search Name"
            disableClearable
            options={utentes.map((option) => option.Name)}
            onInputChange={(event, newInputValue) => {
              setnomeUtente(newInputValue);
            }}
            renderInput={(params) => (
              <TextField
                onChange={(e) => setnomeUtente(e.target.value)}

                {...params}
                label="Nome do utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          <h3>Ou</h3>
          <Autocomplete
            sx={{width:'100%',paddingTop:'0.25vw',paddingBottom:'0.25vw'}}
            freeSolo
            id="Search Name"
            disableClearable
            onInputChange={(event, newInputValue) => {
              setnumeroUtente(newInputValue);
            }}
            options={utentes.map((option) => option.ID)}
            renderInput={(params) => (
              <TextField
                {...params}
                //onChange={(e) => setNumeroUtente(e.target.value)}

                label="Número de utente"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
          </form>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Deixar lembrete?" />
        </FormGroup>
          <TextField
          id="date"
          label="Data Lembrete"
          type="date"
          inputFormat="dd-MM-yyyy"
          sx={{display:'flex'}}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSend}>Agendar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}
