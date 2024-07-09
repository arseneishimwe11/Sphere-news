'use client'

import { useContext, useState } from 'react';
import { UserDashboardContext } from '../layout';
import { Button } from '@mui/material';
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ResponsiveNewRule from '../components/automationContainer/ResponsiveNewRule';
import ResponsiveNewFilter from '../components/automationContainer/ResponsiveNewFilter';
import ResponsiveNewHighlight from '../components/automationContainer/ResponsiveNewHighlight';
import ResponsiveNewFeed from '../components/automationContainer/ResponsiveNewFeed';
import SearchWithIcon from '../components/automationContainer/SearchWithIcon';
import SelectLabels from '../components/automationContainer/SelectLabels';
import NewRuleTableContent from '../components/automationContainer/NewRuleTableContent';
import NewFilterTableContent from '../components/automationContainer/NewFilterTableContent';
import NewHighlightTableContent from '../components/automationContainer/NewHighlightTableContent';
import NewFeedTableContent from '../components/automationContainer/NewFeedTableContent';


export default function Newsletter() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Automation');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);

    const [value, setValue] = useState(0);
    const labels = ["Rules", "Filters", "Highlights", "AI Feeds"];
    const popupButtons = [<ResponsiveNewRule />, <ResponsiveNewFilter />, <ResponsiveNewHighlight />, <ResponsiveNewFeed />];
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='mt-[50px] sm:mt-[100px]   w-[90%] lg:w-[70%] m-auto'>
            <div className='flex text-[20px] sm:text-[30px] font-bold justify-between'>
                <div className='flex flex-row'>
                    <p>{labels[value]}&nbsp;</p>
                    <span>
                        <HelpOutlineIcon sx={{ color: "#777" }} />
                    </span>
                </div>
                {popupButtons[value]}
            </div>
            <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={8}>
                                <div className='flex flex-row justify-between items-center'>
                                    <Tabs
                                        onChange={handleChange}
                                        value={value}
                                        aria-label="Tabs where selection follows focus"
                                        selectionFollowsFocus
                                        // sx={{ marginX: '20px' }}
                                    >
                                        <Tab label="Rules" style={{ textTransform: "none " }} />
                                        <Tab label="Filters" style={{ textTransform: "none " }} />
                                        <Tab label="Highlights" style={{ textTransform: "none " }} />
                                        <Tab label="AI Feeds" style={{ textTransform: "none " }} />
                                    </Tabs>
                                    <div className='flex flex-row items-center'>
                                        <SelectLabels />
                                        <SearchWithIcon concept={labels[value]} />
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                        {value === 0 && <NewRuleTableContent />}
                        {value === 1 && <NewFilterTableContent />}
                        {value === 2 && <NewHighlightTableContent />}
                        {value === 3 && <NewFeedTableContent />}
                        <TableRow>
                            <TableCell colSpan={8}>
                                <div className='flex justify-end mx-[15px] my-[5px] border-[]'>
                                    <Pagination count={229} variant="outlined" color="primary" size='10' />
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div className='flex flex-row items-center justify-center'>
                <div></div>
                <Button sx={{
                    marginTop: '20px',
                    borderRadius: '50px',
                    padding: '20px',
                    borderColor: '#F0F0F0'
                }} variant="outlined" >
                    <HelpOutlineIcon sx={{ color: "#88B0B0" }} />&nbsp;
                    <p className='text-[#555]'>Learn more about</p>&nbsp;
                    <p className='text-[#88B0B0]'>{labels[value]}</p>
                </Button>
            </div>
        </div >
    );
}