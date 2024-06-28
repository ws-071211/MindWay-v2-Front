import { PlusIcon } from '@/asset';
import * as S from './style';
import { useEffect, useState } from 'react';
import RecommandItem from './RecommandItem';
import ApplicantModal from './ApplicantModal';
import { RecommendBookType } from '@/types';
import { instance } from '@/apis';

const BookPage = () => {
  const [selected, setSelected] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);
  const [type, setType] = useState<string>('NOVEL');
  const [book, setBook] = useState<RecommendBookType[]>([]);
  

  const fetchBook = async () => {
    try {
      const { data } = await instance.get(`/recommend`, {
        params: {
          type: type,
        },
      });
      setBook(data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeType = () => {
    setSelected(!selected);
    setType(selected ? 'ESSAY' : 'NOVEL');
  };

  useEffect(() => {
    fetchBook();
  }, [type]);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.SelectionContainer>
            <S.SelectedTitle onClick={() => changeType()} selected={!!selected}>
              Novel
            </S.SelectedTitle>
            <S.SelectedTitle onClick={() => changeType()} selected={!selected}>
              Essay
            </S.SelectedTitle>
          </S.SelectionContainer>
          <S.PlusContainer onClick={() => setModal(true)}>
            <PlusIcon />
          </S.PlusContainer>
        </S.Header>
        <S.RecommandList>
          {book &&
            book.map((item) => (
              <RecommandItem
                key={item.id}
                title={item.title}
                author={item.author}
                content={item.content}
              />
            ))}
        </S.RecommandList>
      </S.Wrapper>
      {modal && <ApplicantModal onClose={() => setModal(false)} />}
    </>
  );
};

export default BookPage;
