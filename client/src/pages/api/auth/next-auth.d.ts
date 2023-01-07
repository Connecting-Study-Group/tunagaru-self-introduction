import type { DefaultSession, Profile } from 'next-auth';
import type { DefaultJWT } from 'next-auth/jwt/types';

declare module 'next-auth' {
  /**
   * Sessionの型を拡張
   * @see https://next-auth.js.org/configuration/callbacks#session-callback
   */
  interface Session {
    user?: {
      id: string;
    } & DefaultSession['user'];
    accessToken: string;
  }

  /**
   * Profileの型を拡張
   * @see https://next-auth.js.org/configuration/callbacks#jwt-callback
   */
  interface Profile {
    id: string;
  }
}

declare module 'next-auth/jwt' {
  /**
   * JWTの型を拡張
   * @see https://next-auth.js.org/configuration/callbacks#jwt-callback
   */
  interface JWT extends Record<string, string>, DefaultJWT {
    accessToken: string;
    id: string;
  }
}
