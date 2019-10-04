import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem linke="/" active>Buger Builder</NavigationItem>
        <NavigationItem linke="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;