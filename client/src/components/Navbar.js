import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography>Google Books Search</Typography>
        <div style={{marginLeft:"auto"}}>
          <NavLink to="/"><Button color="inherit">Search</Button></NavLink>
          <NavLink to="/saved"><Button color="inherit">Saved</Button></NavLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;