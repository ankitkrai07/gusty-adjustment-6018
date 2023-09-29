import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { plush } from "../assets";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  id: 0,
  name: "",
  price: 0,
  image: "",
  category: "",
};

const AdminPages = () => {
  const [data, setData] = useState(initialState);
  const product = useSelector((store) => store.productReducer.product);
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const { name, value } = e.target;

    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(postProduct(data));
    setData(initialState);
  };

  //   useEffect(() => {
  //     dispatch(getProduct());
  //   }, [dispatch]);

  const {
    isOpen: addProductModalOpen,
    onOpen: onAddPoductModalOpen,
    onClose: onAddPoductModalClose,
  } = useDisclosure();

  //   const handleDelete = (id) => {
  //     dispatch(deleteProduct(id));
  //   };

  return (
    <>
      <Center>
        <Box
          gap={8}
          w="70%"
          display="flex"
          justifyContent="space-evenly"
          alignItems="baseline"
          m={8}
          p={8}
          borderRadius={8}
          boxShadow={"md"}
        >
          <Box>
            <Button onClick={onAddPoductModalOpen} boxShadow={"md"}>
              <img src="" alt="" width={30} /> <Text>Add New Product</Text>
            </Button>

            <Modal isOpen={addProductModalOpen} onClose={onAddPoductModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody m={6}>
                  <form onSubmit={handleSubmit}>
                    <Heading as="h5" size="sm" pb={4}>
                      Id:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="Product Id"
                      mb={4}
                      name="id"
                      value={data.id}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Name:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Name"
                      mb={4}
                      name="name"
                      value={data.name}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Price:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="Product Price"
                      mb={4}
                      name="price"
                      value={data.price}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Image:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Total Price"
                      mb={4}
                      name="image"
                      value={data.image}
                      onChange={handelChange}
                    />
                    <Center>
                      <Button variant="solid" type="submit">
                        Add Product
                      </Button>
                    </Center>
                  </form>
                </ModalBody>

                {/* <ModalFooter> */}
                {/* </ModalFooter> */}
              </ModalContent>
            </Modal>
          </Box>

          <Box display="flex" gap={8}>
            <Select w="16rem" boxShadow={"md"}>
              <option value="">Select Category</option>
              <option value="home_buyer">Home Buyer</option>
              <option value="home_seller">Home Seller</option>
              <option value="both_buyer_seller">Both Buyer and Seller</option>
            </Select>
            <Select w="16rem" boxShadow={"md"}>
              <option value="">Sort by Name</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </Select>
          </Box>
        </Box>
      </Center>

      <Center>
        <TableContainer w="70%" borderRadius={8} boxShadow={"md"} m={8} p={8}>
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Product Name</Th>
                <Th>Product Image</Th>
                <Th>Product Category</Th>
                <Th>Product Price</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody></Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};

export default AdminPages;
