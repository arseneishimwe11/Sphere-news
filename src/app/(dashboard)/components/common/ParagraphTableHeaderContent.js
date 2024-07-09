import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';

const ParagraphTableHeaderContent = ({ headerContent, headerProperty }) => {
    return (
        <div>
            <p className="m-4 text-[18px]">{headerContent}&nbsp;<span className="text-[#999EA0]"><ErrorOutlineIcon /></span></p>
            {/* <div className="ml-4 mt-2 mb-4 text-[13px] items-center text-[#999EA0]">
                <span><CalendarMonthOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; July 2023 - Sep 2023</span>
                &nbsp;&nbsp;
                <span><PublicOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; Worldwide</span>
                &nbsp;&nbsp;
                <span><DevicesOtherOutlinedIcon style={{ fontSize: "18px" }} />&nbsp; All bias</span>
            </div> */}
            {headerProperty}
        </div>
    );
}

export default ParagraphTableHeaderContent;