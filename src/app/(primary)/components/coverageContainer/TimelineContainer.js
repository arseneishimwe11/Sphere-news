'use client';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimelineContentWrapper = (props) => {
    const {date, text, source} = props;
    
    return (
        <>
            <p className='text-[12px] font-bold'>{date}</p>
            <p className='text-[12px]'>{text}</p>
            <div className='flex flex-row gap-1 items-center'>
                <img 
                    src={source.img_src}
                    className='w-[16px]'
                />
                <span className='text-[12px]'>{source.name}</span>
            </div>
        </>
    )
}

export const TimelineContainer = () => {
    return (
        <div className='cardcomponent p-4' >
            <p className="text-[20px]">Timeline</p>
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
                        <TimelineDot sx={{ backgroundColor: '#7C969C' }} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineContentWrapper 
                            date='10/26/2023'
                            text='Pass age des L Wenn du eine Pass age des Lorem Ips um nutzt'
                            source={{img_src: 'img/icons/source/BBC.png', name: 'BBC News'}}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#7C969C' }} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineContentWrapper 
                            date='10/24/2023'
                            text='Wenn du eine Pass age des Lorem Ips um nutzt'
                            source={{img_src: 'img/icons/source/CNBC.png', name: 'CNBC'}}
                        />
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ backgroundColor: '#7C969C' }} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineContentWrapper 
                            date='10/21/2023'
                            text='Lorem Ips um nutzt Lorem Ips um nutztWenn du eine Pass age des Lorem Ips um nutzt'
                            source={{img_src: 'img/icons/source/CNBC.png', name: 'CNBC'}}
                        />
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}