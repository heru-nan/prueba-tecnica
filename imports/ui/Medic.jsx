import React from "react";
import { format } from "rut.js";

import { Tr, Td } from "@chakra-ui/react";

export const Medic = ({ medic, onDeleteClick }) => (
  <Tr>
    <Td isNumeric>{format(medic.rut)}</Td>
    <Td>{medic.nombres}</Td>
    <Td>{medic.apellidoPaterno}</Td>
    <Td>{medic.apellidoMaterno}</Td>
    <Td onClick={() => onDeleteClick(medic)}>{medic.especialidad}</Td>
  </Tr>
);
