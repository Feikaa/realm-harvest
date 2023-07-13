import { Stack, Typography, Button, CardContent, Card } from "@mui/material";
import React from "react";

export default function AllocationCard(props: any) {

    var area = props.area;
    var num = props.num;
    var allocated = props.allocated;
    var setAllocated = props.setAllocated;
    var population = props.population;
    var aPop = props.aPop;
    var setAPop = props.setAPop;

    var areaColor = ["#006400", "#313232", "#90ee90", "#0000ff", "#ffffe0", "#32476b", "#8b0000", "#556b2f", "#00bfff", "#800080"];
    var BTAreas = [3, 5, 8, 9]

    const handleAllocate = (sign: any, index: any) => {
        if (sign === "all") {
            setAllocated((list: any) => {
                return [...list.slice(0, index), list[index] + aPop, ...list.slice(index + 1)]
            })
            setAPop(0);
        } else if (sign > 0 && aPop - population * 0.1 < 0) {
            setAllocated((list: any) => {
                return [...list.slice(0, index), list[index] + aPop, ...list.slice(index + 1)]
            })
            setAPop(0);
        } else if (sign < 0 && allocated[index] - population * 0.1 < 0) {
            setAllocated((list: any) => {
                setAPop(aPop + list[index]);
                return [...list.slice(0, index), 0, ...list.slice(index + 1)]
            })
        } else {
            var move = Math.floor(sign * population * 0.1);
            setAllocated((list: any) => {
                return [...list.slice(0, index), list[index] + move, ...list.slice(index + 1)]
            })
            setAPop(aPop - move);
        }
    }

    return (
        <Card sx={{ backgroundColor: areaColor[num - 1], borderRadius: '16px', marginBottom: '8px' }}>
            <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Stack direction="row" spacing={1} justifyContent='space-between'>
            <Typography variant="button" component="div" color={BTAreas.includes(num) ? "#000000" : "#ffffff"} display="flex" alignItems="center">
            {num}. {area}
            </Typography>
            <Typography variant="button" component="div" color={BTAreas.includes(num) ? "#000000" : "#ffffff"} display="flex" alignItems="center">
                Allocated: {allocated[num - 1]}
            </Typography>
            <Stack direction="row" justifyContent={"flex-end"} spacing={1}>
            <Typography sx={{ verticalAlign: 'middle', display: 'inline-flex' }}>
                <Button variant='contained' color='secondary' onClick={() => {handleAllocate(1, num - 1)}} disabled={aPop === 0 ? true : false}>
                    +
                </Button>
                <Button variant='contained' color='secondary' onClick={() => {handleAllocate(-1, num - 1)}} disabled={allocated[num - 1] === 0 ? true : false}>
                    -
                </Button>
                <Button variant='contained' color='secondary' onClick={() => {handleAllocate("all", num - 1)}} disabled={aPop === 0 ? true : false}>
                    All
                </Button>
            </Typography>
            </Stack>
            </Stack>
        </CardContent>
      </Card>
    )
}