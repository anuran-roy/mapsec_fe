import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AccountSettings(props: any) {
  const [syncData, setSyncData] = useState<any>({});
  const [syncDataArrived, setSyncDataArrived] = useState<boolean>(false);

  const getSyncData = () => {
    fetch("http://localhost:8000/api/v1/sync/to_file", {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    })
    .then(res => {
        return res.blob();
    })
    .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = "db.json";
        document.body.appendChild(a); // append the element to the dom, otherwise it won't work in Firefox
        a.click();
        a.remove(); // afterwards, remove the element  
    });

  };

  return (
    <div className="max-w-7xl w-full py-2 mx-3 justify-center">
      <div className="flex flex-row my-3 justify-center align-middle" id="sync-settings">
        <div className="text-gray-600">
            <h3 className="text-4xl font-bold text-left my-3">Download data</h3>
            <div className="italic text-left text-md">Download data in JSON format to sync with other devices.</div>
        </div>
        <a className="px-3 py-2 my-2 mx-3 md:text-3xl lg:text-6xl" href="http://localhost:8000/api/v1/sync/to_file"><svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="border-2 border-gray-300 rounded-md py-3 px-2 hover:shadow-lg bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> </svg></a>
      </div>
      <div className="flex align-middle h-2 bg-slate-200 rounded w-100 justify-self-center"></div>
    </div>
  );
}
