import * as React from 'react';
import './HeaderSection.css';
import { Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';


const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          reeeee
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

export default function HeaderSection() {
    return (
        <Box sx={{ width: "15%", padding: "1%" }}>
            <Card variant="outlined" className="Card">
                {card}
            </Card>

        </Box>
    )
}