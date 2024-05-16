import { InputType } from '@/types';
import * as S from './style';

const Input = ({ label, placeholder, register, error, errorMessage }: InputType) => {
  return (
    <S.InputBox>
      <S.InputNameText>{label}</S.InputNameText>
      <S.Input type='text' placeholder={placeholder} error={error} {...register} />
      {error && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.InputBox>
  );
};

export default Input;
