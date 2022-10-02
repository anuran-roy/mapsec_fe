import React, { useState, useEffect } from "react";
// import { navigate, Redirect, ActiveLink } from "raviger";

export default function NewScan(props: any) {
  const [scanArrived, setScanArrived] = useState<boolean>(false);
  const [scanContent, setScanContent] = useState<any>({});
  const StartScan: any = async (
    scanDetails: any = {
      scope: "all",
      details: { ip: "192.168.0.1" },
      timestamp: "2022-10-02T17:54:44.476Z",
      target_device: {
        name: "Realme Narzo 20 Pro",
        model_number: "RMX2161",
        ip: "192.168.0.1",
      },
    }
  ) => {
    try {
      const res = fetch("http://localhost:8000/api/v1/scanner/new", {
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
      return {};
    }
  };

  useEffect(() => setScanContent(StartScan()), []);

  if (scanArrived === true) {
    console.log(`scanContent = ${scanContent}`);
  }
  // console.log(scanContent);

  return (
    <div className="h-screen w-screen opacity-100 hover:opacity-100 bg-gray-100">
      <div className="flex flex-col rounded-md p-3 opacity-100 text-left mx-5 my-3 px-3 py-1 bg-white">
      {scanArrived === false ? (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ) :
        <div className="flex flex-col">
          Id: {scanContent?.id}
          <br />
          Description: {scanContent.description}
          <br />
          Timestamp: {scanContent.timestamp}
          <br />
        </div>
}
        <div className="flex flex-col">
          <h3 className="text-4xl text-gray-700 font-bold m-3">Critical</h3>
          {scanArrived === false ? (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {scanContent.report?.critical.details.map((details: any) => {
            return (
              <>
                <div>
                  <div className="font-bold">Type:</div> {details.type}
                </div>
                <div>
                  <div className="font-bold">Description:</div>{" "}
                  {details.description}
                </div>
                <div>
                  <div className="font-bold">Timestamp:</div>{" "}
                  {details.timestamp}
                </div>
              </>
            );
          })}
          <h3 className="text-4xl text-gray-700 font-bold m-3">Warnings</h3>
          {scanArrived === false ? (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {scanContent.report?.warning.details.map((details: any) => {
            return (
              <>
                <div>
                  <div className="font-bold">Type:</div> {details.type}
                </div>
                <div>
                  <div className="font-bold">Description:</div>{" "}
                  {details.description}
                </div>
                <div>
                  <div className="font-bold">Timestamp:</div>{" "}
                  {details.timestamp}
                </div>
              </>
            );
          })}
          <h3 className="text-4xl text-gray-700 font-bold m-3">Info</h3>
          {scanArrived === false ? (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          {scanContent.report?.info.details.map((details: any) => {
            return (
              <>
                <div>
                  <div className="font-bold">Type:</div> {details.type}
                </div>
                <div>
                  <div className="font-bold">Description:</div>{" "}
                  {details.description}
                </div>
                <div>
                  <div className="font-bold">Timestamp:</div>{" "}
                  {details.timestamp}
                </div>
              </>
            );
          })}
          <h3 className="text-4xl text-gray-700 font-bold m-3">Device Info</h3>
          {scanArrived === false ? (
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="m-3 p-3">
              {Object.keys(scanContent.target_device).map((ele: any, idx: any) => {
                return (
                  <div>{ele}: {JSON.stringify(scanContent?.target_device[ele])}</div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="">

      </div>
      {
      // JSON.stringify(scanContent)
      }
    </div>
  );
}
