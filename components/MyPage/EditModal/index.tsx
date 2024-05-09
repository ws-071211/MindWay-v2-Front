import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';
import Xmark from '@/asset/svg/Xmark';
import Input from '@/components/common/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const DeleteModal = ({ onClose }: ModalPropsType) => {
  const [titleError, setTitleError] = useState<boolean>(false);
  const [authorError, setAuthorError] = useState<boolean>(false);
  const [linkError, setLinkError] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    data.title === '' ? setTitleError(true) : setTitleError(false);
    data.author === '' ? setAuthorError(true) : setAuthorError(false);
    data.yes24Link === '' ? setLinkError(true) : setLinkError(false);
  };
  return (
    <Portal onClose={onClose}>
      <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
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
              error={titleError}
              errorMessage='책 제목을 입력해주세요'
              register={register('title', {
                required: false,
              })}
            />
            <Input
              label='저자'
              placeholder='저자를 입력해주세요.'
              error={authorError}
              errorMessage='저자를 입력해주세요'
              register={register('author', {
                required: false,
              })}
            />
            <Input
              label='링크'
              placeholder='YES24 링크를 입력해주세요.'
              error={linkError}
              errorMessage='YES24링크를 입력해주세요'
              register={register('yes24Link', {
                required: false,
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
