import React from "react";

import osuBG from "../../../assets/images/osu-wallpaper.jpg";
import './fixed-background.scss';

const classes = {
    fixedBackground: "fixed-background",
    fixedBackgroundImage: "fixed-background-image",
};

const FixedBackground = ({ logoPage, setLogoPage }) => {
    const returnLogoToCenter = () => {
        if (logoPage === 1) {
            setLogoPage(0);
        };
    };

    return (
        <div className={classes.fixedBackground}>
            <img
                src={osuBG}
                alt="osu wallpaper"
                className={classes.fixedBackgroundImage}
                onClick={returnLogoToCenter}
            />
        </div>
    );
};

export default FixedBackground;