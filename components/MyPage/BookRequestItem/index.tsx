import { DeleteButtonIcon, EditButtonIcon } from '@/asset';
import * as S from './style';
import { useState } from 'react';

const BookRequestItem = () => {

  return (
    <>
      <S.BookRequestItem>
        <S.BookTextContainer>
          <S.TitleText>세상의 마지막 기차역</S.TitleText>
          <S.AuthorText>무라세 타케시</S.AuthorText>
        </S.BookTextContainer>
        <S.ToolBox>
          <S.ToolButton>
            <EditButtonIcon />
          </S.ToolButton>
          <S.ToolButton>
            <DeleteButtonIcon />
          </S.ToolButton>
        </S.ToolBox>
      </S.BookRequestItem>
    </>
  );
};

export default BookRequestItem;
