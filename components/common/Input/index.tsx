import { InputType } from '@/types';
import * as S from './style';

const Input = ({
  value,
  label,
  placeholder,
  register,
  error,
  errorMessage,
  onChange,
  unit,
}: InputType) => {
  return (
    <S.Wrapper>
      <S.InputNameText>{label}</S.InputNameText>
      <S.InputBox>
        <S.Input
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          error={error}
          {...register}
        />
        <S.UnitText>
          {unit}
        </S.UnitText>
      </S.InputBox>
      {error && <S.ErrorText>{errorMessage}</S.ErrorText>}
    </S.Wrapper>
  );
};

export default Input;
