import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './images/QWC22.png'


const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={{
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: '9.5vh'
      }}>
        <Toolbar disableGutters>          
          {/* <ThemeProvider theme={theme}>            */}
          <Box sx={{ mt: '1.3em', ml: '-0.4em', position: 'absolute', left: '0'}}>
            <img src={Logo} alt='logo' width="150" height="85" />
          </Box>                
            <Typography variant="h4" sx={{
              fontFamily: 'Masque',
              fontSize: '1.5rem',
              color: '#FAF9F6',
              mt: '-0.2em', 
              ml: '0.8em'
            }}>FPL</Typography>
            <Typography variant="h4" sx={{
              fontFamily: 'Masque',
              fontSize: '.95rem',
              color: '#FAF9F6',
              mt: '1.8em',
              ml: '-3.51em'
            }}>Rank</Typography>
          {/* </ThemeProvider> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;