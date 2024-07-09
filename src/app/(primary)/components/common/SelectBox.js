import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

export function SelectBox(props) {
    const { passStyle, iconStyle, menuStyle } = props;
    const { labelIcon } = props;
    const { onSelectChange } = props;
    const { value } = props;

    const handleChange = (e) => {
        onSelectChange(e.target.value)
    };

    return (
        <FormControl sx={{ ...passStyle }}>
            <Select
                value={value}
                // onChange={handleChange}
                label={12323}
                sx={{
                    fontSize: '12px',
                    '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
                        padding: '4px !important',
                    },
                    '& .MuiSvgIcon-root.MuiSelect-icon': iconStyle,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: '0'
                    }
                }}
                MenuProps={{
                    sx:{
                        '& .MuiPaper-root.MuiPopover-paper.MuiMenu-paper': menuStyle
                    }
                }}
            >
                {
                    React.Children.map(props.children, child =>
                        <MenuItem value='usa'>{child}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    );
}
