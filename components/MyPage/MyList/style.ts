import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 57rem;
  margin: 2.5rem auto 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 4.75rem;
  @media (max-width: 57rem) {
    width: 100%;
  }
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

export const MeatBallIcon = styled.div`
  float: right;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const MeatBallIconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 0.75rem;
`;

export const ApplicantContainer = styled.div`
  ${({ theme }) => theme.typography.m3.regular}
  color: ${({ theme }) => theme.color.Gray.gray400};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  gap: 1rem;
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

export const ModalWrapper = styled.div`
  padding: 1.25rem 1.75rem;
  width: 10.5rem;
  box-shadow: 0rem 0rem 1.25rem 0rem ${({ theme }) => theme.color.Shadow.card};
  background-color: ${({ theme }) => theme.color.WHITE};
  border-radius: 0.5rem;
  position: absolute;
  top: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalText = styled.div`
  ${({ theme }) => theme.typography.m3.regular}
  color: ${({ theme }) => theme.color.BLACK};
  text-align: center;
  cursor: pointer;
`;

export const ModalContour = styled.div`
  height: 0.0625rem;
  align-self: stretch;
`;

export const LogoutText = styled(ModalText)`
  color: ${({ theme }) => theme.color.SYSTEM};
`;
