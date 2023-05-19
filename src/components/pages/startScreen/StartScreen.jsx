import React from "react";

import logo from "../../../assets/images/osu-logo.png";
import './start-screen.scss';

const classes = {
    startScreen: "start-screen",
    startScreenTopLayer: "start-screen-top-layer",
    info: "info",
    infoAccount: "info-account",
    infoAccountAvatar: "info-account-avatar",
    infoTime: "info-time",
    player: "player",
    startScreenLogo: "start-screen-logo",
    startScreenLogoContainer: "start-screen-logo-container",
    startScreenLogoRipple: "start-screen-logo-ripple",
    startScreenLogoStatic: "start-screen-logo-static",
    startScreenLogoPulse: "start-screen-logo-pulse",
    startScreenMenuContainer: "start-screen-menu-container",
    startScreenMenuButton: "start-screen-menu-button",
};

const StartScreen = ({ logoPage, setLogoPage }) => {
    const setLogoToCenter = () => {
        if (logoPage === 0) {
            setLogoPage(1);
        };
    };

    return (
        <main className={classes.startScreen}>
            <div className={classes.startScreenTopLayer}>
                <div className={classes.info}>
                    <div className={classes.infoAccount}>
                        <img src={logo} alt="osu logo" className={classes.infoAccountAvatar} />
                        <div>
                            test
                        </div>
                    </div>
                    <div className={classes.infoTime}>
                        test
                    </div>
                </div>
                <div className={classes.player}>
                    <div>
                        test
                    </div>
                </div>
            </div>

            <div className={classes.startScreenLogo}>
                <div
                    className={classes.startScreenMenuContainer}
                    style={{
                        animation: logoPage === 1 ? "slideRight 1s forwards" : "slideRightReset 1s forwards",
                    }}
                >
                    <div className={classes.startScreenMenuButton}>
                        <div className="text">
                            Play
                        </div>
                    </div>
                    <div className={classes.startScreenMenuButton}>
                        <div className="text">Options</div>
                    </div>
                    <div className={classes.startScreenMenuButton}>
                        <div className="text">Exit</div>
                    </div>
                </div>


                <div
                    className={classes.startScreenLogoContainer}
                    style={{
                        animation: logoPage === 1 ? "slideLeft 1s forwards" : "slideLeftReset 1s forwards",
                    }}
                >
                    <div className={classes.startScreenLogoRipple} />
                    <img
                        src={logo}
                        alt="osu logo"
                        className={classes.startScreenLogoStatic}
                        onClick={setLogoToCenter}
                    />
                    <img
                        src={logo}
                        alt="osu logo pulse"
                        className={classes.startScreenLogoPulse}
                    />
                </div>
            </div>
        </main>
    );
};

export default StartScreen;