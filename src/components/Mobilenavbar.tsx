function Mobilenavbar() {
  return (
    <>
      <div className="fixed top-12 right-3 w-16 h-16 flex lg:hidden">
        <span className="absolute bg-text-white w-5 h-1 rounded-2xl translate-x-5 translate-y-4"></span>
        <span className="absolute bg-text-white w-7 h-1 rounded-2xl translate-x-3 translate-y-8"></span>
        <span className="absolute bg-text-white w-10 h-1 rounded-2xl translate-x-0"></span>
      </div>
    </>
  );
}

export default Mobilenavbar;
