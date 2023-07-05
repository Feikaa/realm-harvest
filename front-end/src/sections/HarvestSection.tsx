import * as React from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';
import Tree from '../images/tree.png';

export default function PopulationSection(props) {

  var population = props.population;
  var setPopulation = props.setPopulation;
  var logs = props.logs;
  var setLogs = props.setLogs;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div">
          Harvest
        </Typography>
        <Typography>
            <br />
            <img src={Tree} width="512px" height="512px"></img>
        </Typography>
        <Typography variant="h4">
          <br />
          <Button variant="contained" color="success" disableRipple onClick={() => {setLogs(logs + 1)}}>Harvest</Button>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "1%"}}>
            <Card variant="outlined" className="Card" sx={{ border: 5, borderColor: '#32cd32', borderRadius: '16px' }}>
                {card}
            </Card>

        </Box>
    )
}