import { DeleteButtonIcon, EditButtonIcon } from '@/asset';
import * as S from './style';
import { useState } from 'react';
import DeleteModal from '../../MyPage/DeleteModal';
import EditModal from '../../MyPage/EditModal';
import { BookInfoType } from '@/types';

const BookRequestItem = ({ id, title, author, yes24Link }: BookInfoType) => {
  const [isShow, setIsShow] = useState<string>('none');
  const i = {
    id: id,
    title: title,
    author: author,
    yes24Link: yes24Link,
  };

  return (
    <>
      <S.BookRequestItem>
        <S.BookTextContainer>
          <S.TitleText>{title}</S.TitleText>
          <S.AuthorText>{author}</S.AuthorText>
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
      {isShow === 'edit' && (
        <EditModal item={i} onClose={() => setIsShow('')} />
      )}
      {isShow === 'delete' && (
        <DeleteModal item={i} onClose={() => setIsShow('')} />
      )}
    </>
  );
};

export default BookRequestItem;
