import React from "react";
import {
  Box,
  Heading,
  Image,
  Button,
  Center,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Box className="main" bg="#F5F5F5" minH="100vh" py="30px">
      <Center>
        <Image
          src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg"
          alt="Empty Cart Image"
          maxW="140px"
          maxH="132px"
        />
      </Center>
      <Center flexDir="column" mt="4">
        <Heading as="h3" fontSize="xl" color="gray.600">
          Oops!
        </Heading>
        <Heading as="h3" fontSize="xl" color="gray.600">
          Looks like there is no item in your cart yet.
        </Heading>
      </Center>
      <Center mt="4">
        <ChakraLink as={Link} to="/" _hover={{ textDecor: "none" }}>
          <Button
            className="button"
            bg="#FF6F61"
            color="white"
            fontSize="16px"
            p="10px"
            borderRadius="5px"
            _hover={{ bg: "#FF5640" }}
          >
            Continue Shopping
          </Button>
        </ChakraLink>
      </Center>
    </Box>
  );
};

export default EmptyCart;
