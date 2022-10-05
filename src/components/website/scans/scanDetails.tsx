import React, { useEffect, useState } from "react";

function ScanDetails(props: any) {
  const scanId: any = props.scanId;

  // console.log(props.scanId);

  const defaultScanDetails: any = {
    report: {
      critical: {
        count: 1,
        details: [
          {
            type: "NA",
            description: "NA",
            timestamp: "NA",
          },
        ],
      },
      warning: {
        count: 1,
        details: [
          {
            type: "NA",
            description: "NA",
            timestamp: "NA",
          },
        ],
      },
      info: {
        count: 1,
        details: [
          {
            type: "NA",
            description: "NA",
            timestamp: "NA",
          },
        ],
      },
    },
    id: scanId,
    name: `Custom Scan ${scanId}`,
    description: "Untitled Scan - Scanned on 2022-09-25",
    timestamp: "2022-09-25T20:01:14.486Z",
    target_device: {
      name: "NA",
      platform: "Android",
      type: "phone",
      metadata: {
        version: "11.0",
        baseband: "NA",
        kernel: "",
        build_number: "",
      },
    },
  };

  const [threatReport, setThreatReport] = useState<any>(defaultScanDetails);

  const getScanDetails: any = () => {
    fetch(`http://localhost:8000/api/v1/scanner/info/${scanId}`, {
      method: "GET",
      mode: "cors",
      // headers: headers
    })
      .then((res) => res.json())
      .then((res) => {
        setThreatReport(res);
      });
  };

  useEffect(() => getScanDetails(), []);

  //   console.log(threatReport);
  return (
    <div className="rounded-md">
      <div className="rounded-md m-5 p-3 bg-white w-100">
        <h2 className="font-bold text-left px-3 text-2xl text-gray-600">
          {threatReport?.name}
        </h2>
        <div className="flex flex-row mx-3 my-3 italic text-gray-500 text-left text-md">
          <div className="font-bold">{threatReport?.timestamp}</div>: {threatReport?.description}
        </div>
        <div className="flex flex-row mx-3 my-3 italic text-gray-500 text-left text-md">
          <div className="font-bold">Scanned from</div>: {threatReport?.device}
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="rounded-md col-span-1 p-3 mx-5 bg-white">
          <h3 className="font-bold text-left p-3 m-3 text-2xl text-gray-600">
            Stats for {threatReport?.target_device?.name}
          </h3>
          <div className="text-left self-justify-center m-3 px-3">
            {Object.keys(threatReport?.target_device).map((ele: any) => {
              if (ele !== "metadata") {
                return (
                  <div className="my-3">
                    <div className="font-bold capitalize">{ele}</div>
                    <div>{threatReport?.target_device[ele]}</div>
                  </div>
                );
              } else {
                return (
                  <div className="my-3">
                    <div className="font-bold">Metadata </div>
                    {Object.keys(threatReport?.target_device?.metadata).map(
                      (ele: any) => (
                        <div>
                          {ele}: {threatReport?.target_device?.metadata[ele]}
                        </div>
                      )
                    )}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="rounded-md col-span-2 p-3 mx-5 bg-white">
          <h3 className="capitalize font-semibold text-2xl text-gray-700 py-3 my-3">
            Report for {threatReport?.target_device?.name}
          </h3>
          {Object.keys(threatReport?.report).map((ele: any, idx: number) => {
            return (
              <div key={`report-${idx}`} className="mx-5 px-5 my-3 py-3">
                <h4 className="capitalize font-semibold text-xl text-gray-700">
                  {ele}
                </h4>
                <div>Count: {threatReport?.report[ele]?.count}</div>
                <div>
                  {threatReport?.report[ele]?.details.map((det: any) => {
                    return (
                      <div className="text-left">
                        {Object.keys(det).map((key) => {
                          return (
                            <div className="flex flex-row">
                              <div className="font-bold capitalize">{key}</div>:{" "}
                              {det[key]}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ScanDetails;
