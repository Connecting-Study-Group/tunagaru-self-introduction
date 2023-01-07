import { type NextPageWithLayout } from '@/next-type';
import { type ReactElement } from 'react';
import { DefaultLayout } from '@/views/features/Layouts/Default';
import { IntroductionPage } from '@/views/pages/Introduction';

const Introduction: NextPageWithLayout = () => {
  return <IntroductionPage />;
};

Introduction.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Introduction;
