import { PlusIcon } from '@/asset';
import * as S from './style';
import { useEffect, useState } from 'react';
import RecommandItem from './RecommandItem';
import ApplicantModal from './ApplicantModal';

const BookPage = () => {
  const [selected, setSelected] = useState(true);
  const [modal, setModal] = useState(false);
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.SelectionContainer>
            <S.SelectedTitle
              onClick={() => setSelected(!selected)}
              selected={!!selected}
            >
              Novel
            </S.SelectedTitle>
            <S.SelectedTitle
              onClick={() => setSelected(!selected)}
              selected={!selected}
            >
              Essay
            </S.SelectedTitle>
          </S.SelectionContainer>
          <S.PlusContainer onClick={() => setModal(true)}>
            <PlusIcon />
          </S.PlusContainer>
        </S.Header>
        <S.RecommandList>
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
          <RecommandItem />
        </S.RecommandList>
      </S.Wrapper>
      {modal && <ApplicantModal onClose={() => setModal(false)} />}
    </>
  );
};

export default BookPage;
