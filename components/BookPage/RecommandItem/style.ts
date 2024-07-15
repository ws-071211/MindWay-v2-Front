import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 1.75rem 2rem;
  width: 27rem;
  border-radius: 0.5rem;
  box-shadow: 0rem 0rem 1.25rem 0rem ${({ theme }) => theme.color.Shadow.card};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  @media (max-width: 57rem) {
    width: 100%;
  }
`;

export const AdminSkillButton = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const MeatBallContainer = styled.div`
  transform: rotate(90deg);
`;

export const ModalWrapper = styled.div`
  padding: 1.25rem 1.75rem;
  width: 6rem;
  box-shadow: 0rem 0rem 1.25rem 0rem ${({ theme }) => theme.color.Shadow.card};
  background-color: ${({ theme }) => theme.color.WHITE};
  border-radius: 0.5rem;
  position: absolute;
  top: 2.25rem;
  right: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.div`
  width: 10rem;
  color: ${({ theme }) => theme.color.BLACK};
  ${({ theme }) => theme.typography.m1.semibold}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AuthorText = styled.div`
  color: ${({ theme }) => theme.color.Gray.gray400};
  ${({ theme }) => theme.typography.m2.regular}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
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
