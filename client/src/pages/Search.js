import React, { useEffect, useState } from 'react';

import { Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, Stack, Button } from '@mui/material';
import CContainer from '../components/CContainer';
import TutorCard from '../components/TutorCard';

import CTextField from '../components/CTextField';

import userList from '../assets/Data/teacherData.js';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getUsers(userList);
  }, []);

  //Simulating making api call with useEffect
  const getUsers = (userList) => {
    setUsers(userList);
  };

  const byCategory = (user, category) => {
    if (category) {
      return user.category === category;
    } else return user;
  };
  const bySearch = (user, search) => {
    if (search) {
      return user.name.toLowerCase().includes(search.toLowerCase());
    } else return user;
  };

  const filteredList = (users, category, search) => {
    return users
      .filter((user) => byCategory(user, category))
      .filter((user) => bySearch(user, search));
  };

  return (
    <CContainer>
      <div>
        <form
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '30px',
          }}
        >
          <CTextField
            sx={{ width: '300px' }}
            size='small'
            type='search'
            name='search-query'
            placeholder='Search by subject, tutor name...'
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant='contained'
            sx={{ color: 'white' }}
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </div>
      {search ? (
        <div style={{ margin: '1rem' }}>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: '1000px', margin: 'auto' }}
          >
            {filteredList(users, category, search).map((user) => (
              <Grid item xs={3} key={user.id}>
                <TutorCard name={user.name} category={user.category} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        ''
      )}
      {!search ? (
        <div style={{ margin: '1rem' }}>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: '1000px', margin: 'auto' }}
          >
            <Grid item xs={6}>
              <Typography variant='h6' component='p' gutterBottom>
                Top Rated Tutors near you
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Button>See all</Button>
            </Grid>

            {filteredList(users, category, search)
              .slice(2, 10)
              .map((user) => (
                <Grid item xs={3} key={user.id}>
                  <TutorCard name={user.name} category={user.category} />
                </Grid>
              ))}
          </Grid>
        </div>
      ) : (
        ''
      )}
      {/* Physics */}
      {!search ? (
        <div style={{ margin: '1rem' }}>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: '1000px', margin: 'auto' }}
          >
            <Grid item xs={6}>
              <Typography variant='h6' component='p' gutterBottom>
                Physics Tutors near you
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Button>See all</Button>
            </Grid>

            {filteredList(users, 'Physics', search)
              .slice(0, 4)
              .map((user) => (
                <Grid item xs={3} key={user.id}>
                  <TutorCard name={user.name} category={user.category} />
                </Grid>
              ))}
          </Grid>
        </div>
      ) : (
        ''
      )}

      {/* Chemistry */}
      {!search ? (
        <div style={{ margin: '1rem' }}>
          <Grid
            container
            spacing={2}
            sx={{ maxWidth: '1000px', margin: 'auto' }}
          >
            <Grid item xs={6}>
              <Typography variant='h6' component='p' gutterBottom>
                Chemistry Tutors near you
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Button>See all</Button>
            </Grid>
            {filteredList(users, 'Chemistry', search)
              .slice(0, 4)
              .map((user) => (
                <Grid item xs={3} key={user.id}>
                  <TutorCard name={user.name} category={user.category} />
                </Grid>
              ))}
          </Grid>
        </div>
      ) : (
        ''
      )}
    </CContainer>
  );
};

export default Search;
