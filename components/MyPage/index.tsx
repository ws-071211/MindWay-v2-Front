import { MeatBallIcon } from '@/asset';
import BookRequestItem from './BookRequestItem';
import * as S from './style';
import { useState } from 'react';
import IntroductionModal from './IntroductionModal';

const BookPage = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleIntro, setToggleIntro] = useState(false);
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
            <S.MeatBallIcon onClick={() => setToggleModal(!toggleModal)}>
              <MeatBallIcon />
            </S.MeatBallIcon>
            {toggleModal && (
              <S.ModalWrapper>
                <S.ModalText onClick={() => setToggleIntro(true)}>
                  MINDWAY 소개
                </S.ModalText>
                <S.ModalContour />
                <S.LogoutText>로그아웃</S.LogoutText>
              </S.ModalWrapper>
            )}
          </S.MeatBallIconContainer>
        </S.ProfileContainer>
        <S.ApplicantContainer>
          도서 신청 목록
          <S.BookRequestList>
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
            <BookRequestItem />
          </S.BookRequestList>
        </S.ApplicantContainer>
      </S.Wrapper>
      {toggleIntro && <IntroductionModal onClose={()=>setToggleIntro(false)}/>}
    </>
  );
};

export default BookPage;
