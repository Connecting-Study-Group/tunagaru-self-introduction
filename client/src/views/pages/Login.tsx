import { Text, Button } from '@mantine/core';
import { LogoDiscord } from 'react-ionicons';
import { signIn, useSession } from 'next-auth/react';
import { userRepository } from '@/modules/user.repository';

export const LoginPage = () => {
  // NOTE: このsessionがnullだった場合、ログインしていない判定にすれば良さそう
  const { data: session, status } = useSession();

  const createUser = async () => {
    await userRepository.updateUser('test', {
      name: 'test',
      email: '',
    });
  };

  return (
    <>
      <Text component="h1">ログイン</Text>
      <Text>Discordのコミュニティに所属しているメンバーであればログイン可能です</Text>
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
        Discordでログイン
      </Button>
      <Button
        component="a"
        variant="outline"
        leftIcon={<LogoDiscord />}
        // loading={isLoading}
        sx={{ backgroundColor: 'white', border: 'solid 1px black' }}
        size="md"
        color="dark"
        onClick={createUser}
      >
        ログアウト
      </Button>
    </>
  );
};
