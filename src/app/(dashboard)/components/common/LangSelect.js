import { useState } from "react";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LangSelect = () => {
    const [lang, setLang] = useState(0);

    const handleChange = (event) => {
        setLang(event.target.value);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lang}
                    onChange={handleChange}
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white !important', // Set the border color to white
                        },
                    }}
                >
                    <MenuItem value={0}>English</MenuItem>
                    <MenuItem value={1}>Spanish</MenuItem>
                    <MenuItem value={2}>French</MenuItem>
                </Select>
            </FormControl>
        </Box >
    );
}

export default LangSelect;