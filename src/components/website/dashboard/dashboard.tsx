import React, { useState, useEffect, useCallback } from "react";
import Menu from "../menu";
import NavBar from "../navbar";
import ScanCard from "../scans/scancard";
import InsertJoke from "../jokes/jokes";

function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState<any>("");

  return (
    <div className="flex flex-row w-screen h-screen">
      <Menu></Menu>
      <div className="w-screen rounded-md bg-gray-100 overflow-y-auto items-center object-center text-center">
        <NavBar page="Dashboard"></NavBar>
        <div className="text-gray-700 py-5 my-5 bg-white mx-5 py-3 rounded-md">
          <div id="joke" className="italic font-bold"><InsertJoke /></div>
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          maxime.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          maxime.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          maxime.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          maxime.
          <br />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
