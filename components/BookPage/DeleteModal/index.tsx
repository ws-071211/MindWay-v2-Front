import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';
import useFetch from '@/hooks/useFetch';

const DeleteModal = ({ editItem, onClose }: ModalPropsType) => {
  const { fetch } = useFetch({
    url: `/recommend/${editItem.id}`,
    method: 'DELETE',
    successMessage: '추천 도서 삭제가 완료되었어요!',
    failureMessage: '추천 도서 삭제가 실패했어요.'
  });

  const onConfirm = async() => {
    await fetch();
    onClose();
  }

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.TextContainer>
          <S.CautionText>
            신청하신 도서를 <span>삭제</span>하시겠습니까?
          </S.CautionText>
          <S.TitleTextContainer>
            <S.TitleText>{editItem.title}</S.TitleText>
          </S.TitleTextContainer>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.CancleButton onClick={onClose}>취소</S.CancleButton>
          <S.CheckButton onClick={onConfirm}>확인</S.CheckButton>
        </S.ButtonContainer>
      </S.Wrapper>
    </Portal>
  );
};

export default DeleteModal;
