import React from 'react';
import Box from '@mui/material/Box';
import fixtures from './Fixtures';
import FixturesTodayElement from './FixturesTodayElement';
import { Typography } from '@mui/material';

const FixturesToday = () => {

  fixtures.sort(function (a, b) {
    return new Date(a.local_date) - new Date(b.local_date);
  })

  return (
    <Box sx={{ m: "1em 0 1em 0", border: "2px solid #8A1538", borderRadius: "5px"}}>
      <Box sx={{ backgroundColor: "#8A1538"}}>
        <Typography variant="h6" component="span" sx={{ color: "#faf9f6", pl: "5px"}}>
          Fixtures
        </Typography>
      </Box>
      <Box sx={{ pt: "8px" }}>
        {fixtures.map(fixture => 
          <FixturesTodayElement key={fixture.id} fixture={fixture} />
        )}
      </Box>
    </Box>
  )
}

export default FixturesToday;