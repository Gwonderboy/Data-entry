import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import axios from "../api/axios";
import Dashboard from "./dashboard";

const DataEntryForm: React.FC = () => {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [price, setPrice] = useState("");
  const [orderDate, setOrderDate] = useState("");

  const handleCustomerNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomerName(event.target.value);
  };

  const handleProductNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductName(event.target.value);
  };

  const handleProductCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProductCategory(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleOrderDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrderDate(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Send form data to the backend API endpoint
      const response = await axios.post("/api/submitOrder", {
        customerName,
        productName,
        productCategory,
        price,
        orderDate,
      });

      console.log("Order submitted successfully:", response.data);

      setCustomerName("");
      setProductName("");
      setProductCategory("");
      setPrice("");
      setOrderDate("");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Box w="full" backgroundColor="#EEEEEE" display="flex" flexDir={"column"} p={"2rem"}>
      <form onSubmit={handleSubmit} className="form">
        <FormControl>
          <FormLabel>Customer Name:</FormLabel>
          <Input
            className="input"
            type="text"
            value={customerName}
            onChange={handleCustomerNameChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Name:</FormLabel>
          <Input
            className="input"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Category:</FormLabel>
          <Select
            className="input"
            value={productCategory}
            onChange={handleProductCategoryChange}
          ></Select>
        </FormControl>
        <FormControl>
          <FormLabel>Price:</FormLabel>
          <Input
            className="input"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Order Date:</FormLabel>
          <Input
            className="input"
            type="date"
            value={orderDate}
            onChange={handleOrderDateChange}
          />
        </FormControl>
        <Button
          mt={4}
          backgroundColor="#2868B2"
          color="white"
          type="submit"
          p="1rem"
          width="10rem"
          borderRadius="2rem"
        >
          Submit
        </Button>
      </form>

      <Dashboard />
    </Box>
  );
};

export default DataEntryForm;
