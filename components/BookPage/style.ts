import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 57rem;
  margin: 2.88rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (max-width: 57rem) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const SelectedTitle = styled.div<{ selected: boolean }>`
  padding: 0.5rem 0.75rem;
  ${({ selected, theme }) =>
    selected ? theme.typography.h3.semibold : theme.typography.h3.regular}
  color: ${({ selected, theme }) =>
    selected ? theme.color.BLACK : theme.color.Gray.gray400};
  border-bottom: 0.125rem solid
    ${({ selected, theme }) => (selected ? theme.color.MAIN : `transparent`)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const RecommandList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2.75rem;
  @media (max-width: 57rem) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const PlusContainer = styled.div`
  cursor: pointer;
`;
