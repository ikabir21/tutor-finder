import * as React from 'react';
import { Card, CardContent, Typography, Stack, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/StarOutline';

const coursesClass = ['X', 'XI', 'XII'];

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' component='h6' color='text.secondary'>
            Chemistry
          </Typography>
          <Typography variant='body1' component='p'>
            <StarIcon /> 4.5/5
          </Typography>
        </Stack>

        <Stack direction='row' justifyContent='left'>
          <Typography variant='body1' component='p'>
            classes{' '}
            {coursesClass.map((classes, idx) => {
              return <Chip key={idx} label={classes} variant='outlined' />;
            })}
          </Typography>
        </Stack>

        <Typography variant='h6' component='p'>
          ₹ 9000 / Month
        </Typography>
      </CardContent>
    </Card>
  );
}
