import React, { createContext, useState } from "react";
const GitHubContext = createContext();

const GitHubProvider = ({children}) => {

    const [color, setColor] = useState(false);
    const handleColorTheme = () => {
        setColor(!color)
    };

    const ColorHeader = {
        color,
        handleColorTheme
    }

    //console.log(ColorHeader)

    return (
        <GitHubContext.Provider value={ColorHeader}>
            {children}
        </GitHubContext.Provider>
    )
};

export { GitHubProvider };
export default GitHubContext;