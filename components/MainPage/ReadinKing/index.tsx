import * as S from './style';
import RankingVerticalBar from '@/asset/svg/RankingVerticalBar';

const ReadinKing = () => {
  const dayList = [
    { name: '한재형', NumberOfBooks: 30 },
    { name: '용재형', NumberOfBooks: 20 },
    { name: '류재형', NumberOfBooks: 10 },
  ];

  let MaxNumberOfBooks = 0;
  dayList.forEach(({ NumberOfBooks }) => {
    if (NumberOfBooks > MaxNumberOfBooks) {
      MaxNumberOfBooks = NumberOfBooks;
    }
  });

  return (
    <S.Container>
      <S.Title>이달의 독서왕</S.Title>
      <S.DayListcontainer>
        {dayList.map((yoil, index) => (
          <S.DayList key={index}>
            <S.DayList>
              {yoil.NumberOfBooks}권
              <RankingVerticalBar
                before={MaxNumberOfBooks}
                after={yoil.NumberOfBooks}
              />
            </S.DayList>
            {yoil.name}
          </S.DayList>
        ))}
      </S.DayListcontainer>
    </S.Container>
  );
};

export default ReadinKing;
