import React, {useEffect, useState} from 'react';
import './ResourceSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, Stack } from '@mui/material';
import Log from '../images/log.png';
import Ore from '../images/ore.png';
import Wheat from '../images/wheat.png';

export default function PopulationSection(props: any) {

  var population = props.population;
  var logs = props.logs;
  var ores = props.ores;
  var wheats = props.wheats;
  var gains = props.gains;
  var setGains = props.setGains;
  let [shouldTransition, setShouldTransition] = useState(true);

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div">
          Resources
        </Typography>
        <Typography variant="h4">
          <br />
          <Box display="flex" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={2}>
            <Box sx={{ marginTop: "-30px !important" }}>
              <div className={gains[0] > 0 ? "display" : ""} style={{ fontSize: "25px", color: "green", visibility: "hidden" }} onAnimationEnd={() => {
                      setGains((list: any) => {
                        return [...list.slice(0, 0), 0, ...list.slice(0 + 1)]
                      })
              }}>+{gains[0]}</div>
              <img src={Log} width="64px" height="64px" />x{logs}&nbsp;&nbsp;
            </Box>
            <Box sx={{ marginTop: "-30px !important" }}>
              <div className="display" style={{ fontSize: "25px", color: "green", visibility: gains[1] === 0 ? "hidden" : "visible" }}>+{gains[1]}</div>
              <img src={Ore} width="64px" height="64px"/>x{ores}&nbsp;&nbsp;
            </Box>
            <Box sx={{ marginTop: "-30px !important" }}>
              <div style={{ fontSize: "25px", color: "green", visibility: gains[2] === 0 ? "hidden" : "visible" }}>+{gains[2]}</div>
              <img src={Wheat} width="64px" height="64px"/>x{wheats}&nbsp;&nbsp;
            </Box>
          </Stack>
          </Box>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "1%" }}>
            <Card variant="outlined" className="Resource" sx={{ border: 5, borderColor: '#32cd32', borderRadius: '16px' }}>
                {card}
            </Card>

        </Box>
    )
}