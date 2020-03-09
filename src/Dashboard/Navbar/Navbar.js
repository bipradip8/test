import React from 'react';
import classes from './Navbar.module.css';
import { Navbar} from 'react-bootstrap'; 

const navbar = () => {

    return (
        <Navbar fixed="top" className={classes.navbar}>
        {/* <Navbar.Brand><span className={}>Macropace Technologies</span></Navbar.Brand> */}
        <span className={classes.logo}>Macropace Technologies</span>
        <div className={classes.header}>
            <button className={classes.header_links}>Home</button>
            <button className={classes.header_links}>Profile</button>
            <button className={classes.header_links}>Jobs</button>
            <button className={classes.header_links}>Logout</button>
        </div>
        
    </Navbar>
    );

}

export default navbar;