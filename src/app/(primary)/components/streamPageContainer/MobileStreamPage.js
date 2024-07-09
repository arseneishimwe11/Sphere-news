'use client'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import ThreeDotNews from "@/app/(dashboard)/components/common/ThreeDotNews";

import { 
    Drawer,
    Tooltip,
    IconButton
} from '@mui/material';

const content = [
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
    },
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
    },
    {
        header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim quidem ipsum quos corrupti totam ullam nam, amet, quam dolores saepe assumenda adipisci tenetur, sunt minima et porro unde excepturi?',
    },
];

const CategorySelect = () => {

    const [active, setActive] = useState('all');

    const category = ['all', 'left', 'center', 'right'];
    const colors = ['#063144', '#93B3C9', '#AED6EC', '#E4C6A5'];

    return (
        <div className='flex flex-row gap-1'>
            {
                category.map((item, index) => (
                    <Tooltip title={item}>
                    <div 
                        key={item} 
                        onClick={() => setActive(item)}
                        className='hover:cursor-pointer'
                    >
                        {
                            item === active && 
                                <div className='p-[2px] w-[16px] h-[16px] bg-transparent rounded-full border border-1' style={{borderColor: colors[index]}}>
                                    <div className='w-full h-full rounded-full' style={{backgroundColor: colors[index]}}></div>
                                </div>
                        }
                        {
                            !(item === active) && 
                                <div className='p-[2px] w-[16px] h-[16px] bg-transparent rounded-full'>
                                    <div className='w-full h-full rounded-full' style={{backgroundColor: colors[index]}}></div>
                                </div>
                        }
                    </div>
                    </Tooltip>
                ))
            }
        </div>
    )
}

const SwiperItem = (props) => {
    const {title, content, category, location, country} = props;

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-2 text-gray-600'>
                    <span className='text-[10px] px-1 bg-white border border-1 border-gray-300 rounded-md'>
                        {category}
                    </span>
                    <span className='text-[10px] px-1 bg-white border border-1 border-gray-300 rounded-md'>
                        {location}
                    </span>
                </div>
                <a href='#' className='underline text-[12px]'>
                    Read Article
                </a>
            </div>
            <p className='text-[16px] font-bold'>{title}</p>
            <p className='text-[16px]'>{content}</p>
            <div className='flex flex-row items-center justify-between text-gray-600 text-[12px]'>
                <div className='flex flex-row items-center gap-2'>
                    <img 
                        src='/img/icons/source/LiveMint.png'
                    />
                    <span>Live Mint</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <img 
                        src='/img/flag/small/in.png'
                    />
                    <span>IN</span>
                </div>
            </div>
        </div>
    )
} 

const MobileStreamPage = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className="flex flex-col p-4 gap-2 pb-24">
            <div className="flex flex-row gap-2 mt-[60px]">
                <img
                    src="/img/icons/mobile/story_yellow.svg"
                />
                <p className="font-bold">News Stream</p>
            </div>
            <div className='relative'>
                <img
                    src='/img/news/swiper2.png'
                    className='w-full rounded-lg'
                />
                <div className='text-white py-1 px-2 rounded-full absolute top-2 right-2 bg-[rgba(255,255,255,0.3)]'>
                    2/3
                </div>
            </div>
            <div>
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={30}
                    navigation
                    className="rewind"
                >
                    {content.map((p, index) => {
                        return (
                            <SwiperSlide className='pb-2' key={index}>
                                <div className='mr-1 p-4 bg-[rgb(236,245,252)] relative border border-1 border-gray-300 rounded-lg'>
                                    <SwiperItem 
                                        title={p.header}
                                        content={p.info}
                                        category='center'
                                        location='international'
                                    />
                                    <div className='w-full h-full bg-[rgb(225,236,242)] absolute -right-1 top-1 rounded-lg z-[-1]'></div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className='flex flex-row justify-between items-center text-gray-600 text-[12px]'>
                <p>Washington, US</p>
                <div>
                    <CategorySelect />
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <p>16 sources</p>
                    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <Drawer
                anchor='bottom'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                PaperProps={{
                    style: {
                        borderRadius: '12px 12px 0 0'
                    }
                }}
            >
                <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                    <div className='flex w-full justify-end items-end'>
                        <IconButton onClick={() => setOpenDrawer(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img 
                            src='/img/icons/link.svg'
                            className='w-[20px]'
                        />
                        <p>Share</p>
                    </div>
                    <div className='flex flex-row items-start gap-2'>
                        <VisibilityOffOutlinedIcon sx={{color: '#888', fontSize: '20px'}}/>
                        <div className='flex flex-col w-full gap-2'>
                            <p>Show less like this</p>
                            <div className='flex flex-row w-full items-center justify-between'>
                                <p>#Military</p>
                                <ThreeDotNews />
                            </div>
                            <div className='flex flex-row w-full items-center justify-between'>
                                <p>#Politics</p>
                                <ThreeDotNews />
                            </div>
                            <div className='flex flex-row w-full items-center justify-between'>
                                <p>#Videos</p>
                                <ThreeDotNews />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img 
                            src='/img/icons/thumbs_up.svg'
                            className='w-[20px]'
                        />
                        <p>I like this article</p>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default MobileStreamPage;