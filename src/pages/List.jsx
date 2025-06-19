import React, { useEffect, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const res = await api.get('/books');
      setBooks(res.data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography 
        variant="h5" 
        align="center" 
        color="primary" 
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Lista de Livros
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 3,
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {books.length === 0 ? (
          <Typography align="center" sx={{ gridColumn: '1 / -1' }}>
            Nenhum livro cadastrado.
          </Typography>
        ) : (
          books.map((book) => (
            <Box
              key={book.id}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                position: 'relative',
                minHeight: 160,
              }}
            >
              <IconButton
                size="small"
                color="primary"
                onClick={() => navigate('/cadastrar', { state: book })}
                sx={{ position: 'absolute', top: 8, right: 40 }}
                aria-label="editar livro"
              >
                <EditIcon />
              </IconButton>
              <IconButton
                size="small"
                color="error"
                onClick={() => handleDelete(book.id)}
                sx={{ position: 'absolute', top: 8, right: 8 }}
                aria-label="deletar livro"
              >
                <DeleteIcon />
              </IconButton>

              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Título:
                <Typography component="span" fontWeight="normal" ml={1}>
                  {book.titulo}
                </Typography>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Autor (a):</strong>
                <Typography component="span" ml={1}>
                  {book.autor}
                </Typography>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Gênero:</strong>
                <Typography component="span" ml={1}>
                  {book.genero}
                </Typography>
              </Typography>
              <Typography variant="body2">
                <strong>Lido em:</strong>
                <Typography component="span" ml={1}>
                  {book.data}
                </Typography>
              </Typography>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
