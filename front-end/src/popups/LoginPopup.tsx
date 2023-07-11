import React, { useState } from 'react';
import { TextField, Stack, Box, Button, Link, Typography } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function LoginPopup(props: any) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <Dialog
            open={props.openLogin}
            onClose={props.handleCloseLogin}
            >
            <DialogTitle>
                <Typography variant="h5" align="center">Sign In</Typography></DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <TextField
                        label="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%">
                    <Stack spacing={2}>
                        <Button variant="contained" onClick={() => props.handleSubmitLogin(username, password)}> Submit </Button>
                        <Link style={{ cursor: 'pointer' }} underline="hover" onClick={props.handleClickOpenSignup}><Typography variant="caption" align="right">Don't have an account? Sign Up</Typography></Link>
                    </Stack>
                </Box>
            </DialogActions>
        </Dialog>
    );
};