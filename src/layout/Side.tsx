import {
  Container,
  Box,
  Theme,
  Typography,
  Link,
  Select,
  MenuItem,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { useState } from "react";

interface sideComponenetProps {
  title: string;
  link: string;
  component?: JSX.Element;
}

const SideComponent: React.FC<sideComponenetProps> = ({
  title,
  link,
  component,
}) => {
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
      <Box height={200}>{component}</Box>
    </Box>
  );
};

const InComponent = (): JSX.Element => {
  const [selected, setSelected] = useState("");
  const options = [10, 30, 50, 100];

  return (
    <>
      <Select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((el, idx) => (
          <MenuItem key={idx} value={el}>
            {el}
          </MenuItem>
        ))}
      </Select>
    </>
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
        <SideComponent
          title="Compoenet1"
          link="/s"
          component={<InComponent />}
        />
        <SideComponent title="Compoenet2" link="/s" />
        <SideComponent title="Compoenet3" link="/s" />
      </Container>
    </>
  );
};

export default Side;
