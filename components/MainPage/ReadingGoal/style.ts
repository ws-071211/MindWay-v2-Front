import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: calc(100%-24px);
  padding: 1.75rem 1.5rem;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.typography.m3.semibold}
  grid-area: 목표독서량;
  margin-left: 24px;
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
