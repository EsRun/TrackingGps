import { Container, Box, Theme, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface sideComponenetProps{
  title: string;
}

const SideComponent: React.FC<sideComponenetProps> = ({title}) =>{
  return (
    <Box sx={{padding: '20px', fontSize: 20,}}>
      <Typography variant="body2">{title}</Typography>
    </Box>
  )
}

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
       <SideComponent title="Compoenet1" />
       <SideComponent title="Compoenet2" />
       <SideComponent title="Compoenet3" />
      </Container>
    </>
  );
};



export default Side;
