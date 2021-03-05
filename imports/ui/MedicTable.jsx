import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { MedicCollections } from "/imports/api/MedicCollections";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Progress,
  TableCaption,
  Center,
} from "@chakra-ui/react";

import { Medic } from "./Medic";

export const MedicTable = () => {
  const persons = useTracker(() =>
    MedicCollections.find({}, { sort: { createdAt: -1 } }).fetch()
  );

  const deleteTask = ({ _id }) => MedicCollections.remove(_id);

  if (!persons) {
    return <Progress colorScheme="teal" size="xs" isIndeterminate />;
  }

  return (
    <Center>
      <Table variant="striped" colorScheme="teal" w="xl">
        <TableCaption>Medicos Añadidos</TableCaption>
        <Thead>
          <Tr>
            <Th>Rut</Th>
            <Th>Nombres</Th>
            <Th>A. Paterno</Th>
            <Th>A. Materno</Th>
            <Th>Especialidad</Th>
          </Tr>
        </Thead>
        <Tbody>
          {persons.map((medic) => (
            <Medic key={medic._id} medic={medic} onDeleteClick={deleteTask} />
          ))}
        </Tbody>
      </Table>
    </Center>
  );
};
