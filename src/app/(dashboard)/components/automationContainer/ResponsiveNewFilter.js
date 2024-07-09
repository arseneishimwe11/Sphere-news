import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import GroupButtons from './GroupButtons';
import { TextField } from '@mui/material';
import Divider from '@mui/material/Divider';
import AdUnitsOutlinedIcon from '@mui/icons-material/AdUnitsOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import SelectMatch from './SelectMatch';

const ResponsiveNewFilter = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [conditionsLen, setConditionsLen] = useState(1);

    const [conditions, setConditions] = useState([{ id: 0 }]);

    const addConditionForm = () => {
        setConditions([...conditions, { id: conditionsLen }]);
        setConditionsLen(conditionsLen + 1);
    };

    const fieldConditions = [
        "Title or content",
        "Title",
        "Content",
        "Author",
        "URL",
        "URL (without domain)",
        "Has attachments",
        "Contains pictures",
        "Contains video",
        "Doesn't contain pictures",
        "Doesn't contain video",
        "List of RSS categories",
        "Detected language"
    ];

    const typeConditions = [
        "contains",
        "doesn't contain",
        "is",
        "isn't",
        "begins with",
        "ends with",
        "matches regular expression",
        "doesn't match regular expression"
    ];

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
                + New Filter
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    "& .MuiPaper-root": {
                        minWidth: "750px",
                        backgroundColor: "#F3F4F6"
                    }
                }}
            >
                <DialogTitle id="responsive-dialog-title">
                    <div className='flex flex-row justify-between items-center mt-[30px]'>
                        <div className='flex flex-row gap-[5px] items-center'>
                            <AdUnitsOutlinedIcon />
                            <label className='text-[30px] font-bold'>Stream 1</label>
                        </div>
                        <ContentCopyOutlinedIcon sx={{ fontSize: "20px" }} />
                    </div>
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: "white", marginX: "30px", padding: "30px" }}>
                    <div className='flex flex-row justify-between items-center mt-[20px]'>
                        <label className='text-xl font-bold'>Filter Level</label>
                        <GroupButtons />
                    </div>
                    <div className='flex flex-row justify-between items-center mt-[20px]'>
                        <label className='text-xl font-bold'>Filter Type</label>
                        <GroupButtons buttons={[
                            { label: "Keep only articles", key: "one" },
                            { label: "Remove articles", key: "two" },
                        ]} icons={[<VolumeUpOutlinedIcon />, <VolumeOffOutlinedIcon />]} />
                    </div>
                    <Divider sx={{ marginTop: "30px" }} />
                    {conditions.map((condition) => (
                        <div className='flex flex-row items-center gap-[10px] my-[10px]' key={condition.id}>
                            <label className='text-xl font-bold mr-[40px]'>If</label>
                            <SelectMatch key={condition.id} items={fieldConditions} place="Match Field" />
                            <SelectMatch key={condition.id} items={typeConditions} place="Match Type" />
                            <TextField key={condition.id} />
                        </div>
                    ))}
                    <div className='flex flex-row justify-between'>
                        <Button
                            variant='text'
                            sx={{
                                color: "#555",
                                borderColor: "#888",
                                marginY: "20px"
                            }}
                            onClick={addConditionForm}
                        >
                            + Add Condition
                        </Button>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Match whole words only" />
                    </div>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center" }}>
                    <div className='flex flex-col gap-[20px] w-full ml-[20px]'>
                        <div className='flex flex-row'>
                            <ErrorOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
                            <p className='text-[13px]'>&nbsp;This change can be reverted at any time. Filtered feeds only show articles from the past 1 month.</p>
                        </div>
                        <div className='flex flex-row justify-end gap-[10px]'>
                            <Button autoFocus onClick={handleClose}
                                variant='contained'
                                sx={{ marginBottom: "20px", textTransform: 'none' }}
                            >
                                Save Filter
                            </Button>
                            <Button autoFocus onClick={handleClose}
                                variant='text'
                                sx={{ marginBottom: "20px", textTransform: 'none' }}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ResponsiveNewFilter;