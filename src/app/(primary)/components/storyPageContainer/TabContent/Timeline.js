import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimelineComponent = () => {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: '#F9871A' }} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p className='text-[12px]'>7:58 p.m.</p>
                    <p className='text-[#000] text-[12px]'>Wenn du eine Pass age des Lorem Ips um nutzt</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: '#F9871A' }} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <p className='text-[12px]'>6:17 p.m.</p>
                    <p className='text-[#000] text-[12px]'>Wenn du eine Pass age des Lorem Ips um nutzt</p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: '#F9871A' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <p className='text-[12px]'>5:52 p.m.</p>
                    <p className='text-[#000] text-[12px]'>Wenn du eine Pass age des Lorem Ips um nutzt</p>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export const TimelineTabContent = () => {
    return (
        <div className='flex flex-wrap items-start p-4 bg-[#fff] rounded-lg'>
            <div className='w-full md:w-[50%]'>
                <p className='text-[20px] text-[#000] px-4 font-bold'>Republicans seize on 'lab leak' shift as they expand covid probes</p>
                <span className='my-2 px-4 text-[12px]'>By Dan Diamond</span>
                <div className='w-full'>
                    <TimelineComponent />
                </div>
                <div className='px-4'>
                    <p className='text-[12px] text-[#000] font-bold'>MORE COVERAGE</p>
                    <ul className='my-2 ml-4 text-gray-600 text-[12px]' style={{listStyleType: 'square'}}>
                        <li>Pass age des Lorem Ips um nutzt</li>
                        <li>Wenn du eine Pass age des Lorem</li>
                    </ul>
                </div>
            </div>
            <div className='hidden md:block md:w-[50%]'>
                <img 
                    src='/img/news/computer.png'
                    className='w-full rounded-lg'
                />
            </div>
        </div>
    )
}