import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 57rem;
  margin: 2.88rem auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 57rem) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  margin: 0 auto;
  ${({ theme }) => theme.typography.h3.semibold}
  color: ${({ theme }) => theme.color.BLACK};
`;

export const ReturnButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Empty = styled.div`
  width: 24px;
`;

export const BookRequestList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  @media (max-width: 57rem) {
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
