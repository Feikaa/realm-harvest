import * as React from 'react';
import './PopulationSection.css';
import { Box, Card, CardActions, CardContent, Button } from '@mui/material';
import {LinearProgress, Typography} from '@mui/joy';

export default function PopulationSection(props: any) {

  const courierFontStyle = {
    fontFamily: 'Kurale, monospace',
  };

  var population = props.population;
  var aPop = props.aPop;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography level="h1" component="div" style={courierFontStyle}>
          Population
        </Typography>
        <Typography>
          <br />
          <LinearProgress determinate value={(aPop/population) * 100} thickness={50} color='success' variant="soft" sx={{ '--LinearProgress-radius': '10px' }}>
            <Typography sx={{ mixBlendMode: 'hard-light' }} fontWeight="xl" level='h3' textColor="common.black" style={courierFontStyle}>
              {aPop} / {population}
            </Typography>
          </LinearProgress>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "2%"}}>
            <Card variant="outlined" className="Card" sx={{ border: "12px ridge", borderColor: '#763a00' }}>
                {card}
            </Card>

        </Box>
    )
}