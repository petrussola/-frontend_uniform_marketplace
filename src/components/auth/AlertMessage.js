import React from "react";
import { Alert } from "@chakra-ui/react";

export default function AlertMessage({
  errorMessage,
  successMessage,
  errorText,
}) {
  if (!errorMessage && !successMessage) {
    return null;
  }
  return (
    <Alert status={errorMessage ? "error" : "success"}>
      {errorMessage
        ? errorText || "Fix the errors"
        : "User has been created. You can login now."}
    </Alert>
  );
}
