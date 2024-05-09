import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22.625rem;
`

export const GAuthLoginButton = styled.button`
  width: 25rem;
  height: 3.6875rem;
  background: transparent;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.color.MAIN};
`;

export const LoginButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
