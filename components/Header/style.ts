import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  z-index: 200;
`;

export const LogoContainer = styled.div`
  width: 200px;
  height: 80px;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 40px;
  border-bottom: 2px solid ${({ theme }) => theme.color.Gray.gray200};
  display: flex;
  align-items: end;
`;

export const SelectionText = styled.div<{ selection: boolean }>`
  ${({ theme }) => theme.typography.m1.semibold};
  color: ${({ selection, theme }) =>
    selection ? theme.color.BLACK : theme.color.Gray.gray600};
  border-bottom: 2px solid
    ${({ selection, theme }) =>
      selection ? theme.color.MAIN : theme.color.Gray.gray200};
  margin-bottom: -2px;
  width: 88px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EmptyContainer = styled.div`
  width: 200px;
  height: 80px;
`;
