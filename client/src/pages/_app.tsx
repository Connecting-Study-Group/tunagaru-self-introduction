import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppPropsWithLayout } from '@/next-type';
import { MantineProvider } from '@mantine/core';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  useEffect(() => {
    document.documentElement.style.visibility = 'visible';
  }, []);
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps?.session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: '"Helvetica Neue",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
        }}
      >
        <Component {...pageProps} />
        <Toaster />
      </MantineProvider>
    </SessionProvider>
  );
}
