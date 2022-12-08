import React from 'react';

import {
  Typography,
  Button,
  Stack,
  Box,
  Avatar,
  TextField,
} from '@mui/material';
import CContainer from '../components/CContainer';
import Course from '../components/Course';
const TeacherDashboard = () => {
  return (
    <CContainer>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={2}
      >
        <Box
          sx={{ p: 2, border: '1px solid ', height: '400px', width: '600px' }}
        >
          <Typography gutterBottom variant='h5' component='h4'>
            Teacher Details
          </Typography>
          <Stack direction='column' justifyContent='space-evenly' spacing={3}>
            <TextField required label='Required' defaultValue='Name' />
            <TextField defaultValue='Gender' />
            <TextField defaultValue='Address' rows={3} multiline />
            <Button variant='contained'>Save Details</Button>
          </Stack>
        </Box>
        <Stack
          direction='column'
          justifyContent='space-evenly'
          alignItems='center'
          spacing={0}
        >
          <Avatar
            alt='Travis Howard'
            src='https://picsum.photos/200/300'
            style={{ height: '150px', width: '150px' }}
          />
          <Typography variant='h5' component='h4'>
            Teacher name
          </Typography>
          <Typography variant='h6' component='h5'>
            email@gamil.com
          </Typography>
        </Stack>
      </Stack>

      <Box m={3} component='div'>
        <Typography variant='h5' component='h3'>
          Courses
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Course />
          <Course />
          <Course />
        </div>
      </Box>
    </CContainer>
  );
};

export default TeacherDashboard;
