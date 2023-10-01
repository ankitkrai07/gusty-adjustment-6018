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
import { deleteUsers, getUsers, postUsers } from "../Redux/Users/action";
import { GET_FETCH_SUCCESS } from "../Redux/Users/actionType";

const initialState = {
  id: 0,
  username: "",
  email: "",
};

const AdminUser = () => {
  const [data, setData] = useState(initialState);
  const user = useSelector((store) => store.userReducer.user);
  // console.log(user);
  const dispatch = useDispatch();
  const {
    isOpen: addUsersModalOpen,
    onOpen: onAddUsersModalOpen,
    onClose: onAddUsersModalClose,
  } = useDisclosure();

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
    dispatch(postUsers(data));
    setData(initialState);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    const updatedUser = user.users.filter((el) => el._id !== id);
    dispatch({ type: GET_FETCH_SUCCESS, payload: updatedUser });
    dispatch(deleteUsers(id))
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
          // border="1px solid red"
          display="flex"
          justifyContent="space-evenly"
          alignItems="baseline"
          m={8}
          p={8}
          borderRadius={8}
          boxShadow={"md"}
        >
          <Box>
            <Button onClick={onAddUsersModalOpen} boxShadow={"md"}>
              <img src="" alt="" width={30} /> <Text>Add New Users</Text>
            </Button>

            <Modal isOpen={addUsersModalOpen} onClose={onAddUsersModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Users</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={handleSubmit}>
                    <Heading as="h5" size="sm" pb={4}>
                      Id:
                    </Heading>
                    <Input
                      type="number"
                      placeholder="User Id"
                      mb={4}
                      name="id"
                      value={data.id}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Users Name:
                    </Heading>
                    <Input
                      type="text"
                      placeholder="User Name"
                      mb={4}
                      name="name"
                      value={data.name}
                      onChange={handelChange}
                    />
                    <Heading as="h5" size="sm" pb={4}>
                      Users Email:
                    </Heading>
                    <Input
                      type="email"
                      placeholder="User Email"
                      mb={4}
                      name="email"
                      value={data.email}
                      onChange={handelChange}
                    />
                    <Center>
                      <Button variant="solid" type="submit">
                        Add Users
                      </Button>
                    </Center>
                  </form>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>

          <Box display="flex" gap={8}>
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
                <Th>Users Name</Th>
                <Th>Users Email</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.isArray(user.users) &&
                user.users.map((el) => (
                  <Tr key={el._id}>
                    <Td>{el._id}</Td>
                    <Td>{el.username}</Td>
                    <Td>{el.email}</Td>
                    <Td>
                      <Button onClick={() => handleDelete(el._id)}>
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </>
  );
};

export default AdminUser;
