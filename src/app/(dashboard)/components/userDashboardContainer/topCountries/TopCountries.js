'use client'

import { Divider, Paper } from "@mui/material";
import ParagraphHeader from "../../common/ParagraphHeader";
import ParagraphLead from "../../common/ParagraphLead";
import ParagraphTableHeaderContent from "../../common/ParagraphTableHeaderContent";
import ParagraphTableHeaderGroupButton from "../../common/ParagraphTableHeaderGroupButton";
import ParagraphCountriesTable from "./ParagraphCountriesTable";
import CountriesMap from "./CountriesMap";
import ParagraphTableFooter from "../../common/ParagraphTableFooter";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import LockOutlined from "@mui/icons-material/LockOutlined";

function createData(url, channel, views, viewsPercentage, shortCountryName) {
    return { url, channel, views, viewsPercentage, shortCountryName };
}

const rows = [
    createData('img/icons/source/BBC.png', 'United States', 6, 15, 'us'),
    createData('img/icons/source/BBC.png', 'Taiwan', 9, 37, 'tw'),
    createData('img/icons/source/CNBC.png', 'France', 16, 24, 'fr'),
    createData('img/icons/source/CNBC.png', 'Japan', 23, 67, 'jp'),
    createData('img/icons/source/BBC.png', 'India', 45, 49, 'in'),
];

const TopTopics = () => {
    const headerProperty =
        <div className="ml-4 mt-2 mb-4 text-[13px] items-center text-[#999EA0]">
            <span><CalendarMonthOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; July 2023 - Sep 2023</span>
            &nbsp;&nbsp;
            <span><DevicesOtherOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; All traffic</span>
        </div>
    const footerContent =
        <p className="p-4 text-[14px] text-[#787E86]"><LockOutlined />&nbsp;See more countries</p>
    return (
        <div className="my-8">
            <ParagraphHeader content="Top Countries" />
            <ParagraphLead content="United States is in the lead with 40% traffic" />
            <Paper>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <ParagraphTableHeaderContent headerContent="You've read 44/179 countries" headerProperty={headerProperty} />
                    <ParagraphTableHeaderGroupButton />
                </div>
                <Divider />
                <div className="flex flex-col lg:flex-row justify-center gap-2">
                    <div className='m-4 w-[50%]'>
                        <CountriesMap rows={rows} />
                    </div>
                    <ParagraphCountriesTable rows={rows} tableHeader="" />
                </div>
                <Divider />
                <ParagraphTableFooter footerContent={footerContent} />
            </Paper>
        </div>
    );
}

export default TopTopics;