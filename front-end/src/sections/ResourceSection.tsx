import React, {useEffect, useState} from 'react';
import './ResourceSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, Stack } from '@mui/material';
import Log from '../images/log.png';
import Fur from '../images/fur.png';
import Berry from '../images/berry.png';
import Ice from '../images/ice_gem.png';
import ThickFur from '../images/thick_fur.png';
import Snow from '../images/ice.png';
import Coal from '../images/coal.png';
import Ore from '../images/ore.png';
import Feather from '../images/feather.png';
import Wheat from '../images/wheat.png';
import Meat from '../images/meat.png';
import Herb from '../images/herb.png';
import Sand from '../images/sand.png';
import Fire from '../images/fire_gem.png';
import Chitin from '../images/chitin.png';
import Inscription from '../images/inscription.png';
import Energy from '../images/energy.png';
import Rune from '../images/rune.png';
import Water from '../images/water_gem.png';
import Fish from '../images/fish.png';
import Salt from '../images/salt.png';
import Obsidian from '../images/obsidian.png';
import Volcano from '../images/volcano_ore.png';
import Ash from '../images/ash.png';
import EnchantedLog from '../images/enchanted_log.png';
import Essence from '../images/magic_essence.png';
import FairyDust from '../images/fairy.png';
import Stone from '../images/stone.png';
import Sky from '../images/sky_gem.png';
import AstralFeather from '../images/astral_feather.png';

const courierFontStyle = {
  fontFamily: 'Kurale',
};

interface Resource {
  resource: string;
  gain: number;
  quantity: number;
}

interface Area {
  area: string;
  resources: Resource[];
}

interface TextDisplayProps {
  areaIndex: number;
  resourceIndex: number;
  resources: Area[];
  setGain: React.Dispatch<React.SetStateAction<Area[]>>;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ areaIndex, resourceIndex, resources, setGain }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (resources[areaIndex].resources[resourceIndex].gain != 0) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        setGain((prev: any) => {
          const newResources = [...prev];
          const resource = newResources[areaIndex].resources[resourceIndex];
    
          resource.gain = 0;
    
          return newResources;
        });
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [resources[areaIndex].resources[resourceIndex].gain]);

  return <div style={{ fontSize: "2.125rem", color: resources[areaIndex].resources[resourceIndex].gain > 0 ? "green" : "red", visibility: isVisible ? "visible" : "hidden", fontFamily: 'Kurale'}}>{resources[areaIndex].resources[resourceIndex].gain > 0 ? "+" : ""}{resources[areaIndex].resources[resourceIndex].gain}</div>;
};

export default function PopulationSection(props: any) {

  var population = props.population;
  const resources = props.resources;
  const setResources = props.setResources;
  var pics = [[Log, Berry, Fur], [Snow, Ice, ThickFur], [Coal, Ore, Feather], [Wheat, Herb, Meat], [Sand, Fire, Chitin], [Inscription, Rune, Energy], [Salt, Water, Fish], [Obsidian, Volcano, Ash], [EnchantedLog, Essence, FairyDust], [Stone, Sky, AstralFeather]];

  var areas = props.areas;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div" style={courierFontStyle}>
          Resources
        </Typography>
        <Typography variant="h4">
          <br />
          <Box display="flex" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" sx={{ gap: "40px" }}>
            {resources.map((area: any, index: any) => {
              return area.resources.map((resource: any, r_index: any) => {
                // console.log(index + " " + r_index);
                return (  
                  <Box sx={{ display: areas.length > index ? "" : "none" }}>
                    <TextDisplay areaIndex={index} resourceIndex={r_index} resources={resources} setGain={setResources} />
                    <Box display="flex" justifyContent="center" alignItems="center">
                      <img src={pics[index][r_index]} width="64px" height="64px" />&nbsp;&nbsp;&nbsp;&nbsp;<Typography variant='h4' style={courierFontStyle}>x{resource.quantity || 0}</Typography>&nbsp;&nbsp;
                    </Box>
                  </Box>
                )
              })
            })}
          </Stack>
          </Box>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "1%" }}>
            <Card variant="outlined" className="Resource" sx={{ border: "12px ridge", borderColor: '#763a00' }}>
                {card}
            </Card>

        </Box>
    )
}