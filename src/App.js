import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import { SliderData } from './data/SliderData';
import Hero from "./components/Hero";
import DropDown from "./components/DropDown";
import InfoSection from "./components/InfoSection";
import { InfoData, InfoDataTwo } from "./data/InfoData";
import LoginForm from "./components/LoginForm";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
      <LoginForm />
    </>
  );
}

export default App;
 