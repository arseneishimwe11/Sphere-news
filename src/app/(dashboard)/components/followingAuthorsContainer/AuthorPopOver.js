// import ThreeDotNews from '../ThreeDotNews';
import { Divider, TextField } from "@mui/material";
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import NewFolderAccordion from '../common/NewFolderAccordion';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

const AuthorPopOver = ({ anchorEl, handleClose }) => {
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const streamListOne = ['Competitors', 'Market Insights', 'Technologies'];
    const streamListTwo = ['Folder X', 'Gossip', 'Media', 'News'];
    const streamListThree = ['Competitors', 'Market Insights'];
    const StreamItem = ({ item, status }) => {
        const [isHover, setIsHover] = useState(false);
        const handleMouseEnter = () => {
            setIsHover(true);
        }
        const handleMouseLeave = () => {
            setIsHover(false);
        }
        const [added, setAdded] = useState(status);
        const handleClick = () => {
            setAdded(!added);
        }
        return (
            <div
                className='flex flex-row items-center'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundColor: isHover ? "#CCC" : "#FFF"
                }}
            >
                <p className='flex-grow p-4'>
                    <FolderOutlinedIcon />&nbsp;
                    {item}
                </p>
                {isHover &&
                    (added ?
                        <Button className="flex flex-row mr-[2]" variant="outlined" onClick={handleClick}>
                            <DoneIcon sx={{ color: "green" }} />
                            <label className="flex-grow">Add</label>
                        </Button>
                        :
                        <Button className="flex flex-row mr-[2]" style={{
                            borderColor: 'red',
                            color: "red"
                        }} variant="outlined" onClick={handleClick}>
                            <ClearIcon sx={{ color: "red" }} />
                            <label className="flex-grow">Remove</label>
                        </Button>
                    )
                }
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
        >
            <div className='min-w-[300px]'>
                <div className='m-[10px]'>
                    <TextField placeholder='Search' sx={{ width: "100%" }} />
                </div>
                <Divider />
                <div className='flex flex-row items-center justify-between'>
                    <Button sx={{ padding: "15px", fontWeight: "700", flexGrow: 1, justifyContent: "flex-start" }}>
                        + MILITARY
                    </Button>
                    {/* <ThreeDotNews /> */}
                </div>
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Stream 1</p>
                {streamListOne.map((item, index) => <StreamItem item={item} status={index % 2 === 0 ? true : false} />)}
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Stream 2</p>
                {streamListTwo.map((item, index) => <StreamItem item={item} status={index % 2 === 0 ? true : false} />)}
                <Divider />
                <div className='flex flex-row items-center justify-between'>
                    <Button sx={{ padding: "15px", fontWeight: "700", flexGrow: 1, justifyContent: "flex-start" }}>
                        + POLITICS
                    </Button>
                    {/* <ThreeDotNews /> */}
                </div>
                <Divider sx={{ marginBottom: "10px" }} />
                <p className='ml-3'>Stream 1</p>
                {streamListThree.map((item, index) => <StreamItem item={item} status={index % 2 === 0 ? true : false} />)}
                <Divider />
                <div className='flex flex-row items-center justify-between'>
                    <Button sx={{ padding: "15px", fontWeight: "700", flexGrow: 1, justifyContent: "flex-start" }}>
                        + SCIENCE
                    </Button>
                    {/* <ThreeDotNews /> */}
                </div>
                <Divider />
                <div className='flex flex-row items-center justify-between'>
                    <Button sx={{ padding: "15px", fontWeight: "700", flexGrow: 1, justifyContent: "flex-start" }}>
                        + SYSTEM STREAM
                    </Button>
                    {/* <ThreeDotNews /> */}
                </div>
                <Divider />
                <NewFolderAccordion />
            </div>
        </Popover>
    );
}

export default AuthorPopOver;