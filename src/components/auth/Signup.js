import React, { useState } from "react";
import {
  Center,
  Flex,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";
import * as yup from "yup";

// helpers
import { authSchema } from "../../helpers/validation";

const initialValues = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
};

const initialValidationErrors = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
};

export default function Signup() {
  const [typedUser, setTypedUser] = useState(initialValues);
  const [submittedUser, setSubmittedUser] = useState(initialValues);
  const [validationErrors, setValidationErrors] = useState(
    initialValidationErrors
  );

  const handleUserInput = (e) => {
    setTypedUser({ ...typedUser, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    setValidationErrors(initialValidationErrors);
    switch (e.target.name) {
      case "passwordTwo": // checks if both passwords match
        if (typedUser.passwordOne !== typedUser.passwordTwo) {
          setValidationErrors({
            ...validationErrors,
            passwordTwo: "Passwords must match",
          });
        }
        break;
      default:
        // will check email or passwordOne
        yup
          .reach(authSchema, e.target.name) // https://github.com/jquense/yup/issues/102#issuecomment-352260463
          .validate(e.target.value)
          .then((value) => {
            setSubmittedUser({ ...submittedUser, [e.target.name]: value }); // because user input may be transformed i.e. email is transformed to lower case
            setValidationErrors({ ...validationErrors, [e.target.name]: "" }); // clear validation error message in case it had set before due to previous validation error
          })
          .catch((err) => {
            setValidationErrors({
              ...validationErrors,
              [e.target.name]: err.message,
            }); // sets validation error message so it displays underneath the input field
          });
    }
  };

  return (
    <Center h="100vh">
      <Flex
        w={["100%", "50%", "50%", "50%", "35%"]}
        direction="column"
        align="center"
        justify="space-evenly"
      >
        <Box borderRadius="full" bg="blue.500" p={4}>
          <LockIcon w={6} h={6} />
        </Box>
        <Text fontSize="3xl">Sign Up</Text>
        <FormControl
          id="email"
          isRequired
          isInvalid={validationErrors && validationErrors.email.length > 0}
        >
          <FormLabel>Email</FormLabel>
          <Input
            size="lg"
            variant="flushed"
            value={typedUser.email}
            name="email"
            onChange={handleUserInput}
            type="email"
            onBlur={handleValidation}
          />
          <FormErrorMessage>
            {validationErrors && validationErrors.email}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="passwordOne"
          isRequired
          isInvalid={
            validationErrors && validationErrors.passwordOne.length > 0
          }
        >
          <FormLabel>Type your password</FormLabel>
          <Input
            size="lg"
            variant="flushed"
            value={typedUser.passwordOne}
            name="passwordOne"
            onChange={handleUserInput}
            type="text"
            onBlur={handleValidation}
          />
          <FormErrorMessage>
            {validationErrors && validationErrors.passwordOne}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="passwordTwo"
          isRequired
          isInvalid={
            validationErrors && validationErrors.passwordTwo.length > 0
          }
        >
          <FormLabel>Re-type your password</FormLabel>
          <Input
            size="lg"
            variant="flushed"
            value={typedUser.passwordTwo}
            name="passwordTwo"
            onChange={handleUserInput}
            type="text"
            onBlur={handleValidation}
          />
          <FormErrorMessage>
            {validationErrors && validationErrors.passwordTwo}
          </FormErrorMessage>
        </FormControl>
        <Button w="100%" bg="blue.500" color="white" mx="4" my="1">Sign Up</Button>
      </Flex>
    </Center> 
  );
}
