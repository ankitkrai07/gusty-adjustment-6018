import {
  Box,
  Button,
  Center,
  Heading,
  Image,
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
import {
  deleteProduct,
  getProduct,
  postProduct,
} from "../Redux/Product/action";
import { GET_FETCH_SUCCESS } from "../Redux/Product/actionType";

const initialState = {
  id: 0,
  title: "",
  image: "",
  type: "",
  total_price: 0,
  ownership: "",
};

const AdminPages = () => {
  const [data, setData] = useState(initialState);
  const product = useSelector((store) => store.productReducer.product);
  // console.log("Product data from Redux:", product);
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
    dispatch(postProduct(data));
    setData(initialState);
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const {
    isOpen: addProductModalOpen,
    onOpen: onAddPoductModalOpen,
    onClose: onAddPoductModalClose,
  } = useDisclosure();

  const handleDelete = (id) => {
    const updatedProducts = product.data.filter((el) => el._id !== id);
    dispatch({ type: GET_FETCH_SUCCESS, payload: updatedProducts });
    dispatch(deleteProduct(id))
      .then(() => {
        console.log(`Product with ID ${id} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`Error deleting product with ID ${id}:`, error);
      });
  };

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
                      Product Title:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Title"
                      mb={4}
                      name="title"
                      value={data.title}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Image:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Image URL"
                      mb={4}
                      name="image"
                      value={data.image}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Ownership:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Ownership"
                      mb={4}
                      name="ownership"
                      value={data.ownership}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Type:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Type"
                      mb={4}
                      name="type"
                      value={data.type}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Product Price:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="Product Price"
                      mb={4}
                      name="price"
                      value={data.price}
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
        <TableContainer w="95%" borderRadius={8} boxShadow={"md"} m={8} p={8}>
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Title</Th>
                <Th>Image</Th>
                <Th>Ownership</Th>
                <Th>Type</Th>
                <Th>Price</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.isArray(product.data) &&
                product.data.map((el) => {
                  return (
                    <Tr key={el._id}>
                      <Td>{el._id}</Td>
                      <Td>{el.title}</Td>
                      <Td>
                        <Image src={el.image} />
                      </Td>
                      <Td>{el.ownership}</Td>
                      <Td>{el.type}</Td>
                      <Td>{el.total_price}</Td>
                      <Td>
                        <Button onClick={() => handleDelete(el._id)}>
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};

export default AdminPages;
