import * as React from 'react';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider, List, ListItem, ListItemButton, ListItemText, Button, Grid, Stack } from '@mui/material';
import AllocationCard from './AllocationCard';

export default function AllocationSection(props: any) {

    var areas = props.areas;
    var area = props.area;
    var allocated = props.allocated;
    var setAllocated = props.setAllocated;
    var population = props.population;
    var aPop = props.aPop;
    var setAPop = props.setAPop;

    const authenticated = props.authenticated;

    var areaList = ["Forest", "Tundra", "Mountains", "Plains", "Desert", "Ruins", "Ocean", "Volcano", "Enchanted Grove", "Sky Islands"];

      const listAreas = areaList.map((area, i) => {
        if (areas.includes(area.toLowerCase())) {
            return <React.Fragment><AllocationCard num={i+1} area={area} allocated={allocated} setAllocated={setAllocated} population={population} aPop={aPop} setAPop={setAPop} /></React.Fragment>
        }
      })
    
    return (
        <Box sx={{ padding: "2%" }}>
            {listAreas}
            {authenticated ? "" :
              <Typography>
              Login to continue collecting resources while offline!
              </Typography>
            }
        </Box>
    )
}