import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardActions, CardContent, Button, Typography, LinearProgress, linearProgressClasses, styled, Stack } from '@mui/material';
import Forest from '../images/forest.png';
import Mountain from '../images/mountains.png';
import Plains from '../images/plains.png';
import Ocean from '../images/ocean.png';
import Desert from '../images/desert.png';
import Tundra from '../images/tundra.png';
import Volcano from '../images/volcano.png';
import Ruins from '../images/ruins.png';
import SkyIsland from '../images/sky_island.png';
import EnchantedGrove from '../images/enchanted_grove.png';
import IconHandBackFist from '../icons/IconHandBackFist';
import IconAxe from '../icons/IconAxe';
import IconPickaxe from '../icons/IconPickaxe';
import IconSickle from '../icons/IconSickle';
import IconTrap from '../images/trap.png';

export default function PopulationSection(props: any) {

  const resources = props.resources;
  const setResources = props.setResources;

  const items = props.items;
  const setItems = props.setItems;

  var population = props.population;
  var setPopulation = props.setPopulation;
  var area = props.area;
  var axe = props.axe;
  var progress = 0;
  var tProgress = 0;
  const [p, setP] = useState(progress);
  const [t, setT] = useState(tProgress);
  const [harvest, setHarvest] = useState(0);
  const [trap, setTrap] = useState(false);
  var aPop = props.aPop;

  var areas = [Forest, Tundra, Mountain, Plains, Desert, Ruins, Ocean, Volcano, EnchantedGrove, SkyIsland];

  var allocated = props.allocated;

  var interval = useRef<any>();
  var tInterval = useRef<any>();

  // type = what kind of resource
  const handleHarvest = (area: number, type: number, increase: number, mode: string) => {
    if (harvest >= 4 || mode === "auto") {
      if (mode != "auto") {
        setHarvest(1);
      }
      setResources((prev: any) => {
        const newResources = [...prev];
        const resource = newResources[area].resources[type];
  
        const newQuantity = resource.quantity + increase;
  
        resource.gain += increase;
        resource.quantity = newQuantity;
  
        return newResources;
      });
      if (type === 0 && Math.floor(Math.random() * 10) <= 2) {
        setResources((prev: any) => {
          const newResources = [...prev];
          const resource = newResources[area].resources[1];
    
          const newQuantity = resource.quantity + increase;
    
          resource.gain += increase;
          resource.quantity = newQuantity;
    
          return newResources;
        });
      }
    } else {
      setHarvest((harvest) => harvest + 1);
    }
  } 

  const handleTrap = (item: number) => {
    setItems((prev: any) => {
      const newItems = [...prev];
      const tempItem = newItems[item];

      const newQuantity = tempItem.quantity - 1;

      tempItem.quantity = newQuantity;

      return newItems;
    })
    setTrap(true);
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
          for (let j = 0; j < resources[i].resources.length; j++) {
            handleHarvest(i, j, Math.floor((allocated[i] / population) * (1/(j+1)) *  allocated[i]), "auto");
          }
        }
      }
    }
  }, [p])

  useEffect(() => {
    if (trap) {
      tInterval.current = setInterval(() => {
        if (tProgress < 100) {
          tProgress += 20;
          setT(tProgress);
        } else {
          clearInterval(tInterval.current);
          tInterval.current = null;
        }
      }, 1000)
    }
  }, [trap])

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
            <img src={areas[area - 1]} width="1024px" height="512px"></img>
        </Typography>
        <Typography variant="h4">
          <br />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Box>
              <Box sx={{ paddingBottom: '1%' }}>
                <BorderLinearProgress value={(harvest/4) * 100} variant='determinate' />
              </Box>
              <Button variant="contained" color="success" disableRipple onClick={() => {handleHarvest(area - 1, 0, 1, "")}}>
                {area === 3 ? <IconSickle /> : area === 2 ? <IconPickaxe /> : axe ? <IconAxe /> : <IconHandBackFist />}&nbsp;&nbsp;Harvest
              </Button>
            </Box>
            <Box>
              <BorderLinearProgress value={t} variant='determinate' />
              <Button variant="contained" color="success" disableRipple disabled={items[0].quantity > 0 && trap === false ? false : t === 100 ? false : true} onClick={t < 100 ? () => {handleTrap(0)} : () => {
                handleHarvest(0, 2, 2 + Math.floor(Math.random() * 4), "auto");
                tProgress = 0;
                setT(tProgress);
                setTrap(false);
              }}>
                {t < 100 ? <React.Fragment>Set Trap(1x <img src={IconTrap} height="48px" width="48px" />)</React.Fragment> : <React.Fragment><IconHandBackFist />&nbsp;&nbsp;Collect</React.Fragment>}
              </Button>
            </Box>
          </Stack>
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