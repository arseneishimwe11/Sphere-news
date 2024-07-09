import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useState } from "react";

const SelectCountNum = ({pagination, setPagination, setPage}) => {

    const handleChange = (event) => {
        setPagination(event.target.value);
        setPage(1);
    };

    const numbers = [5,10,15,25,50];
    return (
        <div>
            <FormControl>
                <Select
                    value={pagination}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ borderRadius: "15px" }}
                >
                    {numbers.map((number) => (
                        <MenuItem value={number}>{`${number} / page`}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectCountNum;