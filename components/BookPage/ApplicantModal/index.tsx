import { Portal } from '@/components';
import { ModalPropsType } from '@/types';
import * as S from './style';
import Xmark from '@/asset/svg/Xmark';
import Input from '@/components/common/Input';
import { useForm } from 'react-hook-form';
import { BookInfoType } from '@/types/components/BookInfoType';
import { instance } from '@/apis';
import { toast } from 'react-toastify';
import toastOption from '@/lib/toastOption';
import { ErrorIcon, SuccessIcon } from '@/asset';

const ApplicantModal = ({ onClose }: ModalPropsType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookInfoType>();

  const ApplicantBook = async (data: BookInfoType) => {
    try {
      await instance.post(`/order`, {
        title: data.title,
        author: data.author,
        book_url: data.book_url,
      });
      toast.success('도서 신청이 완료되었어요!', {
        ...toastOption,
        icon: <SuccessIcon />,
      });
      onClose();
    } catch (error) {
      console.log(error);
      toast.error('도서 신청에 실패했어요', {
        ...toastOption,
        icon: <ErrorIcon />,
      });
    }
  };

  return (
    <Portal onClose={onClose}>
      <S.Wrapper onSubmit={handleSubmit(ApplicantBook)}>
        <S.ContentContainer>
          <S.HeaderContainer>
            <S.TitleText>도서 신청</S.TitleText>
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
              error={!!errors.book_url}
              errorMessage='YES24링크를 입력해주세요'
              register={register('book_url', {
                required: true,
                pattern: /https?:\/\/.*/,
              })}
            />
          </S.InputContainer>
        </S.ContentContainer>
        <S.CancleButton type='submit'>신청하기</S.CancleButton>
      </S.Wrapper>
    </Portal>
  );
};

export default ApplicantModal;
