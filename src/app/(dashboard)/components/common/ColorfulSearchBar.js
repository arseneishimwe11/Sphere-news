import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
const ColorfulSearchBar = ({ searchText, handleSearchTextChange, searchInputRef, placeholdertext }) => {
    return (
        <div>
            <TextField
                sx={{
                    width: "100%",
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white !important', // Set the border color to white
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src="img/icons/colorful_search.png" alt="Image" style={{ width: 20, height: 20 }} />
                        </InputAdornment>
                    ),
                }}
                id="outlined-basic"
                placeholder={`Search by ${placeholdertext}`}
                value={searchText}
                onChange={handleSearchTextChange}
                ref={searchInputRef}
            />
        </div>
    );
}

export default ColorfulSearchBar;