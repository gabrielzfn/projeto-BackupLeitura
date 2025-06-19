import React from 'react';
import { Box, Typography } from '@mui/material';

export default function About() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="body1" paragraph>
        Esta é uma aplicação para um CRUD de um Reading Journal.
      </Typography>
      <Typography variant="body1">
        Este projeto foi elaborado na Disciplina Desenvolvimento de Sistemas Frontend do
        Curso de Graduação Online da PUCRS.
      </Typography>
    </Box>
  );
}
