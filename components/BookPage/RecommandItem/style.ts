import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 1.75rem 2rem;
  width: 27rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 1.25rem 0rem ${({ theme }) => theme.color.Shadow.card};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
  @media (max-width: 57rem) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.div`
  color: ${({ theme }) => theme.color.BLACK};
  ${({ theme }) => theme.typography.m1.semibold}
`;

export const AuthorText = styled.div`
  color: ${({ theme }) => theme.color.Gray.gray400};
  ${({ theme }) => theme.typography.m2.regular}
`;

export const SummaryText = styled.div`
  color: #666669;
  ${({ theme }) => theme.typography.m2.regular}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
`;
