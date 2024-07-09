import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Popover, Box, AvatarGroup, Avatar } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

import { CustomCarousel } from './Carousel/Carousel';

import usePopup from '@/app/hooks/usePopupState';

const modalContentStyle = {
    width: 560,
    p: 0,
};

export function LightBulbIcon(props) {
    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton aria-label="delete" className="p-1" onClick={handleOpen}>
                <img
                    src='img/icons/light.png'
                    className='transition duration-300 hover:cursor-pointer dark:invert'
                />
            </IconButton>
            <Popover
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        minWidth: 240,
                        maxHeight: '75vh',
                    },
                }}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Box sx={modalContentStyle}>
                    <SummaryContent />
                </Box>
            </Popover>
        </>
    )
}

const SummaryContent = (props) => {
    return (
        <Box sx={modalContentStyle}>
            <div className="border bg-[#EBF8FF]">
                <div className="w-full border-solid border-white rounded-xl bg-[#EBF8FF] relative">
                    <div className='p-2'>
                        <CustomCarousel />
                    </div>
                    <div className='flex flex-col p-4'>
                        <div className=''>
                            <h6 className="text-[10px] my-1">15 sources</h6>
                            <div className="flex flex-row gap-8">
                                <div className="flex flex-col w-[50%]">
                                    <div className="w-full flex">
                                        <div className="w-[24%] h-[10px] bg-[#99D6F2]"></div>
                                        <div className="w-[8%] h-[10px] bg-[#39A9D7]"></div>
                                        <div className="w-[8%] h-[10px] bg-[#FB8716]"></div>
                                        <div className="w-[60%] h-[10px] bg-[#373960]"></div>
                                    </div>
                                    <h6 className="text-[10px] text-gray-500 my-1">62% Media Conglomerate</h6>
                                </div>
                                <div className="flex flex-col w-[50%]">
                                    <div className="w-full h-[10px] bg-[#373960]"></div>
                                    <h6 className="text-[10px] text-gray-500 my-1">100% High Factuality Rating</h6>
                                </div>
                            </div>
                        </div>
                        <h6 className='text-[#5CBFEA] mt-2'>Summary</h6>
                        <p className='text-[14px] text-gray-600'>
                            The module should include various quick access options and windows that are not currently available in the application. These additional features were identified through a study conducted
                            Here are the key requirements
                        </p>
                        <div className='flex justify-end my-2 py-2 border-b border-gray-400'>
                            <a className='text-[#000]' href='/Story'>Read More</a>
                        </div>
                        <div className='flex items-center text-black justify-between my-2'>
                            <div className='flex flex-row w-full'>
                                <div className='flex flex-row items-center flex-grow gap-2'>
                                    <div className='flex items-center'>
                                        <AvatarGroup max={4}>
                                            <Avatar
                                                sx={{ width: 20, height: 20, border: '0px !important' }}
                                                src="/img/icons/emotion/thumbs_up.png"
                                            />
                                            <Avatar
                                                sx={{ width: 20, height: 20, border: '0px !important' }}
                                                src="/img/icons/emotion/angry.png"
                                            />
                                        </AvatarGroup>
                                        <p>2.6k</p>
                                    </div>
                                    <div className='flex flex-row items-center p-1 bg-[#E7EBED] border border-1 border-gray-200 rounded-full gap-2'>
                                        <ArrowUpwardIcon sx={{ fontSize: 16 }} />
                                        <span className='text-[12px]'>917</span>
                                        <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                                    </div>
                                    <div className='flex flex-row items-center p-1 bg-[#E7EBED] border border-1 border-gray-200 rounded-full gap-2'>
                                        <RocketLaunchOutlinedIcon sx={{ fontSize: 16 }} />
                                        <span className='text-[12px]'>917</span>
                                    </div>
                                    <div className='flex flex-row items-center p-1 bg-[#E7EBED] border border-1 border-gray-200 rounded-full gap-2'>
                                        <ChatBubbleOutlineIcon sx={{ fontSize: 18 }} />
                                        <span className='text-[12px]'>20</span>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <div className='flex flex-row items-center p-1 px-2 bg-[#E7EBED] border border-1 border-gray-400 text-[#3BA8CF] rounded-full gap-2'>
                                        <img
                                            src="/img/icons/earphone_blue.svg"
                                            className="w-[17px] rounded-sm"
                                        />
                                        <span className='text-[12px]'>Listen</span>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center gap-2 ml-2'>
                                    <div className='flex flex-row items-center p-1 px-2 bg-[#E7EBED] border border-1 border-gray-400 text-[#3BA8CF] rounded-full gap-2'>
                                        <img
                                            src="/img/icons/go_deeper_blue.svg"
                                            className="w-[15px]"
                                        />
                                        <span className='text-[12px]'>Read Story</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}