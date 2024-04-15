import { LoginLogo, GAuthLogo, GAuthText } from '../../asset';
import * as S from './style';

const LoginPage = () => {
  return (
    <S.Wrapper>
      <S.LoginContainer>
      <LoginLogo />
      <S.GAuthLoginButton>
        <S.LoginButtonText>
          <GAuthLogo />
          <GAuthText />
        </S.LoginButtonText>
      </S.GAuthLoginButton>
      </S.LoginContainer>
    </S.Wrapper>
  );
};

export default LoginPage;
