import { useState } from "react";

import { Drawer, Button, IconButton } from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';

const MobileFollowingHeader = (props) => {

    const { setIsMobileSideMenuOpen } = props;

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [activeStream, setActiveStream] = useState('Tech News');

    return (
        <>
            <img
                src='/img/logo/sphere/logo3.png'
                className="w-[32px]"
            />
            <Button 
                sx={{ backgroundImage: 'linear-gradient(to right, #003E6E, #CC1F26)', backgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}
                onClick={() => setIsOpenDrawer(true)}
            >
                {activeStream}&nbsp;<span className="-mt-[2px]">∨</span>
            </Button>
            <div className='flex flex-row'>
                <IconButton onClick={() => setIsMobileSideMenuOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
            <Drawer
                anchor='bottom'
                open={isOpenDrawer}
                onClose={() => setIsOpenDrawer(false)}
                PaperProps={{
                    style: {
                        borderRadius: '12px 12px 0 0'
                    }
                }}
            >
                <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                    <div className='flex w-full justify-between items-start'>
                        <p className="text-[20px] text-black">Streams</p>
                        <IconButton onClick={() => setIsOpenDrawer(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2'  onClick={() => setActiveStream('Apply News Today')}>
                        <FormatAlignJustifyIcon />
                        <p className="flex-grow mx-2 text-[16px]">Apply News Today</p>
                        <IconButton>
                            <ArrowForwardIosIcon sx={{fontSize: 16, color: '#aaa'}}/>
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => setActiveStream('Apple News')}>
                        <MapsUgcIcon />
                        <p className="flex-grow mx-2 text-[16px]">Apple News in Conversation</p>
                        <IconButton>
                            <ArrowForwardIosIcon sx={{fontSize: 16, color: '#aaa'}}/>
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => setActiveStream('News & Politics')}>
                        <SpeakerNotesIcon />
                        <p className="flex-grow mx-2 text-[16px]">News & Politics</p>
                        <IconButton>
                            <ArrowForwardIosIcon sx={{fontSize: 16, color: '#aaa'}}/>
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => setActiveStream('Money & Business')}>
                        <BusinessCenterIcon />
                        <p className="flex-grow mx-2 text-[16px]">Money & Business</p>
                        <IconButton>
                            <ArrowForwardIosIcon sx={{fontSize: 16, color: '#aaa'}}/>
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => setActiveStream('Arts & Entertainment')}>
                        <SmartScreenIcon />
                        <p className="flex-grow mx-2 text-[16px]">Arts & Entertainment</p>
                        <IconButton>
                            <ArrowForwardIosIcon sx={{fontSize: 16, color: '#aaa'}}/>
                        </IconButton>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default MobileFollowingHeader;