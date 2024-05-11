import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.WHITE};
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const TitleText = styled.div`
  ${({ theme }) => theme.typography.h4.semibold}
  color: ${({ theme }) => theme.color.BLACK};
`;

export const XmarkContainer = styled.div`
  margin: auto 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const IntroductionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IntroductionTextContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 100;
  p {
    ${({ theme }) => theme.typography.m3.regular}
    text-align: center;
  }
  h1 {
    ${({ theme }) => theme.typography.m1.semibold}
    text-align: center;
  }
`;

export const Introductionbody = styled.div`
  padding: 1.25rem 1.625rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;
    z-index: 100;
    ${({ theme }) => theme.typography.m3.regular}
    text-align: center;
  }
`;
