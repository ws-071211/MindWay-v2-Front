import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding: 40px 24vw 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 76px;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WelcomeText = styled.span`
  ${({ theme }) => theme.typography.h1.regular}
  color: ${({ theme }) => theme.color.BLACK};
`;

export const UserNameText = styled.span`
  ${({ theme }) => theme.typography.h1.semibold}
  color: ${({ theme }) => theme.color.BLACK};
  span {
    color: ${({ theme }) => theme.color.MAIN};
  }
`;

export const MeatBallIconContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ApplicantContainer = styled.div`
  ${({ theme }) => theme.typography.m3.regular}
  color: ${({ theme }) => theme.color.Gray.gray400};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  gap: 16px;
`;

export const BookRequestList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
`