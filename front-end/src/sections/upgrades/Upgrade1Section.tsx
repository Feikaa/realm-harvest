import * as React from 'react';
import Paper from '@mui/material/Paper';
import Log from '../../images/log.png';
import Fur from '../../images/fur.png';
import Ore from '../../images/ore.png';
import Wheat from '../../images/wheat.png';
import { Box, Button, Grid, List } from '@mui/material';
import Firepit from '../../images/firepit.png';
import Warm from '../../images/warm.png';

export default function Upgrade1Section(props: any) {

  var population = props.population;
  var setPopulation = props.setPopulation;
  var aPop = props.aPop;
  var setAPop = props.setAPop;

  const areas = props.areas;
  const setAreas = props.setAreas;

  const resources = props.resources;
  const setResources = props.setResources;

  const items = props.items;
  const setItems = props.setItems;

  const upgrades = props.upgrades;
  const setUpgrades = props.setUpgrades;

  return (
    <Paper style={{ height: 672, width: '100%', overflow: 'auto' }}>
      <List>

        {upgrades[0].upgrades[0].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[0].upgrades[0];
        
              tempUpgrades.purchased = true;
        
              return newUpgrades;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[0].resources[0];
        
              const newQuantity = resource.quantity - 50;
        
              resource.gain -= 50;
              resource.quantity = newQuantity;
        
              return newResources;
            })
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 50 ? false : true}>
            Firepit
            <img src={Firepit} alt="Home" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Allows you to make food to help grow your population
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  <br />
                  50
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>}

        {upgrades[0].upgrades[2].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[0].upgrades[2];
        
              tempUpgrades.purchased = true;
        
              return newUpgrades;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[0].resources[2];
        
              const newQuantity = resource.quantity - 10;
        
              resource.gain -= 10;
              resource.quantity = newQuantity;
        
              return newResources;
            })
            setAreas(["forest", "tundra"]);
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 50 ? false : true}>
            Warm Clothing
            <img src={Warm} alt="warm" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Allows you to enter colder areas
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Fur} alt="Fur" height="48" width="48"></img>
                  <br />
                  10
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>}

        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setPopulation(population + 10);
            setAPop(aPop + 10);
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'>
            Increase Population
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  200
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>
      </List>
    </Paper>
  );
}