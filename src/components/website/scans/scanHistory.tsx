import ScanCard from "./scancard";

function ScanHistory(props: any) {
  return (
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-100 mx-5 px-5">
            {[1, 2, 3, 4, 5].map((ele) => (
              <ScanCard key={ele} scanId={ele}></ScanCard>
            ))}
          </div>
  );
}

export default ScanHistory;
