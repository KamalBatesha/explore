import "./App.css";
import {
  Footer,
  Header,
  Possibillity,
  WhatGPT3,
  Blog,
  Features,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibillity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
