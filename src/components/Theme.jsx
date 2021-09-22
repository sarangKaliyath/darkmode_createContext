import { useContext } from "react";
import { ThemeContext } from "../Context/ThemContext";
import styled from "styled-components";
export function Toggletheme() {
    
    const { theme, handleTheme ,handleCheck} = useContext(ThemeContext);
    
    const ModeAling = styled.div`
    display:flex;
    `
  const DarkMode = styled.div`
    padding-top:7%;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: right;
    margin-right:10px;
  `;
  
  const Button = styled.button`
    width: 100px;
    height: 30px;
    `
  
  
    return (
      <ModeAling>
        <DarkMode>dark mode</DarkMode>
        <Button onClick={handleTheme}>{theme ? "Dark" : "Light"}</Button>
      </ModeAling>
    );

}