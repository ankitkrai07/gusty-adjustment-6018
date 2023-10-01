import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  Input,
  Select,
  Stack,
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CreditCard = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    cardNumber: "",
    cardHolder: "",
    Month: "",
    Year: "",
    cvv: "",
  });

  const [flip, setFlip] = useState(true);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let Data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(Data);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });

    if (data.cardNumber.length > 16) {
      alert("Card Number Can't Be More Than 16 Digits");
      setData({ ...data, cardNumber: data.cardNumber.slice(0, 16) });
    }
  };

  const handleValidation = () => {
    if (data.cardNumber.length > 16) {
      setData({ ...data, cardNumber: data.cardNumber.slice(0, 16) });
    }
  };

  const handleClick = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const Submit = () => {
    setAdd(() => {
      return [...add, data];
    });

    setData({
      cardNumber: "",
      cardHolder: "",
      Month: "",
      Year: "",
      cvv: "",
    });
  };

  function handleConfirm(e) {
    e.preventDefault();

    if (
      data.cardNumber.length === 16 &&
      !isNaN(data.cardNumber) &&
      data.cardHolder.length !== "" &&
      isNaN(data.cardHolder) &&
      data.cvv.length === 3 &&
      !isNaN(data.cvv)
    ) {
      Submit();
      alert("Payment Successful");
      setCartData([]);
      localStorage.removeItem("cart");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  }

  const handleFlip = () => {
    setFlip(false);
  };

  const Flip = () => {
    setFlip(true);
  };

  if (cartData.length === 0) {
    return (
      <>
        <EmptyCart />
      </>
    );
  } else {
    return (
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="4"
        align="center"
        justify="center"
      >
        <Box
          bg="white"
          rounded="lg"
          p="4"
          shadow="md"
          w={{ base: "100%", md: "50%" }}
        >
          <Center mb="4">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/6404/6404100.png"
              alt="Logo One"
              boxSize="50px"
              rounded="full"
            />
            <Image
              src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
              alt="Logo Two"
              boxSize="90px"
            />
          </Center>

          <Center>
            <Box
              bg="gray.200"
              p="2"
              rounded="lg"
              w="100%"
              textAlign="center"
              onClick={Flip}
              cursor="pointer"
            >
              {flip ? (
                <Text fontSize="3xl">
                  {data.cardNumber.length > 0
                    ? data.cardNumber
                    : "**** **** **** ****"}
                </Text>
              ) : (
                <Box bg="black" h="10px"></Box>
              )}
            </Box>
          </Center>

          <Center mt="4">
            <Box w="100%">
              <Text fontWeight="bold" fontSize="xl" mb="2">
                Card Holder
              </Text>
              {data.cardHolder.length > 0 ? (
                <Text fontSize="lg">{data.cardHolder}</Text>
              ) : (
                <Text fontSize="lg">***** *****</Text>
              )}
            </Box>
            <Box w="100%">
              <Text fontWeight="bold" fontSize="xl" mt="2">
                Expiry Date
              </Text>
              {data.Month === "" && data.Year === "" ? (
                <Text fontSize="lg">00/00</Text>
              ) : (
                <Text fontSize="lg">
                  {data.Month}/{data.Year}
                </Text>
              )}
            </Box>
          </Center>
        </Box>

        <Box
          bg="white"
          rounded="lg"
          p="4"
          shadow="md"
          w={{ base: "100%", md: "50%" }}
        >
          {flip ? (
            <Box bg="black" h="40px"></Box>
          ) : (
            <Center>
              <Box
                bg="white"
                p="2"
                rounded="lg"
                w="90%"
                textAlign="center"
                cursor="pointer"
                onClick={handleFlip}
              >
                <Text fontSize="3xl" fontWeight="bold">
                  {data.cvv}
                </Text>
              </Box>
            </Center>
          )}
          <Box mt="4">
            <Text fontSize="sm">
              CVV number is present on the back side of your card on the
              magnetic strip. It verifies that the card is physically available
              with the individual using it during the transaction. Debit and
              credit cards are mainly used for online transactions or for other
              virtual payment gateways.
            </Text>
          </Box>
        </Box>
      </Stack>
    );
  }
};

export default CreditCard;
