import React from "react";
import { MedicCollections} from "/imports/api/MedicCollections";

import { useForm } from "react-hook-form";
import { validate } from "rut.js";

import { Button, Center, Divider, Select, VStack, useToast } from "@chakra-ui/react";
import {MyTextInput} from './MyTextInput';

let especialidades = [
  "Anestesiología",
  "Anatomía Patológica",
  "Cardiología",
  "Cardiología Intervencionista",
  "Cirugía Pediátrica.",
  "Cirugía General.",
  "Cirugía Plástica y Reconstructiva.",
  "Angiología y Cirugía Vascular.",
  "Dermatología.",
  "Endoscopia.",
  "Gastroenterología.",
  "Ginegología y Obstetricia.",
  "Hematología.",
  "Infectología.",
  "Medicina Aeroespacial.",
  "Medicina de Rehabilitación.",
  "Medicina Interna.",
  "Nefrología.",
  "Neurología.",
  "Neumología.",
  "Oftalmología.",
  "Ortopedia",
  "Otorrinolaringología.",
  "Patología Clínica. ",
  "Pediatría.",
  "Psiquiatría General.",
  "Radiología e Imagen.",
  "Medicina del Enfermo en Estado Crítico. ",
  "Urología.",
  "Cardiología Intervencionista.",
  "Cirugía Oncológica.",
  "Oncología Médica.",
  "Oncología Pediátrica.",
  "Radio-Oncología.",
];

export const MedicForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();

  const toast = useToast()

  const onSubmit = (e) => {
    let { nombres, paterno, materno, rut, especialidad } = e;

    MedicCollections.insert({
      nombres,
      apellidoPaterno: paterno,
      apellidoMaterno: materno,
      rut,
      especialidad,
      createdAt: new Date(),
    });

    reset();

    toast({
      position: "bottom-right",
      title: "Médico Añadido.",
      description: "R: Sin problemas.",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
  };

  return (
    <Center m="2">
      <VStack as="form" w="xl" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <MyTextInput
          name="nombres"
          placeholder="Nombres"
          register={register}
          error={errors.nombre}
        />
        <MyTextInput
          name="paterno"
          placeholder="Apellido Paterno"
          register={register}
          error={errors.paterno}
        />
        <MyTextInput
          name="materno"
          placeholder="Apellido Paterno"
          register={register}
          error={errors.materno}
        />
        <Divider mb="0.5" />

        <MyTextInput
          name="rut"
          placeholder="Cédula de Identidad - RUT"
          register={register}
          error={errors.rut}
          validates={{validRut: rut=>validate(rut)}}
        />


        <Select isInvalid={errors.especialidad} name="especialidad" 
        errorBorderColor="red.300"
        placeholder="Selecciona Especialidad" ref={register({required: true})}>
          {especialidades.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </Select>

        <Button colorScheme="teal" w="100%" type="submit">Crear Médico</Button>
      </VStack>
    </Center>
  );
};

