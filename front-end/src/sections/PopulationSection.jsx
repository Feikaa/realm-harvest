import * as React from 'react';
import './PopulationSection.css';
import { Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';

export default function PopulationSection(props) {

  var population = props.population;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div">
          Population
        </Typography>
        <Typography variant="h4">
          <br />
          {population}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "2%"}}>
            <Card variant="outlined" className="Card" sx={{ border: 5, borderColor: '#32cd32', borderRadius: '16px' }}>
                {card}
            </Card>

        </Box>
    )
}