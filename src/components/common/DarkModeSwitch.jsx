import React from "react";
import { Switch } from "antd";

import useDarkMode from "../../hooks/useDarkMode";

const DarkModeSwitch = () => {
    const darkMode = useDarkMode();

    return (
        <Switch
            checked={darkMode.on}
            onChange={darkMode.toggle}
            size="small"
        />
    );
};

export default DarkModeSwitch;
