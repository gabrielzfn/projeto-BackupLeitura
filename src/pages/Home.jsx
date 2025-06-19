import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'contain',
        px: 2,
      }}
    >
      <Typography variant="h3" fontFamily="'Caveat', cursive" gutterBottom>
        Backup da Leitura
      </Typography>
      <Typography variant="subtitle1">Palavra a palavra, vamos longe</Typography>
    </Box>
  );
}
