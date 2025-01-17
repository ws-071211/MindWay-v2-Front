/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { LoginLogo, GAuthLogo, GAuthLoginText } from '@/asset';
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
      router.push('/');
    } catch (error) {}
  };
  
  useEffect(() => {
    if (!gauthCode) return;
    fetchData();
  }, [fetchData, gauthCode]);

  return (
    <S.Wrapper>
      <S.LoginContainer>
        <LoginLogo />
        <S.GAuthLoginButton onClick={() => router.replace(GAuthUri)}>
          <S.LoginButtonText>
            <GAuthLogo />
            <GAuthLoginText />
          </S.LoginButtonText>
        </S.GAuthLoginButton>
      </S.LoginContainer>
    </S.Wrapper>
  );
};

export default AuthPage;
