import React, { useState, useEffect } from "react";
// import axios from 'axios';

function ScanCard(props: any) {
  const scanId: number = props.scanId;

  const defaultScanResults = {
    report: {
      critical: 0,
      warning: 0,
      info: 0,
    },
    id: 0,
    name: `Custom Scan 0`,
    description: "Untitled Scan - Scanned on 2022-09-25",
    timestamp: "2022-09-25T20:01:14.486Z",
  };
  //   };

  // let headers = new Headers();
  // headers.append("Access-Control-Allow-Origin ", "*")
  const getScanResults: any = async (scanId: number) => {
    const res = await fetch(
      `http://localhost:8000/api/v1/history/peek/${scanId}`,
      {
        method: "GET",
        mode: "cors",
        // headers: headers
      }
    );

    const jsonData = await res.json();

    return jsonData;
  };

  const [threatPeekReport, setThreatPeekReport] = useState<any>(defaultScanResults);

  if (threatPeekReport === defaultScanResults) {
    getScanResults(scanId)
      // .then((results: any) => results.json())
      .then((results: any) => setThreatPeekReport(results));
  }

    // useEffect(() => getScanResults(scanId).then((results: any) => setThreatPeekReport(results)), [threatPeekReport === defaultScanResults])
  //   const threatPeekReport = getScanResults();
  //   console.log(threatPeekReport);

  return (
    <a
      href={`/web/scans/${scanId}`}
      key={scanId}
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
            {threatPeekReport?.report.critical}
          </div>
          <div className="px-3 py-1 my-3 bg-orange-500 text-white rounded-full mx-2">
            {threatPeekReport?.report.warning}
          </div>
          <div className="px-3 py-1 my-3 bg-green-600 text-white rounded-full mx-2">
            {threatPeekReport?.report.info}
          </div>
        </div>
        {/* <a
        //   href={`http://localhost:8000/api/v1/history/info/${scanId}`}
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
