import * as React from 'react';
import './TabSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider, Button, Stack } from '@mui/material';
import RealmsSection from './RealmsSection';
import Upgrade1Section from './upgrades/Upgrade1Section';
import Upgrade2Section from './upgrades/Upgrade2Section';
import Upgrade3Section from './upgrades/Upgrade3Section';
import Upgrade4Section from './upgrades/Upgrade4Section';
import Upgrade5Section from './upgrades/Upgrade5Section';
import Upgrade6Section from './upgrades/Upgrade6Section';
import Upgrade7Section from './upgrades/Upgrade7Section';
import Upgrade8Section from './upgrades/Upgrade8Section';
import Upgrade9Section from './upgrades/Upgrade9Section';
import Upgrade10Section from './upgrades/Upgrade9Section';
import AllocationSection from './AllocationSection';
import CraftSection from './CraftSection';

const courierFontStyle = {
  fontFamily: 'Kurale, monospace',
};

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
  
  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
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
      forest: createColor('#006400'),
      tundra: createColor('#32476b'),
      mountains: createColor('#313232'),
      plains: createColor('#90ee90'),
      desert: createColor('#ffffe0'),
      ruins: createColor('#556b2f'),
      ocean: createColor('#0000ff'),
      volcano: createColor('#8b0000'),
      enchantedgrove: createColor('#800080'),
      skyislands: createColor('#00bfff'),
      },
  });

  const card = (
    <React.Fragment>
      <CardContent>
        <Box>
          <Tabs value={value} centered onChange={handleChange} textColor='primary' indicatorColor='primary' >
              <Tab style={courierFontStyle} label="Realms" {...a11yProps(0)}/>
              <Tab style={courierFontStyle} label="Craft" {...a11yProps(1)}/>
              <Tab style={courierFontStyle} label="Upgrades" {...a11yProps(2)}/>
              <Tab style={courierFontStyle} label="Allocate" {...a11yProps(3)}/>
              <Button sx={{ position: 'absolute', marginLeft: '80%', marginTop: '1%', visibility: aPop === population ? 'hidden' : "visible" }} variant='contained' disabled={aPop === population ? true : false} onClick={() => {
                setAllocated([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                setAPop(population);
              }} style={courierFontStyle}>
                Return
              </Button>
          </Tabs>
        </Box>
        <Typography variant="h4" style={courierFontStyle}>
          {value === 0 ? <RealmsSection areas={areas} area={area} setArea={setArea} /> : 
           value === 1 ? <CraftSection resources={resources} setResources={setResources} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} /> :
           value === 2 ? (area === 1 ? <Upgrade1Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 2 ? <Upgrade2Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 3 ? <Upgrade3Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 4 ? <Upgrade4Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 5 ? <Upgrade5Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 6 ? <Upgrade6Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 7 ? <Upgrade7Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 8 ? <Upgrade8Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 9 ? <Upgrade9Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : area === 10 ? <Upgrade10Section resources={resources} setResources={setResources} population={population} setPopulation={setPopulation} aPop={aPop} setAPop={setAPop} areas={areas} setAreas={setAreas} items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
           : "") :
           <AllocationSection areas={areas} area={area} allocated={allocated} setAllocated={setAllocated} population={population} aPop={aPop} setAPop={setAPop} items={items} authenticated={authenticated} />}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ padding: "2%"}}>
            <Card variant="outlined" className="tab" sx={{ border: "12px ridge", borderColor: '#763a00' }}>
                {card}
            </Card>

        </Box>
        </ThemeProvider>
    )
}