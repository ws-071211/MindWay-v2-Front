type BarProps = {
  before: number;
  after: number;
};

const RankingVerticalBarNone = () => {
  return (
    <svg
      width='80'
      height='2'
      viewBox='0 0 80 2'
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

export default RankingVerticalBarNone;
