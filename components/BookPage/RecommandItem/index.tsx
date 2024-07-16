import { RecommendBookType } from '@/types';
import * as S from './style';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { MeatBallIcon } from '@/asset';
import { useState } from 'react';
import DeleteModal from '../DeleteModal';
import EditModal from '../EditModal';

const RecommandItem = ({ id, title, author, content }: RecommendBookType) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const [modal, setModal] = useState<string>('');
  const user = useSelector((state: RootState) => state.user);
  const data = {
    id,
    title,
    author,
    content,
  };
  return (
    <>
      <S.Wrapper>
        {user.authority !== 'ROLE_STUDENT' && (
          <S.AdminSkillButton>
            <S.MeatBallContainer onClick={() => setSeeMore(!seeMore)}>
              <MeatBallIcon />
            </S.MeatBallContainer>
            {seeMore && (
              <S.ModalWrapper>
                <S.ModalText onClick={() => setModal('edit')}>수정</S.ModalText>
                <S.ModalContour />
                <S.LogoutText onClick={() => setModal('delete')}>삭제</S.LogoutText>
              </S.ModalWrapper>
            )}
          </S.AdminSkillButton>
        )}
        <S.Header>
          <S.TitleText>{title}</S.TitleText>
          <S.AuthorText>{author}</S.AuthorText>
        </S.Header>
        <S.SummaryText>{content}</S.SummaryText>
      </S.Wrapper>
      {modal === 'edit' && (
        <EditModal editItem={data} onClose={() => setModal('')} />
      )}
      {modal === 'delete' && (
        <DeleteModal editItem={data} onClose={() => setModal('')} />
      )}
    </>
  );
};

export default RecommandItem;
