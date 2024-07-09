import { useState } from 'react';

import { Box, Button, Divider, IconButton } from "@mui/material";

import EmojiPicker from "emoji-picker-react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export const CreateFolderOrStreamPopup = (props) => {
    const { popoverContent, setPopoverContent } = props;

    const [isEmojiPanelOpen, setIsEmojiPanelOpen] = useState(false);
    const [selectedStream, setSelectedStream] = useState(undefined);

    const handleEmojiClick = (emoji) => {
        console.log(emoji.emoji);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <div className="flex items-center p-2 pb-0 font-bold text-[14px]">
                <IconButton size='small' onClick={() => setPopoverContent(0)}>
                    <ArrowBackOutlinedIcon sx={{ fontSize: 16 }}/>
                </IconButton>
                &nbsp;
                {
                    popoverContent == 2 ? "Folder Name" : "Stream Name"
                }
            </div>
            <div
                className="hover:cursor-pointer flex flex-row m-2 items-center rounded-md border border-1 border-gray-300"
            >
                <div
                    className="w-[8px] h-[8px] bg-[#4FBAE9] rounded-full mx-2"
                    onClick={() => setIsEmojiPanelOpen(!isEmojiPanelOpen)}
                />
                <input className="w-full outline-none p-2 rounded-xl text-[12px]" placeholder='e.g. Tech News' />
            </div>
            <div>
                {isEmojiPanelOpen && (
                    <EmojiPicker onEmojiClick={handleEmojiClick} />
                )}
            </div>
            {
                popoverContent == 2 &&
                <>
                    <Divider />
                    <div className='p-2 text-[12px] '>
                        <p className='font-bold text-black'>Select Stream</p>
                        <p className='p-1 bg-gray-100 my-1 hover:cursor-pointer hover:bg-gray-50' onClick={() => setSelectedStream('Business')}>
                            {
                                selectedStream == 'Business' ? <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 16 }} /> : <AddOutlinedIcon sx={{ fontSize: 16 }} />
                            }
                            &nbsp;Business
                        </p>
                        <p className='p-1 bg-gray-100 my-1 hover:cursor-pointer hover:bg-gray-50' onClick={() => setSelectedStream('Tech')}>
                            {
                                selectedStream == 'Tech' ? <CheckCircleOutlineOutlinedIcon sx={{ fontSize: 16 }} /> : <AddOutlinedIcon sx={{ fontSize: 16 }} />
                            }
                            &nbsp;Tech
                        </p>
                    </div>
                </>
            }
            <div className='flex gap-2 p-2'>
                <Button variant='contained' size='small' onClick={() => setPopoverContent(0)}>Create</Button>
                <Button variant='outlined' size='small' color='error' onClick={() => setPopoverContent(0)}>Cancel</Button>
            </div>
        </Box>
    );
}