import React from "react";
import s from "./Filter.module.css";
import { FormControl, InputLabel, Select } from "@material-ui/core";

export const Filter = (props) => {
  return (
    <div className={s.filter}>
      <FormControl variant="filled" className={s.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Blade</InputLabel>
        <Select
          native
          value={props.values.blade}
          onChange={(event) =>
            props.setFilterValues({ blade: event.target.value })
          }
          inputProps={{
            name: "Blade",
            id: "outlined-age-native-simple",
          }}
        >
          <option value={""} aria-label="None" />
          <option value={"iron"}>Iron</option>
          <option value={"ceramic"}>Ceramic</option>
          <option value={"titanium"}>Titanium</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={s.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Handle</InputLabel>
        <Select
          native
          value={props.values.handle}
          onChange={(event) =>
            props.setFilterValues({ handle: event.target.value })
          }
          inputProps={{
            name: "Handle",
            id: "outlined-age-native-simple",
          }}
        >
          <option value={""} aria-label="None" />
          <option value={"steel"}>Steel</option>
          <option value={"plastic"}>Plastic</option>
          <option value={"wood"}>Wood</option>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={s.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Length</InputLabel>
        <Select
          native
          value={props.values.length}
          onChange={(event) =>
            props.setFilterValues({ length: event.target.value })
          }
          inputProps={{
            name: "Length",
            id: "outlined-age-native-simple",
          }}
        >
          <option value={""} aria-label="None" />
          <option value={"15"}>15</option>
          <option value={"20"}>20</option>
          <option value={"25"}>25</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
