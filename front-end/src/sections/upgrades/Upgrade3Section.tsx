import * as React from 'react';
import Paper from '@mui/material/Paper';
import Log from '../../images/log.png';
import Fur from '../../images/fur.png';
import ThickFur from '../../images/thick_fur.png';
import Coal from '../../images/coal.png';
import Ore from '../../images/ore.png';
import Iron from '../../images/iron_bar.png';
import Wheat from '../../images/wheat.png';
import { Box, Button, Grid, List } from '@mui/material';
import Axe from '../../images/axe.png';
import Pickaxe from '../../images/pickaxe.png';
import Shovel from '../../images/shovel.png';
import Furnace from '../../images/furnace.png';

const courierFontStyle = {
  fontFamily: 'Kurale, monospace',
};

export default function Upgrade3Section(props: any) {

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

      {upgrades[2].upgrades[0].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[2].upgrades[0];
        
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
        
              const newQuantity = resource.quantity - 20;
        
              resource.gain -= 20;
              resource.quantity = newQuantity;
        
              return newResources;
            });
            setResources((prev: any) => {
              const newResources = [...prev];
              const resource = newResources[2].resources[0];
        
              const newQuantity = resource.quantity - 100;
        
              resource.gain -= 100;
              resource.quantity = newQuantity;
        
              return newResources;
            })
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 50 ? false : true} style={courierFontStyle}>
            Blast Furnace
            <img src={Furnace} alt="furnace" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Unlocks iron crafting
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
                  <img src={ThickFur} alt="ThickFur" height="48" width="48"></img>
                  <br />
                  20
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Coal} alt="Coal" height="48" width="48"></img>
                  <br />
                  100
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>}

      {upgrades[2].upgrades[1].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[2].upgrades[1];
        
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
            });
            setItems((prev: any) => {
              const newItems = [...prev];
              const tempItem = newItems[4];
        
              const newQuantity = tempItem.quantity - 10;
        
              tempItem.quantity = newQuantity;
        
              return newItems;
            })
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 50 ? items[4].quantity >= 10 ? false : true : true} style={courierFontStyle}>
            Axe
            <img src={Axe} alt="axe" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Makes harvesting faster in the Forest, Plains and Enchanted Grove
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  <br />
                  50
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Iron} alt="Iron" height="48" width="48"></img>
                  <br />
                  10
                </Box>
                </React.Fragment>
            </Grid>
          </Button>
        </Box>}

        {upgrades[2].upgrades[2].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[2].upgrades[2];
        
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
            });
            setItems((prev: any) => {
              const newItems = [...prev];
              const tempItem = newItems[4];
        
              const newQuantity = tempItem.quantity - 10;
        
              tempItem.quantity = newQuantity;
        
              return newItems;
            })
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 50 ? items[4].quantity >= 10 ? false : true : true} style={courierFontStyle}>
            Shovel
            <img src={Shovel} alt="axe" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Makes harvesting faster in the Tundra, Desert and Ocean
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  <br />
                  50
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Iron} alt="Iron" height="48" width="48"></img>
                  <br />
                  10
                </Box>
                </React.Fragment>
                
            </Grid>
          </Button>
        </Box>}

        {upgrades[2].upgrades[3].purchased ? "" :
        <Box sx={{paddingTop: "1%" }}>
          <Button onClick={() => {
            setUpgrades((prev: any) => {
              const newUpgrades = [...prev];
              const tempUpgrades = newUpgrades[2].upgrades[3];
        
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
            });
            setItems((prev: any) => {
              const newItems = [...prev];
              const tempItem = newItems[4];
        
              const newQuantity = tempItem.quantity - 10;
        
              tempItem.quantity = newQuantity;
        
              return newItems;
            })
          }}
          variant="contained" sx={{ width: "80%" }}
          color='info'
          disabled={resources[0].resources[0].quantity >= 50 ? items[4].quantity >= 10 ? false : true : true} style={courierFontStyle}>
            Pickaxe
            <img src={Pickaxe} alt="axe" width="64" height='64' />&nbsp;&nbsp;
            <Box alignItems="center" justifyContent="center">
              Makes harvesting faster in the Mountains, Ruins and Volcano
            </Box>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Log} alt="Log" height="48" width="48"></img>
                  <br />
                  50
                </Box>
                </React.Fragment>

                <React.Fragment>
                <Box sx={{border: 1, width: "70px"}}>
                  <img src={Iron} alt="Iron" height="48" width="48"></img>
                  <br />
                  10
                </Box>
                </React.Fragment>
                
            </Grid>
          </Button>
        </Box>}


      </List>
    </Paper>
  );
}