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

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [editedNote, setEditedNote] = useState({
    username: "",
    mobileNumber: "",
    category: "",
    location: "",
  });

  // const [username,setUserName] = useState("")
  // const [mobile,setMobile] = useState("")
  // const [category,setCategory] = useState("")
  // const [location,setLocation] = useState("")

  const handleSave = () => {};
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
                User Name
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
                  onChange={(e) =>
                    setEditedNote({ ...editedNote, username: e.target.value })
                  }
                />
                <label>Phone :</label>
                <Input
                  type="number"
                  mt={2}
                  mb={2}
                  value={editedNote.mobileNumber}
                  placeholder="Enter Phone Number"
                  onChange={(e) =>
                    setEditedNote({
                      ...editedNote,
                      mobileNumber: e.target.value,
                    })
                  }
                />
                <label>User Type :</label>
                <Select
                  mt={2}
                  mb={2}
                  value={editedNote.category}
                  onChange={(e) =>
                    setEditedNote({ ...editedNote, category: e.target.value })
                  }
                >
                  <option value="home_buyer">Home Buyer</option>
                  <option value="home_seller">Home Seller</option>
                  <option value="both_buyer_seller">
                    Both Buyer and Seller
                  </option>
                  <option value="renter">Renter</option>
                </Select>
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
