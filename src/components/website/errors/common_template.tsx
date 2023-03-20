import setPageTitle from "../../../utils/setPageTitle";
import InsertJoke from "../jokes/jokes";

function CommonError(props: any) {
  setPageTitle("MapSec");
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 top-0 bottom-0 left-0 right-0 align-middle max-w-screen h-screen font-bold text-center">
        <div className="text-gray-600 text-4xl">{props.message}</div>
        <div className="my-3 mx-2 py-2">
          P.S: Before you go, wanna know something?
          <div className="italic font-normal">
            <InsertJoke />
          </div>
        </div>
        <a
          href="/web/dashboard"
          className="px-5 my-5 py-3 rounded-md border-2 border-gray-700 hover:bg-gray-700 hover:text-white text-gray-700 cursor-pointer"
        >
          Return to Dashboard
        </a>
      </div>
    </>
  );
}

export default CommonError;
