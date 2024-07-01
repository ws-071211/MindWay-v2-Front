import styled from '@emotion/styled';

export const Wrapper = styled.form`
  background: ${({ theme }) => theme.color.WHITE};
  padding: 1.75rem;
  border-radius: 0.5rem;
  width: 27.5rem;
  box-shadow: 0px 0px 20px 0px ${({theme})=>theme.color.Shadow.card};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const TitleText = styled.div`
  ${({ theme }) => theme.typography.m1.regular}
  color: ${({ theme }) => theme.color.BLACK};
  text-align: center;
`;

export const CheckButton = styled.button`
  ${({ theme }) => theme.typography.m3.semibold}
  color: ${({ theme }) => theme.color.WHITE};
  background: ${({ theme }) => theme.color.MAIN};
  width: 100%;
  padding: 0.625rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
