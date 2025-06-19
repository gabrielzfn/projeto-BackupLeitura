import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import api from '../services/api';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Create() {
  const [formData, setFormData] = useState({
    id: null,
    titulo: '',
    autor: '',
    genero: '',
    data: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Verifica se está editando (dados vindos via state)
  useEffect(() => {
    if (location.state?.id) {
      setFormData(location.state);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        // Atualizar livro existente
        await api.put('/books', formData);
      } else {
        // Cadastrar novo livro
        await api.post('/books', formData);
      }
      navigate('/leituras');
    } catch (error) {
      console.error('Erro ao salvar o livro:', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: 'background.paper',
          p: 4,
          borderRadius: 4,
          boxShadow: 3,
          maxWidth: 500,
          width: '100%',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom color="primary">
          {formData.id ? 'Editar Livro' : 'Cadastrar'}
        </Typography>

        <TextField
          label="Título"
          name="titulo"
          fullWidth
          margin="normal"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <TextField
          label="Autor"
          name="autor"
          fullWidth
          margin="normal"
          value={formData.autor}
          onChange={handleChange}
          required
        />
        <TextField
          label="Gênero"
          name="genero"
          fullWidth
          margin="normal"
          value={formData.genero}
          onChange={handleChange}
          required
        />
        <TextField
          label="Lido em"
          name="data"
          type="date"
          fullWidth
          margin="normal"
          value={formData.data}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate('/leituras')}
          >
            Cancelar
          </Button>
          <Button variant="contained" color="success" type="submit">
            {formData.id ? 'Atualizar' : 'Salvar'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
