import { useState } from "react";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const SelectWhen = (props) => {
    const [items, setItems] = useState(props.items);
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='mt-[10px]'>
            <FormControl sx={{ width: "100%" }}>
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
                    </MenuItem>
                    {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    {items.map((item, index) => (
                        <MenuItem value={index}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectWhen;