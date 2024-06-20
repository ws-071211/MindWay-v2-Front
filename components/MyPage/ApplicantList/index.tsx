import { BackIcon } from '@/asset';
import * as S from './style';
import { ModalPropsType } from '@/types';
import ApplicantItem from './ApplicantItem';

const ApplicantList = ({ onClose }: ModalPropsType) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.ReturnButton onClick={onClose}>
          <BackIcon />
        </S.ReturnButton>
        <S.HeaderTitle>도서 신청 목록</S.HeaderTitle>
        <S.Empty />
      </S.Header>
      <S.BookRequestList>
        {/* {book.map((item) => (
          <ApplicantItem
            key={item.id}
            id={item.id}
            student={item.student}
            title={item.title}
            author={item.author}
            book_url={item.book_url}
          />
        ))} */}
      </S.BookRequestList>
    </S.Wrapper>
  );
};

export default ApplicantList;
