import { DeleteButtonIcon, EditButtonIcon } from '@/asset';
import * as S from './style';
import { useState } from 'react';
import DeleteModal from '../../MyPage/DeleteModal';
import EditModal from '../../MyPage/EditModal';
import { BookInfoType } from '@/types';

const BookRequestItem = (i:BookInfoType) => {
  const [isShow, setIsShow] = useState<string>('none');

  return (
    <>
      <S.BookRequestItem>
        <S.BookTextContainer>
          <S.TitleText>{i.title}</S.TitleText>
          <S.AuthorText>{i.author}</S.AuthorText>
        </S.BookTextContainer>
        <S.ToolBox>
          
          <S.ToolButton onClick={() => setIsShow('edit')}>
            <EditButtonIcon />
          </S.ToolButton>
          <S.ToolButton onClick={() => setIsShow('delete')}>
            <DeleteButtonIcon />
          </S.ToolButton>
        </S.ToolBox>
      </S.BookRequestItem>
      {isShow === 'edit' && <EditModal onClose={() => setIsShow('')}/>}
      {isShow === 'delete' && <DeleteModal onClose={() => setIsShow('')}/>}
    </>
  );
};

export default BookRequestItem;
