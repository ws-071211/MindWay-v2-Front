import styled from '@emotion/styled';

export const BookRequestItem = styled.div`
  padding: 1.5rem 2rem;
  min-width: 27.5rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 1.25rem 0rem ${({theme})=>theme.color.Shadow.card};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media (max-width: 57rem) {
    width: 100%;
    min-width: 25rem;
  }
`;

export const BookTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const TitleText = styled.div`
  ${({ theme }) => theme.typography.m1.regular}
  color: ${({ theme }) => theme.color.BLACK};
`;

export const AuthorText = styled.div`
  ${({ theme }) => theme.typography.m2.regular}
  color: ${({ theme }) => theme.color.Gray.gray500};  
`;

export const ToolBox = styled.div`
  display: flex;
  gap: 2rem;
`

export const ToolButton = styled.div`
  cursor: pointer;
`