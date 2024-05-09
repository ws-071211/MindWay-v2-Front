import { DeleteButtonIcon, EditButtonIcon } from '@/asset';
import * as S from './style';
import { useState } from 'react';
import DeleteModal from '../DeleteModal';
import EditModal from '../EditModal';

const BookRequestItem = () => {
  const [isShow, setIsShow] = useState<string>('none');

  return (
    <>
      <S.BookRequestItem>
        <S.BookTextContainer>
          <S.TitleText>세상의 마지막 기차역</S.TitleText>
          <S.AuthorText>무라세 타케시</S.AuthorText>
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
      {isShow === 'edit' && <EditModal onClose={() => setIsShow('')} />}
      {isShow === 'delete' && <DeleteModal onClose={() => setIsShow('')}/>}
    </>
  );
};

export default BookRequestItem;
