import React from 'react';
import classes from './dashboard.module.css';
 
import Navbar from './Navbar/Navbar';
import Home from './Dashboard_home/dashboard_home';


const dashboard = () => {

return (
<div className={classes.dashboard}>
    <Navbar />
    <Home />  
</div>
);

}

export default dashboard;