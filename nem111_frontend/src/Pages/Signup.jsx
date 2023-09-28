import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { createAccount } from "../Redux/Authentication/action";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onAccountCreateSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log(userData);

    dispatch(createAccount(userData))
      .then(() => {
        toast({
          title: "Account Created Successfully.",
          position: "top-center",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/");
      })
      .catch(() => {
        toast({
          title: "Something went wrong!",
          position: "top-center",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };
  return (
    <>
      <Box>
        {" "}
        <form onSubmit={onAccountCreateSubmit}>
          <label>Email</label>
          <Input
            mt={2}
            mb={2}
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <Input
            mt={2}
            mb={2}
            type="password"
            placeholder="Create Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box ml={2} color="gray" mt={3} mb={3}>
            <Text fontSize="xs">At least 8 characters</Text>
            <Text fontSize="xs">Mix of letters and numbers</Text>
            <Text fontSize="xs">At least 1 special character</Text>
            <Text fontSize="xs">
              At least 1 lowercase letter and 1 uppercase letter
            </Text>
          </Box>
          <Button
            type="submit"
            mt={2}
            w="100%"
            color="white"
            fontWeight="semibold"
            backgroundColor="#006aff"
            _hover={{ backgroundColor: "#002aff", borderRadius: "20px" }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Signup;