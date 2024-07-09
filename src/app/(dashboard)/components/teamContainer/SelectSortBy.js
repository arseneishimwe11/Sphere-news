import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const SelectSortBy = ({ sortBy, setSortBy, teamData, setTeamData }) => {

    const handleChange = (event) => {
        const sortByItem = event.target.value;
        setTeamData(sortByItem === '' ? teamData :
            teamData.sort((a, b) => {
                if (a[sortByItem].toLowerCase() < b[sortByItem].toLowerCase()) {
                    return -1;
                }
                if (a[sortByItem].toLowerCase() > b[sortByItem].toLowerCase()) {
                    return 1;
                }
                return 0;
            }));
        setSortBy(sortByItem);
    };

    const itemsList = ['firstName', 'lastName', 'email', 'status', 'role', 'joined', 'lastActivity'];
    return (
        <div>
            <FormControl>
                <Select
                    value={sortBy}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{ borderRadius: "15px" }}
                >
                    <MenuItem value={sortBy}>Sort</MenuItem>
                    {itemsList.map((item) => (
                        <MenuItem value={item}>{`Sort by ${item}`}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectSortBy;