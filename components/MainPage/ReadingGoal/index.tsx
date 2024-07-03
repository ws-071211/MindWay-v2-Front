import * as S from './style';
import SeeMore from '@/asset/svg/SeeMore';
import Bar from '@/asset/svg/Bar';
import VerticalBar from '@/asset/svg/VerticalBar';

const ReadingGoal = () => {
  const GoalsNumberOfBooks = 30;
  const NowNumberOfBooks = 20;

  const dayList = [
    { yoil: '일', NumberOfBooks: 0 },
    { yoil: '월', NumberOfBooks: 10 },
    { yoil: '화', NumberOfBooks: 7 },
    { yoil: '수', NumberOfBooks: 3 },
    { yoil: '목', NumberOfBooks: 8 },
    { yoil: '금', NumberOfBooks: 6 },
    { yoil: '토', NumberOfBooks: 9 },
  ];

  let MaxNumberOfBooks = 0;
  dayList.forEach(({ NumberOfBooks }) => {
    if (NumberOfBooks > MaxNumberOfBooks) {
      MaxNumberOfBooks = NumberOfBooks;
    }
  });

  const today = new Date();
  const dayOfWeek = dayList[today.getDay()].yoil;

  return (
    <S.Container>
      <S.Title>
        목표독서량
        <SeeMore />
      </S.Title>
      <S.TotalBar>
        <Bar before={GoalsNumberOfBooks} after={NowNumberOfBooks} />
        <S.NowNumber>{NowNumberOfBooks}</S.NowNumber>/
        <S.GoalsNumber>{GoalsNumberOfBooks}</S.GoalsNumber>
      </S.TotalBar>
      <S.DayListcontainer>
        {dayList.map((yoil, index) => (
          <S.DayList key={index}>
            <S.DayList>
              {yoil.NumberOfBooks}
              <VerticalBar
                before={MaxNumberOfBooks}
                after={yoil.NumberOfBooks}
                today={dayOfWeek === yoil.yoil}
              />
            </S.DayList>
            {yoil.yoil}
          </S.DayList>
        ))}
      </S.DayListcontainer>
    </S.Container>
  );
};

export default ReadingGoal;
