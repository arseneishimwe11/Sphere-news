'use client'

import { Divider, Paper } from "@mui/material";
import ParagraphHeader from "../../common/ParagraphHeader";
import ParagraphLead from "../../common/ParagraphLead";
import ParagraphTableHeaderContent from "../../common/ParagraphTableHeaderContent";
import ParagraphTableHeaderGroupButton from "../../common/ParagraphTableHeaderGroupButton";
import ParagraphNewsTable from "./ParagraphNewsTable";
import ParagraphTableFooter from "../../common/ParagraphTableFooter";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';
import LockOutlined from "@mui/icons-material/LockOutlined";

const Analysis = () => {
    const headerProperty =
        <div className="ml-4 mt-2 mb-4 text-[13px] items-center text-[#999EA0]">
            <span><CalendarMonthOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; July 2023 - Sep 2023</span>
            &nbsp;&nbsp;
            <span><PublicOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; Worldwide</span>
            &nbsp;&nbsp;
            <span><DevicesOtherOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; Business, Science</span>
        </div>
    const footerContent =
        <p className="p-4 text-[14px] text-[#787E86]"><LockOutlined />&nbsp;See more analysis</p>
    return (
        <div className="my-[50px]">
            <ParagraphHeader content="Analysis" />
            <ParagraphLead content="Yahoo News in the lead capturing 72% of traffic" />
            <Paper>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <ParagraphTableHeaderContent headerContent="Most Read News Sources" headerProperty={headerProperty} />
                    <ParagraphTableHeaderGroupButton />
                </div>
                <Divider />
                <ParagraphNewsTable />
                <Divider />
                <ParagraphTableFooter footerContent={footerContent} />
            </Paper>
        </div>
    );
}

export default Analysis;