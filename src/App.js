import "./App.css";
import styled from "styled-components";
import { Toggletheme } from "./components/Theme";
import { Mainpage } from "./components/Mainpage";
import { Sidebar } from "./components/Sidebar";
import { Users } from "./components/Users";

function App() {
  return (
    <div>
      <Mainpage>
        <Sidebar></Sidebar>
        <Users>
          <Toggletheme />
        </Users>
      </Mainpage>
    </div>
  );
}

export default App;
