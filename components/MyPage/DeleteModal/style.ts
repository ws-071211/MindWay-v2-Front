import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.WHITE};
  padding: 1.5rem 1.5rem 1.25rem;
  width: 23.75rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
`

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  gap: 0.75rem;
`;

export const CautionText = styled.div`
  ${({ theme }) => theme.typography.m1.semibold}
  color: ${({ theme }) => theme.color.BLACK};
  span{
    color: ${({ theme }) => theme.color.MAIN};
  }
`;

export const TitleTextContainer = styled.div`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 0.0625rem solid ${({theme})=>theme.color.Gray.gray200};
  border-radius: 0.5rem;
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`

export const TitleText = styled.div`
  ${({theme})=>theme.typography.m3.regular}
  color: ${({theme})=>theme.color.BLACK};
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const CancleButton = styled.div`
  ${({ theme }) => theme.typography.m3.semibold}
  color: ${({ theme }) => theme.color.Gray.gray600};
  background: ${({ theme }) => theme.color.Gray.gray100};
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CheckButton = styled(CancleButton)`
  color: ${({ theme }) => theme.color.WHITE};
  background: ${({ theme }) => theme.color.MAIN};
`
