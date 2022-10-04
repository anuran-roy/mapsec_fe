import React, { useState, useEffect } from "react";
// import axios from 'axios';

function ScanCard(props: any) {
  const scanId: any = props.scanId;

  const defaultScanResults = {
    report: {
      critical: 0,
      warning: 0,
      info: 0,
    },
    id: scanId,
    name: `Custom Scan ${scanId}`,
    description: "Untitled Scan - Scanned on 2022-09-25",
    timestamp: new Date(),
  };
  //   };

  const [threatPeekReport, setThreatPeekReport] =
    useState<any>(defaultScanResults);

  // let headers = new Headers();
  // headers.append("Access-Control-Allow-Origin ", "*")
  const getScanResults = () => {
    fetch(`http://localhost:8000/api/v1/scanner/peek/${scanId}`, {
      method: "GET",
      mode: "cors",
      // headers: headers
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setThreatPeekReport(res);
      });
  };

  useEffect(() => getScanResults(), []);

  // useEffect(() => getScanResults(scanId).then((results: any) => setThreatPeekReport(results)), [threatPeekReport === defaultScanResults])
  //   const threatPeekReport = getScanResults();
  //   console.log(threatPeekReport);

  return (
    <a
      href={`/web/scans/${scanId}`}
      // key={`link-${scanId}`}
      className="rounded-md hover:shadow-lg cursor-pointer bg-gray-300 mx-1 my-5 py-5 px-5"
    >
      <div className="text-gray-800 font-bold m-2 px-3 py-1">
        {threatPeekReport?.name}
      </div>
      <div className="text-gray-600 font-italic mx-2 my-1 px-3 py-1">
        {threatPeekReport?.description}
      </div>
      <div className="justify-justify w-100 text-center object-center items-center">
        <div className="flex flex-row gap-2 py-5">
          <div className="px-3 py-1 my-3 bg-red-500 text-white rounded-full mx-2">
            {threatPeekReport?.report?.critical}
          </div>
          <div className="px-3 py-1 my-3 bg-orange-500 text-white rounded-full mx-2">
            {threatPeekReport?.report?.warning}
          </div>
          <div className="px-3 py-1 my-3 bg-green-600 text-white rounded-full mx-2">
            {threatPeekReport?.report?.info}
          </div>
        </div>
        {/* <a
        //   href={`http://localhost:8000/api/v1/scanner/info/${scanId}`}
          href={`/scans/${scanId}`}
          className="px-5 py-2 my-5 mx-5 rounded-md text-gray-700 border-2 border-gray-700 hover:text-white hover:bg-gray-700"
        >
          Explore &gt;&gt;
        </a> */}
      </div>
    </a>
  );
}

export default ScanCard;
