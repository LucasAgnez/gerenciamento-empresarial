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
  function handleConfirm() {
    setOpenMenu(false);
    console.log("range: ", menu.quant.min, "--", menu.quant.max);
    console.log("tags: ");
  }
  const { slider, labels } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [tags, setTags] = useState(labels);
  const [menu, setMenu] = useState({
    quant: {
      min: 0,
      max: 50,
    },
  });
  return (
    <Dropdown open={openMenu}>
      <MenuButton
        className={styles.filtro}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <FaFilter className={styles.icon} />
      </MenuButton>
      <Menu className={styles.menu}>
        <div className={styles.head}>
          {slider ? (
            <Slider
              size="small"
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
          <IconButton variant="contained" onClick={() => handleConfirm()}>
            <FaCheck color="black" />
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
