import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const response = await api.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      fetchBooks(); // Recarrega a lista após exclusão
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    }
  };

  const handleEdit = (book) => {
    navigate('/cadastrar', { state: book }); // Envia o livro via location.state
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 4,
          p: 3,
          width: '100%',
          maxWidth: 800,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" gutterBottom align="center" color="primary">
          Leituras cadastradas
        </Typography>

        <TableContainer component={Paper} elevation={0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Título</strong></TableCell>
                <TableCell><strong>Autor</strong></TableCell>
                <TableCell><strong>Gênero</strong></TableCell>
                <TableCell><strong>Lido em</strong></TableCell>
                <TableCell align="right"><strong>Ações</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.titulo}</TableCell>
                  <TableCell>{book.autor}</TableCell>
                  <TableCell>{book.genero}</TableCell>
                  <TableCell>{book.data}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(book)}
                      aria-label="editar"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(book.id)}
                      aria-label="excluir"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {books.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Nenhum livro cadastrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}