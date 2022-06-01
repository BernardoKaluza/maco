import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';

import Avatar from '@mui/material/Avatar';




import Autocomplete from '@mui/material/Autocomplete';

import {utentes} from '../data/utentes.js'


export default function MarcarConsultaPopup(props) {

  const [open, setOpen] = React.useState(false);
  const [nomeUtente,setnomeUtente] = useState('')
  const [NumeroUtente,setNumeroUtente] = useState('')
  const [Notas,setNotas] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (props.close!=null) props.close(true)
  
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
    <IconButton sx={{display:'flex'}} onClick={handleClickOpen} color="primary" aria-label="upload picture" component="span">
        <Avatar sx={{height:'3vw'}}  alt="ERROR" src={ require("../image/quest.png")} />
    </IconButton>
      <Dialog maxWidth='md'open={open} onClose={handleClose}>
        <DialogContent>
        <img src={ require("../image/help.gif")} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>

    </div>
  );

}

