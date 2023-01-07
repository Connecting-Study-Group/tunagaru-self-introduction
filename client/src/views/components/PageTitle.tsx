import { Text, TextProps } from '@mantine/core';
import { type FC } from 'react';

type Props = TextProps & {
  as?: string;
};

export const PageTitle: FC<Props> = ({ children, as = 'h1', ...props }) => {
  return (
    <Text component={as as any} {...props}>
      {children}
    </Text>
  );
};
