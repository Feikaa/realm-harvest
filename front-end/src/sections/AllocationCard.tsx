import { Stack, Typography, Button, CardContent, Card, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, FormControlLabel, Checkbox, Switch, Grid } from "@mui/material";
import React, { useState } from "react";

export default function AllocationCard(props: any) {

    var area = props.area;
    var num = props.num;
    var allocated = props.allocated;
    var setAllocated = props.setAllocated;
    var population = props.population;
    var aPop = props.aPop;
    var setAPop = props.setAPop;

    const items = props.items;

    const [open, setOpen] = useState(false);
    const [all, setAll] = useState(false);

    var areaColor = ["#006400", "#32476b", "#313232", "#90ee90", "#ffffe0", "#556b2f", "#0000ff", "#8b0000", "#800080", "#00bfff"];
    var BTAreas = [4, 5, 6, 10]

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = () => {
        localStorage.setItem("warning", JSON.stringify(!JSON.parse(localStorage.getItem("warning")!)));
    }

    const handleAllocate = (sign: any, index: any) => {
        var minA = aPop;
        if (index === 1) {
            // If in tundra area (requires warm clothing), minA is the minimum of aPop or number of warm clothing
            // NOTE: do we want to remove the # of warm clothing from items as people are allocated to the Tundra?
            minA = Math.min(aPop, items[3].quantity - allocated[1]);
        }
        // All
        if (sign === "all") {
                setAllocated((list: any) => {
                    return [...list.slice(0, index), list[index] + minA, ...list.slice(index + 1)]
                })
                setAPop(aPop - minA);
        }
        // + if there is less than 10% of the population available to allocate
        else if (sign > 0 && minA - population * 0.1 < 0) {
                setAllocated((list: any) => {
                    return [...list.slice(0, index), list[index] + minA, ...list.slice(index + 1)]
                })
                setAPop(aPop - minA);
        }
        // - if there is less than 10% of the allocated population to return, return them all
        else if (sign < 0 && allocated[index] - population * 0.1 < 0) {
            setAllocated((list: any) => {
                setAPop(aPop + list[index]);
                return [...list.slice(0, index), 0, ...list.slice(index + 1)]
            })
        }
        // + and - if there is more than 10% available to allocate/return
        else {
            var move = Math.floor(sign * population * 0.1);
            if (index === 1 && move > items[3].quantity - allocated[1] && move > 0) {
                move = items[3].quantity - allocated[1];
            }
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
                {num === 5 || num === 8 ?
                    <Dialog open={open}
                    onClose={handleClose}>
                        <DialogTitle>
                            Dangerous Zone
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                You are about to allocate your population to a <Typography display="inline" color="#8B0000">dangerous zone</Typography>.
                                This means there is a chance some of them won't make it back alive.
                            </DialogContentText>
                        </DialogContent>
                        <Stack direction="row" spacing={1} justifyContent="space-between">
                        <FormControlLabel control={<Switch onChange={handleChange} />} label="Don't remind me again" sx={{ paddingLeft: '2%' }}/>
                        <DialogActions>
                            <Button color="error" onClick={() => {handleClose()}}>
                                <Typography color={"#000000"}>
                                    Back
                                </Typography>
                            </Button>
                            {all ? <Button onClick={() => {
                                handleAllocate("all", num - 1);
                                handleClose();
                                }}>
                                <Typography color={"#000000"}>
                                    Continue
                                </Typography>
                            </Button>
                            :
                            <Button onClick={() => {
                                handleAllocate(1, num - 1);
                                handleClose();
                                }}>
                                <Typography color={"#000000"}>
                                    Continue
                                </Typography>
                            </Button>}
                        </DialogActions>
                        </Stack>
                    </Dialog>
                    : ""}
                <Button variant='contained' color={num === 5 ? 'error' : num === 8 ? 'error' : 'secondary'} onClick={() => {
                    if ((num === 5 || num === 8) && !JSON.parse(localStorage.getItem("warning")!)) {
                        handleOpen();
                        setAll(false);
                    } else {
                        handleAllocate(1, num - 1);
                    }
                }} disabled={(aPop === 0 || (num === 2 && allocated[num - 1] === items[3].quantity) || ((num === 5 || num === 8) && population <= 11)) ? true : false}>
                    <Typography color={num === 5 ? "#ffffff" : num === 8 ? "#ffffff" : "#000000"}>
                        +
                    </Typography>
                </Button>
                <Button variant='contained' color='secondary' onClick={() => {handleAllocate(-1, num - 1)}} disabled={allocated[num - 1] === 0 ? true : false}>
                    -
                </Button>
                <Button variant='contained' color={num === 5 ? 'error' : num === 8 ? 'error' : 'secondary'} onClick={() => {
                    if ((num === 5 || num === 8) && !JSON.parse(localStorage.getItem("warning")!)) {
                        handleOpen();
                        setAll(true);
                    } else {
                        handleAllocate("all", num - 1);
                    }
                }} disabled={(aPop === 0 || (num === 2 && allocated[num - 1] === items[3].quantity) || ((num === 5 || num === 8) && population <= 11)) ? true : false}>
                    <Typography color={num === 5 ? "#ffffff" : num === 8 ? "#ffffff" : "#000000"}>
                        All
                    </Typography>
                </Button>
            </Typography>
            </Stack>
            </Stack>
        </CardContent>
      </Card>
    )
}