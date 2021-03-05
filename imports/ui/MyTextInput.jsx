import React from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export const MyTextInput = (props) => {
  const trapSpacesForRequiredFields = (value) => !!value.trim();
  return (
    <>
      <FormControl>
        <FormLabel>{props.placeholder}</FormLabel>
        <Input
          as="input"
          type="text"
          placeholder={props.placeholder}
          name={props.name}
          isInvalid={props.error}
          errorBorderColor="red.300"
          ref={props.register({
            required: true,
            validate: {
              trapSpacesForRequiredFields,
              ...props.validates,
            },
          })}
        />
      </FormControl>
    </>
  );
};
