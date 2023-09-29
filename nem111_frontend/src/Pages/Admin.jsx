import {
  Box,
  Button,
  Center,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminPages from "./AdminPages";
import AdminUser from "./AdminUser";

const Admin = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <Box>
        <Tabs variant="enclosed" index={activeTab} onChange={handleTabChange}>
          <TabList>
            <Tab>Sales Dashboard</Tab>
            <Tab>Products</Tab>
            <Tab>Users</Tab>
            <Tab>Admin</Tab>
          </TabList>
          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel>
              <AdminPages />
            </TabPanel>
            <TabPanel>
              <AdminUser />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <Box
          mt={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Button w="10%">Refresh Sales</Button>
          <Box display="flex" gap={40} mt={9}>
            <Box
              color="whiteAlpha.800"
              backgroundColor="gray"
              borderRadius={15}
              p={7}
            >
              <Heading>Todays Sales</Heading>
              <Heading>$ 0.00</Heading>
            </Box>
            <Box
              color="whiteAlpha.800"
              backgroundColor="gray"
              borderRadius={15}
              p={7}
            >
              <Heading>Week Sales</Heading>
              <Heading>$ 0.00</Heading>
            </Box>
            <Box
              color="whiteAlpha.800"
              backgroundColor="gray"
              borderRadius={15}
              p={7}
            >
              <Heading>Month Sales</Heading>
              <Heading>$ 0.00</Heading>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Admin;
