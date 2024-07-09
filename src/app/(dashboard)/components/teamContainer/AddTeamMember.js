import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const AddTeamMember = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                className="px-4 py-2 text-[20px] font-bold"
                style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px' }}
                onClick={handleClickOpen}
            >
                + Add Member
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    "& .MuiPaper-root": {
                        minWidth: "500px"
                    }
                }}
            >
                <DialogTitle id="responsive-dialog-title">
                    <div className='flex flex-row justify-between items-center mt-[20px]'>
                        <p>Add Member</p>
                        <IconButton onClick={handleClose}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='flex flex-row justify-between mt-[10px]'>
                            <TextField id="outlined-first" variant="outlined" placeholder='First Name' />
                            <TextField id="outlined-last" variant="outlined" placeholder='Last Name' />
                        </div>
                        <TextField variant='outlined' type='email' placeholder='Email' style={{ width: "100%" }} />
                        <TextField variant='outlined' label="Role" type='text' placeholder='Select Role' style={{ width: "100%" }} />
                        <TextField variant='outlined' type='password' placeholder='Password' style={{ width: "100%" }} />
                        <TextField variant='outlined' type='password' placeholder='Confirm Password' style={{ width: "100%" }} />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}
                        variant='contained'
                        sx={{ marginBottom: "20px", marginRight: "20px", background: "#4FB9E9" }}
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddTeamMember;