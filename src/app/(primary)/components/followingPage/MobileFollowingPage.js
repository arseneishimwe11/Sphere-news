import { useEffect, useContext, useState } from 'react';

import { usePathname } from 'next/navigation';

import { MainContext } from '../../layout';

import MobileFeedDialog from '../drawers/MobileFeedDialog';
import MobileFollowingOptionsDialog from '../drawers/MobileFollowingOptionsDialog';

import { ListNewsCard } from '../common/MobileNewsContainer/ListNewsCard';

import { Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { MenuSVG } from '@/app/SVGs';

const colors = [
    'black',
    'rgb(255,127,50)',
    'rgb(247,177,27)',
    'rgb(96,132,228)',
    'rgb(47,193,186)',
    'rgb(108,20,220)'
];

const MobileFollowingTabs = (props) => {
    const [active, setActive] = useState('All');
    const [isFeedDialogOpen, setIsFeedDialogOpen] = useState(false);
    const [isOptionsDialogOpen, setIsOptionsDialogOpen] = useState(false);
 
    const {setFeedSelected} = props;

    const handleTabClick = (item) => {
        if (active === item) {
            setIsFeedDialogOpen(true);
        }
        setFeedSelected(null);
        setActive(item);
    }

    return (
        <div className="flex items-end gap-2 border-b border-b-1 border-gray-300">
            <div className='flex gap-8 mx-2 overflow-auto whitespace-nowrap'>
                {
                    ['All', 'Tesla', 'Robots', 'OpenAI', 'Elon Musk'].map((item, index) => (
                        <div
                            key={item}
                            className={`relative ${active === item ? 'font-bold text-black' : 'text-gray-600'}`}
                            onClick={() => handleTabClick(item)}
                        >
                            <p className='text-[16px]'>{item}</p>
                            {
                                active === item &&
                                <div className='bg-[#B35A47] rounded-t-md w-[36px] h-[4px] mx-auto relative bottom-0'></div>
                            }
                        </div>
                    ))
                }
            </div>
            <IconButton onClick={() => setIsOptionsDialogOpen(true)}>
                <MenuSVG sx={{ fontSize: '20px' }} />
            </IconButton>
            <MobileFollowingOptionsDialog isOptionsDialogOpen={isOptionsDialogOpen} setIsOptionsDialogOpen={setIsOptionsDialogOpen}/>
            <MobileFeedDialog isFeedDialogOpen={isFeedDialogOpen} setIsFeedDialogOpen={setIsFeedDialogOpen} setFeedSelected={setFeedSelected} />
        </div>
    )
}

const LocationTopNav = () => {
    const data = ['New York', 'Califonia City', 'Washington', 'Arizona'];

    return (
        <div className='flex flex-row items-center gap-4 overflow-auto'>
            {
                data.map((item) => (
                    <div className='flex gap-2 p-1 items-center rounded-full bg-[#F3F3F2] my-2'>
                        <LocationOnIcon sx={{fontSize: 16, color: '#C54A4D'}}/>
                        <p className='whitespace-nowrap font-bold'>{item}</p>
                    </div>
                ))
            }
        </div>
    )
}

export const MobileFollowingPage = () => {

    const { 
        setCurrentPageStatus,
        mobileNewsListGroupBy
    } = useContext(MainContext);

    const pathname = usePathname();

    const [feedSelected, setFeedSelected] = useState(null);

    useEffect(() => {
        setCurrentPageStatus('following_page');

        return (() => {
            setCurrentPageStatus('normal');
        })
    }, [])

    return (
        <div className="pt-[52px] pb-[86px] px-4">
            <MobileFollowingTabs setFeedSelected={setFeedSelected} />
            {
                pathname.startsWith('/Local') && 
                <LocationTopNav />
            }
            {
                feedSelected &&
                    <div className='flex flex-row items-center gap-2 py-4'>
                        <div className='flex flex-col items-start flex-grow'>
                            <div className='flex w-full'>
                                <img
                                    src={feedSelected.logo_src}
                                    className="w-[10%]"
                                />
                                <p className="mx-2 text-[16px] flex-grow">{feedSelected.content}</p>
                            </div>
                            <p className='my-1 p-1 bg-gray-200 text-[12px] rounded-sm'>85 Unread</p>
                        </div>
                        <ArrowForwardIosIcon sx={{ fontSize: '16px', color: '#aaa' }} />
                    </div>
            }
            {
                mobileNewsListGroupBy &&
                    <div className='flex items-center justify-between mt-2 p-2 bg-gray-200'>
                        {
                            mobileNewsListGroupBy == 'topic' &&
                            <p>Business</p>
                        }
                        {
                            mobileNewsListGroupBy == 'feed' &&
                            <div className='flex items-center gap-2'>
                                <img 
                                    className='w-[20px] h-[20px]'
                                    src='/img/logo/feeds/1.png'
                                />
                                <p>POLITICS</p>
                            </div>
                        }
                        <IconButton size='small'>
                            <ArrowCircleRightIcon sx={{fontSize: 16}}/>
                        </IconButton>
                    </div>       
            }
            <div className='py-4'>
                <ListNewsCard
                    img_src='/img/news/meeting2.png'
                    publisher='/img/icons/source/losangeles.png'
                    title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
                    time='3h ago'
                />
                <ListNewsCard
                    img_src='/img/news/BYD.png'
                    publisher='/img/icons/source/losangeles.png'
                    title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
                    time='3h ago'
                />
                <div className="flex justify-end border-b border-b-1 border-gray-400">
                    <Button sx={{ backgroundImage: 'linear-gradient(to right, #003E6E, #CC1F26)', backgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}>MORE BUSINESS NEWS</Button>
                    <Button sx={{ textTransform: 'none', color: '#4FBAE9' }}>{'See 14 articles >'}</Button>
                </div>
            </div>
        </div>
    )
}