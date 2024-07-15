import { ErrorType } from '@/types';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const Input = styled.input<ErrorType>`
  ${({ theme }) => theme.typography.m3.regular}
  background: ${({ theme }) => theme.color.Gray.gray100};
  padding: 1rem;
  width: 100%;
  border: ${({error,theme})=>error?`0.0625rem solid ${theme.color.SYSTEM}`:'none'};
  border-radius: 0.5rem;
  :focus::placeholder{
    color: transparent;
  }
`;

export const InputNameText =styled.div`
  ${({ theme }) => theme.typography.label.regular}
  color: ${({ theme }) => theme.color.Gray.gray400};
`

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const UnitText = styled.div`
  position: absolute;
  right: 1rem;
  ${({theme})=>theme.typography.m3.regular}
  color: ${({theme})=>theme.color.Gray.gray500};
  z-index: 999;
`

export const ErrorText = styled.div`
  ${({theme})=>theme.typography.label.regular}
  color: ${({theme})=>theme.color.SYSTEM};
`