const IconArrowDown = ({ color = 'black', width = '21', height = '20' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 18.2373L24.4627 12.698L23.3707 10.6353L14 15.596L4.62935 10.6353L3.53735 12.698L14 18.2373Z"
        fill={color}
      />
    </svg>
  );
};

export { IconArrowDown };
