import styled, { createGlobalStyle } from "styled-components";

import NightyURL from "../fonts/Nighty/Nighty.otf";
import NewakeURL from "../fonts/Newake/Newake.otf";
import SF_PRO from "../fonts/Sf_Pro/SfPro.otf";
// import theme from "./theme";
// const { colors, size } = theme;

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Newake";
        src: url(${NewakeURL});
    }

    @font-face {
        font-family: "Nighty";
        src: url(${NightyURL});
    }
    @font-face {
        font-family: "Sf_Pro";
        src: url(${SF_PRO});
    }
    * { 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Newake',  sans-serif;
    }
    html {
        scroll-behavior: smooth;
        max-width: 100vw;
        overflow-x: hidden !important;
    }

    body {
        background: rgba(200, 214, 229,1.0);
        position: relative;
        max-width: 100vw;
        overflow-x: hidden !important;
    }
`;

export const SContainer = styled.div`
  margin: 0px 10px 0 10px;
`;
