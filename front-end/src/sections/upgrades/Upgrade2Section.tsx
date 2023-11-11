import * as React from 'react';
import Paper from '@mui/material/Paper';
import Log from '../../images/log.png';
import Berry from '../../images/berry.png';
import Fur from '../../images/fur.png';
import Ore from '../../images/ore.png';
import Wheat from '../../images/wheat.png';
import Ice from '../../images/ice.png';
import ThickFur from '../../images/thick_fur.png';
import Landmarker from '../../images/landmarker.png';
import Gear from '../../images/gear.png';
import { Box, Button, Grid, List } from '@mui/material';

const courierFontStyle = {
  fontFamily: 'Kurale, monospace',
};

export default function Upgrade2Section(props: any) {

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

        {upgrades[1].upgrades[0].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[1].upgrades[0];
        
              tempUpgrades.purchased = true;
        
              return newUpgrades;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[0].resources[0];
        
              const newQuantity = resource.quantity - 100;
        
              resource.gain -= 100;
              resource.quantity = newQuantity;
        
              return newResources;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[1].resources[2];
        
              const newQuantity = resource.quantity - 50;
        
              resource.gain -= 50;
              resource.quantity = newQuantity;
        
              return newResources;
            });
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 100 ? resources[1].resources[1].quantity >= 50 ? resources[1].resources[2].quantity >= 20 ? false : true : true : true} style={courierFontStyle}>
            Landmarkers
            <img src={Landmarker} alt="Flag" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Slightly speeds up your population's harvesting efficiency
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  <br />
                  100
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Ice} alt="Ice" height="48" width="48"></img>
                  <br />
                  50
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={ThickFur} alt="ThickFur" height="48" width="48"></img>
                  <br />
                  20
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>}

        {upgrades[1].upgrades[1].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[1].upgrades[1];
        
              tempUpgrades.purchased = true;
        
              return newUpgrades;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[0].resources[0];
        
              const newQuantity = resource.quantity - 10;
        
              resource.gain -= 10;
              resource.quantity = newQuantity;
        
              return newResources;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[0].resources[1];
        
              const newQuantity = resource.quantity - 20;
        
              resource.gain -= 20;
              resource.quantity = newQuantity;
        
              return newResources;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[0].resources[2];
        
              const newQuantity = resource.quantity - 20;
        
              resource.gain -= 20;
              resource.quantity = newQuantity;
        
              return newResources;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[1].resources[2];
        
              const newQuantity = resource.quantity - 20;
        
              resource.gain -= 20;
              resource.quantity = newQuantity;
        
              return newResources;
            });
            setAreas(["forest", "tundra", "mountains"]);
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 10 ? resources[0].resources[1].quantity >= 20 ? resources[0].resources[2].quantity >= 20 ? resources[1].resources[2].quantity >= 20 ? false : true : true : true : true} style={courierFontStyle}>
            Mountain Gear
            <img src={Gear} alt="Flag" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Allows you to enter mountainous areas
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  <br />
                  10
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Berry} alt="Berry" height="48" width="48"></img>
                  <br />
                  20
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Fur} alt="Fur" height="48" width="48"></img>
                  <br />
                  20
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={ThickFur} alt="ThickFur" height="48" width="48"></img>
                  <br />
                  20
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>}


      </List>
    </Paper>
  );
}