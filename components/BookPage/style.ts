import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 60rem;
  height: 80vh;
  margin: 2.88rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 57rem) {
    width: 100%;
  }
`;

export const Header = styled.div`
  padding: 0 1.5rem;
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
  padding: 1.25rem 1.5rem ;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  overflow-x: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
  @media (max-width: 57rem) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const PlusContainer = styled.div`
  cursor: pointer;
`;


export const AddApplicantButton = styled.div`
  padding: 1.75rem 2rem;
  width: 27rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 1.25rem 0rem ${({ theme }) => theme.color.Shadow.card};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  @media (max-width: 57rem) {
    width: 100%;
  }
`
