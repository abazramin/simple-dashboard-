import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../componets/Sidebar";

const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6 , 1fr)">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        p="30px"
        minHeight={{ lg: "100vh" }}
        borderRight="1px solid #eee"
      >
        <Sidebar />
      </GridItem>
      <GridItem p="10px" colSpan={{ base: 6, lg: 4, xl: 5 }} as="main">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
