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
    const [runningTime, setRunningTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRunningTime((runningTime) => runningTime + 1);
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={classes.home}>
            <FixedBackground logoPage={logoPage} setLogoPage={setLogoPage} />
            <StartScreen logoPage={logoPage} setLogoPage={setLogoPage} runningTime={runningTime} currentTime={currentTime} />
        </div>
    );
};

export default Home;