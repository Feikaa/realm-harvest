import React, { useState } from 'react';
import { TextField, Stack, Box, Button, Link, Typography } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SignupPopup(props: any) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    return(
        <Dialog
            PaperProps={{
                style: { borderRadius: 15 }
            }}
            open={props.openSignup}
            onClose={props.handleCloseSignup}
            >
            <DialogTitle> {"Create Account"} </DialogTitle>
            <DialogContent>
                <Stack spacing={2} mt={2}>
                    <TextField
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                </Stack>
                {props.alert ? <Typography style={{ color:'red' }}>User already exists! Please log in.</Typography> : ""}
            </DialogContent>
            <DialogActions>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%">
                    <Stack spacing={2}>
                        <Button variant="contained" disabled={((username !== "" && password !== "") && (password === confirm)) ? false : true} onClick={() => props.handleSubmitSignup(username, password)}> Submit </Button>
                        <Stack direction='row' spacing={1}>
                            <Link underline="none" fontFamily="Taviraj" color="#5D6A70">Have an account already?</Link>
                            <Link style={{ cursor: 'pointer' }} underline="hover" fontFamily="Taviraj" onClick={props.handleClickOpenLogin}>Log in</Link>
                        </Stack>
                    </Stack>
                </Box>
            </DialogActions>
        </Dialog>
    );
};