import React from "react";
import styles from "./Location.modules.css";
import LocationOnIcon from '@material-ui/icons/LocationOn';

export const Location = () => {
    return (

        <div className="container">
            <a className={ styles.location_top } href="#"><LocationOnIcon /> New York</a>
        </div>
    );
}