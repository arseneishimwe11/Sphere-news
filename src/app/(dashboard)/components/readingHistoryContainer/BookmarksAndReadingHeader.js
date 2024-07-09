import { Paper, Button } from "@mui/material";
import { useState } from "react";

const BookmarksAndReadingHeader = () => {
    const [buttons, setButtons] = useState({
        saves: true,
        authors: false,
        premium: false,
    });
    const handleClick = (item) => {
        setButtons((prevState) => ({
            ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, key === item])),
        }));
    }
    return (
        <>
            <Paper sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#E0EFF6'}}>
                <Button sx={{width: '30%', margin: '5px', paddingX: '10px', paddingX: '5px', textTransform: 'none', color: `${buttons.saves ? 'black' : '#6D767D'}`, backgroundColor: `${buttons.saves ? '#FFF !important' : ''}`, fontSize: '15px', borderRadius: '7px'}} onClick={() => handleClick('saves')}>Saves</Button>
                <Button sx={{width: '30%', margin: '5px', paddingX: '10px', paddingX: '5px', textTransform: 'none', color: `${buttons.authors ? 'black' : '#6D767D'}`, backgroundColor: `${buttons.authors ? '#FFF !important' : ''}`, fontSize: '15px', borderRadius: '7px'}} onClick={() => handleClick('authors')}>Authors</Button>
                <Button sx={{width: '30%', margin: '5px', paddingX: '10px', paddingX: '5px', textTransform: 'none', color: `${buttons.premium ? 'black' : '#6D767D'}`, backgroundColor: `${buttons.premium ? '#FFF !important' : ''}`, fontSize: '15px', borderRadius: '7px'}} onClick={() => handleClick('premium')}>Premium</Button>
            </Paper>
        </>
    )
}

export default BookmarksAndReadingHeader;