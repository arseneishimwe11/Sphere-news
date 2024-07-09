import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { Divider } from '@mui/material';

import EmojiPicker from 'emoji-picker-react';

export default function NewFolderAccordion() {
    const [isEmoji, setIsEmoji] = useState(false);
    const handleEmojiShow = () => {
        setIsEmoji(!isEmoji);
    }
    const [expanded, setExpanded] = useState(false);

    const handleAccordionToggle = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <Accordion expanded={expanded}>
                <AccordionSummary
                    //   expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ color: "#1976D2", fontWeight: "700" }}
                    onClick={handleAccordionToggle}
                >
                    + New Folder
                </AccordionSummary>
                <AccordionDetails>
                    <p className='font-bold mb-[20px]'>
                        Folder Name
                    </p>
                    <div className='flex flex-grow rounded-[5px] mb-[10px]'
                        style={{
                            border: '1px solid black'
                        }}>
                        <Button onClick={handleEmojiShow}>
                            <svg width="12" height="12">
                                <circle cx="6" cy="6" r="5" fill="#5DB9E8" />
                            </svg>
                        </Button>
                        <Divider orientation='vertical' flexItem />
                        <TextField
                            sx={{
                                width: "100%",
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white !important', // Set the border color to white
                                },
                            }}
                            id="outlined-basic"
                            placeholder="e.g, Stream 3"
                        />
                    </div>
                    {isEmoji && <EmojiPicker />}
                    <p className='font-bold mt-[10px]'>Streams</p>
                    <div className='mx-3'>
                        <p>+ Stream 1</p>
                        <p>+ Stream 2</p>
                        <p>+ New Stream</p>
                    </div>
                    <div className='flex flex-grow mt-[10px] gap-[10px]'>
                        <Button onClick={handleAccordionToggle} sx={{ color: '#818181', backgroundColor: "#D9D9D9", padding: "10px" }}>Create</Button>
                        <Button onClick={handleAccordionToggle} variant='outlined' sx={{ color: '#818181', padding: "10px", borderColor: '#C1C1C1' }}>Cancel</Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}