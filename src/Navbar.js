import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box} from '@mui/system';
import {Drawer, List, ListItem, Hidden} from '@mui/material'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const drawerLinks = (
    <Box className="drawer-content">
      <IconButton
        className="close-button"
        size="large"
        color='inherit'
        edge="end"
        aria-label="close"
        onClick={toggleDrawer(false)}
      >
        <CloseIcon />
      </IconButton>
      <List className="drawer-list">
        <ListItem button>
          <NavLink to="/about" className="navlink" activeClassName="activeNavlink" onClick={toggleDrawer(false)}>
            About Us
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink to="/appointments" className="navlink" activeClassName="activeNavlink" onClick={toggleDrawer(false)}>
            Appointment Requests
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink to="/reviews" className="navlink" activeClassName="activeNavlink" onClick={toggleDrawer(false)}>
            Reviews
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Box display="flex" alignItems="center">
           
            <NavLink to="/" className="navlink" activeClassName="activeNavlink">
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              The Inner Garden
              </Typography>
            </NavLink>

          </Box>
          <Box className={`navbar-links ${drawerOpen ? 'hidden' : ''}`}>
            <NavLink to="/about" className="navlink" activeClassName="activeNavlink" sx={{ marginRight: 2 }}>
              About Us
            </NavLink>
            <NavLink to="/appointments" className="navlink" activeClassName="activeNavlink" sx={{ marginRight: 2 }}>
              Appointment Requests
            </NavLink>
            <NavLink to="/reviews" className="navlink" activeClassName="activeNavlink">
              Reviews
            </NavLink>
          </Box>
          <Hidden mdUp>
          <IconButton
            className="menu-button"
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} classes={{ paper: 'drawer' }}>
        {drawerLinks}
      </Drawer>
    </Box>
  );
};

export default Navbar;
