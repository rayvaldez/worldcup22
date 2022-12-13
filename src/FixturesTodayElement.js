import React from 'react'
import { Typography, Grid } from '@mui/material';
import fixtures from './Fixtures';

const FixturesTodayElement = ({fixture}) => {
  const startTime = new Date(fixture.local_date)

  let timeOrResult

  if (fixture.time_elapsed !== "notstarted" ) {
    timeOrResult = `${fixture.home_score} : ${fixture.away_score}` 
  } else {
    timeOrResult = `${startTime.getHours()-3}:${startTime.getMinutes()}${startTime.getMinutes()}`
  }

  return (
    <Grid container sx={{ textAlign: 'center', pb: "4px" }}>
      <Grid item xs sx={{ textAlign: 'right'}}>
        <Typography variant="body1">
          ({fixture.home_owner}) {fixture.home_team_en} 
        </Typography>
      </Grid>
      <Grid sx={{ p: "0 4px 0 4px"}}>
        <img src={fixture.home_flag} alt='homeflag' width="28vw" height="20vh"/>
      </Grid>
      <Grid sx={{ p: "0 1px 0 1px"}}>
        <Typography variant="button">
          {timeOrResult}
        </Typography>
      </Grid>
      <Grid sx={{ p: "0 4px 0 4px"}}>
        <img src={fixture.away_flag} alt='awayflag' width="28vw" height="20vh"/>
      </Grid>
      <Grid item xs sx={{ textAlign: 'left'}}>
        <Typography variant="body1">
          {fixture.away_team_en} ({fixture.away_owner})
        </Typography>  
      </Grid>
    </Grid>
  )
}

export default FixturesTodayElement;