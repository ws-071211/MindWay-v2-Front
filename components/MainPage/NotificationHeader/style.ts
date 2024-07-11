import styled from '@emotion/styled';

export const NoticeContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 3rem 2.5rem;
  align-items: center;
  gap: 4.8125rem;
  border-radius: 0.5rem;
  background: var(--GRAY-100, #f5f6f8);
  grid-area: 공지;
`;

export const TextContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  p,
  h2 {
    margin: 0;
  }
`;
