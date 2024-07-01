import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';

const AlertModal = ({ item, onClose }: ModalPropsType) => {
  return (
    <>
      <Portal onClose={onClose}>
        <S.Wrapper>
          <S.TitleText>
            신청하려는 책이 도서관에 있는지 확인해주세요.
            <br /> 부적절한 도서 신청시 통보없이 삭제되며,
            <br /> 후에 불이익이 있을 수 있습니다.
          </S.TitleText>
          <S.CheckButton onClick={onClose}>확인</S.CheckButton>
        </S.Wrapper>
      </Portal>
    </>
  );
};

export default AlertModal;
