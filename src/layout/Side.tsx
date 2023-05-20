import { Container, Box } from "@mui/material";
import React from "react";

const Side = () => {
  return (
    <>
      <Container
        sx={{
          margin: 0,
          maxWidth: "300px !important",
          backgroundColor: "gray",
        }}
      >
       <Box>sideMenu1</Box> 
       <Box>sideMenu2</Box> 
       <Box>sideMenu3</Box> 
      </Container>
    </>
  );
};

export default Side;
