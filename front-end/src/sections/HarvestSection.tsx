import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, LinearProgress, linearProgressClasses, styled } from '@mui/material';
import Tree from '../images/tree.png';
import IconHandBackFist from '../icons/IconHandBackFist';
import IconAxe from '../icons/IconAxe';
import IconPickaxe from '../icons/IconPickaxe';
import IconSickle from '../icons/IconSickle';

export default function PopulationSection(props: any) {

  var resources = [props.logs, props.ores, props.wheats, props.waters, props.fires, props.ices, props.volcanos, props.runes, props.crystals, props.essences];
  var setResources = [props.setLogs, props.setOres, props.setWheats, props.setWaters, props.setFires, props.setIces, props.setVolcanos, props.setRunes, props.setCrystals, props.setEssences];

  var population = props.population;
  var setPopulation = props.setPopulation;
  var area = props.area;
  var axe = props.axe;
  var progress = 0;
  var [p, setP] = useState(progress);
  var aPop = props.aPop;
  var gains0 = props.gains0;
  var setGains0 = props.setGains0;
  var gains1 = props.gains1;
  var setGains1 = props.setGains1;
  var gains2 = props.gains2;
  var setGains2 = props.setGains2;
  var gains3 = props.gains3;
  var setGains3 = props.setGains3;
  var gains4 = props.gains4;
  var setGains4 = props.setGains4;
  var gains5 = props.gains5;
  var setGains5 = props.setGains5;
  var gains6 = props.gains6;
  var setGains6 = props.setGains6;
  var gains7 = props.gains7;
  var setGains7 = props.setGains7;
  var gains8 = props.gains8;
  var setGains8 = props.setGains8;
  var gains9 = props.gains9;
  var setGains9 = props.setGains9;
  var gains = [gains0, gains1, gains2, gains3, gains4, gains5, gains6, gains7, gains8, gains9];
  var setGains = [setGains0, setGains1, setGains2, setGains3, setGains4, setGains5, setGains6, setGains7, setGains8, setGains9];

  var allocated = props.allocated;

  var interval = useRef<any>();

  const handleHarvest = (area: number) => {
    setResources[area]((resource: any) => resource + 1);
    setGains[area]((gain: any) => gain + 1)
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

  useEffect(() => {
    if (p == 100) {
      for (let i = 0; i < allocated.length; i++) {
        if (allocated[i] > 0) {
          handleHarvest(i);
        }
      }
    }
  }, [p])

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