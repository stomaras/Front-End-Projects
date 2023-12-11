import {createGlobalStyle, withTheme} from "styled-components"
import { ThemeProps } from "./themes"

type GlobalThemeProps = {
    theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
    :root {
        --dark-background: #1a1b27;
        --light-background: #f2f2f2;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: ${({theme}: GlobalThemeProps) => theme.background};
    }

`

export default withTheme(globalStyle)