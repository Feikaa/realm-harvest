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
import useInterval from 'react-useinterval';

export default function App() {

  const [p, setP] = useState(0);
  const [t, setT] = useState(0);

  // [] makes useEffect run ONCE upon rendering
  useEffect(() => {

    if (localStorage.getItem("warning") === null) {
      localStorage.setItem("warning", JSON.stringify(false));
    }

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      fetch("http://127.0.0.1:5000/api/validtoken/",{
        method: "GET",
        headers: {
            'token': token,
            'Content-Type': 'application/json'
        }
      })
      .then(response =>
          response.json().then(data => ({
              data: data, 
              status: response.status
          })
          ).then(res => {
              (res.status === 200 && res.data.user === username) ? getData(username!) : setAuthenticated(false);
          }));
    }
}, [])

  // Base population is 10. Population cannot drop below 10
  const [population, setPopulation] = useState(10);
  const [aPop, setAPop] = useState(population);

  // Is there a trap set up?
  const [trap, setTrap] = useState(false);
  // // Wood, Fur, Berries
  // var [forestR, setforestR] = useState([0,0,0]);
  // // Frost Crystal, Thick Fur
  // var [tundraR, setTundraR] = useState([0,0]);
  // // Agrium, Feathers, Fresh Snow
  // var [mountainsR, setMountainsR] = useState([0,0,0]);
  // // Wheat, Meat, Herbs
  // var [plainsR, setPlainsR] = useState([0,0,0]);
  // // Fire Gem, Chitin
  // var [desertR, setDesertR] = useState([0,0]);
  // // Inscription, Runes
  // var [ruinsR, setRuinsR] = useState([0,0]);
  // // Water Gem, Fish, Salt
  // var [oceanR, setOceanR] = useState(0);
  // // Infernum, Volcanic Ash
  // var [volcanoR, setVolcanoR] = useState([0,0]);
  // // Essence, Fairy Dust
  // var [groveR, setGroveR] = useState([0,0]);
  // // 
  // var [skyR, setSkyR] = useState(0);

  const resourcesArray = [
    {
      area: "forest",
      resources: [
        { resource: "wood", gain: 0, quantity: 0 },
        { resource: "berries", gain: 0, quantity: 0 },
        { resource: "fur", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "tundra",
      resources: [
        { resource: "ice_gem", gain: 0, quantity: 0 },
        { resource: "thick_fur", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "mountains",
      resources: [
        { resource: "ore", gain: 0, quantity: 0 },
        { resource: "snow", gain: 0, quantity: 0 },
        { resource: "feather", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "plains",
      resources: [
        { resource: "wheat", gain: 0, quantity: 0 },
        { resource: "herb", gain: 0, quantity: 0 },
        { resource: "meat", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "desert",
      resources: [
        { resource: "fire_gem", gain: 0, quantity: 0 },
        { resource: "chitin", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "ruins",
      resources: [
        { resource: "inscription", gain: 0, quantity: 0 },
        { resource: "rune", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "ocean",
      resources: [
        { resource: "water_gem", gain: 0, quantity: 0 },
        { resource: "salt", gain: 0, quantity: 0 },
        { resource: "fish", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "volcano",
      resources: [
        { resource: "new_ore", gain: 0, quantity: 0 },
        { resource: "ash", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "grove",
      resources: [
        { resource: "essence", gain: 0, quantity: 0 },
        { resource: "fairy_dust", gain: 0, quantity: 0 },
      ],
    },
    {
      area: "sky",
      resources: [
        { resource: "air_gem", gain: 0, quantity: 0 },
      ],
    },
  ];

  const [resources, setResources] = useState(resourcesArray);

  const itemArray = [
    {
      item: "trap", quantity: 0,
    },
    {
      item: "jam", quantity: 0,
    },
    {
      item: "stew", quantity: 0,
    },
    {
      item: "warm", quantity: 0,
    }
  ]

  const [items, setItems] = useState(itemArray);

  const upgradesArray = [
    {
      area: "forest",
      upgrades: [
        { upgrade: "houses", purchased: false },
        { upgrade: "axe", purchased: false },
        { upgrade: 'warm', purchased: false }
      ],
    },
    {
      area: "tundra",
      upgrades: [
        { upgrade: "rope", purchased: false },
      ],
    },
  ]
  
  const [upgrades, setUpgrades] = useState(upgradesArray);

  //console.log(resources[1].resources)

  // Unlocked areas
  const [areas, setAreas] = useState(["forest"]);

  const [authenticated, setAuthenticated] = useState(false);
  const [area, setArea] = useState(1);
  const [allocated, setAllocated] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const [foodCounter, setFoodCounter] = useState(0);

  const getData = (username: string) => {
    setAuthenticated(true);
    fetch("/api/data/" + username,{
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      }
    }).then(response =>
      response.json().then(data => ({
          data: data, 
          status: response.status
      })
      ).then(res => {
          if (res.status === 200) {
            setPopulation(res.data.result.population != null ? res.data.result.population : population);
            setAPop(res.data.result.apop != null ? res.data.result.apop : aPop);
            setTrap(res.data.result.trap != null ? res.data.result.trap : trap);
            setResources(res.data.result.resources != null ? res.data.result.resources : resourcesArray);
            setItems(res.data.result.items != null ? res.data.result.items : itemArray);
            setUpgrades(res.data.result.upgrades != null ? res.data.result.upgrades : upgradesArray);
            setAreas(res.data.result.areas != null ? res.data.result.areas : areas);
            setArea(res.data.result.area != null ? res.data.result.area : area);
            setAllocated(res.data.result.allocated != null ? res.data.result.allocated : allocated);
          }
      }));
  }

  const clearData = () => {
    setPopulation(10);
    setAPop(10);
    setTrap(false);
    setResources(resourcesArray);
    setItems(itemArray);
    setUpgrades(upgradesArray);
    setAreas(["forest"]);
    setArea(1);
    setAllocated([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  // Ticks
  useInterval(() => {
    // Auto harvest ticks
    if (aPop < population) {
      if (p < 100) {
        setP((p: any) => p + 20);
      } else {
        setP(0);
      }
    } else {
      setP(0);
    }

    // Trap ticks
    if (trap && t < 100) {
      setT((t: any) => t + 20);
    }

    // Eat food ticks
    // Once every 10 seconds
    if (upgrades[0].upgrades[0].purchased) {
      if (foodCounter >= 10) {
        // Berries have 1/100 chance to increase (by how much? TODO)
        if (items[1].quantity > 0) {
          setItems((prev: any) => {
            const newItems = [...prev];
            const item = newItems[1];
      
            const newQuantity = item.quantity - 1;
      
            item.quantity = newQuantity;
      
            return newItems;
          })
          if (Math.floor(Math.random() * 100) === 1) {
            var inc = population
            setPopulation((population: any) => population + inc);
            setAPop((apop: any) => apop + inc)
          }
        }
        // Stew has 1/10 chance to increase
        if (items[2].quantity > 0) {
          setItems((prev: any) => {
            const newItems = [...prev];
            const item = newItems[2];
      
            const newQuantity = item.quantity - 1;
      
            item.quantity = newQuantity;
      
            return newItems;
          })
          if (Math.floor(Math.random() * 100) < 10) {
            var inc = population
            setPopulation((population: any) => population + inc);
            setAPop((apop: any) => apop + inc)
          }
        }
        setFoodCounter(0);
      } else {
        setFoodCounter((counter: any) => counter + 1);
      }
    }
  }, 1000)

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
        <HeaderSection authenticated={authenticated} setAuthenticated={setAuthenticated}
        population={population} aPop={aPop} trap={trap} resources={resources} items={items} upgrades={upgrades} areas={areas} area={area}
        allocated={allocated} getData={getData} clearData={clearData} />
        <Grid container spacing={2} alignItems="stretch" direction="row" maxHeight="100vh">
          <Grid item xs={4}>
            <PopulationSection population={population} aPop={aPop} />
            <TabSection resources={resources} setResources={setResources} authenticated={authenticated} areas={areas} setAreas={setAreas} area={area} setArea={setArea}
            allocated={allocated} population={population} setPopulation={setPopulation} setAllocated={setAllocated} aPop={aPop} setAPop={setAPop}
            items={items} setItems={setItems} upgrades={upgrades} setUpgrades={setUpgrades} />
          </Grid>
          <Grid item xs={8}>
            <HarvestSection population={population} setPopulation={setPopulation} area={area} p={p} t={t} setT={setT} trap={trap} setTrap={setTrap}
            resources={resources} setResources={setResources}
            items={items} setItems={setItems}
            upgrades={upgrades} aPop={aPop} setAPop={setAPop} allocated={allocated} setAllocated={setAllocated}
             />
            <ResourceSection
            resources={resources} setResources={setResources}
            areas={areas}
             />
          </Grid>
        </Grid>
        {/* <FooterSection /> */}
      </Box>
    </div>
  );
}
