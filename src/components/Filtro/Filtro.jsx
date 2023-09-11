import { FaFilter, FaCheck } from "react-icons/fa";
import styles from "./Filtro.module.css";
import { useState } from "react";
import {
  Slider,
  Checkbox,
  MenuItem,
  FormControlLabel,
  FormGroup,
  Box,
} from "@mui/material";
import { Menu, Dropdown, MenuButton } from "@mui/base/";
import { IconButton } from "@mui/material/";

const Filtro = (props) => {
  const { slider, labels } = props;
  const [menu, setMenu] = useState({
    quant: {
      min: 0,
      max: 50,
    },
  });
  return (
    <Dropdown>
      <MenuButton className={styles.filtro}>
        <FaFilter className={styles.icon} />
      </MenuButton>
      <Menu className={styles.menu}>
        <div className={styles.head}>
        {slider ? (
          <Slider
            step={10}
            valueLabelDisplay="auto"
            marks
            min={0}
            max={100}
            onChange={(e) =>
              setMenu({
                quant: {
                  min: e.target.value[0],
                  max: e.target.value[1],
                },
              })
            }
            value={[menu.quant.min, menu.quant.max]}
          />
          
        ) : (
          <></>
        )}
        <IconButton variant="contained">
          <FaCheck color="black"/>
        </IconButton>
        </div>
        <FormGroup>
          {labels.map((label, index) => (
            <FormControlLabel
              control={<Checkbox />}
              label={label}
              key={index}
            />
          ))}
        </FormGroup>
      </Menu>
    </Dropdown>
  );
};
export default Filtro;
