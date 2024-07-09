import { useState } from "react";
import { IconButton, Menu, MenuItem, Divider } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const BoostMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'boost-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <MoreVertIcon className="text-gray-light-color-invert" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="boost-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    },
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>
                    <input className="border border-1 border-gray-300 rounded-md p-2" placeholder="Find collection" />
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    My first Collection
                </MenuItem>
                <Divider />
                <MenuItem sx={{ color: 'rgb(81, 161, 101)' }}>
                    Create a collection
                </MenuItem>
            </Menu>

        </div>
    );
}
