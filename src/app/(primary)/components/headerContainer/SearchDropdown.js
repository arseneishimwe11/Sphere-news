import { useState } from "react";

import usePopup from "@/app/hooks/usePopupState";

import { StreamTree, CustomStreamTree } from "../LayoutLeftPanel";

import { Popover, IconButton, Box, Divider, Collapse } from "@mui/material";

import RssFeedIcon from '@mui/icons-material/RssFeed';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CheckIcon from '@mui/icons-material/Check';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { NewsSvg, PropogateSVG, EditSVG, CheckSVG } from "@/app/SVGs";

export const StreamComponent = (props) => {
    const { stream_name } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex items-center px-4 py-2">
                <CircleIcon sx={{ fontSize: 12, color: '#0A73CB' }} />
                <p className="mx-1 text-sm font-bold flex-grow">{stream_name}</p>
                {
                    open == false ?
                        <AddCircleIcon sx={{ color: '#4FBAE9', cursor: 'pointer', fontSize: 16 }} onClick={() => setOpen(true)} /> :
                        <RemoveCircleIcon sx={{ color: '#4FBAE9', cursor: 'pointer', fontSize: 16 }} onClick={() => setOpen(false)} />
                }
            </div>
            <Divider />
            <Collapse in={open}>
                <CustomStreamTree data={["Business", "Competitors", "Technologies"]} />
            </Collapse>
        </>
    )
}

const data = [
    {
        Icon: <NewsSvg />,
        label: 'News',
        value: 'news'
    },
    {
        Icon: <PropogateSVG width={16} height={16} />,
        label: 'All Public Feeds',
        value: 'public_feeds'
    },
    {
        Icon: <PropogateSVG width={16} height={16} />,
        label: 'All Personal Feeds',
        value: 'personal_feeds'
    },
    {
        Icon: <PropogateSVG width={16} height={16} />,
        label: 'All Team Feeds',
        value: 'team_feeds'
    },
    {
        Icon: <StarBorderIcon style={{ fontSize: 16 }} />,
        label: 'All Collections',
        value: 'collections'
    },
    {
        Icon: <EditSVG width={16} height={16} />,
        label: 'Annotated',
        value: 'annotated'
    },
    {
        Icon: <CheckSVG width={16} height={16} />,
        label: 'Recently Read',
        value: 'recent_read'
    },
    {
        Icon: <StarBorderIcon style={{ fontSize: 16 }} />,
        label: 'Read Later',
        value: 'read_later'
    },
    {
        Icon: <LocalOfferOutlinedIcon style={{ fontSize: 16 }} />,
        label: 'All Tagged Content',
        value: 'tagged_content'
    }
];

const DropdownItem = (props) => {
    const { item : { Icon, label, value } } = props;
    const { active, setActive } = props;

    return (
        <div className="flex items-center gap-2 px-4 hover:cursor-pointer" onClick={() => setActive(value)}>
            {Icon}
            <span>{label}</span>
            {
                active === value &&
                <CheckSVG width={16} height={16} />
            }
        </div>
    )
}

export const SearchDropdown = () => {
    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);

    const [active, setActive] = useState('news');

    return (
        <>
            <div
                className="flex flex-row items-center bg-white rounded-md p-2 text-[12px] hover:cursor-pointer"
                onClick={handleOpen}
            >
                <RssFeedIcon sx={{ fontSize: '16px' }} />
                <span>Articles</span>
                <UnfoldMoreIcon sx={{ fontSize: '16px' }} />
            </div>
            <Popover
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        minWidth: 240,
                        fontSize: 12,
                        maxHeight: '75vh',
                        overflow: 'auto'
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className="flex flex-col gap-2 py-4">
                    {
                        data.map((item) => (
                            <DropdownItem 
                                item = {item}
                                active = {active}
                                setActive = {setActive}
                            />
                        ))
                    }
                </div>
                <Divider />
                <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-[12px] px-4 py-1">PERSONAL STREAMS</p>
                    <Divider />
                    <StreamComponent stream_name="STREAM 1" />
                    <StreamComponent stream_name="STREAM 2" />
                </div>
                <Divider />
                <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-[12px] px-4 py-1">TEAM STREAMS</p>
                    <Divider />
                    <StreamComponent stream_name="STREAM 1" />
                    <StreamComponent stream_name="STREAM 2" />
                </div>
                <Divider />
            </Popover>
        </>
    )
}