import IconButton from '@mui/material/IconButton';
import { Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const VertDelectIconButton = ({ removed, setRemoved, showVertIcon, setShowVertIcon, direction }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        direction ? !removed && setShowVertIcon(false) : setShowVertIcon(true);
    };
    return (
        <>
            <IconButton sx={{ position: 'absolute', right: '0px', top: '5px', zIndex: 300 }} /*className='absolute right-0 top-3 z-[100]'*/
                onClick={handleClick}
            >
                {
                    direction ?
                        <MoreVertIcon
                            className="text-[#FFF]"
                            style={showVertIcon ? { display: 'block' } : { display: 'none' }}
                        /> :
                        <MoreHorizOutlinedIcon
                            className="text-[#000]"
                            style={showVertIcon ? { display: 'block' } : { display: 'none' }}
                        />
                }
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '20ch',
                    },
                }}
                disableScrollLock={true}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    setRemoved(true);
                }}>
                    <DeleteIcon />&nbsp;Remove
                </MenuItem>
            </Menu>
        </>
    );
}

export default VertDelectIconButton;