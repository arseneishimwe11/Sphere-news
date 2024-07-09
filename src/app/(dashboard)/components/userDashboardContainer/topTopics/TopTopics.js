'use client'

import { Divider, Paper } from "@mui/material";
import ParagraphHeader from "../../common/ParagraphHeader";
import ParagraphLead from "../../common/ParagraphLead";
import ParagraphTableHeaderContent from "../../common/ParagraphTableHeaderContent";
import ParagraphTableHeaderGroupButton from "../../common/ParagraphTableHeaderGroupButton";
import ParagraphTopicsTable from "./ParagraphTopicsTable";
import ParagraphTableFooter from "../../common/ParagraphTableFooter";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import LockOutlined from "@mui/icons-material/LockOutlined";

const TopTopics = () => {
    const headerProperty =
        <div className="ml-4 mt-2 mb-4 text-[13px] items-center text-[#999EA0]">
            <span><CalendarMonthOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; July 2023 - Sep 2023</span>
            &nbsp;&nbsp;
            <span><PublicOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; Worldwide</span>
            &nbsp;&nbsp;
            <span><PersonalVideoIcon style={{ fontSize: "18px" }} />&nbsp; Desktop</span>
        </div>
    const footerContent =
        <p className="p-4 text-[14px] text-[#787E86]"><LockOutlined />&nbsp;See more topics</p>
    return (
        <div className="my-8">
            <ParagraphHeader content="Most read topics" />
            <ParagraphLead content="Business is in the lead with 23% of your views" />
            <Paper>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <ParagraphTableHeaderContent headerContent="Top topics" headerProperty={headerProperty} />
                    <ParagraphTableHeaderGroupButton />
                </div>
                <Divider />
                <ParagraphTopicsTable />
                <Divider />
                <ParagraphTableFooter footerContent={footerContent}/>
            </Paper>
        </div>
    );
}

export default TopTopics;