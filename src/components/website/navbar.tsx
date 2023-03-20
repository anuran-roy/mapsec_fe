function NavBar(props: any) {
  return (
    <div className="navbar py-3 bg-gray-100 flex flex-row sticky top-0 shadow-md">
      <h1 className="capitalize text-4xl top-0 px-5 py-1 font-bold text-gray-600 justify-self-center text-left">
        {props.page}
      </h1>
      <div className="max-w-7xl w-full"></div>
      <div className="flex flex-row align-middle">
      <a href="/web/account" className="right-0 top-0 my-2 py-1 px-3 flex flex-col justify-center rounded-md text-gray-700 font-medium hover:bg-gray-700 hover:text-white">
        Account
      </a>
      <a href="/web/about" className="right-0 top-0 my-2 py-1 px-3 flex flex-col justify-center rounded-md text-gray-700 font-medium hover:bg-gray-700 hover:text-white">
        About
      </a>
      <div className="w-32"></div>
      </div>
    </div>
  );
}

export default NavBar;
