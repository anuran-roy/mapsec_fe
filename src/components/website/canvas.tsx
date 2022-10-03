function Canvas(props: any) {
  return (
    <div className="w-screen h-screen rounded-md bg-gray-100 overflow-y-auto items-center object-center text-center">
      {props.children}
    </div>
  );
}

export default Canvas;
