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
      sx={{
        width: "100%",
        fontSize: 20,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Typography
        padding="10px 0"
        align="center"
        variant="subtitle1"
        sx={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc" }}
      >
        {title}
      </Typography>
      <Box height={200}>Content</Box>
    </Box>
  );
};

const Side = () => {
  return (
    <>
      <Container
        disableGutters
        sx={{
          width: "200px",
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
