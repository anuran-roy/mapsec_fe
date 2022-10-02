import React, { useState, useEffect, useCallback } from "react";
import Menu from "../menu";
import NavBar from "../navbar";
import ScanCard from "../scans/scancard";
import InsertJoke from "../jokes/jokes";

function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState<any>("");

  return (
    <>
      <div id="joke" className="italic font-bold">
        <InsertJoke />
      </div>
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
    </>
  );
}

export default Dashboard;
