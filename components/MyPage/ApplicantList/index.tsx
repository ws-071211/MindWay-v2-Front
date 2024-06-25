import { BackIcon } from '@/asset';
import * as S from './style';
import { BookInfoType, ModalPropsType } from '@/types';
import ApplicantItem from './ApplicantItem';
import { useEffect, useState } from 'react';
import { instance } from '@/apis';

const ApplicantList = ({ onClose }: ModalPropsType) => {
  const [list, setList] = useState<BookInfoType[]>([]);

  const fetchList = async () => {
    try {
      const { data } = await instance.get(`/order`);
      setList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
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
        {list.map((item) => (
          <ApplicantItem
            key={item.id}
            id={item.id}
            title={item.title}
            author={item.author}
            book_url={item.book_url}
          />
        ))}
      </S.BookRequestList>
    </S.Wrapper>
  );
};

export default ApplicantList;
