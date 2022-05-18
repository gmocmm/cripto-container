import React, { Fragment } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { createHashHistory } from 'history';
import CustomRouter from './components/CustomRouter';

import {AppBar,Box  ,Toolbar ,IconButton ,Typography ,Menu ,Container ,Avatar ,Button ,Tooltip,MenuItem } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';


import Home from './views/Home';
import News from './views/News';
import Chart from './views/Chart';

const pages = ['Home', 'Others'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const App = () => {
  const history = createHashHistory();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Fragment>
      <CustomRouter history={ history } >
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Cripto World
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {/* <MenuIcon /> */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >

                  <MenuItem >
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  {/* {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))} */}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Cripto World
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* <nav> */}
                  <Link to={ '/' } style={{ textDecoration: 'none' }} >  
                    <Button
                          
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                      Home
                    </Button>
                  </Link>
                  <Link to={ '/news' } style={{ textDecoration: 'none' }}  > 
                    <Button
                          
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                      Others
                    </Button>
                  </Link>
                {/* </nav> */}

                {/* {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))} */}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    
                    <Avatar>U</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      


        

        <Routes>
          <Route path="/" element={<Home history={ history } />} />
          <Route path="/news" element={<News />} />
          <Route path="/chart/:criptoId" element={<Chart />} />
        </Routes>
      </CustomRouter>
    </Fragment>
  );
};

export default App;
