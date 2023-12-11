import React from "react";
import {ThemeProvider} from "styled-components"
import { lightTheme, darkTheme } from "../../styles/themes";
import { useThemeMode } from "../../hooks/useThemeMode";


interface ThemeContextProps {
    children:React.ReactNode;
}

const ThemeContext: React.FC<ThemeContextProps> = ({children}) => {
    const {theme} = useThemeMode();

    const themeMode = theme === 'dark' ? darkTheme : lightTheme;

    return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
};

export default ThemeContext;