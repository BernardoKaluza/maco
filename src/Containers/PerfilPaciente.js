import * as React from 'react';
import { Component } from 'react';

import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';
import Navbar2 from '../components/Navbar2'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



import { pacienteConsultas as consultas } from '../data/pacienteConsultas';

import FormDialog from '../components/AtualizarPacientePopup';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default class PerfilPaciente extends Component {

    //const [page, setPage] = React.useState(1);
    //const handleChange = (event, value) => {
        
     //   setPage(value);
    //};

    constructor(props) {
        super(props);
    
        this.state = {
            page:1,
            DescPaciente:"",
            NotasPaciente:"",
        }
    
    }    

    getStateFromLocalStorage = () => { 
        let data = localStorage.getItem('Notas'); 
        let data2 = localStorage.getItem('DescricaoPaciente'); 
        if(data !== null && data2 !== null) {
          this.setState({NotasPaciente:data}); 
          this.setState({DescPaciente:data2}); 
        }
      }

    setNota(nota) {
        this.setState({NotasPaciente:nota}); 
        localStorage.setItem('Notas',this.state.NotasPaciente)
    }

      componentDidMount() { 
        // Fetch data from local storage 
        this.getStateFromLocalStorage(); 
        console.log("Component mounted");
      } 

      render(){
        return ( 
        <div>
            <Navbar2 />
            <Grid sx = {{marginTop:'10px'}} container spacing={2}>
                <Grid sx={{border:0}} item xs={3}>
                    <Grid sx= {{border:0,height:'17vw',justifyContent:'center',alignItems:'center',display: 'flex'}}>
                        <Avatar  alt="ERROR" src={ require("../image/avatar.jpg")}  sx={{ width: "16.5vw", height: "16.5vw"}} />
                    </Grid>
                    <Grid>
                        <h1 style = {{justifyContent:'center',alignItems:'center',display: 'flex'}}>Sofia Wilson</h1>
                    </Grid>
                    <Grid sx= {{border:0}}>
                        <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw',border:0,paddingLeft:'1vw',alignItems:'center',display: 'flex'}}>
                            <Grid sx={{display:'flex'}}direction='column' spacing={5}>          
                                <h3>
                                    Data de nascimento: 05/03/1972
                                </h3>
                                <h3>
                                    Género Feminino
                                </h3>
                                <h2>
                                    Descrição:
                                </h2>
                                <TextField
                                    sx={{pr:'0vw',pl:'1vw',pb:'0vw',width:'22vw'}}
                                    id="filled-multiline-static"
                                    multiline
                                    onChange={(e) => this.setNota(e.target.value)}
                                    rows={4}
                                    label="Notas"
                                    defaultValue= {this.state.DescPaciente}
                                    variant="filled"
                                    />
                                <TextField
                                    sx={{pr:'0vw',pl:'1vw',pb:'0vw',width:'22vw'}}
                                    id="filled-multiline-static"
                                    multiline
                                    onChange={(e) => this.setNota(e.target.value)}
                                    rows={4}
                                    label="Notas"
                                    defaultValue= {this.state.NotasPaciente}
                                    variant="filled"
                                    />



                            </Grid>
                        </Grid>
                        <Grid sx={{paddingTop:'1vw',paddingBottom:'1vw',border:0, justifyContent:'center',alignItems:'center',display: 'flex'}}>
                            <FormDialog>
                                Atualizar Perfil
                            </FormDialog>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{border:0,justifyContent:'center',alignItems:'center'}} container item xs={9}>

                    <Grid sx ={{border:0,justifyContent:'center',alignItems:'center',display: 'flex',paddingLeft:'1vw',paddingRight:'1vw'}} item xs={6}>
                        <Stack direction='column' spacing={5}>        
                            <Accordion defaultExpanded={true}>
                               
                                
                                <AccordionSummary
                               
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-8) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Resumo:"
                                    defaultValue="Consulta ainda não realizada"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />

                                </AccordionDetails>
                                
                            </Accordion>
                            <Accordion defaultExpanded={true}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-7) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Resumo:"
                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget."
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                />

                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-6) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-5) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Grid>

                    <Grid sx ={{border:0,justifyContent:'center',alignItems:'center',display: 'flex',paddingLeft:'1vw',paddingRight:'1vw'}} item xs={6}>
                        <Stack direction='column' spacing={5}>        
                        <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-4) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-3) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-2) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography>Consulta dia {consultas[ ((this.state.page*8)-1) ].date}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Stack>
                    </Grid> 

                    <Pagination count={5} page={this.state.page} onChange={(event, value) => {this.setState({page:value})}} >

                    </Pagination>

                </Grid>
            </Grid>
         </div>
        
    );

    }
}