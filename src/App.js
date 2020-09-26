import React from "react";

import { Headerbanner } from "./components/UI/Header/Headerbanner";
import { Logo } from "./components/UI/Header/Logo.js";
import { Location } from './components/UI/Header/Location';
import { Headersearch } from './components/UI/Header/Headersearch';



function App() {
  return (
    <div>

      <Headerbanner />
      <Logo />
      <Location />
      <Headersearch />
    </div>
  );
}

export default App;
