import logo from './logo.svg';
import './App.css';
import PopulationSection from './sections/PopulationSection.tsx';
import HarvestSection from './sections/HarvestSection.tsx';
import TabSection from './sections/TabSection.tsx';
import ResourceSection from './sections/ResourceSection.tsx';
import { Box, Grid } from '@mui/material';
import setBodyColor from './setBodyColor'
import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  // [] makes useEffect run ONCE upon rendering
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  var [population, setPopulation] = useState(0);
  var [logs, setLogs] = useState(0);
  var [ores, setOres] = useState(0);
  var [wheats, setWheats] = useState(0);
  var [areas, setAreas] = useState(["forest", "mountain", "plains"]);
  var [area, setArea] = useState(1);

  return (
    <div className='App'>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
      {/* <Box sx={{ flexGrow: 1 }}>
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
      </Box> */}
    </div>
  );
}

export default App;
