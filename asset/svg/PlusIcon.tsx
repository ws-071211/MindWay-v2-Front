const PlusIcon = ({color}:any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M3 12L21 12'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M12 3V21'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default PlusIcon;
