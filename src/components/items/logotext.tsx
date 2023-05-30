function LogoText() {
  return (
    <>
      <img
        src="/LogoStroke.svg"
        alt="Aapelix Logo"
        className="absolute w-24 left-5"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      />
      <h1
        className="absolute left-32 text-6xl top-2 dev"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        aapelix.dev
      </h1>
    </>
  );
}

export default LogoText;
