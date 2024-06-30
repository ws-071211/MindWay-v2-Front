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
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
