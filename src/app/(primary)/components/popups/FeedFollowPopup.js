import { useState } from 'react';

import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Tab, Divider } from "@mui/material";

import { StreamComponent } from '../headerContainer';

import SearchIcon from '@mui/icons-material/Search';

export const FeedFollowPopup = (props) => {
    const { setPopoverContent } = props;

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Personal" value="1" />
                        <Tab label="Team" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1" sx={{padding: 0}}>
                    <div className="m-2 p-1 border border-1 border-gray-200 rounded-md overflow-hidden">
                        <SearchIcon />
                        <input className="outline-none" placeholder="Search" />
                    </div>
                    <Divider />
                    <StreamComponent stream_name="STREAM 1" />
                    <StreamComponent stream_name="STREAM 2" />
                    <div className="px-4 py-2 text-[12px] text-[#3673BB] hover:cursor-pointer" onClick={() => setPopoverContent(1)}>+ NEW STREAM</div>
                    <Divider />
                    <div className="px-4 py-2 text-[12px] text-[#3673BB] hover:cursor-pointer" onClick={() => setPopoverContent(2)}>+ NEW FOLDER</div>
                </TabPanel>
                <TabPanel value="2" sx={{padding: 0}}>
                    <div className="m-2 p-1 border border-1 border-gray-200 rounded-md overflow-hidden">
                        <SearchIcon />
                        <input className="outline-none" placeholder="Search" />
                    </div>
                    <Divider />
                    <StreamComponent stream_name="STREAM 1" />
                    <StreamComponent stream_name="STREAM 2" />
                    <div className="px-4 py-2 text-[#3673BB] text-[12px] hover:cursor-pointer" onClick={() => setPopoverContent(1)}>+ NEW STREAM</div>
                    <Divider />
                    <div className="px-4 py-2 text-[#3673BB] text-[12px] hover:cursor-pointer" onClick={() => setPopoverContent(2)}>+ NEW FOLDER</div>
                </TabPanel>
            </TabContext>
        </Box>
    );
}