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
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

import SelectWhen from './SelectWhen';
import SelectMatch from './SelectMatch';

const ResponsiveNewHighlight = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [formsLen, setFormsLen] = useState(0);
    const [conditionsLen, setConditionsLen] = useState(0);
    const [forms, setForms] = useState([{ id: formsLen }]);

    const addForm = () => {
        setForms([...forms, { id: formsLen }]);
        setFormsLen(formsLen + 1);
    };

    const [conditions, setConditions] = useState([]);

    const addConditionForm = () => {
        setConditions([...conditions, { id: conditionsLen }]);
        setConditionsLen(conditionsLen + 1);
    };

    const removeCondition = (index) => {
        setConditions(conditions.filter((condition) => condition.id !== index));
        console.log(conditions);
    };

    const whenOptions = [
        "New article in account",
        "New article in stream",
        "New article in folder",
        "New article in feed",
        "New monitored keyword",
        "New tagged article",
        "New starred article",
        "New liked article",
        "New broadcasted article",
        "New saved web page",
        "Another rule matched"
    ];

    const thenOptions = [
        "Mark as read",
        "Assgin tag",
        "Add star",
        "Broadcast it",
        "Send to email",
        "Show desktop alert",
        "Send to Pocket",
        "Send to Instapaper",
        "Send to Evernote",
        "Send to OneNote",
        "Send to Dropbox",
        "Send to Google Drive",
        "Push mobile mobile notification",
        "Trigger webhook"
    ];

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
                + New Rule
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    "& .MuiPaper-root": {
                        minWidth: "550px"
                    }
                }}
            >
                <DialogTitle id="responsive-dialog-title">
                    {"New Rule"}
                </DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText> */}
                    <div className='flex flex-row justify-between items-center'>
                        <label>Rule Level</label>
                        <GroupButtons />
                    </div>
                    <div className='mt-[20px] mb-[10px]'>
                        <TextField
                            id="outlined-basic"
                            placeholder='Title'
                            variant="outlined"
                            sx={{
                                width: "100%",
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderRadius: "15px",
                                }
                            }}
                        />
                    </div>
                    <Divider />
                    <p className='mt-[20px]'>When</p>
                    <SelectWhen items={whenOptions} />
                    {/* <SelectWhen items={thenOptions} /> */}
                    {forms.map((form) => (
                        <>
                            <p className='mt-[20px]'>Then</p>
                            <SelectWhen key={form.id} items={thenOptions} />
                        </>
                    ))}
                    <Button
                        variant='outlined'
                        sx={{ marginTop: "10px", marginBottom: "20px", width: "100%", color: "#555", borderColor: "#888" }}
                        onClick={addForm}
                    >
                        Add Action
                    </Button>
                    <Divider />
                    <Button
                        variant='outlined'
                        sx={{
                            width: "100%",
                            color: "#555",
                            borderColor: "#888",
                            marginY: "20px"
                        }}
                        onClick={addConditionForm}
                    >
                        Add Condition
                    </Button>
                    {conditions.map((condition) => (
                        <div className='flex flex-row items-center gap-[5px] my-[10px]' key={condition.id}>
                            <SelectMatch key={condition.id} items={fieldConditions} place="Match Field" />
                            <SelectMatch key={condition.id} items={typeConditions} place="Match Type" />
                            <TextField key={condition.id} />
                            <IconButton key={condition.id} onClick={() => removeCondition(condition.id)}>
                                <CancelIcon />
                            </IconButton>
                        </div>
                    ))}
                    <Divider />
                </DialogContent>
                <DialogActions>
                    <div className='flex flex-row items-center justify-center w-full'>
                        <p></p>
                        <Button autoFocus onClick={handleClose}
                            variant='contained'
                            sx={{ width: "95%", marginBottom: "20px", background: "#4FB9E9" }}
                        >
                            Save
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ResponsiveNewHighlight;