import React from "react";

import { MedicForm } from "./MedicForm";
import { MedicTable } from "./MedicTable";

import {
  Heading,
  useColorMode,
  Divider,
  Switch,
  Flex,
} from "@chakra-ui/react";

export const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Flex mt="4" as="header" justifyContent="space-around">
        <Heading m="1">Creación De Médicos</Heading>
        <Switch size="lg" colorScheme="whiteAlpha"  onChange={toggleColorMode} alignSelf="center" />
      </Flex>
      <Divider bg="teal" mb="10" />

      <MedicForm />
      <Divider bg="teal" mb="10" mt="10" />
      <MedicTable />

      <Divider bg="teal" mb="10" mt="10" />
    </div>
  );
};
