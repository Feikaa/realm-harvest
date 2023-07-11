import * as React from 'react';
import './TabSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider } from '@mui/material';
import RealmsSection from './RealmsSection';
import Upgrade1Section from './Upgrade1Section';
import AllocationSection from './AllocationSection';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PopulationSection(props: any) {

  var population = props.population;
  var areas = props.areas;
  var area = props.area;
  var setArea = props.setArea;
  var allocated = props.allocated;
  var setAllocated = props.setAllocated;
  var aPop = props.aPop;
  var setAPop = props.setAPop;

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
        <Tabs value={value} centered onChange={handleChange} textColor='primary' indicatorColor='primary' >
            <Tab label="Realms" {...a11yProps(0)}/>
            <Tab label="Upgrades" {...a11yProps(1)}/>
            <Tab label="Allocate Population" {...a11yProps(2)}/>
        </Tabs>
        <Typography variant="h4">
          {value === 0 ? <RealmsSection areas={areas} area={area} setArea={setArea} /> : 
           value === 1 ? (area === 1 ? <Upgrade1Section /> : "") : 
           <AllocationSection areas={areas} area={area} allocated={allocated} setAllocated={setAllocated} population={population} aPop={aPop} setAPop={setAPop} />}
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