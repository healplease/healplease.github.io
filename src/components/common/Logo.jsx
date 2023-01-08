import React, { useEffect, useState } from "react";

import useDarkMode from "../../hooks/useDarkMode";

import "./logo.scss";

const Logo = ({ collapsed }) => {
    const darkMode = useDarkMode();
    const [first, setFirst] = useState("heal");
    const [second, setSecond] = useState("please");

    useEffect(() => {
        if (collapsed) {
            setFirst("h");
            setSecond("p");
        } else {
            // set first and second to "heal" and "please" letter by letter with interval of 0.1s
            let i = 0, j = 0;

            const firstInterval = setInterval(() => {
                if (collapsed) clearInterval(firstInterval);
                if (i < 4) {
                    i++;
                    setFirst("heal".substring(0, i));
                } else {
                    clearInterval(firstInterval);
                }
            }, 100);

            const secondInterval = setInterval(() => {
                if (collapsed) clearInterval(secondInterval);
                if (j < 6) {
                    j++;
                    setSecond("please".substring(0, j));
                } else {
                    clearInterval(secondInterval);
                }
            }, 100);
        }
    }, [collapsed]);

    return (
        <div style={{
            fontFamily: "Consolas, Courier new, monospace",
            textAlign: "center",
            padding: "0.45rem",
            fontSize: "2rem",
            height: "3rem"
        }}>
            <span style={{
                color: darkMode.on ? "white" : "black",
                display: "inline-block",
            }}>
                {first}
            </span>
            <span style={{
                color: "#0094FF",
                display: "inline-block",
            }}>
                {second}
            </span>
        </div>
    );
};

export default Logo;
