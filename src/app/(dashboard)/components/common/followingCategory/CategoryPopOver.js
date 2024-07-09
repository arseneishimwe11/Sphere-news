import ThreeDotNews from '../ThreeDotNews';
import { Divider, TextField } from "@mui/material";
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import NewFolderAccordion from '../NewFolderAccordion';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const CategoryPopOver = ({ anchorEl, handleClose, searchPopupRef }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const streamListOne = ['Competitors', 'Market Insights', 'Technologies'];
    const streamListTwo = ['Folder X', 'Gossip', 'Media', 'News'];
    const StreamItem = ({ item }) => {
        const [isHover, setIsHover] = useState(false);
        const handleMouseEnter = () => {
            setIsHover(true);
        }
        const handleMouseLeave = () => {
            setIsHover(false);
        }
        return (
            <div className='m-3 flex flex-row mb-[20px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <p className='flex-grow'>
                    <FolderOutlinedIcon />&nbsp;
                    {item}
                </p>
                {isHover && <ThreeDotNews />}
            </div>
        );
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            PaperProps={{
                style: {
                    maxHeight: '450px', // Set the desired fixed height
                    overflowY: 'auto', // Enable vertical scrolling
                },
            }}
            ref={searchPopupRef}
        >
            <div className='min-w-[300px]'>
                <div className='m-[10px]'>
                    <TextField placeholder='Search' sx={{ width: "100%" }} />
                </div>
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Stream 1</p>
                {streamListOne.map((item, index) => <StreamItem key={index} item={item} />)}
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Stream 2</p>
                {streamListTwo.map((item, index) => <StreamItem key={index} item={item} />)}
                <Divider />
                <div className='flex flex-row items-center justify-between'>
                    <Button sx={{ padding: "15px", fontWeight: "700", flexGrow: 1, justifyContent: "flex-start" }}>
                        + NEWS STREAM
                    </Button>
                    <ThreeDotNews />
                </div>
                <Divider />
                <div className='flex flex-row items-center justify-between'>
                    <Button sx={{ padding: "15px", fontWeight: "700", flexGrow: 1, justifyContent: "flex-start" }}>
                        + NEWS STREAM
                    </Button>
                    <ThreeDotNews />
                </div>
                <Divider />
                <NewFolderAccordion />
            </div>
        </Popover>
    );
}

export default CategoryPopOver;