import * as React from 'react';
import './PopulationSection.css';
import { Box, Card, CardActions, CardContent, Button } from '@mui/material';
import {LinearProgress, Typography} from '@mui/joy';

export default function PopulationSection(props: any) {

  var population = props.population;
  var aPop = props.aPop;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography level="h1" component="div">
          Population
        </Typography>
        <Typography>
          <br />
          <LinearProgress determinate value={(aPop/population) * 100} thickness={50} color='success' variant="outlined" sx={{ '--LinearProgress-radius': '0px' }}>
            <Typography sx={{ mixBlendMode: 'hard-light' }} fontWeight="xl" level='h3' textColor="common.black">
              {aPop} / {population}
            </Typography>
          </LinearProgress>
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