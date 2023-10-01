import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { user } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, getUsers, updateUser } from "../Redux/Users/action";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [editedNote, setEditedNote] = useState({
    username: "Hardik",
    email: "hardik@hs.com",
    mobile_Number: 0,
    location: "",
  });
  // const user = useSelector((state) => state.userReducer.user);
  const id = localStorage.getItem("id");
  console.log(id);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // Fetch user data by ID when the component mounts
  //   dispatch(getUserById(id))
  //     .then((response) => {
  //       const userData = response.data;
  //       setEditedNote(userData);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error);
  //     });
  // }, [dispatch, id]);

  const handleSave = () => {
    const userData = {
      mobile_Number: editedNote.mobile_Number,
      location: editedNote.location,
    };

    // Make sure "id" is defined and not empty
    if (id) {
      // Verify that the URL is correct here
      axios
        .patch(`${config.REACT_APP_SERVER}/users/${id}`, userData)
        .then((response) => {
          // Handle a successful response from the server
          console.log("Profile data saved successfully:", response.data);
        })
        .catch((error) => {
          // Handle any errors that occur during the request
          console.error("Error saving profile data:", error);
        });
    } else {
      // Handle the case where "id" is not found in localStorage
      // You can redirect to a login page or display an error message
      // For example, you can use navigate("/login") to redirect if using react-router-dom
      console.error(
        "User ID not found in localStorage. Redirect or show error message."
      );
    }
  };
  return (
    <Box display="flex" flexDirection="column">
      {/* user details */}
      <Center>
        <Box boxShadow="lg" w="80%" mt={10} p={6}>
          <Center>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Image src={user} w={16} mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Hardik
              </Heading>
              {/* Details */}
              <form>
                <label>Username :</label>
                <Input
                  type="text"
                  mt={2}
                  mb={2}
                  value={editedNote.username}
                  placeholder="Enter Your Name"
                  // onChange={(e) =>
                  //   setEditedNote({ ...editedNote, username: e.target.value })
                  // }
                />
                <label>Phone :</label>
                <Input
                  type="number"
                  mt={2}
                  mb={2}
                  value={editedNote.mobile_Number}
                  placeholder="Enter Phone Number"
                  onChange={(e) =>
                    setEditedNote({
                      ...editedNote,
                      mobile_Number: e.target.value,
                    })
                  }
                />
                <label>Email :</label>
                <Input
                  type="email"
                  mt={2}
                  mb={2}
                  value={editedNote.email}
                  placeholder="Enter Email"
                  // onChange={(e) =>
                  //   setEditedNote({
                  //     ...editedNote,
                  //     email: e.target.value,
                  //   })
                  // }
                />
                <label>Location :</label>
                <Input
                  type="text"
                  mt={2}
                  mb={2}
                  value={editedNote.location}
                  placeholder="Enter Location"
                  onChange={(e) =>
                    setEditedNote({ ...editedNote, location: e.target.value })
                  }
                />
                <Button
                  w="100%"
                  mt={2}
                  mb={2}
                  onClick={handleSave}
                  color="white"
                  backgroundColor="#006aff"
                  _hover={{ backgroundColor: "#002aff", borderRadius: "20px" }}
                >
                  Save
                </Button>
              </form>{" "}
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Profile;
