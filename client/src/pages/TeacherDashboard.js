import React from 'react';
import {
  Typography,
  Button,
  Stack,
  Box,
  Avatar,
  TextField,
  Select,
  MenuItem,
  Popper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CContainer from '../components/CContainer';
import Course from '../components/Course';
const TeacherDashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  return (
    <CContainer>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={2}
      >
        <Box
          sx={{
            p: 2,
            border: '1px solid black ',
            borderRadius: '15px',
            width: '600px',
          }}
        >
          <Typography gutterBottom variant='h5' component='h4'>
            Teacher Details
          </Typography>
          <Stack direction='column' justifyContent='space-evenly' spacing={3}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography component='h6' variant='h6' mr={4}>
                Gender
              </Typography>
              <Select
                variant='outlined'
                fullWidth
                name='relationshipStatusData'
                i
              >
                <MenuItem value={0}>Male</MenuItem>
                <MenuItem value={1}>Female</MenuItem>
              </Select>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography component='h6' variant='h6' mr={4}>
                Address
              </Typography>
              <TextField
                defaultValue='Address'
                rows={2}
                multiline
                variant='outlined'
                fullWidth
              />
            </div>
            <Stack direction='row' justifyContent='space-between'>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography component='h6' variant='h6' mr={4}>
                  Pin
                </Typography>
                <TextField defaultValue='Pin' variant='outlined' />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography component='h6' variant='h6' mr={4}>
                  State
                </Typography>
                <TextField defaultValue='State' variant='outlined' />
              </div>
            </Stack>
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
            Bsc (Waitjsf)
          </Typography>
          <Typography variant='h6' component='h5'>
            email@gamil.com
          </Typography>
        </Stack>
      </Stack>

      <Box m={3} component='div'>
        <Typography variant='h5' component='h4' gutterBottom>
          Courses{' '}
          <Button
            variant='outlined'
            startIcon={<AddIcon />}
            onClick={handleClick}
          >
            Add Courses
          </Button>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box
              sx={{
                p: 2,
                border: '1px solid black ',
                borderRadius: '15px',
              }}
            >
              <Typography gutterBottom variant='body1' component='h6'>
                Add Courses
              </Typography>
              <Stack
                direction='column'
                justifyContent='space-evenly'
                spacing={3}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component='body2' variant='p' mr={4}>
                    Name
                  </Typography>
                  <TextField
                    defaultValue='Name'
                    variant='outlined'
                    Size='small'
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component='caption' variant='p' mr={4}>
                    Price
                  </Typography>
                  <TextField
                    defaultValue='Price'
                    variant='outlined'
                    Size='small'
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component='caption' variant='p' mr={4}>
                    Start Time
                  </Typography>
                  <TextField
                    defaultValue='Start Time'
                    variant='outlined'
                    Size='small'
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Typography component='caption' variant='p' mr={4}>
                    End Time
                  </Typography>
                  <TextField
                    defaultValue='End Time'
                    variant='outlined'
                    Size='small'
                  />
                </div>
                <Button variant='contained'>Add</Button>
              </Stack>
            </Box>
          </Popper>
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
