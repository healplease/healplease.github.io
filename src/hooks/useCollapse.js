import { useState } from "react";

export const useCollapse = (initialState=false) => {
    const [collapsed, setCollapsed] = useState(initialState);
    const toggle = () => setCollapsed(!collapsed);
    return [collapsed, toggle];
};
