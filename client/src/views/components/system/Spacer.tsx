import { Box } from '@mantine/core';
import { FC } from 'react';

export const Spacer: FC = () => {
  return (
    <Box
      role="presentation"
      sx={{
        flex: '1 1 0%',
        placeSelf: 'stretch',
      }}
    ></Box>
  );
};
