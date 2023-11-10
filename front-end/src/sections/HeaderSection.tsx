import React, { useEffect, useState } from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Tooltip, styled, TooltipProps, tooltipClasses, Alert, Collapse, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LoginPopup from "../popups/LoginPopup";
import SignupPopup from '../popups/SignupPopup';

const courierFontStyle = {
  fontFamily: 'Kurale, monospace',
};

export default function HeaderSection(props: any) {

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [alert, setAlert] = useState(false);
  const [eMessage, setEMessage] = useState("");
  const authenticated = props.authenticated;
  const setAuthenticated = props.setAuthenticated;
  
  const population = props.population;
  const aPop = props.aPop;
  const trap = props.trap;
  const resources = props.resources;
  const items = props.items;
  const upgrades = props.upgrades;
  const areas = props.areas;
  const area = props.area;
  const allocated = props.allocated;

  const getData = props.getData;
  const clearData = props.clearData;

  const handleClickOpenLogin = () => { handleCloseSignup(); setOpenLogin(true); };
  const handleCloseLogin = () => { setOpenLogin(false); };
  const handleSubmitLogin = (username: string, password: string) => {
    setEMessage("")
    fetch("http://127.0.0.1:5000/api/login",{
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
        if (res.status === 200) {
          setAuthenticated(true)
          localStorage.setItem("username", res.data.user)
          localStorage.setItem("token", res.data.token)
          getData(res.data.user);
          handleCloseLogin();
        } else {
          setAuthenticated(false);
        }
        // Username doesnt exist or Incorrect Password
        if (res.status === 404 || res.status === 403) {
          setEMessage(res.data.error)
        }
    }));
};

const handleClickOpenSignup = () => { handleCloseLogin(); setOpenSignup(true); };
const handleCloseSignup = () => { setOpenSignup(false); setAlert(false); };
const handleSubmitSignup = (username: string, password: string) => {
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
    .then((res) => res.status === 409 ? handleSuccessSignup() : handleCloseSignup())

};

const handleSuccessSignup = () => {
  setAlert(false);
  save();
}

const hasJWT = () => {
  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username")
  fetch("http://127.0.0.1:5000/api/validtoken/",{
      method: "GET",
      headers: {
          'token': token || '',
          'Content-Type': 'application/json'
      }
  })
  .then(response =>
      response.json().then(data => ({
          data: data, 
          status: response.status
      })
      ).then(res => {
          (res.status === 200 && res.data.user === username) ? save() : console.log("Validate failed.")
      }));
};

const save = () => {
  const username = localStorage.getItem("username");
  fetch("http://127.0.0.1:5000/api/save/" + username, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      population: population,
      apop: aPop,
      trap: trap,
      resources: resources,
      items: items,
      upgrades: upgrades,
      areas: areas,
      area: area,
      allocated: allocated
    })
  });
}

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
              <Button variant="contained" color="primary" disabled={authenticated ? false : true} onClick={() => {
                hasJWT();
              }} style={courierFontStyle}>Save</Button>
            </Typography>
          </BootstrapTooltip>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={courierFontStyle}>
            Realm Harvest
          </Typography>
          <Button variant="contained" color={authenticated ? "error" : "success"} onClick={() => {
            if (authenticated) {
              setAuthenticated(false);
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              clearData();
            } else {
              setOpenLogin(true);
            }
            }} style={courierFontStyle}>{authenticated ? "Logout" : "Login"}</Button>
        </Toolbar>
      </AppBar>
      <LoginPopup openLogin={openLogin} handleCloseLogin={handleCloseLogin} handleSubmitLogin={handleSubmitLogin} handleClickOpenSignup={handleClickOpenSignup} eMessage={eMessage} />
      <SignupPopup
                openSignup={openSignup}
                handleCloseSignup={handleCloseSignup}
                handleSubmitSignup={handleSubmitSignup}
                handleClickOpenLogin={handleClickOpenLogin}
                alert={alert}
            />
    </Box>
  );
}