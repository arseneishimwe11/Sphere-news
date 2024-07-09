import { useState } from "react";
import { Collapse, Divider, Menu, MenuItem } from "@mui/material";

import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const AuthorPlusPopup = (props) => {

    const { anchorEl, handleClose } = props;
    const open = Boolean(anchorEl);

    const [expandList, setExpandList] = useState({
        'military': false,
        'politics': false,
        'science': false,
    });

    const handleExpand = (cat) => { setExpandList((prevExpandList) => ({ ...prevExpandList, [cat]: !prevExpandList[cat] })); }

    return (
        <Menu
            className='anchormenu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    maxHeight: 420,
                    overflowY: 'auto',
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <div className="text-[#000] text-[14px]">
                <input
                    className="m-2 border border-1 border-gray-300 rounded-md outline-none p-2"
                    placeholder="Search"
                />
                <Divider />
                <MenuItem onClick={() => handleExpand('military')}>
                    {
                        expandList.military ? <RemoveIcon /> : <AddIcon />
                    }
                    MILITARY
                </MenuItem>
                <Collapse in={expandList.military}>
                    <Divider />
                    <p className="m-2 text-[14px] text-gray-500">Stream1</p>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">Competitors</span>
                    </MenuItem>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">Market Insights</span>
                    </MenuItem>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">Technologies</span>
                    </MenuItem>
                    <p className="m-2 text-[14px] text-gray-500">Stream2</p>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">FolderX</span>
                    </MenuItem>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">Gossip</span>
                    </MenuItem>
                </Collapse>
                <Divider />
                <MenuItem onClick={() => handleExpand('politics')}>
                    {
                        expandList.politics ? <RemoveIcon /> : <AddIcon />
                    }
                    POLITICS
                </MenuItem>
                <Collapse in={expandList.politics}>
                    <Divider />
                    <p className="m-2 text-[14px] text-gray-500">Stream1</p>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">Competitors</span>
                    </MenuItem>
                    <MenuItem sx={{ color: '#555' }}>
                        <FolderOutlinedIcon />
                        <span className="mx-2">Market Insights</span>
                    </MenuItem>
                </Collapse>
                <Divider />
                <MenuItem onClick={() => handleExpand('science')}>
                    {
                        expandList.science ? <RemoveIcon /> : <AddIcon />
                    }
                    SCIENCE
                </MenuItem>
                <Divider />
                <MenuItem sx={{ color: '#4FBAE9' }}>
                    +SYSTEM STREAM
                </MenuItem>
                <Divider />
                <MenuItem sx={{ color: '#4FBAE9' }}>
                    +NEW FOLDER
                </MenuItem>
            </div>
        </Menu>
    );
}