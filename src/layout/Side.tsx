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
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { circleRadiusSlice } from "../redux/reducers";

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

const InComponent = ({ onSelect }: any): JSX.Element => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const options = [1000, 3000, 5000, 10000];

  const changeSelect = (e: any) => {
    setSelected(e.target.value);
    onSelect(e.target.value);
    dispatch(circleRadiusSlice(e.target.value));
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="select-label">select</InputLabel>
        <Select value={selected} labelId="select-label" onChange={changeSelect}>
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

const Side = ({ select }: any) => {
  const [currentSelect, setCurrentSelect] = useState("default");
  const handleSelect = (v: any) => {
    setCurrentSelect(v);
    select(v);
  };

  useEffect(() => {
    console.log("ㅇㅇ", currentSelect);
  }, [currentSelect]);

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
          component={<InComponent onSelect={handleSelect} />}
        />
        <SideComponent title="Compoenet2" link="/s" />
        <SideComponent title="Compoenet3" link="/s" />
      </Container>
    </>
  );
};

export default Side;
