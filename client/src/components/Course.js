/* eslint-disable react/prop-types */
import * as React from 'react';
import { Card, CardContent, Typography, Stack, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/StarOutline';

export default function BasicCard({
  subjectName,
  price,
  totalRating,
  classesTaught,
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h6' component='h6' color='text.secondary'>
            {subjectName}
          </Typography>
          <Typography variant='body1' component='p'>
            <StarIcon /> {totalRating}/5
          </Typography>
        </Stack>

        <Stack direction='row' justifyContent='left'>
          <Typography variant='body1' component='p'>
            classes{' '}
            {classesTaught.map((classes, idx) => {
              return <Chip key={idx} label={classes} variant='outlined' />;
            })}
          </Typography>
        </Stack>

        <Typography variant='h6' component='p'>
          ₹ {price} / Month
        </Typography>
      </CardContent>
    </Card>
  );
}
