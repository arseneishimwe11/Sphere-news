import { useState } from "react";
import { IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button } from "@mui/material";

const ThreeDotPopover = ({ deleteHighlightData, index }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton onClick={handleClick} aria-describedby={id}>
                <MoreHorizIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className='flex flex-col items-start rounded-[20px] m-[7px]'>
                    <Button onClick={handleClose} className='flex flex-row gap-[5px]' sx={{ textTransform: 'none', width: "100%", justifyContent: "start" }}>
                        <EditOutlinedIcon sx={{ color: "black" }} />
                        <p className='text-[black]'>Edit</p>
                    </Button>
                    <Button onClick={() => {
                        handleClose(); setTimeout(() => {
                            deleteHighlightData(index);
                        }, 100);
                    }} className='flex flex-row gap-[5px]' sx={{ textTransform: 'none', width: "100%", justifyContent: "start", paddingRight: "80px" }}>
                        <DeleteForeverOutlinedIcon sx={{ color: "#CA7975" }} />
                        <p className='text-[#CA7975]'>Delete</p>
                    </Button>
                </div>
            </Popover>
        </>
    );
}

export default ThreeDotPopover;