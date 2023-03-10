import { NextPageWithLayout } from '@/next-type';
import { DefaultLayout } from '@/views/features/Layouts/Default';
import { IndexPage } from '@/views/pages';
import { ReactElement } from 'react';

const Index: NextPageWithLayout = () => {
  return <IndexPage />;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Index;
