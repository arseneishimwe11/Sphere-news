import { useState } from "react";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const SelectMatch = (props) => {
    const [items, setItems] = useState(props.items);
    const [place, setPlace] = useState(props.place);
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ width: "30%" }}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                    // width: "100%",
                    borderRadius: "7px"
                }}
            >
                <MenuItem value="">
                    {place}
                </MenuItem>
                {items.map((item, index) => (
                    <MenuItem value={index}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectMatch;