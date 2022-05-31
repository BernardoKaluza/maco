import React from 'react';
import Navbar from '../components/navbar'

function Perfil ()  {
  return (
    <React.Fragment>
      <Navbar />

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      
      <h1>Perfil</h1>
    </div>
  
  </React.Fragment>
  );
};

export default Perfil;