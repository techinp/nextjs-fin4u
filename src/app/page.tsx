'use client';

import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <h1>Hello, Next.js!</h1>
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
    </main>
  );
}
