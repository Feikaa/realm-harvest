import './App.css';
import HeaderSection from './sections/HeaderSection';
import PopulationSection from './sections/PopulationSection';
import HarvestSection from './sections/HarvestSection';
import TabSection from './sections/TabSection';
import ResourceSection from './sections/ResourceSection';
import { Box, Grid } from '@mui/material';
import setBodyColor from './setBodyColor'
import React, { useEffect, useState } from 'react';

export default function App() {

  const [backendData, setBackendData] = useState({ "users": [{
    username: "",
    password: ""
  }]
  });

  // [] makes useEffect run ONCE upon rendering
  useEffect(() => {
    fetch("/api/users").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  var [population, setPopulation] = useState(100);
  var [aPop, setAPop] = useState(population);
  var [logs, setLogs] = useState(0);
  var [ores, setOres] = useState(0);
  var [wheats, setWheats] = useState(0);
  var [areas, setAreas] = useState(["forest", "mountains", "plains", "desert", "ocean", "volcano", "swamp", "sky islands", "tundra", "enchanted grove"]);
  var [area, setArea] = useState(1);
  var [axe, setAxe] = useState(false);
  var [allocated, setAllocated] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className='App'>
      {/* {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user: any, i : any) => (
          <p key={i}>{user.username}</p>
        ))
      )} */}
      <Box sx={{ flexGrow: 1 }}>
        <HeaderSection />
        <Grid container spacing={2} alignItems="stretch" direction="row" maxHeight="100vh">
          <Grid item xs={4}>
            <PopulationSection population={population} aPop={aPop} />
            <TabSection areas={areas} area={area} setArea={setArea} allocated={allocated} population={population} setAllocated={setAllocated} aPop={aPop} setAPop={setAPop} />
          </Grid>
          <Grid item xs={8}>
            <HarvestSection population={population} setPopulation={setPopulation} area={area} logs={logs} setLogs={setLogs} ores={ores} setOres={setOres} wheats={wheats} setWheats={setWheats} axe={axe}/>
            <ResourceSection logs={logs} ores={ores} wheats={wheats} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
