import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Link as ChakraLink,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import {
  IoHeartOutline,
  IoHeartSharp,
  IoShareSocialOutline,
} from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const WishlistItem = ({ product }) => {
  const token = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUrl = window.location.href;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCopyLink = () => {
    alert("Link copied!");
  };

  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  const handleSchedulingModalOpen = () => {
    setIsSchedulingModalOpen(true);
  };

  const handleSchedulingModalClose = () => {
    setIsSchedulingModalOpen(false);
  };

  const handleScheduleAppointment = () => {
    alert(
      `Appointment scheduled for ${selectedDate} at ${selectedTime}. Type: ${appointmentType}`
    );
    handleSchedulingModalClose();
  };

  return (
    <Box
      borderRadius="20px"
      p="10px"
      backgroundColor="#f4f4f4"
      textAlign="start"
      marginBottom="15px"
    >
      <Flex justifyContent="right">
        {product.inWishlist ? (
          <IoHeartSharp
            size="25px"
            color="#FF6F61"
            onClick={() => product.removeFromWishlist(product._id)}
            cursor="pointer"
          />
        ) : (
          <IoHeartOutline
            size="25px"
            color="606060"
            onClick={() => product.addToWishlist(product._id)}
            cursor="pointer"
          />
        )}
        <IoShareSocialOutline
          size="25px"
          color="606060"
          onClick={handleModalOpen}
          cursor="pointer"
          marginLeft="15px"
          marginRight="15px"
        />
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Share Link</ModalHeader>
            <ModalBody>
              <Text>
                {currentUrl}/{product._id}
              </Text>
            </ModalBody>
            <ModalFooter>
              <CopyToClipboard text={`${currentUrl}/${product._id}`}>
                <Button colorScheme="blue" onClick={handleCopyLink}>
                  Copy Link
                </Button>
              </CopyToClipboard>
              <Button colorScheme="gray" onClick={handleModalClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Flex>
        <Image
          src={product.image}
          borderRadius="10%"
          w="30%"
          h="150px"
          marginRight="15px"
        />
        <Box w="45%" marginRight="15px">
          <ChakraLink to={`/buyproduct/${product._id}`}>
            <Text fontWeight="bold">{product.details}</Text>
            {product.building ? (
              <Text color="#606060">{product.building}</Text>
            ) : null}
            <Flex justifyContent="space-between">
              <Box>
                <Text fontWeight="bold">Carpet Area</Text>
                <Text>{product.carpet}</Text>
              </Box>
              <div
                style={{
                  border: "1px solid grey",
                  width: "0.1px",
                  height: "50px",
                }}
              ></div>
              <Box>
                <Text fontWeight="bold">Status</Text>
                <Text>{product.status}</Text>
              </Box>
              <div
                style={{
                  border: "1px solid grey",
                  width: "0.1px",
                  height: "50px",
                }}
              ></div>
              <Box>
                <Text fontWeight="bold">Type</Text>
                <Text>{product.furnishing}</Text>
              </Box>
            </Flex>
            <br />
            <Text>
              {product.description.slice(0, 40)}
              {product.description.length > 50 && "..."}
            </Text>
          </ChakraLink>
        </Box>
        <Box w="25%">
          <Text fontWeight="bolder">₹ {product.total_price}</Text>
          {product.price_per_sqft ? (
            <Text fontWeight="normal">(₹ {product.price_per_sqft})</Text>
          ) : null}
          {token ? (
            <Button
              colorScheme="green"
              variant="outline"
              onClick={handleSchedulingModalOpen}
            >
              Schedule Appointment
            </Button>
          ) : (
            <ChakraLink to="/signin">
              <Button colorScheme="green" variant="outline">
                Schedule Appointment
              </Button>
            </ChakraLink>
          )}
          <Modal
            isOpen={isSchedulingModalOpen}
            onClose={handleSchedulingModalClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Schedule Appointment</ModalHeader>
              <ModalBody>
                <label>Date:</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <label>Time:</label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                />
                <label>Appointment Type:</label>
                <Select
                  value={appointmentType}
                  onChange={(e) => setAppointmentType(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="In-person">In-person</option>
                  <option value="Virtual">Virtual</option>
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={handleScheduleAppointment}>
                  Schedule
                </Button>
                <Button colorScheme="gray" onClick={handleSchedulingModalClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <br />
          {token ? (
            <ChakraLink to="/payment">
              <Button colorScheme="green" variant="outline">
                Buy Now
              </Button>
            </ChakraLink>
          ) : (
            <ChakraLink to="/signin">
              <Button colorScheme="green" variant="outline">
                Buy Now
              </Button>
            </ChakraLink>
          )}
          <br />
          <ChakraLink to="/calculator">
            <Button colorScheme="green" variant="outline">
              {product.calculator}
            </Button>
          </ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};
