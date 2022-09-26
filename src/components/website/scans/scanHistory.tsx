import { useState } from "react";
import Menu from "../menu";
import NavBar from "../navbar";
import ScanCard from "./scancard";
import Canvas from "../canvas";

function ScanHistory(props: any) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <Menu></Menu>
      <Canvas>
        <NavBar page="My Scans"></NavBar>
        <div className="content py-5 my-5">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-100 mx-5 px-5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((ele) => (
              <ScanCard key={ele} scanId={ele}></ScanCard>
            ))}
          </div>
        </div>
      </Canvas>
    </div>
  );
}

export default ScanHistory;
