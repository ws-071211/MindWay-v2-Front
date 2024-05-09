import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';

const DeleteModal = ({ onClose }: ModalPropsType) => {
  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.TextContainer>
          <S.CautionText>
            신청하신 도서를 <span>삭제</span>하시겠습니까?
          </S.CautionText>
          <S.TitleTextContainer>
            <S.TitleText>세상의 마지막 기차역</S.TitleText>
          </S.TitleTextContainer>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.CancleButton onClick={onClose}>취소</S.CancleButton>
          <S.CheckButton onClick={onClose}>확인</S.CheckButton>
        </S.ButtonContainer>
      </S.Wrapper>
    </Portal>
  );
};

export default DeleteModal;
