import React, {useEffect, useState} from 'react';
import './ResourceSection.css';
import { Box, Card, Tabs, CardContent, Tab, Typography, Stack } from '@mui/material';
import Log from '../images/log.png';
import Ore from '../images/ore.png';
import Wheat from '../images/wheat.png';

interface TextDisplayProps {
  gain: number;
  setGain: React.Dispatch<React.SetStateAction<number>>;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ gain, setGain }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (gain) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        setGain(0);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [gain]);

  return <p style={{ fontSize: "25px", color: "green", visibility: isVisible ? "visible" : "hidden"}}>+{gain}</p>;
};

export default function PopulationSection(props: any) {

  var population = props.population;
  var logs = props.logs;
  var ores = props.ores;
  var wheats = props.wheats;
  var gains0 = props.gains0;
  var setGains0 = props.setGains0;
  var gains1 = props.gains1;
  var setGains1 = props.setGains1;
  var gains2 = props.gains2;
  var setGains2 = props.setGains2;
  var gains3 = props.gains3;
  var setGains3 = props.setGains3;
  var gains4 = props.gains4;
  var setGains4 = props.setGains4;
  var gains5 = props.gains5;
  var setGains5 = props.setGains5;
  var gains6 = props.gains6;
  var setGains6 = props.setGains6;
  var gains7 = props.gains7;
  var setGains7 = props.setGains7;
  var gains8 = props.gains8;
  var setGains8 = props.setGains8;
  var gains9 = props.gains9;
  var setGains9 = props.setGains9;
  let [shouldTransition, setShouldTransition] = useState(true);
  var gains = [gains0, gains1, gains2, gains3, gains4, gains5, gains6, gains7, gains8, gains9];
  var setGains = [setGains0, setGains1, setGains2, setGains3, setGains4, setGains5, setGains6, setGains7, setGains8, setGains9];
  var resources = [logs, ores, wheats];
  var pics = [Log, Ore, Wheat];

  const [texts, setTexts] = useState<string[]>([]);

  const handleTextChange = (index: number, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h3" component="div">
          Resources
        </Typography>
        <Typography variant="h4">
          <br />
          <Box display="flex" justifyContent="center" alignItems="center">
          <Stack direction="row" spacing={2}>
            {gains.map((gain: any, index: any) => {
              return (
                <Box sx={{ marginTop: "-60px !important" }}>
                <TextDisplay gain={gain} setGain={setGains[index]} />
                <img src={pics[index]} width="64px" height="64px" />x{resources[index]}&nbsp;&nbsp;
                </Box>
)
            })}
          </Stack>
          </Box>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <Box sx={{ padding: "1%" }}>
            <Card variant="outlined" className="Resource" sx={{ border: 5, borderColor: '#32cd32', borderRadius: '16px' }}>
                {card}
            </Card>

        </Box>
    )
}