import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/StarBorderPurple500';
import SchoolIcon from '@mui/icons-material/School';
import CContainer from '../components/CContainer';
import StudentReview from '../components/StudentReview';

const tutorData = {
  name: 'Bright Mind classes',
  image: 'https://picsum.photos/400/300',
  location: 'Goyal compounds',
  tutorName: 'Reeya den',
  education: 'Bsc from MYsore',
  rating: '4.5',
  totalReview: '1.3 k',
  subjectsOffer: [
    { name: 'Mathematics', price: '100' },
    { name: 'english', price: '100' },
  ],
};

const TutorProfile = () => {
  return (
    <CContainer>
      <Box m={5}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <img src={tutorData.image} />
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={7}>
            <Typography variant='h2' component='h3'>
              {tutorData.name}
            </Typography>
            <div>
              <LocationOnIcon /> {tutorData.location}
            </div>
            <br />
            <Typography variant='body1' component='body1'>
              About the tutor
            </Typography>
            <Box mt={2} component='div' sx={{ p: 2, border: '1px solid grey' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: '3px 0',
                }}
              >
                <div>
                  <Typography variant='h5' component='h5'>
                    {tutorData.tutorName}
                  </Typography>
                  <Typography variant='subtitle1' component='p'>
                    <SchoolIcon /> <span>{tutorData.education}</span>
                  </Typography>
                </div>
                <div>
                  <Typography variant='subtitle1' component='p'>
                    <StarIcon /> {tutorData.rating}/5
                  </Typography>
                  <Typography variant='subtitle1' component='p'>
                    {tutorData.totalReview} reviews
                  </Typography>
                </div>
              </div>
              <Typography variant='body1' component='p'>
                Subjects Offered:
              </Typography>
              {tutorData.subjectsOffer.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      margin: '3px 0',
                    }}
                  >
                    <Box
                      style={{
                        padding: '5px',
                        border: '1px solid grey',
                        width: '100%',
                      }}
                    >
                      {data.name}
                    </Box>
                    <Box
                      style={{
                        marginLeft: '5px',
                        border: '1px solid grey',
                        width: '100%',
                      }}
                    >
                      <Button variant='text'>
                        Enroll @ {data.price}/month
                      </Button>
                    </Box>
                  </div>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mt={8} component='div'>
        <Typography variant='h5' component='h3'>
          {' '}
          Student Reviews
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <StudentReview />
          <StudentReview />
          <StudentReview />
        </div>
      </Box>
    </CContainer>
  );
};

export default TutorProfile;
