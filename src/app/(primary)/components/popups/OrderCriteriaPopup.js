import { Menu, MenuItem } from "@mui/material";

export const OrderCriteriaPopup = (props) => {

    const { anchorEl, handleClose } = props;
    const open = Boolean(anchorEl);

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
                    overflowY: 'auto',
                },
                
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem sx={{fontSize: '12px', minHeight: '24px !important'}}>
                Newest First
            </MenuItem>
            <MenuItem sx={{fontSize: '12px', minHeight: '24px !important'}}>
                Top
            </MenuItem>
            <MenuItem sx={{fontSize: '12px', minHeight: '24px !important'}}>
                Oldest First
            </MenuItem>
        </Menu>
    );
}