import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  padding-top: 1.75rem;
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  z-index: 200;
`;

export const LogoContainer = styled.div`
  width: 12.5rem;
  height: 5rem;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  margin-bottom: 1.12rem;
  display: flex;
  gap: 2.5rem;
  border-bottom: 0.125rem solid ${({ theme }) => theme.color.Gray.gray200};
  display: flex;
  align-items: end;
`;

export const SelectionText = styled.div<{ selection: boolean }>`
  ${({ theme }) => theme.typography.m1.semibold};
  color: ${({ selection, theme }) =>
    selection ? theme.color.BLACK : theme.color.Gray.gray600};
  border-bottom: 0.125rem solid
    ${({ selection, theme }) =>
      selection ? theme.color.MAIN : theme.color.Gray.gray200};
  margin-bottom: -0.125rem;
  width: 5.5rem;
  height: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EmptyContainer = styled.div`
  width: 12.5rem;
  height: 5rem;
`;
