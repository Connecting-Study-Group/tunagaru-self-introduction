import { NextPageWithLayout } from '@/next-type';
import { DefaultLayout } from '@/views/features/Layouts/Default';
import { LoginPage } from '@/views/pages/Login';
import { ReactElement } from 'react';

const Login: NextPageWithLayout = () => {
  return <LoginPage />;
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Login;
