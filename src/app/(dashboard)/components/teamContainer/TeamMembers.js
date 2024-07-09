import { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import { Checkbox } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Popover from '@mui/material/Popover';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Button } from "@mui/material";

const TeamMembers = ({ teamData, handleDialogOpen, anchorEl, setAnchorEl, handleRemoveClose }) => {
    const handleClick = (event, id) => {
        setAnchorEl(event.currentTarget);
        setPopupId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [popupId, setPopupId] = useState(-1);
    return (
        <>
            {teamData.map((row) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>
                        <Checkbox />
                    </TableCell>
                    <TableCell>
                        <AccountCircleOutlinedIcon sx={{ backgroundColor: "#E8EDF2", color: "#5A6D7E", fontSize: "27px", borderRadius: "100%" }} />
                        &nbsp;&nbsp;&nbsp;
                        {row.firstName + " " + row.lastName}
                    </TableCell>
                    <TableCell>
                        {row.email}
                    </TableCell>
                    <TableCell>
                        {row.status}
                    </TableCell>
                    <TableCell>
                        {row.role}
                    </TableCell>
                    <TableCell>
                        {row.joined}
                    </TableCell>
                    <TableCell>
                        {row.lastActivity}
                    </TableCell>
                    <TableCell>
                        <IconButton onClick={(e) => handleClick(e, row.id)} aria-describedby={id}>
                            <MoreHorizIcon />
                        </IconButton>
                    </TableCell>
                </TableRow >
            ))}
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
                    <Button className='flex flex-row gap-[5px]' sx={{ textTransform: 'none', width: "100%", justifyContent: "start" }} onClick={() => handleDialogOpen(popupId)} >
                        <EditOutlinedIcon sx={{ color: "black" }} />
                        <p className='text-[black]'>Edit</p>
                    </Button>
                    <Button className='flex flex-row gap-[5px]' sx={{ textTransform: 'none', width: "100%", justifyContent: "start", paddingRight: "80px" }} onClick={() => handleRemoveClose(popupId)}>
                        <DeleteForeverOutlinedIcon sx={{ color: "#CA7975" }} />
                        <p className='text-[#CA7975]'>Delete</p>
                    </Button>
                </div>
            </Popover>
        </>
    )
}

export default TeamMembers;