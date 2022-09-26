import React, { useState, useEffect } from "react";
import Menu from "../menu";
import Canvas from "../canvas";
import NavBar from "../navbar";

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
  const getScanDetails: any = async (scanId: number) => {
    const res = await fetch(
      `http://localhost:8000/api/v1/history/info/${scanId}`,
      {
        method: "GET",
        mode: "cors",
        // headers: headers
      }
    );

    const jsonData = await res.json();

    return jsonData;
  };

  const [threatReport, setThreatReport] = useState<any>(defaultScanDetails);

  if (threatReport === defaultScanDetails) {
    getScanDetails(scanId)
      // .then((results: any) => results.json())
      .then((results: any) => setThreatReport(results));
  }

  //   console.log(threatReport);
  return (
    <div className="flex flex-row w-screen h-screen">
      <Menu></Menu>
      <Canvas>
        <NavBar page="Scans"></NavBar>
        <div className="rounded-md m-5 p-3 bg-white w-100">
          <h2 className="font-bold text-left px-3 text-2xl text-gray-600">{threatReport?.name}</h2>
          <div className="p-3 my-3 italic text-gray-500 text-left text-md">{threatReport?.description}</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1 p-3 mx-5 bg-white">
            <h3 className="font-bold text-left px-3 text-2xl text-gray-600">Stats for {threatReport?.target_device.name}</h3>
          </div>
          <div className="col-span-2 p-3 mx-5 bg-white">
            <h3 className="font-bold text-left px-3 text-2xl text-gray-600">Stats for {threatReport?.target_device.name}</h3>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptates nisi repudiandae. Ipsum saepe nemo itaque quaerat natus porro, velit sequi dolore, repudiandae nam neque, aspernatur est dolorem sunt corrupti distinctio ex maiores nulla incidunt. Omnis blanditiis, aliquam, voluptatibus eveniet voluptas tempora autem quis quisquam, nobis harum vitae sapiente.
            </div>
          </div>
        </div>
      </Canvas>
    </div>
  );
}

export default ScanDetails;
