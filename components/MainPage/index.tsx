import NotificationHeader from './NotificationHeader';
import ReadingGoal from './ReadingGoal';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <NotificationHeader />
        <ReadingGoal />
      </S.Container>
    </S.Wrapper>
  );
};

export default MainPage;
