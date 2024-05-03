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
  gap: 362px;
`

export const GAuthLoginButton = styled.button`
  width: 400px;
  height: 59px;
  background: transparent;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.MAIN};
`;

export const LoginButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
