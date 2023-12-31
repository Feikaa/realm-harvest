import * as React from 'react';
import Paper from '@mui/material/Paper';
import Log from '../../images/log.png';
import Fur from '../../images/fur.png';
import Ore from '../../images/ore.png';
import Wheat from '../../images/wheat.png';
import { Box, Button, Grid, List } from '@mui/material';

const courierFontStyle = {
  fontFamily: 'Kurale, monospace',
};

export default function Upgrade7Section(props: any) {

  var population = props.population;
  var setPopulation = props.setPopulation;
  var aPop = props.aPop;
  var setAPop = props.setAPop;

  const areas = props.areas;
  const setAreas = props.setAreas;

  const resources = props.resources;
  const setResources = props.setResources;

  const items = props.items;
  const setItems = props.setItems;

  const upgrades = props.upgrades;
  const setUpgrades = props.setUpgrades;

  return (
    <Paper style={{ height: 672, width: '100%', overflow: 'auto' }}>
      <List>




      </List>
    </Paper>
  );
}