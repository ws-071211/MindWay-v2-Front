import { InputType } from '@/types';
import * as S from './style';

const Input = ({
  value,
  label,
  placeholder,
  register,
  error,
  errorMessage,
  onChange
}: InputType) => {
  return (
    <S.InputBox>
      <S.InputNameText>{label}</S.InputNameText>
      <S.Input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onChange(e)}
        error={error}
        {...register}
      />
      {error && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.InputBox>
  );
};

export default Input;
