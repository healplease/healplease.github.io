import React, { useEffect, useState } from "react";

import FixedBackground from "../fixedBackground/FixedBackground";
import StartScreen from "../startScreen/StartScreen";

import './home.scss';

const classes = {
    home: "home"
};

const Home = () => {
    // 0 - logo is not clicked yet, 1 - logo is clicked, 2 - hide animation, 3 - hide logo page
    const [logoPage, setLogoPage] = useState(0);

    useEffect(() => {}, []);


    return (
        <div className={classes.home}>
            <FixedBackground logoPage={logoPage} setLogoPage={setLogoPage} />
            <StartScreen logoPage={logoPage} setLogoPage={setLogoPage} />
        </div>
    );
};

export default Home;