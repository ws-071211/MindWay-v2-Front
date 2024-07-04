type BarProps = {
  before: number;
  after: number;
};

const RankingVerticalBar = ({ before, after }: BarProps) => {
  let height = (80 * after) / before;
  if (height == 0) height = 1;
  return (
    <svg
      width='80'
      height={height}
      viewBox='0 0 80 ${height}'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 8C0 3.58172 3.58172 0 8 0H72C76.4183 0 80 3.58172 80 8V80H0V8Z'
        fill='#7EAF72'
      />
    </svg>
  );
};

export default RankingVerticalBar;
