import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';
import { instance } from '@/apis';
import { toast } from 'react-toastify';
import toastOption from '@/lib/toastOption';
import { ErrorIcon, SuccessIcon } from '@/asset';

const DeleteModal = ({ item, onClose }: ModalPropsType) => {
  const DeleteBook = async () => {
    try {
      await instance.delete(`/order/${item.id}`);
      toast.success('신청 도서 삭제가 완료되었어요!', {
        ...toastOption,
        icon: <SuccessIcon />,
      });
    } catch (error) {
      console.log(error);
      toast.error('신청 도서 삭제가 실패했어요!', {
        ...toastOption,
        icon: <ErrorIcon />,
      });
    }
  };

  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.TextContainer>
          <S.CautionText>
            신청하신 도서를 <span>삭제</span>하시겠습니까?
          </S.CautionText>
          <S.TitleTextContainer>
            <S.TitleText>{item.title}</S.TitleText>
          </S.TitleTextContainer>
        </S.TextContainer>
        <S.ButtonContainer>
          <S.CancleButton onClick={onClose}>취소</S.CancleButton>
          <S.CheckButton onClick={DeleteBook}>확인</S.CheckButton>
        </S.ButtonContainer>
      </S.Wrapper>
    </Portal>
  );
};

export default DeleteModal;
