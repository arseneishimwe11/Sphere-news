import { useContext } from 'react';

import { MainContext } from '../../layout';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, Grid, IconButton } from '@mui/material';

import { LightBulbIcon } from '../common/LightBulbIcon';
import { SubscriberReading } from '../storyPageContainer/Widgets';

const TopStoryItem = (props) => {
    const { source, title, time, writer, img_src } = props;

    return (
        <div>
            <div className='flex flex-row gap-4'>
                <div className='w-[75%]'>
                    <p className='text-[12px]'>{source}</p>
                    <p className='text-black'>{title}</p>
                </div>
                <div className='w-[25%]'>
                    <img
                        src={img_src}
                        className='w-full rounded-lg'
                    />
                </div>
            </div>
            <p className='text-sm text-gray-700'>{time}&nbsp;•&nbsp;<b>{writer}</b></p>
        </div>
    )
}

const TopStoryComponent = (props) => {
    const { channel, channel_brand } = props;

    return (
        <div className="h-full flex flex-col justify-between gap-4 p-4 rounded-xl border border-1 border-gray-300 bg-[#EEF2F3]">
            <div className='flex flex-row items-center justify-between'>
                <img
                    src={channel_brand}
                />
                <IconButton sx={{ backgroundColor: '#C8EDFC' }}>
                    <StarIcon sx={{ fontSize: 16, color: 'black' }} />
                </IconButton>
            </div>
            <p className='p-2 py-1 text-sm text-white bg-[#4CBCE6] rounded-md'>{channel}</p>
            <TopStoryItem
                source="HOUSING"
                title="Office Vacancy Crisis Destroy Many Mulls Easing Conversation.."
                time="2 hours ago"
                writer="Steven Nelson"
                img_src="/img/news/computer.png"
            />
            <Divider />
            <TopStoryItem
                source="SANITATION"
                title="Office Vacancy Crisis Destroy Many Mulls Easing Conversation.."
                time="2 hours ago"
                writer="Steven Nelson"
                img_src="/img/news/sports.png"
            />
            <Divider />
            <TopStoryItem
                source="CITY HALL"
                title="Office Vacancy Crisis Destroy Many Mulls Easing Conversation.."
                time="2 hours ago"
                writer="Steven Nelson"
                img_src="/img/news/quote.png"
            />
            <div className='flex flex-row items-center'>
                <div className='flex items-center gap-2 flex-grow'>
                    <img
                        src='/img/feedIcon/forbe.png'
                        className='w-[24px] rounded-md'
                    />
                    <p className='text-sm text-[#4CBCE6]'>Visit Benzinga</p>
                </div>
                <IconButton>
                    <ContentCopyIcon sx={{ fontSize: 16, color: '#4CBCE6' }} />
                </IconButton>
                <IconButton>
                    <MoreVertIcon sx={{ fontSize: 16, color: 'black' }} />
                </IconButton>
            </div>
        </div>
    )
}

