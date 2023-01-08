import { createContext, useContext, useState } from "react";

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", matchMedia("(prefers-color-scheme: dark)").matches);
};

const DarkModeContext = createContext();
const useDarkMode = () => { return useContext(DarkModeContext); }

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "true");
    const toggle = () => {
        localStorage.setItem("theme", !darkMode);
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ on: darkMode, toggle: toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default useDarkMode;
export { DarkModeProvider };
