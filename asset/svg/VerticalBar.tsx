type BarProps = {
  before: number;
  after: number;
  today: boolean;
};

const VerticalBar = ({ before, after, today }: BarProps) => {
  let height = (30 * after) / before;
  if (height == 0) height = 1;
  return (
    <svg
      width='32'
      height={height}
      viewBox={`0 0 32 ${height}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28H0V4Z'
        fill={today ? '#7EAF72' : '#EFF0F2'}
      />
    </svg>
  );
};

export default VerticalBar;