const StoryMenuComponent = (props) => {
    const { story_list } = props;

    return (
        <>
            <a className='flex flex-row items-center text-[#68C5ED] hover:cursor-pointer'><span>SUBSCRIBERS ARE READING&nbsp;</span> <ArrowForwardIcon sx={{ fontSize: 'medium' }} /></a>
            <hr className='border-b-2 border-b-[#000] my-2' />
            <div className='flex flex-col h-full justify-between gap-2'>
                {
                    story_list.map((item, index) => (
                        <div className='flex flex-row items-start justify-between' key={index}>
                            <span className='w-[24px] bg-[#0F172A] text-[#FFF] rounded-full text-center mr-2'>{index + 1}</span>
                            <div className='flex flex-col w-[90%] h-full'>
                                <div className='flex flex-row h-full justify-between'>
                                    <div className='flex flex-col w-[65%]'>
                                        <h3 className='text-xl font-bold'>{item.title}</h3>
                                        <div className='flex flex-row my-2 text-[12px]'>
                                            <a className='text-[#68C5ED]'>
                                                {item.reporter}
                                            </a>
                                            <span className='text-gray-500 mx-2'>
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col h-full justify-between items-end w-[30%] sm:w-[10%] xl:w-[30%]'>
                                        <img
                                            src='/img/news/small.png'
                                            className='w-full rounded-lg'
                                        />
                                        <LightBulbIcon />
                                    </div>
                                </div>
                                {index < 5 ? <hr className='border border-gray-500' /> : ''}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const VideoEpisode = (props) => {
    const { title, episode_no, date } = props;

    return (
        <div className='flex flex-row justify-between items-start'>
            <img
                src='/img/icons/video-square.png'
            />
            <div className='flex flex-col w-[90%]'>
                <h5 className='font-bold'>{title}</h5>
                <h6 className='text-[12px] text-gray-500'>Episode #{episode_no}&nbsp;&#8226;&nbsp;{date}</h6>
            </div>
        </div>
    )
}

const MoreEpisode = (props) => {
    const { title, desc, reporter } = props;

    return (
        <div className='flex flex-col my-2'>
            <img
                src='/img/news/Plain.png'
                className='w-full rounded-xl'
            />
            <h3 className="text-xl my-4 font-bold">
                {title}
            </h3>
            <p className="text-md my-4">
                {desc}
            </p>
            <h6 className='text-[12px] text-gray-500'>By {reporter}&nbsp;&#8226;&nbsp;15 hours ago</h6>
        </div>
    )
}

const MoreTopStories = (props) => {
    return (
        <>
            <a className='flex flex-row items-center text-[14px]'>LATEST PODCAST EPSIODES</a>
            <hr className='border-b-2 border-b-[#000] my-[9px]' />
            <div className='flex flex-col h-full justify-between'>
                <div className='flex flex-row items-start mb-8'>
                    <img
                        src='/img/news/small.png'
                        className='w-[30%] rounded-lg'
                    />
                    <div className='flex flex-col w-[70%] ml-4'>
                        <div className='flex flex-row items-center justify-between'>
                            <span className='text-[10px] font-bold text-gray-500'>THE INVESTOPEDIA EXPRESS</span>
                            <LightBulbIcon />
                        </div>
                        <h3 className='text-xl my-2 font-bold'>
                            The Investopedia Express ipsum dolor sit amet, consectetur adipsum dolor sit amet, consectetur ad
                        </h3>
                        <h6 className='text-[12px] text-gray-500'>Episode #135&nbsp;&#8226;&nbsp;Apr 4, 2023</h6>
                    </div>
                </div>
                <VideoEpisode
                    title='What happens when an Economist Turns Financial Advice Upside Down'
                    episode_no='134'
                    date='Apr 4, 2023'
                />
                <VideoEpisode
                    title='Trading and Investing Goes Hyper-Social'
                    episode_no='133'
                    date='Apr 4, 2023'
                />
                <hr className='border-b-2 border-b-gray-500' />
                <MoreEpisode
                    title='Consumers Rack Up Record Credit Card Debt'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                    reporter='Diccon Hyatt'
                />
            </div>
        </>
    )
}

export const TopStories = () => {

    const story_list = [
        {
            title: 'See the first five Lego sets designer in a competition anyone can enter',
            reporter: 'SEAN HOLLISTER',
            date: 'Apr 4, 2023'
        },
        {
            title: 'Oppenheimer’s new trailer is the sound of the Doomsday Clock winding up',
            reporter: 'JACOB JONES',
            date: 'Apr 4, 2023'
        },
        {
            title: 'See the first five Lego sets designer in a competition anyone can enter',
            reporter: 'SEAN HOLLISTER',
            date: 'Apr 4, 2023'
        },
        {
            title: 'Oppenheimer’s new trailer is the sound of the Doomsday Clock winding up',
            reporter: 'JACOB JONES',
            date: 'Apr 4, 2023'
        },
        {
            title: 'See the first five Lego sets designer in a competition anyone can enter',
            reporter: 'SEAN HOLLISTER',
            date: 'Apr 4, 2023'
        },
        {
            title: 'Oppenheimer’s new trailer is the sound of the Doomsday Clock winding up',
            reporter: 'JACOB JONES',
            date: 'Apr 4, 2023'
        }
    ];

    const subscriber_reading_list = [
        {
            index: '1',
            supporter_logo: '/img/icons/R1.png',
            supporter_name: 'Reuters',
            title: 'See the first five lego sets designer in a competition anyone can enter lego sets designer',
            time: '6h ago',
            reporter: 'Heather Bien'
        },
        {
            index: '2',
            supporter_logo: '/img/icons/R1.png',
            supporter_name: 'Reuters',
            title: 'See the first five lego sets designer in a competition anyone can enter lego sets designer',
            time: '3h ago',
            reporter: 'Joe Dicro'
        },
        {
            index: '3',
            supporter_logo: '/img/icons/R1.png',
            supporter_name: 'Reuters',
            title: 'See the first five lego sets designer in a competition anyone can enter lego sets designer',
            time: '1h ago',
            reporter: 'John Doe'
        }
    ];

    return (
        <div className="flex flex-col pb-12 text-black-color border-b border-b-gray-400 dark:border-b-gray-200">
            <div className="flex flex-row gap-4 w-full items-center justify-between my-8">
                <h3 className="text-[20px] md:text-[24px] text-black-color font-bold mr-4">Top Channels</h3>
                <div className='flex flex-row flex-grow gap-[40px]'>
                    <div className='w-[20%] h-[5px] bg-[#A2DAF2]' />
                    <div className='w-[80%] h-[5px] bg-[#7A9DB2]' />
                </div>
                <h4 className="text-[12px] md:text-[16px] text-dark-blue-color font-bold ml-4">See More Top Channels</h4>
            </div>
            <Grid container spacing={4} >
                <Grid item lg={3} md={12}>
                    <div className='h-full'>
                        <TopStoryComponent
                            channel_brand='/img/icons/source/thecity.png'
                            channel='The City'
                        />
                    </div>
                </Grid>
                <Grid item lg={3} md={12}>
                    <TopStoryComponent
                        channel_brand='/img/icons/source/marketwatch.png'
                        channel='Market Watch'
                    />
                </Grid>
                <Grid item lg={3} md={12}>
                    <TopStoryComponent
                        channel_brand='/img/icons/source/biztimes.png'
                        channel='Biz Times'
                    />
                </Grid>
                <Grid item lg={3} md={12}>
                    <div className="flex flex-col h-full justify-between mb-4">
                        <SubscriberReading
                            subscriber_reading_list={subscriber_reading_list}
                        />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default TopStories;