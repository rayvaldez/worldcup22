import React from 'react';
import { Box, Typography } from '@mui/material';

const Rules = () => {
  return (
    <Box sx={{ m: "1em 0 1em 0", p: "0 0 3px 0", border: "2px solid #8A1538", borderRadius: "5px"}}>
      <Box sx={{ backgroundColor: "#8A1538"}}>
        <Typography variant="h6" component="span" sx={{ color: "#faf9f6", pl: "2px"}}>
          Scoring
        </Typography>
      </Box>
      <Box sx={{ p: "0 3px 0 3px"}}>
        <Typography variant="body2">
          Win = 10 Points, Draw = 5 Points, Loss = 0 Points
        </Typography>
        <Typography variant="body2">
          Goal = 2 Points, Goal Conceded = -2 Points
        </Typography>
        <Typography variant="body2">
          Yellow Card = -1 Point, Red Card = -2 Points
        </Typography>
      </Box>
    </Box>
  )
}

export default Rules