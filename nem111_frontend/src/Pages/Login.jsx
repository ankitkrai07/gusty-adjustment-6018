import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGIN_FAILURE } from "../Redux/Authentication/actionType";
import { loginUser } from "../Redux/Authentication/action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((store) => store.authReducer.token);

  const onLoginSubmit = () => {
    const userData = { email, password };

    if (
      userData.email === "admin@example.com" &&
      userData.password === "admin"
    ) {
      // Handle admin login
      // For example, set a flag in your Redux store
      // and redirect to the admin page
      dispatch({ type: "SET_ADMIN_STATUS", payload: true });

      toast({
        title: "Admin Login Successfully!",
        position: "top-center",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      // Redirect to the admin page
      navigate("/admin", { replace: true });
    } else {
      // Handle regular user login
      dispatch(loginUser(userData))
        .then(() => {
          toast({
            title: "Login Successfully!",
            position: "top-center",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          if (token) {
            navigate(location.state, { replace: true });
          }
        })
        .catch((err) => {
          toast({
            title: "Login Failed",
            description: "Please check your credentials",
            position: "top-center",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
          dispatch({ type: LOGIN_FAILURE });
        });
    }
  };

  return (
    <>
      <Box>
        <label>Email</label>
        <Input
          mt={2}
          mb={2}
          type="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <Input
          mt={2}
          mb={2}
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          mt={2}
          w="100%"
          color="white"
          fontWeight="semibold"
          backgroundColor="#006aff"
          _hover={{ backgroundColor: "#002aff", borderRadius: "20px" }}
          onClick={onLoginSubmit}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default Login;
