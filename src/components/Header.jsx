import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header({ toggleDarkMode, darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box>
          <Button onClick={() => navigate('/')} color="inherit">Home</Button>
          <Button onClick={() => navigate('/sobre')} color={location.pathname === '/sobre' ? 'primary' : 'inherit'}>Sobre</Button>
          <Button onClick={() => navigate('/cadastrar')} color={location.pathname === '/cadastrar' ? 'primary' : 'inherit'}>Cadastrar</Button>
          <Button onClick={() => navigate('/leituras')} color={location.pathname === '/leituras' ? 'primary' : 'inherit'}>Ver Leituras</Button>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="body2" sx={{ mr: 1 }}>Modo escuro</Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <Typography variant="h6" sx={{ ml: 2 }}>Backup da Leitura</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
