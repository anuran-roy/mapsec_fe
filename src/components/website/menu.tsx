import React, { useState, useEffect } from "react";
import { navigate, Link } from "raviger";

function Menu() {
  return (
    <div className="left-0 bottom-0 top-0 px-3 py-5 text-gray-200 w-80 bg-slate-600 rounded-r-sm">
      <div className="text-4xl text-center font-semibold">MapSec</div>
      <div className="border-2 my-5 mx-3 rounded-xl border-slate-500"></div>
      <div className="overflow-y-hidden justify-self-center text-center py-3 my-3">
        <div onClick={() => navigate("/web/dashboard")} className="w-100 cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          Dashboard
        </div>
        <div onClick={() => navigate("/web/devices")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          My Devices
        </div>
        <div onClick={() => navigate("/web/credentials")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          My Credentials
        </div>
        <div onClick={() => navigate("/web/threats")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          Threats
        </div>
        <div onClick={() => navigate("/web/insights")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          Insights
        </div>
        <div onClick={() => navigate("/web/controllers")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          Controllers
        </div>
        <div onClick={() => navigate("/web/network")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          My Network
        </div>
        <div onClick={() => navigate("/web/scans")} className="cards px-3 py-3 rounded-md cursor-pointer hover:bg-white hover:text-gray-600">
          Scans
        </div>
      </div>
      <div onClick={() => navigate("/web/scans/new")} className="bottom-0 text-center left-0 mx-2 w-64 my-2 py-2 px-5 cursor-pointer hover:bg-white hover:text-green-500 rounded-md  text-white bg-green-500 font-bold text-xl">
        Scan
      </div>
    </div>
  );
}

export default Menu;
