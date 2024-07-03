import EventCalendar from './EventCalendar';
import NotificationHeader from './NotificationHeader';
import ReadinKing from './ReadinKing';
import ReadingGoal from './ReadingGoal';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <NotificationHeader />
        <ReadingGoal />
        <ReadinKing />
        <EventCalendar />
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
