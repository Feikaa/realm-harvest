import './App.css';
import HeaderSection from './sections/HeaderSection';
import PopulationSection from './sections/PopulationSection';
import HarvestSection from './sections/HarvestSection';
import TabSection from './sections/TabSection';
import ResourceSection from './sections/ResourceSection';
import FooterSection from './sections/FooterSection';
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

    setInterval(() => {

    })
  }, [])

  var [population, setPopulation] = useState(100);
  var [aPop, setAPop] = useState(population);
  var [logs, setLogs] = useState(0);
  var [ores, setOres] = useState(0);
  var [wheats, setWheats] = useState(0);
  var [waters, setWaters] = useState(0);
  var [fires, setFires] = useState(0);
  var [ices, setIces] = useState(0);
  var [volcanos, setVolcanos] = useState(0);
  var [runes, setRunes] = useState(0);
  var [crystals, setCrystals] = useState(0);
  var [essences, setEssences] = useState(0);
  // Unlocked areas
  var [areas, setAreas] = useState(["forest", "mountains", "plains", "ocean", "desert", "tundra", "volcano", "ruins", "sky islands", "enchanted grove"]);
  var [area, setArea] = useState(1);
  var [axe, setAxe] = useState(false);
  var [allocated, setAllocated] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [gains0, setGains0] = useState(0);
  const [gains1, setGains1] = useState(0);
  const [gains2, setGains2] = useState(0);
  const [gains3, setGains3] = useState(0);
  const [gains4, setGains4] = useState(0);
  const [gains5, setGains5] = useState(0);
  const [gains6, setGains6] = useState(0);
  const [gains7, setGains7] = useState(0);
  const [gains8, setGains8] = useState(0);
  const [gains9, setGains9] = useState(0);
  var [time, setTime] = useState([0,0,0,0,0,0,0,0,0,0]);

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
            <TabSection areas={areas} area={area} setArea={setArea} allocated={allocated} population={population} setPopulation={setPopulation} setAllocated={setAllocated} aPop={aPop} setAPop={setAPop} />
          </Grid>
          <Grid item xs={8}>
            <HarvestSection population={population} setPopulation={setPopulation} area={area}
            logs={logs} setLogs={setLogs}
            ores={ores} setOres={setOres}
            wheats={wheats} setWheats={setWheats}
            waters={waters} setWaters={setWaters}
            fires={fires} setFires={setFires}
            ices={ices} setIces={setIces}
            volcanos={volcanos} setVolcanos={setVolcanos}
            runes={runes} setRunes={setRunes}
            crystals={crystals} setCrystals={setCrystals}
            essences={essences} setEssences={setEssences}
            axe={axe} aPop={aPop} allocated={allocated}
            gains0={gains0} setGains0={setGains0}
            gains1={gains1} setGains1={setGains1}
            gains2={gains2} setGains2={setGains2}
            gains3={gains3} setGains3={setGains3}
            gains4={gains4} setGains4={setGains4}
            gains5={gains5} setGains5={setGains5}
            gains6={gains6} setGains6={setGains6}
            gains7={gains7} setGains7={setGains7}
            gains8={gains8} setGains8={setGains8}
            gains9={gains9} setGains9={setGains9}
            time={time} setTime={setTime} />
            <ResourceSection
            logs={logs}
            ores={ores}
            wheats={wheats}
            waters={waters}
            fires={fires}
            ices={ices}
            volcanos={volcanos}
            runes={runes}
            crystals={crystals}
            essences={essences}
            areas={areas}
            gains0={gains0} setGains0={setGains0}
            gains1={gains1} setGains1={setGains1}
            gains2={gains2} setGains2={setGains2}
            gains3={gains3} setGains3={setGains3}
            gains4={gains4} setGains4={setGains4}
            gains5={gains5} setGains5={setGains5}
            gains6={gains6} setGains6={setGains6}
            gains7={gains7} setGains7={setGains7}
            gains8={gains8} setGains8={setGains8}
            gains9={gains9} setGains9={setGains9}
            time={time} />
          </Grid>
        </Grid>
        {/* <FooterSection /> */}
      </Box>
    </div>
  );
}
