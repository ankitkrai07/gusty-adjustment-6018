import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

function Calculator() {
  const [age, setAge] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [existingEmi, setExistingEmi] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [emi, setEmi] = useState("");
  const [totalPayable, setTotalPayable] = useState("");

  const calculateLoanEligibility = () => {
    const monthlyNetIncome = parseInt(netIncome) - parseInt(existingEmi);
    const maxLoanAmount = monthlyNetIncome * 60;
    const monthlyInterestRate = interestRate / 12 / 100;
    const totalMonths = tenure * 12;
    const emi =
      (maxLoanAmount *
        monthlyInterestRate *
        (1 + monthlyInterestRate) ** totalMonths) /
      ((1 + monthlyInterestRate) ** totalMonths - 1);
    const totalPayable = emi * totalMonths;

    setLoanAmount(maxLoanAmount.toFixed(2));
    setEmi(emi.toFixed(2));
    setTotalPayable(totalPayable.toFixed(2));
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minH="100vh"
    >
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        maxW="400px"
        w="100%"
        textAlign="center"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" mb={4}>
          Housing Loan Eligibility Calculator
        </Heading>
        <FormControl mb={3}>
          <FormLabel>Age:</FormLabel>
          <Input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Net Income (monthly):</FormLabel>
          <Input
            type="number"
            value={netIncome}
            onChange={(e) => setNetIncome(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Existing Monthly EMI:</FormLabel>
          <Input
            type="number"
            value={existingEmi}
            onChange={(e) => setExistingEmi(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Interest Rate (%):</FormLabel>
          <Input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Tenure (years):</FormLabel>
          <Input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            required
          />
        </FormControl>
        <Button
          colorScheme="teal"
          size="md"
          mt={4}
          onClick={calculateLoanEligibility}
        >
          Calculate
        </Button>
        <Text mt={4}>
          Loan Eligibility: <b>{loanAmount}</b>
        </Text>
        <Text>
          Monthly EMI: <b>{emi}</b>
        </Text>
        <Text>
          Total Payable Amount: <b>{totalPayable}</b>
        </Text>
      </Box>
    </Flex>
  );
}

export default Calculator;
