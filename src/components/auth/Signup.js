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
import axios from "axios";

// helpers
import { authSchema } from "../../helpers/validation";
import { config } from "../../config/envVariables";

// components
import AlertMessage from "./AlertMessage";

const initialValues = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
};

const initialValidationErrors = {
  email: "not checked",
  passwordOne: "not checked",
  passwordTwo: "not checked",
};

export default function Signup() {
  const [typedUser, setTypedUser] = useState(initialValues);
  const [submittedUser, setSubmittedUser] = useState(initialValues);
  const [validationErrors, setValidationErrors] = useState(
    initialValidationErrors
  );
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const handleUserInput = (e) => {
    setTypedUser({ ...typedUser, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    setValidationErrors(initialValidationErrors);
    switch (e.target.name) {
      case "passwordTwo": // checks if both passwords match
        if (typedUser.passwordOne !== typedUser.passwordTwo) {
          // if both passwords do not match
          setValidationErrors({
            ...validationErrors,
            passwordTwo: "Passwords must match",
          }); // set error
          setSubmittedUser({ ...submittedUser, [e.target.name]: "" }); // set to be submitted state to empty
        } else {
          setSubmittedUser({
            ...submittedUser,
            [e.target.name]: e.target.value,
          });
          setValidationErrors({ ...validationErrors, [e.target.name]: "" });
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
            setSubmittedUser({ ...submittedUser, [e.target.name]: "" });
          });
    }
  };

  const handleSubmit = () => {
    let readyToSubmit = true;
    for (let key in validationErrors) {
      if (validationErrors[key].length !== 0) {
        readyToSubmit = false;
      }
    }
    if (readyToSubmit === true) {
      axios
        .post(`${config.baseUrl}/auth/signup`, {
          email: submittedUser.email,
          password: submittedUser.passwordOne,
        })
        .then(() => {
          setSuccessMessage(true);
          setErrorMessage(false);
          setTypedUser(initialValues);
          setSubmittedUser(initialValues);
        })
        .catch((err) => {
          const errorMessage = err.response.data.message;
          setErrorMessage(errorMessage);
          setErrorText(errorMessage)
        });
    } else {
      setSuccessMessage(false);
      setErrorMessage(true);
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
        <AlertMessage
          successMessage={successMessage}
          errorMessage={errorMessage}
          errorText={errorText}
        />
        <FormControl
          id="email"
          isRequired
          isInvalid={
            validationErrors.email !== "not checked" &&
            validationErrors.email.length > 0
          }
        >
          <FormLabel htmlFor="email">Email</FormLabel>
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
            {validationErrors.email !== "not checked" && validationErrors.email}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="passwordOne"
          isRequired
          isInvalid={
            validationErrors.passwordOne !== "not checked" &&
            validationErrors.passwordOne.length > 0
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
            {validationErrors.passwordOne !== "not checked" &&
              validationErrors.passwordOne}
          </FormErrorMessage>
        </FormControl>
        <FormControl
          id="passwordTwo"
          isRequired
          isInvalid={
            validationErrors.passwordTwo !== "not checked" &&
            validationErrors.passwordTwo.length > 0
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
            {validationErrors.passwordTwo !== "not checked" &&
              validationErrors.passwordTwo}
          </FormErrorMessage>
        </FormControl>
        <Button
          w="100%"
          bg="blue.500"
          color="white"
          mx="4"
          my="1"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Flex>
    </Center>
  );
}
