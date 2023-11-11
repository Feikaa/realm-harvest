import * as React from 'react';
// import './TabSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, createTheme, ThemeProvider, List, ListItem, ListItemButton, ListItemText, Button, PaletteColorOptions } from '@mui/material';
import setBodyColor from '../setBodyColor';

const courierFontStyle = {
    fontFamily: 'Kurale, monospace',
  };

declare module '@mui/material/styles' {
interface CustomPalette {
    forest: PaletteColorOptions;
    tundra: PaletteColorOptions;
    mountains: PaletteColorOptions;
    plains: PaletteColorOptions;
    desert: PaletteColorOptions;
    ruins: PaletteColorOptions;
    ocean: PaletteColorOptions;
    volcano: PaletteColorOptions;
    enchantedgrove: PaletteColorOptions;
    skyislands: PaletteColorOptions;
}
interface Palette extends CustomPalette {}
interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      forest: true;
      tundra: true;
      mountains: true;
      plains: true;
      desert: true;
      ruins: true;
      ocean: true;
      volcano: true;
      enchantedgrove: true;
      skyislands: true;
    }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
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

export default function RealmsSection(props: any) {

    var areas = props.areas;
    var area = props.area;
    var setArea = props.setArea;

    var colors = ["#243407", "#80CCCC", "#5A5A5A", "#009E60", "#df915e", "#7e7e00", "#2f37aa", "#7e0000", "#4c00a4", "#678e99"];

    const handleChange = (value: number) => {
        setArea(value);
        //setBodyColor(colors[value - 1]);
      };

    return (
        <ThemeProvider theme={theme}>
        <Box sx={{ height: 672, width: '100%'}}>
            <List>
                <ListItem>
                    <Button color='forest' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} disabled={area === 1 ? true : false} variant='contained' onClick={() => {handleChange(1)}}>
                        <Typography style={courierFontStyle} sx={{color: 'white'}}>1. Forest</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 2 ? 'visible' : 'hidden' }}>
                    <Button color="tundra" sx={{bgcolor: '#32476b', borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 2 ? true : false} onClick={() => {handleChange(2)}}>
                        <Typography style={courierFontStyle} sx={{color: 'white'}}>2. Tundra</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 3 ? 'visible' : 'hidden' }}>
                    <Button color='mountains' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 3 ? true : false} onClick={() => {handleChange(3)}}>
                        <Typography style={courierFontStyle} sx={{color: 'white'}}>3. Mountains</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 4 ? 'visible' : 'hidden' }}>
                    <Button color="plains" sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 4 ? true : false} onClick={() => {handleChange(4)}}>
                        <Typography style={courierFontStyle} sx={{color: 'black'}}>4. Plains</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 5 ? 'visible' : 'hidden' }}>
                    <Button color='desert' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 5 ? true : false} onClick={() => {handleChange(5)}}>
                        <Typography style={courierFontStyle} sx={{color: 'black'}}>5. Desert</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 6 ? 'visible' : 'hidden' }}>
                    <Button color='ruins' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 6 ? true : false} onClick={() => {handleChange(6)}}>
                        <Typography style={courierFontStyle} sx={{color: 'black'}}>6. Ruins</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 7 ? 'visible' : 'hidden' }}>
                    <Button color='ocean' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 7 ? true : false} onClick={() => {handleChange(7)}}>
                        <Typography style={courierFontStyle} sx={{color: 'white'}}>7. Ocean</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 8 ? 'visible' : 'hidden' }}>
                    <Button color='volcano' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 8 ? true : false} onClick={() => {handleChange(8)}}>
                        <Typography style={courierFontStyle} sx={{color: 'white'}}>8. Volcano</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length >= 9 ? 'visible' : 'hidden' }}>
                    <Button color='enchantedgrove' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 9 ? true : false} onClick={() => {handleChange(9)}}>
                        <Typography style={courierFontStyle} sx={{color: 'white'}}>9. Enchanted Grove</Typography>
                    </Button>
                </ListItem>

                <ListItem sx={{ visibility: areas.length === 10 ? 'visible' : 'hidden' }}>
                    <Button color='skyislands' sx={{borderRadius: '16px', border: '1px solid black', width: '100%', height: '50px', justifyContent: 'left', paddingLeft: '16px'}} variant='contained' disabled={area === 10 ? true : false} onClick={() => {handleChange(10)}}>
                        <Typography style={courierFontStyle} sx={{color: 'black'}}>10. Sky Islands</Typography>
                    </Button>
                </ListItem>
            </List>
        </Box>
        </ThemeProvider>
    )
}