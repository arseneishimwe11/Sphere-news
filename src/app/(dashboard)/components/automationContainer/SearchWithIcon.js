import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchWithIcon = ({ concept }) => {
    return (
        <TextField
            id="input-with-icon-textfield"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            type='search'
            placeholder={`Search ${concept}...`}
            sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "15px",
                }
            }}
        />
    );
}

export default SearchWithIcon;