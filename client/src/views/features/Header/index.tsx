import { Text, Header } from "@mantine/core";
import { FC } from "react";

export const AppHeader: FC = () => {
  return (
    <Header height={60} p="xs">
      <Text component="h1" sx={{ fontFamily: "Mona Sans" }}>
        つながるLT
      </Text>
    </Header>
  );
};
