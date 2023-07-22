import {
  Container,
  Box,
  Theme,
  Typography,
  Link,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
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

const InComponent = ({onSelect}: any): JSX.Element => {
  const [selected, setSelected] = useState("");
  const options = [10, 30, 50, 100];

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="select-label">select</InputLabel>
        <Select
          value={selected}
          labelId="select-label"
          onChange={(e) => onSelect(e.target.value)}
        >
          {options.map((el, idx) => (
            <MenuItem key={idx} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

const Side = () => {
  const [currentSelect, setCurrentSelect] = useState('default');
  const handleSelect = (v: any) =>{
    setCurrentSelect(v);
  }
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
          title={currentSelect}
          link="/s"
          component={<InComponent onSelect={setCurrentSelect}/>}
        />
        <SideComponent title="Compoenet2" link="/s" />
        <SideComponent title="Compoenet3" link="/s" />
      </Container>
    </>
  );
};

export default Side;
