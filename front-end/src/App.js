import logo from './logo.svg';
import './App.css';
import PopulationSection from './sections/PopulationSection';
import HarvestSection from './sections/HarvestSection';
import TabSection from './sections/TabSection';
import ResourceSection from './sections/ResourceSection';
import { Box, Grid } from '@mui/material';
import setBodyColor from './setBodyColor'
import React, { useState } from 'react';

function App() {

  var [population, setPopulation] = useState(0);
  var [logs, setLogs] = useState(0);
  var [ores, setOres] = useState(0);
  var [wheats, setWheats] = useState(0);
  var [areas, setAreas] = useState(["forest", "mountain", "plains"]);
  var [area, setArea] = useState(1);

  return (
    <div className='App'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <PopulationSection population={population} />
            <TabSection areas={areas} area={area} setArea={setArea} />
          </Grid>
          <Grid item xs={8}>
            <HarvestSection population={population} setPopulation={setPopulation} logs={logs} setLogs={setLogs}/>
            <ResourceSection logs={logs} ores={ores} wheats={wheats} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
