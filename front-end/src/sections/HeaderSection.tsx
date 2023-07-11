import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Tooltip, styled, TooltipProps, tooltipClasses} from '@mui/material';
import LoginPopup from "../popups/LoginPopup";

export default function HeaderSection() {

  var [openLogin, setOpenLogin] = React.useState(false);
  var [authenticated, setAuthenticated] = React.useState(false);

  const handleCloseLogin = () => { setOpenLogin(false); };
  const handleSubmitLogin = (username: string, password: string) => {
    fetch("http://127.0.0.1:5000/api/users",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then(response =>
        response.json().then(data => ({
        data: data,
        status: response.status
    })
    ).then(res => {
        res.status === 201 ? setAuthenticated(true) : setAuthenticated(false)
    }));

    handleCloseLogin();
};

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='default'>
        <Toolbar>
          <BootstrapTooltip title={authenticated ? "" : "You must be logged in to save"} placement='right'>
            <Typography>
              <Button variant="contained" color="primary" disabled={authenticated ? false : true}>Save</Button>
            </Typography>
          </BootstrapTooltip>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Realm Harvest
          </Typography>
          <Button variant="contained" color={authenticated ? "error" : "success"} onClick={() => {
            if (authenticated) {
              setAuthenticated(false);
            } else {
              setOpenLogin(true);
            }
            }}>{authenticated ? "Logout" : "Login"}</Button>
        </Toolbar>
      </AppBar>
      <LoginPopup openLogin={openLogin} handleCloseLogin={handleCloseLogin} handleSubmitLogin={handleSubmitLogin} />
    </Box>
  );
}