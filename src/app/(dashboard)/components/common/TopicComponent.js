'use client'

import ThreeDotNews from './ThreeDotNews';
import { Divider, Grid, IconButton, Paper, TextField } from "@mui/material";
import { useState } from 'react';
import Link from 'next/link';
import VertDelectIconButton from './VertDeleteIconButton';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import NewFolderAccordion from './NewFolderAccordion';

const TopicComponent = (props) => {
    const { imageUrl, title } = props;
    const [showVertIcon, setShowVertIcon] = useState(false);
    const [removed, setRemoved] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
        !removed &&
        // <Grid item lg={2.2}>
        <div
            className='flex flex-col min-w-[220px] h-full rounded-xl border border-[#B5CED1] border-[2px] my-2 relative bg-white'
            onMouseOver={() => setShowVertIcon(true)}
            onMouseOut={() => setShowVertIcon(false)}
        >
            <VertDelectIconButton
                removed={removed}
                setRemoved={setRemoved}
                showVertIcon={showVertIcon}
                setShowVertIcon={setShowVertIcon}
            />
            <img
                src='img/icons/explore_topics/circle.png'
                className='px-[44px] py-[46px]'
            />
            <img
                src={imageUrl}
                className="px-[70px] py-[72px] absolute w-full"
            />
            <div className="flex flex-row border border-t-[#B5CED1] border-[2px] border-l-transparent border-r-transparent border-b-transparent items-center justify-between p-4 text-[13px] text-[#29363C] bg-[#E1F6FF] rounded-b-xl">
                <Link href={`/categories/${title}`} passHref legacyBehavior>
                    <a target='_blank'>
                        <h5>{title}</h5>
                    </a>
                </Link>
                {/* <ThreeDotNews /> */}
                <IconButton>
                    {props.index % 2 === 0 ? <CheckCircleOutlinedIcon onClick={handleClick} /> : <AddOutlinedIcon onClick={handleClick} />}
                </IconButton>
            </div>
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
                    <Divider sx={{ marginBottom: "10px" }} />
                    <p className='ml-3'>Stream 1</p>
                    {streamListOne.map((item) => <StreamItem item={item} />)}
                    <Divider sx={{ marginBottom: "10px" }} />
                    <p className='ml-3'>Stream 2</p>
                    {streamListTwo.map((item) => <StreamItem item={item} />)}
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
                    {/* <Button sx={{ padding: "15px", fontWeight: "700", width: "100%", justifyContent: "flex-start" }}>
                        + NEW FOLDER
                    </Button> */}
                    <NewFolderAccordion />
                </div>
            </Popover>
        </div>
        // </Grid>
    )
}

export default TopicComponent;