import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Tree from '../images/tree.png';
import IconHandBackFist from '../icons/IconHandBackFist';
import IconAxe from '../icons/IconAxe';
import IconPickaxe from '../icons/IconPickaxe';
import IconSickle from '../icons/IconSickle';

export default function PopulationSection(props: any) {

  var resources = [props.logs, props.ores, props.wheats];
  var setResources = [props.setLogs, props.setOres, props.setWheats];

  var population = props.population;
  var setPopulation = props.setPopulation;
  var area = props.area;
  var axe = props.axe;
  var progress = 0;
  var [p, setP] = useState(progress);
  var aPop = props.aPop;

  var interval = useRef<any>();

  const handleHarvest = (area: number) => {
    setResources[area](resources[area] + 1);
  } 

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 18,
    borderRadius: 10,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 10,
      backgroundColor: '#308fe8',
    },
  }));

  useEffect(() => {
    if (interval.current && aPop === population) {
      clearInterval(interval.current);
      interval.current = null;
      progress = 0;
      setP(0);
    }
    else if (!interval.current && aPop < population) {
      interval.current = setInterval(() => {
        if (progress < 100) {
          progress += 20;
        } else {
          progress = 0;
        }
        setP(progress);
      }, 500);
    }
  }, [aPop])

  // useEffect(() => {
  //   if (aPop === population) {
  //     clearInterval(interval)
  //     interval = null;
  //   } else {
  //     setProgress(100);
  //   }
  // }, [aPop])

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div">
          Harvest
        </Typography>
        <Typography>
          {aPop === population ? "Idle" : "Auto"}
          <BorderLinearProgress variant='determinate' value={p} sx={{ maxWidth: '25%' }} style={{ marginLeft: "37.5%"}} />
          {aPop === population ? "" : p < 40 ? "Travelling..." : p < 80 ? "Collecting..." : "Returning..."}
        </Typography>
        <Typography>
            <br />
            <img src={Tree} width="512px" height="512px"></img>
        </Typography>
        <Typography variant="h4">
          <br />
          <Button variant="contained" color="success" disableRipple onClick={() => {handleHarvest(area - 1)}}>
            {area === 3 ? <IconSickle /> : area === 2 ? <IconPickaxe /> : axe ? <IconAxe /> : <IconHandBackFist />}&nbsp;&nbsp;Harvest
          </Button>
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