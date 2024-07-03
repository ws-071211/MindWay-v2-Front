type BarProps = {
  before: number;
  after: number;
};

const Bar = ({ before, after }: BarProps) => {
  const width = (268 * after) / before;

  return (
    <svg
      width='268'
      height='10'
      viewBox='0 0 298 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='268' height='10' rx='5' fill='#EFF0F2' />
      <rect width={`${width}`} height='10' rx='5' fill='#7EAF72' />
    </svg>
  );
};

export default Bar;
