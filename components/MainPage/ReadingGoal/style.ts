import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 1.5rem);
  height: 100%;
  padding: 1.75rem 1.5rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.typography.m3.semibold}
  grid-area: 목표독서량;
  margin-left: 1.5rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const TotalBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const DayListcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  ${({ theme }) => theme.typography.label.regular}
  color: ${({ theme }) => theme.color.Gray.gray800};
`;

export const DayList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NowNumber = styled.p`
  ${({ theme }) => theme.typography.m1.semibold}
`;
export const GoalsNumber = styled.p`
  color: #7eaf72;
  ${({ theme }) => theme.typography.m3.regular}
`;
