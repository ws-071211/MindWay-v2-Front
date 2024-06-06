import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';
import Xmark from '@/asset/svg/Xmark';
import Input from '@/components/common/Input';
import { useForm } from 'react-hook-form';
import { BookInfoType } from '@/types/components/BookInfoType';

const DeleteModal = ({ onClose, onSubmit }: ModalPropsType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookInfoType>();
  
  return (
    <Portal onClose={onClose}>
      <S.Wrapper onSubmit={onSubmit}>
        <S.ContentContainer>
          <S.HeaderContainer>
            <S.TitleText>도서 수정</S.TitleText>
            <S.XmarkContainer onClick={onClose}>
              <Xmark />
            </S.XmarkContainer>
          </S.HeaderContainer>
          <S.InputContainer>
            <Input
              label='제목'
              placeholder='책 제목을 입력해주세요.'
              error={!!errors.title}
              errorMessage='책 제목을 입력해주세요'
              register={register('title', {
                required: true,
              })}
            />
            <Input
              label='저자'
              placeholder='저자를 입력해주세요.'
              error={!!errors.author}
              errorMessage='저자를 입력해주세요'
              register={register('author', {
                required: true,
              })}
            />
            <Input
              label='링크'
              placeholder='YES24 링크를 입력해주세요.'
              error={!!errors.yes24Link}
              errorMessage='YES24링크를 입력해주세요'
              register={register('yes24Link', {
                required: true,
                pattern: /https?:\/\/.*/,
              })}
            />
          </S.InputContainer>
        </S.ContentContainer>
        <S.CancleButton type='submit'>수정하기</S.CancleButton>
      </S.Wrapper>
    </Portal>
  );
};

export default DeleteModal;
