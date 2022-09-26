function NavBar(props: any) {
  return (
    <div className="navbar bg-gray-100 flex flex-row sticky top-0 z-50 shadow-md">
      <h1 className="text-4xl top-0 px-5 py-4 font-bold text-gray-600 justify-self-center text-left">
        {props.page}
      </h1>
      <div className="w-100"></div>
      <div className="right-0 top-0 py-5 px-3 text-gray-700 font-medium">
        Account
      </div>
    </div>
  );
}

export default NavBar;
