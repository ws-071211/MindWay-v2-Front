import { MeatBallIcon, NoneBookIcon } from '@/asset';
import * as S from './style';
import { useEffect, useState } from 'react';
import IntroductionModal from './IntroductionModal';
import { TokenManager, instance } from '@/apis';
import { UserType } from '@/types';
import { useDispatch } from 'react-redux';
import { setAuthority } from '@/store/user';
import BookRequestItem from '../common/BookRequestItem';

const MyPage = () => {
  const [user, setUser] = useState<UserType>();
  const [book, setBook] = useState([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [toggleIntro, setToggleIntro] = useState<boolean>(false);
  const dispatch = useDispatch();
  const tokenManager = new TokenManager();

  const fetchUser = async () => {
    try {
      const { data } = await instance.get(`/my`);
      setUser(data);
      dispatch(setAuthority(data));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBook = async () => {
    try {
      const { data } = await instance.get(`/my/book`);
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchBook();
  }, []);
  return (
    <>
      <S.Wrapper>
        <S.ProfileContainer>
          <S.WelcomeContainer>
            <S.WelcomeText>안녕하세요</S.WelcomeText>
            <S.UserNameText>
              <span>{user?.name}</span>님
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
                <S.LogoutText onClick={() => tokenManager.removeToken()}>
                  로그아웃
                </S.LogoutText>
              </S.ModalWrapper>
            )}
          </S.MeatBallIconContainer>
        </S.ProfileContainer>
        <S.ApplicantContainer>
          도서 신청 목록
          <S.BookRequestList>
            {book && book.length == 0 ? (
              // <NoneBookIcon/>
              <></> //이미지 크기 때문에 추후에 다시 만들게요!
            ) : (
              book.map((item) => (
                <BookRequestItem
                  key={item.id}
                  title={item.title}
                  author={item.author}
                  yes24Link={item.book_url}
                />
              ))
            )}
          </S.BookRequestList>
        </S.ApplicantContainer>
      </S.Wrapper>
      {toggleIntro && (
        <IntroductionModal onClose={() => setToggleIntro(false)} />
      )}
    </>
  );
};

export default MyPage;
