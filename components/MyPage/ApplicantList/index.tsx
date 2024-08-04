import { BackIcon } from '@/asset';
import * as S from './style';
import { BookInfoType, ModalPropsType } from '@/types';
import ApplicantItem from './ApplicantItem';
import { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';

const ApplicantList = ({ onClose }: ModalPropsType) => {
  const [list, setList] = useState<BookInfoType[]>([]);

  const { fetch, data } = useFetch<BookInfoType[]>({
    url: `/order`,
    method: 'GET',
    successEvent: (data) => setList(data),
  });

  useEffect(()=>{
    setList(data);
  },[data])

  useEffect(() => {
    fetch();
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
        {list?.map((item) => (
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
