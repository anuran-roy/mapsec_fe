import { useState, useEffect } from "react";
import ScanCard from "./scancard";
import setPageTitle from "../../../utils/setPageTitle";

function ScanHistory(props: any) {
  const [resultArrived, setResultArrived] = useState<any>({
    count: 0,
    ids: [],
  });

  const getScanCount = () => {
    fetch("http://localhost:8000/api/v1/vulnerabilities/get_count")
      .then((res) => res.json())
      .then((jsonData: any) => {
        setResultArrived(jsonData);
      });
  };

  useEffect(() => getScanCount(), []);

  setPageTitle("Scans - MapSec");

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-100 mx-5 px-5">
      {resultArrived.ids.map((ele: any, idx: number) => (
        <ScanCard key={`card-${idx}`} scanId={ele} />
      ))}
    </div>
  );
}

export default ScanHistory;
