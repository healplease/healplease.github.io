import React from "react";
import { Switch } from "antd";

import useDarkMode from "../../hooks/useDarkMode";

const DarkModeSwitch = () => {
    const darkMode = useDarkMode();

    return (
        <Switch
            style={{
                marginRight: "0.5rem",
            }}
            checked={darkMode.on}
            onChange={darkMode.toggle}
            size="small"
        />
    );
};

export default DarkModeSwitch;
