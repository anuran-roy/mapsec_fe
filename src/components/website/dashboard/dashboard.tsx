import React, { useState, useEffect } from "react";
import Menu from "../menu";
import NavBar from "../navbar";
import ScanCard from "../scans/scancard";
import InsertJoke from "../jokes/jokes";
import Plot from "react-plotly.js";
import setPageTitle from "../../../utils/setPageTitle";

function Dashboard() {
  const [analyticsArrived, setAnalyticsArrived] = useState<boolean>(false);
  const [analyticsData, setAnalyticsData] = useState<any>([
    [1, 2, 3],
    [2, 6, 3],
  ]);

  const [graphParams, setGraphParams] = useState<any>({
    freq: 'D',
    threat_type: 'all',
  });
  setPageTitle("Dashboard - MapSec");

  const getAnalytics = () => {
    fetch(`http://localhost:8000/api/v1/analytics/scanhistory?${new URLSearchParams(graphParams).toString()}`, {
      method: "GET",
      mode: "cors",
      // body: JSON.stringify(scanDetails),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setAnalyticsArrived(true);
        console.log(res);
        setAnalyticsData(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => getAnalytics(), [analyticsArrived === false]);

  return (
    <>
      <div id="joke" className="italic font-bold">
        <InsertJoke />
      </div>
      <div className="max-w-screen">{analyticsArrived ? (<Plot
        className="m-5"
        data={[
          {
            x: analyticsData[0],
            y: analyticsData[1][0],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: 'ff2300' },
            name: "critical",
          },
          {
            x: analyticsData[0],
            y: analyticsData[1][1],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: 'eaa500' },
            name: "warnings",
          },
          {
            x: analyticsData[0],
            y: analyticsData[1][2],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: '22c55e' },
            name: "info",

          },
          // {type: 'bar', marker: {color: "22c55e"}, x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{
          yaxis: {
            autotick: false,
            tickmode: "linear",
            tick0: 0,
            zeroline: true,
            dtick: 5,
          },
          xaxis: {
            autotick: false,
            tickmode: "linear",
            tick0: "01-01-1970",
            zeroline: true,
          },
          // barmode: "stack",
          showlegend: false,
          paper_bgcolor: "f3f4f6",
          plot_bgcolor: "f3f4f6",
          width: 1280,
          height: 720,
          // responsive: true,
          title: "Vulnerabilities count across time",
        }}
      />) : (<div className="rounded-md p-4 max-w-6xl w-full mx-auto">
        <div className="animate-pulse flex space-x-4">
          {/* <div className="rounded-full bg-slate-200 h-10 w-10"></div> */}
          <div className="flex-1 space-y-6 py-1">
            <div className="h-96 mx-6 my-3 rounded-md bg-slate-200 rounded text-4xl font-bold align-middle flex flex-col text-slate-400 justify-center">Getting Analytics...</div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4"></div>
            </div>
          </div>
        </div>
      </div>)}
      </div>
      {/* <br />
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
      <br /> */}
    </>
  );
}

export default Dashboard;
