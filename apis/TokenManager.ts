import axios from 'axios';
import { RefreshTokenType, TokenType } from '@/types';
import Router from 'next/router';

class TokenManager {
  private _accessToken: string | null = null;
  private _refreshToken: string | null = null;
  private _accessTokenExpiresIn: string | null = null;
  private _refreshTokenExpiresIn: string | null = null;

  constructor() {
    this.initToken();
  }

  validateToken(expiredString: string | null, token: string | null):boolean {
    if (!expiredString || !token) return false;

    return this.calculateMinutes(expiredString, 1) >= new Date();
  }

  calculateMinutes(currentDate: string, addMinute: number): Date {
    const expiredAt = currentDate ? new Date(currentDate) : new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() - addMinute);

    return expiredAt;
  }

  initToken() {
    if (typeof window === 'undefined') return;
    this._accessToken = localStorage.getItem('accessToken');
    this._refreshToken = localStorage.getItem('refreshToken');
    this._accessTokenExpiresIn = localStorage.getItem('accessTokeExpiredIn');
    this._refreshTokenExpiresIn = localStorage.getItem('refreshTokenExpiredIn');
  }

  setToken(token: TokenType) {
    this._accessToken = token.accessToken;
    this._refreshToken = token.refreshToken;
    this._accessTokenExpiresIn = token.accessTokenExpiresIn;
    this._refreshTokenExpiresIn = token.refreshTokenExpiresIn;

    localStorage.setItem('accessToken', token.accessToken);
    localStorage.setItem('refreshToken', token.refreshToken);
    localStorage.setItem('accessTokeExpiredIn', token.accessTokenExpiresIn);
    localStorage.setItem('refreshTokenExpiredIn', token.refreshTokenExpiresIn);
  }

  removeToken() {
    if (typeof window === 'undefined') return;
    this._accessToken = null;
    this._refreshToken = null;
    this._accessTokenExpiresIn = null;
    this._refreshTokenExpiresIn = null;

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessTokeExpiredIn');
    localStorage.removeItem('refreshTokenExpiredIn');

    Router.push('/login')
  }

  async reissueToken({ refreshToken }: RefreshTokenType) {
    try {
      const { data } = await axios.patch(
        '/auth',
        {},
        {
          baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
          withCredentials: true,
          headers: {
            refreshToken:
              this.refreshToken && `Bearer ${refreshToken}`,
          },
        }
      );

      this.setToken(data);
      Router.push(window.location.href);
      return true;
    } catch (error) {
      this.removeToken();
      return false;
    }
  }

  get accessToken() {
    return this._accessToken;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  get accessTokenExpiresIn() {
    return this._accessTokenExpiresIn;
  }

  get refreshTokenExpiresIn() {
    return this._refreshTokenExpiresIn;
  }
}

export default TokenManager;
