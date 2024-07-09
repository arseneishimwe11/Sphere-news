import { useState } from "react";
import { IconButton, Menu, MenuItem,  } from "@mui/material";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import ThreeDotNews from "@/app/(dashboard)/components/common/ThreeDotNews";

export const ShowLessComponent = () => {
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
                <VisibilityOffIcon className="text-gray-light-color-invert" />
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
                        width: '320px'
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
                    Show less like this
                </MenuItem>
                <MenuItem>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p>#Military</p>
                        <ThreeDotNews />
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p>#Politics</p>
                        <ThreeDotNews />
                    </div>
                </MenuItem>
                <MenuItem>
                    <div className="flex flex-row items-center w-full justify-between">
                        <p>#Videos</p>
                        <ThreeDotNews />
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
