import { AppShell } from '@mantine/core';
import Head from 'next/head';
import React, { PropsWithChildren, useMemo } from 'react';

import { AppFooter } from '@/views/features/Footer';
import { AppHeader } from '@/views/features/Header';
import { APP_NAME } from '@/constants/app-name';

interface Props {
  title?: string;
}

export const DefaultLayout: React.FC<PropsWithChildren<Props>> = ({ children, title = APP_NAME }) => {
  const seoTitle = useMemo(() => {
    return title !== APP_NAME ? `${title} | ${APP_NAME}` : APP_NAME;
  }, [title]);

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
      </Head>
      <AppShell
        padding="md"
        header={<AppHeader />}
        footer={<AppFooter />}
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.gray[0],
            minHeight: '100dvh',
          },
        })}
      >
        {children}
      </AppShell>
    </>
  );
};
