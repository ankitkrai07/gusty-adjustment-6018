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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from "@chakra-ui/react";
import Signup from "../Pages/Signup";
import { logo, user } from "../assets/index";
import Login from "../Pages/Login";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link as NewLink } from "react-router-dom";
import { logoutUser } from "../Redux/Authentication/action";

const Navbar = () => {
  const {
    isOpen: mainModalIsOpen,
    onOpen: openMainModal,
    onClose: closeMainModal,
  } = useDisclosure();
  const {
    isOpen: drawerisOpen,
    onOpen: drawerOpen,
    onClose: drawerClose,
  } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((store) => store.authReducer.token);
  console.log(token);
  const isLoggedIn = !!token;

  const tokeLength = localStorage.length;

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
  };

  // const handleProfile = () => {
  //   navigate("/profile");
  // };

  return (
    <>
      <Box
        display={{ base: "none", sm: "none", md: "none", lg: "flex" }}
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
          {isLoggedIn ? (
            <>
              <Menu>
                <MenuButton>
                  <Image src={user} w={6} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NewLink to="/profile">Profile</NewLink>
                  </MenuItem>
                  <MenuItem>
                    <NewLink>Wishlist</NewLink>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link onClick={openMainModal}>Sign In</Link>
          )}
        </Box>
      </Box>

      {/* Hamburger */}

      <Box
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        justifyContent="space-between"
        p={3}
        alignItems="center"
        boxShadow="lg"
      >
        <HamburgerIcon onClick={drawerOpen} _hover={{ cursor: "pointer" }} />

        <Drawer
          isOpen={drawerisOpen}
          placement="left"
          size="100%"
          onClose={drawerClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Center>
                <Box>
                  <Image w="12" src={logo} />
                </Box>
              </Center>
            </DrawerHeader>
            <DrawerCloseButton />

            <DrawerBody>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Buy</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Rent</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Sell</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Advertise</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Home Loans</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Agent Finder</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Manage Rentals</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Advertise</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" mt={2} mb={2}>
                        <Link>Help</Link>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}></AccordionPanel>
                </AccordionItem>
              </Accordion>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <Box>
          <Image w="12" src={logo} />
        </Box>

        <Box display="flex" justifyContent="space-around">
          {tokeLength > 1 ? (
            <>
              <Menu>
                <MenuButton>
                  <Image src={user} w={6} />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link>Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link onClick={openMainModal}>Sign In</Link>
          )}
        </Box>
      </Box>

      {/* Sign in Modal */}

      <Modal isOpen={mainModalIsOpen} onClose={closeMainModal}>
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
