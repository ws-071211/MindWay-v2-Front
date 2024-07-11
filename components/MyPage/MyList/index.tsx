import { MeatBallIcon, NoneBookIcon, SuccessIcon } from '@/asset';
import * as S from './style';
import { useEffect, useState } from 'react';
import IntroductionModal from '../IntroductionModal';
import { instance } from '@/apis';
import { BookInfoType, ModalPropsType, UserType } from '@/types';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/store/user';
import BookRequestItem from './BookRequestItem';

const MyList = ({ onClose }: ModalPropsType) => {
  const [user, setUser] = useState<UserType>();
  const [book, setBook] = useState<BookInfoType[]>([]);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [toggleIntro, setToggleIntro] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const { data } = await instance.get(`/my`);
      setUser(data);
      dispatch(setUserData(data));
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

  const logout = async () => {
    try{
      await instance.delete(`/auth`)
    }catch (error){
      
    }
  } 

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
                {user.authority !== 'ROLE_STUDENT' && (
                  <>
                    <S.ModalText onClick={onClose}>도서 신청 목록</S.ModalText>
                    <S.ModalContour />
                  </>
                )}
                <S.LogoutText onClick={() => logout()}>
                  로그아웃
                </S.LogoutText>
              </S.ModalWrapper>
            )}
          </S.MeatBallIconContainer>
        </S.ProfileContainer>
        <S.ApplicantContainer>
          도서 신청 목록
          <S.BookRequestList>
            {book?.length == 0 ? (
              // <NoneBookIcon/>
              <></> //이미지 크기 때문에 추후에 다시 만들게요!
            ) : (
              book.map((item) => (
                <BookRequestItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  book_url={item.book_url}
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

export default MyList;
