import * as React from 'react';
import './TabSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider, Button, Stack } from '@mui/material';
import RealmsSection from './RealmsSection';
import Upgrade1Section from './Upgrade1Section';
import Upgrade2Section from './Upgrade2Section';
import AllocationSection from './AllocationSection';
import CraftSection from './CraftSection';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PopulationSection(props: any) {

  var population = props.population;
  var setPopulation = props.setPopulation;
  const areas = props.areas;
  const setAreas = props.setAreas;
  var area = props.area;
  var setArea = props.setArea;
  var allocated = props.allocated;
  var setAllocated = props.setAllocated;
  var aPop = props.aPop;
  var setAPop = props.setAPop;

  const resources = props.resources;
  const setResources = props.setResources;

  const items = props.items;
  const setItems = props.setItems;

  const upgrades = props.upgrades;
  const setUpgrades = props.setUpgrades;

  const authenticated = props.authenticated;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
    const theme = createTheme({
        palette: {
        primary: {
            // Green.
            main: '#11cb5f',
        },
        secondary: {
            // White
            main: '#FFFFFF',
        },

        },
    });

  const card = (
    <React.Fragment>
      <CardContent>
        <Box>
          <Tabs value={value} centered onChange={handleChange} textColor='primary' indicatorColor='primary' >
              <Tab label="Realms" {...a11yProps(0)}/>
              <Tab label="Craft" {...a11yProps(1)}/>
              <Tab label="Upgrades" {...a11yProps(2)}/>
              <Tab label="Allocate" {...a11yProps(3)}/>
              <Button sx={{ position: 'absolute', marginLeft: '80%', marginTop: '1%', visibility: aPop === population ? 'hidden' : "visible" }} variant='contained' disabled={aPop === population ? true : false} onClick={() => {
                setAllocated([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setAPop(population);
              }}>
                Return
              </Button>
          </Tabs>
        </Box>
        <Typography variant="h4">
          {value === 0 ? <RealmsSection areas={areas} area={area} setArea={setArea} /> : 
           value === 1 ? <CraftSection resources={resources} setResources={setResources} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} /> :
           value === 2 ? (area === 1 ? <Upgrade1Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 2 ? <Upgrade2Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : "") :
           <AllocationSection areas={areas} area={area} allocated={allocated} setAllocated={setAllocated} population={population} aPop={aPop} setAPop={setAPop} items={items} authenticated={authenticated} />}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ padding: "2%"}}>
            <Card variant="outlined" className="tab" sx={{ border: 5, borderColor: '#32cd32', borderRadius: '16px' }}>
                {card}
            </Card>

        </Box>
        </ThemeProvider>
    )
}