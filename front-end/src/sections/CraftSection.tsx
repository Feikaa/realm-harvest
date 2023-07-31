import * as React from 'react';
import Paper from '@mui/material/Paper';
import Log from '../images/log.png';
import Berries from '../images/berry.png';
import Fur from '../images/fur.png';
import Ore from '../images/ore.png';
import Wheat from '../images/wheat.png';
import Herbs from '../images/herb.png';
import Meat from '../images/meat.png';
import { Box, Button, Grid, List, Typography, Stack, CardContent, Card } from '@mui/material';
import IconTrap from '../images/trap.png';
import IconJam from '../images/jam.png';
import IconWarm from '../images/warm.png';
import IconStew from '../images/stew.png';

export default function CraftSection(props: any) {

  const resources = props.resources;
  const setResources = props.setResources;

  const items = props.items;
  const setItems = props.setItems;

  const upgrades = props.upgrades;
  const setUpgrades = props.setUpgrades;

  const craftItem = (type: number, material: number[][], costs: number[], amount: number) => {
    setItems((prev: any) => {
        const newItems = [...prev];
        const tempItem = newItems[type];
    
        const newQuantity = tempItem.quantity + amount;
    
        tempItem.quantity = newQuantity;
    
        return newItems;
        });
        for (let i = 0; i < material.length; i++) {
            setResources((prev: any) => {
                const newResources = [...prev];
                const resource = newResources[material[i][0]].resources[material[i][1]];
            
                const newQuantity = resource.quantity - (costs[i] * amount);
            
                resource.gain -= (costs[i] * amount);
                resource.quantity = newQuantity;
            
                return newResources;
                })
        }
  }

  return (
    <Paper style={{ height: 672, width: '100%', overflow: 'auto' }}>
        <Box sx={{ padding: "2%" }}>
            <Card sx={{ backgroundColor: "#D3D3D3", borderRadius: '16px', marginBottom: '8px' }}>
            <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Stack direction="row" spacing={1} justifyContent='space-between'>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                    Animal Trap
                    <img src={IconTrap} alt="Trap Icon" width="64px" height="64px" />x{items[0].quantity}&nbsp;&nbsp;
                    <Box alignItems="center" justifyContent="center">
                        Used to collect animal fur
                    </Box>
                    </Typography>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                            <React.Fragment>
                            <Stack direction="row">
                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Log} alt="Log" height="48" width="48"></img>
                            <br />
                            20
                            </Box>

                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Berries} alt="Berries" height="48" width="48"></img>
                            <br />
                            1
                            </Box>
                            </Stack>
                            </React.Fragment>
                        </Grid>
                    </Typography>
                    <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
                    <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' }}>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(0, [[0,0], [0,1]], [20, 1], 1)}} disabled={resources[0].resources[0].quantity >= 20 ? resources[0].resources[1].quantity >= 1 ? false : true : true }>
                            +1
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(0, [[0,0], [0,1]], [20, 1], 10)}} disabled={resources[0].resources[0].quantity >= 20 * 10 ? resources[0].resources[1].quantity >= 1 * 10 ? false : true : true}>
                            +10
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(0, [[0,0], [0,1]], [20, 1], Math.min(Math.floor(resources[0].resources[0].quantity / 20), resources[0].resources[1].quantity))}} disabled={resources[0].resources[0].quantity >= 20 ? resources[0].resources[1].quantity >= 1 ? false : true : true}>
                            Max (+{Math.min(Math.floor(resources[0].resources[0].quantity / 20), resources[0].resources[1].quantity)})
                        </Button>
                    </Typography>
                    </Stack>
                    </Stack>
            </CardContent>
            </Card>

            {upgrades[0].upgrades[0].purchased ?
            <Card sx={{ backgroundColor: "#D3D3D3", borderRadius: '16px', marginBottom: '8px' }}>
            <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Stack direction="row" spacing={1} justifyContent='space-between'>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                    Berry Delight
                    <img src={IconJam} alt="Berry Delight Icon" width="64px" height="64px" />x{items[1].quantity}&nbsp;&nbsp;
                    <Box alignItems="center" justifyContent="center">
                        Grants low chance of repopulation
                    </Box>
                    </Typography>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                            <React.Fragment>
                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Berries} alt="Berries" height="48" width="48"></img>
                            <br />
                            5
                            </Box>
                            </React.Fragment>
                        </Grid>
                    </Typography>
                    <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
                    <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' }}>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(1, [[0,1]], [5], 1)}} disabled={resources[0].resources[1].quantity < 5 ? true : false}>
                            +1
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(1, [[0,1]], [5], 10)}} disabled={resources[0].resources[1].quantity < 5 * 10 ? true : false}>
                            +10
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(1, [[0,1]], [5], Math.floor(resources[0].resources[1].quantity / 5))}} disabled={resources[0].resources[1].quantity < 5 ? true : false}>
                            Max (+{Math.floor(resources[0].resources[1].quantity / 5)})
                        </Button>
                    </Typography>
                    </Stack>
                    </Stack>
            </CardContent>
            </Card>
            : ""}

            {upgrades[0].upgrades[2].purchased ?
            <Card sx={{ backgroundColor: "#D3D3D3", borderRadius: '16px', marginBottom: '8px' }}>
            <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Stack direction="row" spacing={1} justifyContent='space-between'>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                    Warm Clothing
                    <img src={IconWarm} alt="Warm Clothing Icon" width="64px" height="64px" />x{items[3].quantity}&nbsp;&nbsp;
                    <Box alignItems="center" justifyContent="center">
                        Allows your population to enter cold areas
                    </Box>
                    </Typography>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                            <React.Fragment>
                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Fur} alt="Fur" height="48" width="48"></img>
                            <br />
                            10
                            </Box>
                            </React.Fragment>
                        </Grid>
                    </Typography>
                    <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
                    <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' }}>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(3, [[0,2]], [10], 1)}} disabled={resources[0].resources[2].quantity < 10 ? true : false}>
                            +1
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(3, [[0,2]], [10], 10)}} disabled={resources[0].resources[2].quantity < 10 * 10 ? true : false}>
                            +10
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(3, [[0,2]], [10], Math.floor(resources[0].resources[2].quantity / 10))}} disabled={resources[0].resources[2].quantity < 10 ? true : false}>
                            Max (+{Math.floor(resources[0].resources[2].quantity / 10)})
                        </Button>
                    </Typography>
                    </Stack>
                    </Stack>
            </CardContent>
            </Card>
            : ""}

            {upgrades[0].upgrades[0].purchased ? 
            <Card sx={{ backgroundColor: "#D3D3D3", borderRadius: '16px', marginBottom: '8px' }}>
            <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Stack direction="row" spacing={1} justifyContent='space-between'>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                    Elderwood Stew
                    <img src={IconStew} alt="Berry Delight Icon" width="64px" height="64px" />x{items[2].quantity}&nbsp;&nbsp;
                    <Box alignItems="center" justifyContent="center">
                        Grants high chance of repopulation
                    </Box>
                    </Typography>
                    <Typography variant="button" component="div" color={"#000000"} display="flex" alignItems="center">
                        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="right">
                            <React.Fragment>
                            <Stack direction="row">
                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Wheat} alt="Wheat" height="48" width="48"></img>
                            <br />
                            10
                            </Box>

                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Herbs} alt="herbs" height="48" width="48"></img>
                            <br />
                            5
                            </Box>

                            <Box sx={{border: 1, width: "50px"}}>
                            <img src={Meat} alt="meat" height="48" width="48"></img>
                            <br />
                            2
                            </Box>
                            </Stack>
                            </React.Fragment>
                        </Grid>
                    </Typography>
                    <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
                    <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' }}>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(2, [[3,0], [3,1], [3,2]], [10, 5, 2], 1)}} disabled={resources[3].resources[0].quantity >= 10 ? resources[3].resources[1].quantity >= 5 ? resources[3].resources[2].quantity >= 2 ? false : true : true : true}>
                            +1
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(2, [[3,0], [3,1], [3,2]], [10, 5, 2], 10)}} disabled={resources[3].resources[0].quantity >= 10 ? resources[3].resources[1].quantity >= 5 ? resources[3].resources[2].quantity >= 2 ? false : true : true : true}>
                            +10
                        </Button>
                        <Button variant='contained' color='secondary' onClick={() => {craftItem(2, [[3,0], [3,1], [3,2]], [10, 5, 2], Math.min(Math.floor(resources[3].resources[0].quantity / 10), Math.floor(resources[3].resources[1].quantity / 5), Math.floor(resources[3].resources[2].quantity / 2)))}} disabled={resources[3].resources[0].quantity >= 10 ? resources[3].resources[1].quantity >= 5 ? resources[3].resources[2].quantity >= 2 ? false : true : true : true}>
                            Max (+{Math.min(Math.floor(resources[3].resources[0].quantity / 10), Math.floor(resources[3].resources[1].quantity / 5), Math.floor(resources[3].resources[2].quantity / 2))})
                        </Button>
                    </Typography>
                    </Stack>
                    </Stack>
            </CardContent>
            </Card>
            : ""}
        </Box>
    </Paper>
  );
}