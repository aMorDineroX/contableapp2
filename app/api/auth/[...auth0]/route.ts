import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/dashboard',
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email',
    }
  }),
  callback: handleCallback({
    afterCallback: (_req, _res, session) => {
      return session;
    },
  })
});
