import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { margin } from '@mui/system';
import Button from '@mui/material/Button';
import Navbar2 from '../components/Navbar2'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { Component } from 'react';


import IconButton from '@mui/material/IconButton';


import { NavLink } from 'react-router-dom';

import { NavLink as Link } from 'react-router-dom';

import Notification from '../components/Notification';
import DemoApp from '../components/DemoApp';

import HelpPopup from '../components/HelpPopup';

const notificationHandler = () => {

}



export default class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
        page:1,
        TODO:"",
        notificationopen:false,
    }

  }  



  setTODO = ({target})=>{
    this.setState({[target.TODO]:target.value});
    localStorage.setItem('TODO',target.value);
    
  }
  getTODO=()=>{
    this.TODO = localStorage.getItem('TODO')
    return localStorage.getItem('TODO')
  }


  render(){
  return (

    <React.Fragment>
    <Navbar2 />

    <Grid sx = {{marginTop:'5px'}} container spacing={2}>


        <Grid sx={{border:1,justifyContent:'center',alignItems:'center',display: 'flex'}} item xs={9}>
          <DemoApp  />
          
        </Grid>

         <Grid sx={{border:1,paddingRight:'1vw'}} item xs={3}>

            <Grid>
              <Stack sx = {{justifyContent:'center',alignItems:'center',display: 'flex'}}direction='column' spacing={5}>
                <Grid container spacing={1}>
                  <Grid item xs={2} sx={{alignItems:'right',justifyContent:'right'}} onMouseEnter={this.notificationHandler} >
                    <div onClick={this.openNotification}>
                      <IconButton color="primary" aria-label="upload picture" component="span">
                        <Avatar  alt="ERROR" src={ require("../image/bell.png")} />
                      </IconButton>
                      {this.state.notificationopen && <Notification/>}
                    </div>
                  </Grid>
                  <Grid item xs={10}>
                    
                    <h3>
                    Próxima Consulta: 02/06 às 15:00
                    </h3>
                  </Grid>
                
                </Grid>
                <NavLink to = '/Home'>
                </NavLink>
                <NavLink to = '/FormPaciente'>
                  <Button  variant='contained'>
                      Adicionar Paciente
                  </Button>
                </NavLink>
                </Stack>
            </Grid>
            <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw', justifyContent:'center',alignItems:'center',display: 'flex',paddingTop:'2vw'}}>  
              <TextField
              sx ={{
                paddingTop:'0.25vw',
                display:'flex',
                width:'100%'
              
              }}
              name="TODO"
              defaultValue={this.getTODO()}
              onChange={this.setTODO}
              multiline
              rows={8}
              label="Lista de Tarefas "

            />
            </Grid>
            <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw', justifyContent:'right',alignItems:'center',display: 'flex',paddingTop:'14vw'}}>
              <div onClick={this.openHelp} sx ={{display:'flex'}}>
                <HelpPopup/>
              </div>
            </Grid>
        </Grid>
    </Grid>
    </React.Fragment>
    );
  }

openNotification = () =>{
  this.setState({notificationopen : !this.state.notificationopen}) 
}


}

