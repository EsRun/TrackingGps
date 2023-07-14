import { Container, Box, Theme, Typography, Link } from "@mui/material";
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
        border: "1px solid #ccc",
        fontSize: 20,
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Typography
        align="center"
        variant="subtitle2"
        sx={{ borderBottom: "1px solid #ccc" }}
      >
        {title}
      </Typography>
      <Link href={link}>{link}</Link>
      <Box height={200}></Box>
    </Box>
  );
};

const Side = () => {
  return (
    <>
      <Container
        fixed={true}
        disableGutters
        sx={{
          margin: 0,
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
