import { MeatBallIcon } from '@/asset';
import BookRequestItem from './BookRequestItem';
import * as S from './style';

const MyPage = () => {
  return (
    <>
      <S.Wrapper>
        <S.ProfileContainer>
          <S.WelcomeContainer>
            <S.WelcomeText>안녕하세요</S.WelcomeText>
            <S.UserNameText>
              <span>한재형</span>님
            </S.UserNameText>
          </S.WelcomeContainer>
          <S.MeatBallIconContainer>
            <MeatBallIcon />
          </S.MeatBallIconContainer>
        </S.ProfileContainer>
        <S.ApplicantContainer>
          도서 신청 목록
          <S.BookRequestList>
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
          </S.BookRequestList>
        </S.ApplicantContainer>
      </S.Wrapper>
    </>
  );
};

export default MyPage;
