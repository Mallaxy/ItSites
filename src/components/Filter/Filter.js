import React from "react";
import s from "./Filter.module.css";
import { FormControl, InputLabel, Select } from "@material-ui/core";
import { setFilterValues } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {

  const values = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const handleChange = (selector) => (event) => {
    dispatch(setFilterValues({ [selector]: event.target.value }))
  }

  return (
    <div className={s.filter}>
      <FormControl variant="filled" className={s.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Blade</InputLabel>
        <Select
          native
          value={values.blade}
          onChange={handleChange("blade")}
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
          value={values.handle}
          onChange={handleChange("handle")}
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
          value={values.length}
          onChange={handleChange("length")}
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
