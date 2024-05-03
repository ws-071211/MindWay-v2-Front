import styled from '@emotion/styled';

export const BookRequestItem = styled.div`
  padding: 24px 32px;
  max-width: 25vw;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px ${({theme})=>theme.color.Shadow.card};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const BookTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  gap: 32px;
`

export const ToolButton = styled.div`
  cursor: pointer;
`