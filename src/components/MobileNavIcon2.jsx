const MobileNavIcon2 = (prop) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="33"
        viewBox="0 0 34 33"
        fill="none"
        className={prop.ClassName}
        onClick={prop.onClick}
      >
        <path
          d="M10.2949 9.625L24.0449 23.375M10.2949 23.375L24.0449 9.625"
          stroke="#1D4A0E"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default MobileNavIcon2;
