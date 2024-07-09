import { Divider, Paper } from "@mui/material";
import ParagraphHeader from "../../common/ParagraphHeader";
import ParagraphLead from "../../common/ParagraphLead";
import ParagraphTableHeaderContent from "../../common/ParagraphTableHeaderContent";
import ParagraphTableHeaderGroupButton from "../../common/ParagraphTableHeaderGroupButton";
import ParagraphTableBarChart from "./ParagraphTableBarChart";
import ParagraphTableFooter from "../../common/ParagraphTableFooter";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';

const ReadingHabit = () => {
    const headerProperty =
        <div className="ml-4 mt-2 mb-4 text-[13px] items-center text-[#999EA0]">
            <span><CalendarMonthOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; July 2023 - Sep 2023</span>
            &nbsp;&nbsp;
            <span><PublicOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; Worldwide</span>
            &nbsp;&nbsp;
            <span><DevicesOtherOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; All bias</span>
        </div>
    const footerContent =
        <p className="p-4 text-[14px] text-[#787E86]">You've read 92% more stories than last week</p>
    return (
        <div className="my-8">
            <ParagraphHeader content="My Reading Habits" />
            <ParagraphLead content="Center is in the lead with 60% CTR" />
            <Paper>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                    <ParagraphTableHeaderContent headerContent="Stories Read" headerProperty={headerProperty} />
                    <ParagraphTableHeaderGroupButton />
                </div>
                <Divider />
                <ParagraphTableBarChart />
                <Divider />
                <ParagraphTableFooter footerContent={footerContent} />
            </Paper>
        </div>
    );
}

export default ReadingHabit;