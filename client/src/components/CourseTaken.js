import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Chemistry
        </Typography>
        <Typography variant='h5' component='div'>
          4.5/5
        </Typography>

        <Typography variant='body2'>Joined on: 12/2/22</Typography>
      </CardContent>
    </Card>
  );
}
