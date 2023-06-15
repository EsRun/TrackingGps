import { Container, Box, Theme, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface sideComponenetProps {
  title: string;
  link: string;
}

const SideComponent: React.FC<sideComponenetProps> = ({ title, link }) => {
  return (
    <Box
      component="a"
      href={link}
      sx={{
        padding: "20px",
        width: "100%",
        fontSize: 20,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Typography align="center" variant="subtitle1">
        {title}
      </Typography>
    </Box>
  );
};

const Side = () => {
  return (
    <>
      <Container
        fixed={true}
        sx={{
          margin: 0,
          width: "200px",
          backgroundColor: "gray",
        }}
      >
        <SideComponent title="Compoenet1" link="/s" />
        <SideComponent title="Compoenet2" link="/s" />
        <SideComponent title="Compoenet3" link="/s" />
      </Container>
    </>
  );
};

export default Side;
