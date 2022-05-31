import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react'

export default function AtualizarPacientePopup() {

  const [open, setOpen] = React.useState(false);
  const [Descricao,setDescricao] = useState('')
  const [Notas,setNotas] = useState('')


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSend = () => {

    console.log(Descricao)
    localStorage.setItem('DescricaoPaciente',Descricao)
    localStorage.setItem('Notas',Notas)
    window.location.reload(false);

    setOpen(false);
  };

  

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Atualizar Dados
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Atualizar</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Descrição:
          </DialogContentText> */}
          <form noValidate autoComplete="off" >
          <TextField
            autoFocus
            onChange={(e) => setDescricao(e.target.value)}
            margin="dense"
            id="name"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            onChange={(e) => setNotas(e.target.value)}
            margin="dense"
            id="name"
            label="Notas"
            type="text"
            fullWidth
            variant="standard"
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSend}>Alterar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}