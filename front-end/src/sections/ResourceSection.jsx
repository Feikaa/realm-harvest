import * as React from 'react';
import './ResourceSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography } from '@mui/material';
import Log from '../log.png';
import Ore from '../ore.png';
import Wheat from '../wheat.png';

export default function PopulationSection(props) {

  var population = props.population;
  var logs = props.logs;
  var ores = props.ores;
  var wheats = props.wheats;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div">
          Resources
        </Typography>
        <Typography variant="h4">
          <br />
          <img src={Log} width="64px" height="64px" />x{logs}&nbsp;&nbsp;
          <img src={Ore} width="64px" height="64px"/>x{ores}&nbsp;&nbsp;
          <img src={Wheat} width="64px" height="64px"/>x{wheats}&nbsp;&nbsp;
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