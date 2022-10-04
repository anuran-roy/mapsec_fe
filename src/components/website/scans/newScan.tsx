import React, { useState, useEffect } from "react";
// import { navigate, Redirect, ActiveLink } from "raviger";

export default function NewScan(props: any) {
  const [scanArrived, setScanArrived] = useState<boolean>(false);
  const [scanContent, setScanContent] = useState<any>({});
  const StartScan: any = async (
    scanDetails: any = {
      scope: "all",
      details: { ip: "192.168.0.1" },
      timestamp: new Date(),
      target_device: {
        name: "Realme Narzo 20 Pro",
        model_number: "RMX2161",
        ip: "192.168.0.1",
      },
    }
  ) => {
    try {
      fetch("http://localhost:8000/api/v1/scanner/new", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(scanDetails),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((jsonData) => {
          setScanArrived(true);
          setScanContent(jsonData);
        });
      // return jsonData;
    } catch (err) {
      console.error(err);
      setScanArrived(true);
      setScanContent({ message: "An unexpected error occurred" });
      return {};
    }
  };

  useEffect(() => setScanContent(StartScan()), []);

  if (scanArrived === true) {
    // console.log(`scanContent = ${scanContent}`);
  }
  // console.log(scanContent);

  return (
    <div className="h-screen max-w-screen opacity-100 hover:opacity-100 bg-gray-100">
      {/* {scanArrived === false ? <div>Scanning...</div> : <></>} */}
      <div className="flex flex-col rounded-md p-3 opacity-100 text-left mx-5 my-3 px-3 py-1 bg-white">
        <div className="flex flex-col">
          {scanArrived === false ? (
            <div className="animate-pulse flex space-x-4 space-y-6">
              <div className="rounded-full bg-slate-200 max-h-screen max-w-screen"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-96 bg-slate-200 rounded"></div>
                <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-64 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-64 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-64 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            Object.keys(scanContent?.report).map((ele: any, idx: number) => {
              return (
                <div key={`ele-${idx}`}>
                  <div className="flex flex-col">
                    Id: {scanContent?.id}
                    <br />
                    Description: {scanContent?.description}
                    <br />
                    Timestamp: {scanContent?.timestamp}
                    <br />
                  </div>
                  <h3 className="text-4xl text-gray-700 font-bold m-3 capitalize">
                    {ele}
                  </h3>
                  <div>
                    {scanContent?.report[ele].details.map(
                      (details: any, int_idx: number) => {
                        return (
                          <div>
                            <div>
                              <div className="font-bold">Type:</div>{" "}
                              {details.type}
                            </div>
                            <div>
                              <div className="font-bold">Description:</div>{" "}
                              {details.description}
                            </div>
                            <div>
                              <div className="font-bold">Timestamp:</div>{" "}
                              {details.timestamp}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className=""></div>
      {
        // JSON.stringify(scanContent)
      }
    </div>
  );
}
