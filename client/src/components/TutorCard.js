import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';
export default function TutorCard({ name, category }) {
  return (
    <Card sx={{ width: 210, backgroundColor: 'white' }}>
      <CardMedia
        component='img'
        height='150'
        image='https://picsum.photos/200/300'
        alt='Tutor'
      />
      <CardContent>
        <Typography variant='h5' component='p'>
          {name}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant='caption' component='p' gutterBottom>
              4/5⭐
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{ textAlign: 'right' }}
              variant='caption'
              component='p'
              gutterBottom
            >
              1.3k reviews
            </Typography>
          </Grid>
        </Grid>

        <Stack direction='row' spacing={1}>
          <Chip
            label={category}
            size='small'
            sx={{ backgroundColor: 'black', color: 'white' }}
          />
          {/* <Chip
            label='Phy'
            size='small'
            sx={{ backgroundColor: 'black', color: 'white' }}
          />
          <Chip
            label='Chem'
            size='small'
            sx={{ backgroundColor: 'black', color: 'white' }}
          /> */}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size='small' variant='contained' style={{ color: 'white' }}>
          More Details
        </Button>
      </CardActions>
    </Card>
  );
}

TutorCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
};
