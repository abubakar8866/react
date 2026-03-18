import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");

    function changeTheme() {
        setTheme((i) => i === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;