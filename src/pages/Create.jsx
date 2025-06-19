import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [formData, setFormData] = useState({
    titulo: '',
    autor: '',
    genero: '',
    data: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/books', formData);
      navigate('/leituras');
    } catch (error) {
      console.error('Erro ao salvar livro:', error);
    }
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
        Cadastrar
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: 360,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          label="Título"
          name="titulo"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Autor"
          name="autor"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Gênero"
          name="genero"
          fullWidth
          margin="normal"
          onChange={handleChange}
          required
        />
        <TextField
          label="Lido em"
          name="data"
          type="date"
          fullWidth
          margin="normal"
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
          <Button variant="outlined" color="inherit" onClick={() => navigate('/')} sx={{ flex: 1, mr: 1 }}>
            Cancelar
          </Button>
          <Button variant="contained" color="success" type="submit" sx={{ flex: 1, ml: 1 }}>
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
