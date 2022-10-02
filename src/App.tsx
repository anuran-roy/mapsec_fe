import React from "react";
import logo from "./logo.svg";
import routes from "./routes/routes";
import { useRoutes } from "raviger";
import "./App.css";
import Canvas from "./components/website/canvas";
import Menu from "./components/website/menu";
import NavBar from "./components/website/navbar";

function App() {
  let route = useRoutes(routes);

  return (
    <div className="flex flex-row w-screen h-screen">
      <Menu></Menu>
      <Canvas>
        <NavBar page="My Scans"></NavBar>
        <div className="content py-5 my-5">{route}</div>
      </Canvas>
    </div>
  );

  // return (
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.tsx</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  // );
}

export default App;
