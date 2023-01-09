import { userRepository } from './../../../modules/user.repository';
import { discordClientId, discordClientSecret } from '@/constants/env';
import { DiscordClient } from '@/lib/discord-client';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: discordClientId,
      clientSecret: discordClientSecret,
      authorization: {
        params: { scope: 'identify email guilds' },
      },
      profile: async (profile) => {
        return {
          id: profile.id,
          name: profile.username,
          email: profile.email,
          image: profile.avatar,
        };
      },
    }),
  ],

  /**
   * ログインしてるかどうかを判定するために、jwtを使用
   */
  session: { strategy: 'jwt' },

  callbacks: {
    /**
     * sessionにaccessTokenと、user.idを追加
     */
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },

    /**
     * jwtにaccessTokenと、profile.idを追加
     */
    jwt: async ({ token, account, profile }) => {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      if (profile) {
        token.id = profile.id;
      }
      return token;
    },

    /**
     * つながる勉強会のメンバーかどうかを判定して、成功したらDBにユーザー情報を追加する
     */
    signIn: async ({ account, user, profile }) => {
      if (account == null || account?.access_token == null) return false;
      const isTsunagaruMember = await DiscordClient.isTsunagaruMember(account?.access_token);
      if (isTsunagaruMember) {
        const name = user.name ?? '';
        const email = user.email ?? '';
        await userRepository.updateUser(user.id, { name, email });
        return true;
      }
      return false;
    },
  },
};

export default NextAuth(authOptions);
