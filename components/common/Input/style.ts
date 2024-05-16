import { ErrorType } from '@/types';
import styled from '@emotion/styled';

export const Input = styled.input<ErrorType>`
  ${({ theme }) => theme.typography.m3.regular}
  background: ${({ theme }) => theme.color.Gray.gray100};
  padding: 1rem;
  width: 100%;
  border: ${({error,theme})=>error?`0.0625rem solid ${theme.color.SYSTEM}`:'none'};
  border-radius: 0.5rem;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const InputNameText =styled.div`
  ${({ theme }) => theme.typography.label.regular}
  color: ${({ theme }) => theme.color.Gray.gray400};
`

export const ErrorText = styled.div`
  ${({theme})=>theme.typography.label.regular}
  color: ${({theme})=>theme.color.SYSTEM};
`