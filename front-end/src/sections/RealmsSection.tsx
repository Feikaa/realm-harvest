import * as React from 'react';
import './TabSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import setBodyColor from '../setBodyColor';

export default function RealmsSection(props: any) {

    var areas = props.areas;
    var area = props.area;
    var setArea = props.setArea;

    var colors = ["#243407", "#80CCCC", "#5A5A5A", "#009E60", "#df915e", "#7e7e00", "#2f37aa", "#7e0000", "#4c00a4", "#678e99"];

    const handleChange = (value: number) => {
        setArea(value);
        setBodyColor(colors[value - 1]);
      };

    return (
        <Box sx={{ height: 672, width: '100%'}}>
            <List>
                <ListItem>
                    <ListItemButton sx={{bgcolor: '#006400', borderRadius: '16px', border: '1px solid black'}} disabled={area === 1 ? true : false} onClick={() => {handleChange(1)}}>
                        <ListItemText sx={{color: 'white'}} primary="1. Forest" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 2 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#32476b', borderRadius: '16px', border: '1px solid black'}} disabled={area === 2 ? true : false} onClick={() => {handleChange(2)}}>
                        <ListItemText sx={{color: 'white'}} primary="2. Tundra" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 3 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#313232', borderRadius: '16px', border: '1px solid black'}} disabled={area === 3 ? true : false} onClick={() => {handleChange(3)}}>
                        <ListItemText sx={{color: 'white'}} primary="3. Mountains" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 4 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#90ee90', borderRadius: '16px', border: '1px solid black'}} disabled={area === 4 ? true : false} onClick={() => {handleChange(4)}}>
                        <ListItemText sx={{color: 'black'}} primary="4. Plains" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 5 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#ffffe0', borderRadius: '16px', border: '1px solid black'}} disabled={area === 5 ? true : false} onClick={() => {handleChange(5)}}>
                        <ListItemText sx={{color: 'black'}} primary="5. Desert" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 6 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#556b2f', borderRadius: '16px', border: '1px solid black'}} disabled={area === 6 ? true : false} onClick={() => {handleChange(6)}}>
                        <ListItemText sx={{color: 'black'}} primary="6. Ruins" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 7 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#0000ff', borderRadius: '16px', border: '1px solid black'}} disabled={area === 7 ? true : false} onClick={() => {handleChange(7)}}>
                        <ListItemText sx={{color: 'white'}} primary="7. Ocean" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 8 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#8b0000', borderRadius: '16px', border: '1px solid black'}} disabled={area === 8 ? true : false} onClick={() => {handleChange(8)}}>
                        <ListItemText sx={{color: 'white'}} primary="8. Volcano" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 9 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#800080', borderRadius: '16px', border: '1px solid black'}} disabled={area === 9 ? true : false} onClick={() => {handleChange(9)}}>
                        <ListItemText sx={{color: 'white'}} primary="9. Enchanted Grove" />
                    </ListItemButton>
                </ListItem>

                <ListItem sx={{ visibility: areas.length === 10 ? 'visible' : 'hidden' }}>
                    <ListItemButton sx={{bgcolor: '#00bfff', borderRadius: '16px', border: '1px solid black'}} disabled={area === 10 ? true : false} onClick={() => {handleChange(10)}}>
                        <ListItemText sx={{color: 'black'}} primary="10. Sky Islands" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}