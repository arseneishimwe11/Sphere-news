import { useState } from "react"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Divider, Grid } from "@mui/material";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CanlendarHeaderItem = (props) => {
    const {
        date,
        isActive
    } = props;
    
    return (
        <div className="mx-2">
            {
                !isActive && 
                    <li className="p-2 text-[#58BFEC]">
                        {date.getDate().toString().padStart(2, '0')}
                    </li>
            }
            {
                isActive && 
                    <li className="flex flex-row items-center gap-1 p-2 pl-4 text-white bg-[#58BFEC]">
                        <span>{date.getDate().toString().padStart(2, '0')}</span>
                        <span>{months[date.getMonth() - 1]}</span>
                        <ArrowLeftIcon />
                        <ArrowRightIcon />
                    </li>
            }
        </div>
    )
}

const CanlendarHeader = (props) => {
    const {
        displayRange,
        active,
        startDate
    } = props;

    const range = (len) => {
        const ans = [];
        for (let index = 0; index < len; index++) {
            ans.push(index);            
        }
        return ans;
    }

    return (
        <ul className="flex flex-row justify-between bg-[#E4F7FF] text-[20px]">
            {
                range(displayRange).map((item, index) => (
                    <CanlendarHeaderItem isActive={active===item} date={new Date(startDate.getTime() + item * 24 * 3600 * 1000)}/>
                ))
            }
        </ul>
    )
}

const HistoryContent = () => {
    return (
        <Grid container spacing={3} className="p-4 bg-[#fff]  text-[#000]" sx={{marginTop: 0}}>
            <Grid item xs={12} md={6}>
                <p className="text-[24px] text-[#000] font-bold">On this day</p>
                <div className="my-8">
                    <div className="flex flex-row items-start mb-8">
                        <span className="text-[#58BFEC] pr-8">1554</span>
                        <p>See the first five lego sets designer in a competition anyone can enter lego sets designer competition anyone can enter competition</p>
                    </div>
                    <div className="flex flex-row items-start mb-8">
                        <span className="text-[#58BFEC] pr-8">1554</span>
                        <p>See the first five lego sets designer in a competition anyone can enter lego sets designer competition anyone can enter competition</p>
                    </div>
                    <div className="flex flex-row items-start mb-8">
                        <span className="text-[#58BFEC] pr-8">1554</span>
                        <p>See the first five lego sets designer in a competition anyone can enter lego sets designer competition anyone can enter competition</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className="border-l border-l-1 border-gray-300">
                <div>
                    <p className="text-[24px] text-[#000] font-bold">Did you know...</p>
                    <p className="my-8"><i>See the first five lego sets designer in a competition anyone can enter lego sets designer competition anyone can enter competition</i></p>
                </div>
                <Divider />
                <div className="py-8">
                    <p className="text-[24px] text-[#000] font-bold">Today's featured picture</p>
                    <div className="flex flex-row items-center gap-4">
                        <img 
                            src="/img/news/sports.png"
                            className="w-[120px] h-[120px] rounded-full"
                        />
                        <p className="my-8"><i>See the first five lego sets designer in a competition anyone can enter lego sets designer competition anyone can enter competition</i></p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export const HistoryTabContent = () => {
    const [displayRange, setDisplayRange] = useState(12);
    const [active, setActive] = useState(11);
    const [startDate, setStartDate] = useState(new Date(new Date() - (displayRange - 1) * 24 * 3600 * 1000));

    return (
        <div className="rounded-lg overflow-hidden">
            <CanlendarHeader 
                displayRange={displayRange}
                active={active}
                startDate={startDate}
            />
            <HistoryContent />
        </div>
    )
}