import { useState, useContext, useRef, useEffect } from "react";

import { MainContext } from "@/app/(primary)/layout";

import MobileAppearanceDialog from "../../drawers/MobileAppearanceDialog";
import MobileLayoutSettingDialog from "../../drawers/MobileLayoutSettingDialog";

import {
    Button,
    IconButton,
    Drawer,
} from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

import { MenuSVG } from "@/app/SVGs";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const MobileLandingChannel = () => {

    const [activeChannel, setActiveChannel] = useState('TopNews');
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="border-b border-b-1 border-gray-300 my-2">
            <MobileLandingChannelHeader activeIndex={activeIndex} />
            <MobileChannelContent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
    )
}

const MobileLandingChannelHeader = (props) => {
    const { activeIndex } = props;
    const containerRef = useRef(null);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [isAppearanceDialogOpen, setIsAppearanceDialogOpen] = useState(false);
    const [isLayoutSettingDialogOpen, setIsLayoutSettingDialogOpen] = useState(false);
    const [buttonWidths, setButtonWidths] = useState([]);

    const {
        setIsMobileSideMenuOpen
    } = useContext(MainContext);

    useEffect(() => {
        if (containerRef.current) {
            const buttons = containerRef.current.querySelectorAll('button');
            const widths = Array.from(buttons).map(button => button.offsetWidth + 8);
            setButtonWidths(widths);
        }
    }, []);

    useEffect(() => {
        const totalScrollLeft = buttonWidths.reduce((acc, curr, index) => {
            if (index < activeIndex) {
                return acc + curr;
            }
            return acc;
        }, 0);
        containerRef.current.scrollLeft = totalScrollLeft;
    }, [activeIndex])

    return (
        <div className="flex items-center">
            <div
                className="my-2 overflow-auto whitespace-nowrap transition-all duration-300"
                ref={containerRef}
            >
                {
                    ['TopNews', 'BBC', 'Los Angeles', 'AP'].map((item, index) => (
                        <Button sx={{ border: '1px solid gray', borderRadius: '24px', textTransform: 'none', color: 'gray', marginX: '4px', backgroundColor: '#fff' }}>
                            <img
                                src='/img/logo/feeds/1.png'
                                className='rounded-full w-6'
                            />
                            <p className='ml-2'>{item}</p>
                        </Button>
                    ))
                }
            </div>
            <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuSVG />
            </IconButton>
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
                    <div className='flex w-full justify-between items-start'>
                        <p className="text-[20px] font-bold text-black">Options</p>
                        <IconButton onClick={() => setOpenDrawer(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setOpenDrawer(false); setIsMobileSideMenuOpen(true) }}>
                        <MenuRoundedIcon />
                        <p>Mobile Menu</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setOpenDrawer(false); setIsAppearanceDialogOpen(true); }}>
                        <TuneRoundedIcon />
                        <p>Appearance</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setOpenDrawer(false); setIsLayoutSettingDialogOpen(true); }}>
                        <ViewQuiltRoundedIcon />
                        <p>Layout settings</p>
                    </div>
                </div>
            </Drawer>
            <MobileAppearanceDialog isAppearanceDialogOpen={isAppearanceDialogOpen} setIsAppearanceDialogOpen={setIsAppearanceDialogOpen} />
            <MobileLayoutSettingDialog isLayoutSettingDialogOpen={isLayoutSettingDialogOpen} setIsLayoutSettingDialogOpen={setIsLayoutSettingDialogOpen} />
        </div>
    )
}

const MobileChannelContentItem = (props) => {
    const { status, title, badge, source } = props;

    const { emojis } = useContext(MainContext);

    return (
        <div className="flex gap-2 items-start">
            <div className={`min-w-[4px] h-[16px] mt-1 ${badge ? 'bg-[red]' : 'bg-gray-300'} rounded-full`}></div>
            <div>
                <p className="font-bold">
                    {emojis && "🌎"}
                    {title}
                </p>
                {
                    badge &&
                    <span className="text-[12px] italic bg-[#1976D2] text-white px-1 rounded-sm mr-2">{badge}</span>
                }
                {
                    source &&
                    <span className="text-[12px]">{source}</span>
                }
            </div>
        </div>
    )
}

const swiper_data = [
    [
        {
            title: 'Uvalde police chief abruptly announces days after report clear...',
            badge: 'breaking',
            source: 'BBC',
            img_src: '/img/news/sky_small1.png',
            source_img: '/img/logo/source/bbc.jpg'
        },
        {
            title: 'Special counsel Robert Hur testifies before House on Chris documents re...',
            badge: 'breaking',
            source: 'CNN',
            img_src: '/img/news/meeting4.png',
            source_img: '/img/logo/source/CNN.png'
        },
        {
            title: 'Uvalde police chief abruptly resignation days after report clear understanding...',
            source: 'Associated Press',
            img_src: '/img/news/Image3.png',
            source_img: '/img/logo/source/ET.png'
        }
    ],
    [
        {
            title: 'Uvalde police chief abruptly announces days after report clear...',
            badge: 'breaking',
        },
        {
            title: 'Special counsel Robert Hur testifies before House on Chris documents re...',
            badge: 'breaking',
        },
        {
            title: 'Uvalde police chief abruptly resignation days after report clear understanding...',
        }
    ],
    [
        {
            title: 'Uvalde police chief abruptly announces days after report clear...',
            badge: 'breaking',
        },
        {
            title: 'Special counsel Robert Hur testifies before House on Chris documents re...',
            badge: 'breaking',
        },
        {
            title: 'Uvalde police chief abruptly resignation days after report clear understanding...',
        }
    ],
    [
        {
            title: 'Uvalde police chief abruptly announces days after report clear...',
            badge: 'breaking',
        },
        {
            title: 'Special counsel Robert Hur testifies before House on Chris documents re...',
            badge: 'breaking',
        },
        {
            title: 'Uvalde police chief abruptly resignation days after report clear understanding...',
        }
    ]
];

const MobileChannelContent = (props) => {
    const { activeIndex, setActiveIndex } = props;

    const { mobileChannelLayout } = useContext(MainContext);

    return (
        <>
            {
                mobileChannelLayout === "list" &&
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    navigation
                    className="rewind"
                    activeIndex={activeIndex}
                    onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                >
                    {swiper_data.map((data, index) => {
                        return (
                            <SwiperSlide className='pb-2' key={index}>
                                <div className="flex flex-col gap-2 px-2 py-4">
                                    {
                                        data.map((item, index) => (
                                            <MobileChannelContentItem
                                                title={item.title}
                                                badge={item.badge}
                                                source={item.source}
                                            />
                                        ))
                                    }
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            }
            {
                mobileChannelLayout === "card" &&
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    navigation
                    className="rewind"
                >
                    {swiper_data[activeIndex].map((item, index) => {
                        return (
                            <SwiperSlide className='pb-2' key={index}>
                                <div
                                    className="flex flex-col gap-2 mx-2 px-4 py-4 h-[50vh] rounded-lg relative"
                                    style={{
                                        backgroundImage: `url(${item.img_src})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center'
                                    }}
                                >
                                    <div className="text-white bottom-2 absolute">
                                        <div className="flex gap-2 items-center">
                                            <img
                                                src={item.source_img}
                                                className="w-[20px] h-[20px]"
                                            />
                                            <p className="my-2">{item.source}</p>
                                        </div>
                                        <p className="text-xl font-bold">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            }
        </>
    )
}

export default MobileLandingChannel;