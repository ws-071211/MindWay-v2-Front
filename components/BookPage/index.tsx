import { PlusIcon } from '@/asset';
import * as S from './style';
import { useEffect, useState } from 'react';
import RecommandItem from './RecommandItem';

const BookPage = () => {
  const [selected, setSelected] = useState(true);

  return (
    <S.Wrapper>
      <S.Header>
        <S.SelectionContainer>
          <S.SelectedTitle onClick={()=>setSelected(!selected)} selected={!!selected}>
            Novel
          </S.SelectedTitle>
          <S.SelectedTitle onClick={()=>setSelected(!selected)} selected={!selected}>
            Essay
          </S.SelectedTitle>
        </S.SelectionContainer>
        <PlusIcon />
      </S.Header>
      <S.RecommandList>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
        <RecommandItem/>
      </S.RecommandList>
    </S.Wrapper>
  );
};

export default BookPage;
