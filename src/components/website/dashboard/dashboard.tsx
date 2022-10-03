import React, { useState, useEffect, useCallback } from "react";
import Menu from "../menu";
import NavBar from "../navbar";
import ScanCard from "../scans/scancard";
import InsertJoke from "../jokes/jokes";
import Plot from 'react-plotly.js';


function Dashboard() {
  const [currentComponent, setCurrentComponent] = useState<any>("");

  return (
    <>
      <div id="joke" className="italic font-bold">
        <InsertJoke />
      </div>
      <Plot
        className="m-5"
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            // marker: {color: '22c55e'},
          },
          // {type: 'bar', marker: {color: "22c55e"}, x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {showlegend: false, paper_bgcolor: "f3f4f6", plot_bgcolor: "f3f4f6", width: 1280, height: 720, title: 'Vulnerabilities count in weekly basis'} }
      />
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
