import { ActiveLink } from "raviger";

function Menu() {
  return (
    <div className="left-0 bottom-0 top-0 px-3 py-5 text-gray-200 w-80 bg-slate-600 rounded-r-sm">
      <div className="text-4xl text-center font-semibold">MapSec</div>
      <div className="border-2 my-3 mx-3 rounded-xl border-slate-500"></div>
      <div className="overflow-y-hidden flex flex-col justify-self-center text-center py-3 my-1">
        <ActiveLink
          href="/web/dashboard"
          activeClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          Dashboard
        </ActiveLink>
        <ActiveLink
          href="/web/credentials"
          activeClass="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600 border-2 border-gray-200"
          exactActiveClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          My Credentials
        </ActiveLink>
        <ActiveLink
          href="/web/threats"
          activeClass="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600 border-2 border-gray-200"
          exactActiveClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          Threats
        </ActiveLink>
        <ActiveLink
          href="/web/insights"
          activeClass="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600 border-2 border-gray-200"
          exactActiveClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          Insights
        </ActiveLink>
        <ActiveLink
          href="/web/controllers"
          activeClass="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600 border-2 border-gray-200"
          exactActiveClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          Controllers
        </ActiveLink>
        <ActiveLink
          href="/web/network"
          activeClass="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600 border-2 border-gray-200"
          exactActiveClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          My Network
        </ActiveLink>
        <ActiveLink
          href="/web/scans"
          activeClass="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600 border-2 border-gray-200"
          exactActiveClass="w-100 cards px-3 py-3 my-1 max-w-screen rounded-md cursor-pointer bg-white text-gray-600"
          className="w-100 cards px-3 py-3 my-1 rounded-md cursor-pointer hover:bg-white hover:text-gray-600"
        >
          Scans
        </ActiveLink>
      </div>
      <div className="flex grow bottom-0 flex-col justify-center justify-self-center">
        <div className="flex-grow"></div>
        <ActiveLink
          href="/web/scans/new"
          className="mb-auto items-center justify-center justify-self-center bottom-0 text-center left-0 w-64 my-2 py-2 px-5 cursor-pointer hover:bg-white hover:text-green-500 rounded-md  text-white bg-green-500 font-bold text-xl"
        >
          Scan
        </ActiveLink>
      </div>
    </div>
  );
}

export default Menu;
