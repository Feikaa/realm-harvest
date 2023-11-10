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

const courierFontStyle = {
  fontFamily: 'Kurale',
};

export default function PopulationSection(props: any) {

  const resources = props.resources;
  const setResources = props.setResources;

  const items = props.items;
  const setItems = props.setItems;

  const population = props.population;
  const setPopulation = props.setPopulation;
  const allocated = props.allocated;
  const setAllocated = props.setAllocated;
  var area = props.area;
  var upgrades = props.upgrades;
  const p = props.p;
  const t = props.t;
  const setT = props.setT;
  const [harvest, setHarvest] = useState(0);
  const trap = props.trap;
  const setTrap = props.setTrap;
  const aPop = props.aPop;
  const setAPop = props.setAPop;

  var areas = [Forest, Tundra, Mountain, Plains, Desert, Ruins, Ocean, Volcano, EnchantedGrove, SkyIsland];
  const harvestAreas = [1, 2, 3, 4, 5, 7, 9];
  const secondaryAreas = [1, 3, 4, 6, 7, 8];

  // type = what kind of resource
  const handleHarvest = (area: number, type: number, increase: number, boost: number, mode: string) => {
    // If manually clicking, just increase harvest count
    if (mode !== "auto" && harvest + 1 <= 3) {
      setHarvest((harvest: any) => harvest + 1 + boost);
    }
    // When next click is full, or on auto, get resources
    else if (harvest + 1 > 3 || harvest > 3 || mode === "auto") {
      if (mode !== "auto") {
        setHarvest(0);
      }
      setResources((prev: any) => {
        const newResources = [...prev];
        const resource = newResources[area].resources[type];
  
        const newQuantity = resource.quantity + increase;
  
        resource.gain += increase;
        resource.quantity = newQuantity;
  
        return newResources;
      });
      // Roll for 2ndary resource
      if (Math.floor(Math.random() * 10) <= 2) {
        setResources((prev: any) => {
          const newResources = [...prev];
          const resource = newResources[area].resources[1];
    
          const newQuantity = resource.quantity + increase;
    
          resource.gain += increase;
          resource.quantity = newQuantity;
    
          return newResources;
        });
      }
      // If area is Desert or Volcano, roll for 3rd resource
      if ((area === 5 || area === 7) && Math.floor(Math.random() * 10) <= 1) {
        setResources((prev: any) => {
          const newResources = [...prev];
          const resource = newResources[area].resources[2];
    
          const newQuantity = resource.quantity + increase;
    
          resource.gain += increase;
          resource.quantity = newQuantity;
    
          return newResources;
        })
      }
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
    if (p === 100) {
      for (let i = 0; i < allocated.length; i++) {
        if (allocated[i] > 0) {
          for (let j = 0; j < resources[i].resources.length; j++) {
            handleHarvest(i, j, Math.floor((allocated[i] / population) * (1/(j+1)) *  allocated[i]/(j+1)), 0, "auto");
          }
          // console.log("area: " + i + " " + "pop:" + population)
          if (i === 4 || i === 7) { // Desert and Volcano has a 40% chance of reducing population by 10% (rounded up) on auto
            if (population > 10 && Math.floor(Math.random() * 10) <= 10) {
              // console.log(allocated);
              var reduce = population - Math.ceil(allocated[i] * 0.1) < 10 ? population - 10 : Math.ceil(allocated[i] * 0.1) <= allocated[i] ? Math.ceil(allocated[i] * 0.1) : allocated[i];
              if (allocated[4] + allocated[7] === 11) {

              }
              setAllocated((list: any) => {
                return [...list.slice(0, i), list[i] - reduce, ...list.slice(i + 1)]
              })
              setPopulation((pop: any) => pop - reduce);
              
            }
          }
        }
      }
    }
  }, [p])

  // If population is at most 11, you cannot allocate to dangerous areas since that would make the total population go below 10
  useEffect(() => {
    if ((allocated[4] + allocated[7] > 0) && population <= 11) {
      setAPop((apop: any) => apop + allocated[4] + allocated[7]);
      setAllocated((list: any) => {
        return [...list.slice(0,4), 0, ...list.slice(5,7), 0, list.slice(8)]
      });
    }
  }, [population])

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div" style={courierFontStyle}>
          Harvest
        </Typography>
        <Typography style={courierFontStyle}>
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
              {
                upgrades[0].upgrades[1].purchased ?
                <Button variant="contained" color="success" disableRipple onClick={() => {handleHarvest(area - 1, 0, 1, 1, "")}} style={courierFontStyle}>
                  {area === 3 ? <IconSickle /> : area === 2 ? <IconPickaxe /> : area === 1 ? <IconAxe /> : <IconHandBackFist />}&nbsp;&nbsp;Harvest
                </Button>
              :
                <Button variant="contained" color="success" disableRipple onClick={() => {handleHarvest(area - 1, 0, 1, 0, "")}} style={courierFontStyle}>
                  {<IconHandBackFist />}&nbsp;&nbsp;Harvest
                </Button>
              }
            </Box>
            {harvestAreas.includes(area) ?
            <Box>
              <BorderLinearProgress value={t} variant='determinate' />
              <Button variant="contained" color="success" disableRipple disabled={items[0].quantity > 0 && trap === false ? false : t === 100 ? false : true} onClick={t < 100 ? () => {handleTrap(0)} : () => {
                handleHarvest(0, 2, 2 + Math.floor(Math.random() * 4), 0, "auto");
                setTrap(false);
                setT(0);
              }} style={courierFontStyle}>
                {t < 100 ? <React.Fragment>Set Trap(1x <img src={IconTrap} height="48px" width="48px" />)</React.Fragment> : <React.Fragment><IconHandBackFist />&nbsp;&nbsp;Collect</React.Fragment>}
              </Button>
            </Box>
            : ""}
          </Stack>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "1%"}}>
            <Card variant="outlined" className="Card" sx={{ border: "12px ridge", borderColor: '#763a00' }}>
                {card}
            </Card>

        </Box>
    )
}