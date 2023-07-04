import * as React from 'react';
import './TabSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider } from '@mui/material';
import AreaSection from './AreaSection';

export default function PopulationSection(props) {

  var population = props.population;
  var areas = props.areas;
  var area = props.area;
  var setArea = props.setArea;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
    const theme = createTheme({
        palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#11cb5f',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        },
    });

  const card = (
    <React.Fragment>
      <CardContent>
        <Tabs value={value} centered onChange={handleChange} textColor='primary' indicatorColor='primary'>
            <Tab label="Realms" index={0}/>
            <Tab label="Upgrades" index={1}/>
            <Tab label="Allocate Population" index={2}/>
        </Tabs>
        <Typography variant="h4">
          <br />
          {value === 0 ? <AreaSection areas={areas} area={area} setArea={setArea} /> : ""}
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