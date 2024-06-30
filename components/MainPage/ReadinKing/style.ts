import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 24px);
  height: 100%;
  padding: 1.75rem 1.5rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.typography.m3.semibold}
  grid-area: 이달의독서왕;
  margin-right: 24px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const DayListcontainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  margin-top: 0.5rem;
  ${({ theme }) => theme.typography.label.regular}
  color: ${({ theme }) => theme.color.Gray.gray800};
`;

export const DayList = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
