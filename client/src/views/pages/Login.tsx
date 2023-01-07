import { Text, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { LogoDiscord } from 'react-ionicons';
import { signIn, signOut, useSession } from 'next-auth/react';

export const LoginPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    const get = async () => {
      const res = await fetch('https://discordapp.com/api/users/@me/guilds', {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });
      return res;
    };
    // get();
  }, [session]);

  console.log('session', session);

  return (
    <>
      <Text component="h1">ログイン</Text>
      <Text>slackのコミュニティに所属しているメンバーであればログイン可能です</Text>
      <Button
        component="a"
        variant="outline"
        leftIcon={<LogoDiscord />}
        // loading={isLoading}
        sx={{ backgroundColor: 'white', border: 'solid 1px black' }}
        size="md"
        color="dark"
        onClick={() => {
          signIn();
        }}
      >
        Slackでログイン
      </Button>
      <Button
        component="a"
        variant="outline"
        leftIcon={<LogoDiscord />}
        // loading={isLoading}
        sx={{ backgroundColor: 'white', border: 'solid 1px black' }}
        size="md"
        color="dark"
        onClick={() => {
          // https://discordapp.com/api/users/@me/guildsを叩く
        }}
      >
        Slackでログアウト
      </Button>
    </>
  );
};
