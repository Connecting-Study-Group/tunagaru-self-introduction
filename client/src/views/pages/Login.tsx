import { Text, Button } from '@mantine/core';
import { LogoDiscord } from 'react-ionicons';
import { signIn, useSession } from 'next-auth/react';

export const LoginPage = () => {
  // NOTE: このsessionがnullだった場合、ログインしていない判定にすれば良さそう
  const { data: session, status } = useSession();

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
      >
        ログアウト
      </Button>
    </>
  );
};
