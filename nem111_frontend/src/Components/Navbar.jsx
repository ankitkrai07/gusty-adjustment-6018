import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Link,
  Divider,
  Text,
} from "@chakra-ui/react";
import Signup from "../Pages/Signup";
import { logo } from "../assets/index";
import Login from "../Pages/Login";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        p={3}
        alignItems="center"
        boxShadow="lg"
      >
        {/* First Links */}
        <Box display="flex" justifyContent="space-around" w="35%">
          <Link>Buy</Link>
          <Link>Rent</Link>
          <Link>Sell</Link>
          <Link>Home Loans</Link>
          <Link>Agent Finder</Link>
        </Box>

        {/* Logo */}

        <Box>
          <Image w="12" src={logo} />
        </Box>

        {/* Other Links */}

        <Box w="35%" display="flex" justifyContent="space-around">
          <Link>Manage Rentals</Link>
          <Link>Advertise</Link>
          <Link>Help</Link>
          <Link onClick={onOpen}>Sign In</Link>
        </Box>
      </Box>

      {/* Modal */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={20}>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Heading
                as="h4"
                size="md"
                fontSize="2xl"
                mt={5}
                fontFamily="serif"
                fontWeight="semibold"
              >
                Welcome to HomeSweeter
              </Heading>
            </Center>

            <Tabs mt={5}>
              <TabList>
                <Tab>Sign In</Tab>
                <Tab>Register</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Login />
                  <Center>
                    <Button
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      p={2}
                      mt={3}
                      mb={3}
                      w="100%"
                      color="#006aff"
                      fontWeight="semibold"
                      backgroundColor="white"
                      _hover={{
                        border: "2px solid #002aff",
                        borderRadius: "20px",
                      }}
                    >
                      Forgot Your Password?
                    </Button>
                  </Center>

                  <Divider />

                  <Center>
                    <Text mt={4} mb={4} fontSize="large">
                      Or connect with:
                    </Text>
                  </Center>
                </TabPanel>

                <TabPanel>
                  <Signup />
                  <Divider />

                  <Center>
                    <Text mt={4} mb={4} fontSize="large">
                      Or connect with:
                    </Text>
                  </Center>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
