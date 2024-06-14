// src/layout/RootLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, CssBaseline, Stack } from '@mui/material';
import NavBar from '../components/ui/AppBar';

const RootLayout: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Stack  spacing={2 } className='w-screen h-screen p-4 bg-primary-light'>
      <NavBar/>
      <Container className='w-full h-full'>
        <Outlet />
      </Container>
      </Stack>
     
    </>
  );
};

export default RootLayout;
