import axios from 'axios';
import TokenManager from './TokenManager';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const tokenManager = new TokenManager();
    const vaildAccessToken = tokenManager.validateToken(
      tokenManager.accessTokenExpiresIn,
      tokenManager.accessToken
    ); 
    const vaildRefreshToken = tokenManager.validateToken(
      tokenManager.refreshTokenExpiresIn,
      tokenManager.refreshToken
    ); 
    if (!vaildAccessToken && vaildRefreshToken) {
      await tokenManager.reissueToken({
        refreshToken: tokenManager.refreshToken,
      });
      tokenManager.initToken();
    } else if (!vaildAccessToken && !vaildRefreshToken) {
      tokenManager.removeToken();
    }
    config.headers['Authorization'] = tokenManager.accessToken 
      ? `Bearer ${tokenManager.accessToken}`
      : undefined;
    return config;
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const tokenManager = new TokenManager();
    if (error.response?.status === 401) {
      try {
        await tokenManager.reissueToken({
          refreshToken: tokenManager.refreshToken,
        });
        tokenManager.initToken();
        error.config.headers['Authorization'] = tokenManager.accessToken
          ? `Bearer ${encodeURI(tokenManager.accessToken)}`
          : undefined;
        return instance(error.config);
      } catch (err) {
        console.log(error);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
