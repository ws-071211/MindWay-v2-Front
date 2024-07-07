import { useRouter } from 'next/router';
import { LoginLogo, GAuthLogo, GAuthText } from '@/asset';
import * as S from './style';
import { TokenManager, instance } from '@/apis';
import { useEffect } from 'react';

const AuthPage = () => {
  const GAuthUri = `https://gauth.co.kr/login?client_id=${process.env.NEXT_PUBLIC_GAUTH_CLIENTID_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_GAUTH_REDIRECT_URI}`;
  const router = useRouter();
  const gauthCode = router.query.code?.toString();
  const tokenManager = new TokenManager();

  const fetchData = async () => {
    try {
      const { data } = await instance.post(`/auth`, {
        code: gauthCode,
      });
      tokenManager.setToken(data);
      router.replace('');
    } catch (error) {}
  };

  useEffect(() => {
    if (!gauthCode) return;
    fetchData();
  }, [gauthCode]);

  return (
    <S.Wrapper>
      <S.LoginContainer>
        <LoginLogo />
        <S.GAuthLoginButton onClick={() => router.replace(GAuthUri)}>
          <S.LoginButtonText>
            <GAuthLogo />
            <GAuthText />
          </S.LoginButtonText>
        </S.GAuthLoginButton>
      </S.LoginContainer>
    </S.Wrapper>
  );
};

export default AuthPage;
