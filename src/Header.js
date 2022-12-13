import * as React from 'react';
import PropTypes from 'prop-types'; 
import './App.css';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from './images/QWC22.png'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = (props) => {
  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar position="static" sx={{
          backgroundColor: '#f5f5f5',
          width: '100%',
          height: '9.5vh'
        }}>
          <Toolbar disableGutters>          
            {/* <ThemeProvider theme={theme}>            */}
            <Box sx={{ mt: '1.1em', ml: '-0.4em', position: 'absolute', left: '0'}}>
              <img src={Logo} alt='logo' width="160" height="90" />
            </Box>                
            <Box sx={{ position: 'absolute', right: '0vw', pr: '2em', pt: '1.4em'}}>
              <Typography sx={{ color: "#8A1538", fontFamily: "BillionDreams_PERSONAL", fontSize: 25 }}>
                World Cup Sweepstake
              </Typography>
            </Box>
            {/* </ThemeProvider> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  )
}

export default Header;