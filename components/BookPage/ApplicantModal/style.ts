import styled from '@emotion/styled';

export const Wrapper = styled.form`
  background: ${({ theme }) => theme.color.WHITE};
  padding: 2.5rem;
  width: 40rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const XmarkContainer = styled.div`
  margin: auto 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const TitleText = styled.div`
  ${({ theme }) => theme.typography.h4.semibold}
  color: ${({ theme }) => theme.color.BLACK};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const CancleButton = styled.button`
  ${({ theme }) => theme.typography.m3.regular}
  color: ${({ theme }) => theme.color.WHITE};
  background: ${({ theme }) => theme.color.MAIN};
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
