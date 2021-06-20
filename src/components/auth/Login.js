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
import { useHistory } from "react-router-dom";

// helpers
import { authSchema } from "../../helpers/validation";
import { config } from "../../config/envVariables";

// components
import AlertMessage from "./AlertMessage";

const initialValues = {
  email: "",
  password: "",
};

const initialValidationErrors = {
  email: "not checked",
  password: "not checked",
};

export default function Login() {
  const [typedUser, setTypedUser] = useState(initialValues);
  const [submittedUser, setSubmittedUser] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [validationErrors, setValidationErrors] = useState(
    initialValidationErrors
  );
  const history = useHistory();

  const handleUserInput = (e) => {
    setTypedUser({ ...typedUser, [e.target.name]: e.target.value });
  };

  const handleValidation = (e) => {
    setValidationErrors(initialValidationErrors);
    // will check email and password
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
        .post(`${config.baseUrl}/auth/login`, submittedUser)
        .then((res) => {
          setSuccessMessage(true);
          setErrorMessage(false);
          localStorage.setItem("token", res.data.data);
          setTypedUser(initialValues);
          setSubmittedUser(initialValues);
          history.push("/home");
        })
        .catch((err) => {
          const errorMessage = err.response.data.message;
          setErrorMessage(errorMessage);
          setErrorText(errorMessage);
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
        <Text fontSize="3xl">Log In</Text>
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
          id="password"
          isRequired
          isInvalid={
            validationErrors.password !== "not checked" &&
            validationErrors.password.length > 0
          }
        >
          <FormLabel>Type your password</FormLabel>
          <Input
            size="lg"
            variant="flushed"
            value={typedUser.password}
            name="password"
            onChange={handleUserInput}
            type="text"
            onBlur={handleValidation}
          />
          <FormErrorMessage>
            {validationErrors.password !== "not checked" &&
              validationErrors.password}
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
          Log In
        </Button>
      </Flex>
    </Center>
  );
}
