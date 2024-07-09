import React, { useState } from 'react';

import Image from 'next/image';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import { IconButton, Avatar, AvatarGroup } from '@mui/material';

import { AuthorPlusPopup } from '../popups/AuthorPlusPopup';
import usePopup from '@/app/hooks/usePopupState';

const CustomImgIconButton = (props) => (
    <a href={props.targetUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 transition duration-300 hover:opacity-50">
        <img
            src={props.imgSrc}
        />
    </a>
);

export const ChannelProfileCard = () => {

    const { anchorEl, handleOpen, handleClose } = usePopup();

    return (
        <div className="border rounded-xl bg-[#FFF]">
            <div className="w-full h-48 border-solid border-[3px] border-white rounded-xl bg-[#FFF] relative">
                <div
                    className='h-[148px] w-full rounded-t-lg bg-cover bg-center bg-[url("/img/others/author_card_background.png")]'
                ></div>
                <div className='absolute flex left-0 bottom-0 items-center'>
                    <img
                        src="/img/logo/source/CNN.png"
                        className='w-[96px] h-[96px] rounded-full mx-4 border-solid border-[3px] border-white'
                    />
                    <div className="flex mt-4 justify-between px-1 gap-1">
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/facebook.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/twitter.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/instagram.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/youtube.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/linkedin.png' />
                    </div>
                </div>
            </div>
            <div className='mx-6 my-4'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-gray-700 text-[28px] font-bold'>CNN News</h3>
                    <div className='#ccc'>
                        <IconButton sx={{ border: '1px solid #ccc', marginX: '12px' }} size='small'>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton
                            onClick={handleOpen} 
                            sx={{ border: '1px solid #ccc' }} 
                            size='small'
                        >
                            <PersonAddAltOutlinedIcon />
                        </IconButton>
                        <AuthorPlusPopup 
                            anchorEl={anchorEl}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col text-[12px] text-gray-500 w-full md:w-2/3 gap-2'>
                        <p>@CNN • 2k+ Followers</p>
                        <p>cnn.com</p>
                        <div className='p-4 bg-gray-200 rounded-md'>
                            <AvatarGroup 
                                total={24}
                                renderSurplus={(surplus) => <span className='text-black text-[14px]'>{surplus} Authors</span>}
                                sx={{
                                    justifyContent: 'start',
                                    '& .MuiAvatar-root.MuiAvatar-circular:first-child': {
                                        borderRadius: '0 !important',
                                        backgroundColor: 'transparent !important',
                                        border: '0',
                                        marginX: '0',
                                        marginY: '12px',
                                        width: '80px'
                                    }
                                }}
                            >
                                <Avatar alt="Remy Sharp" src="/img/avatar/Image_332.png" />
                                <Avatar alt="Travis Howard" src="/img/avatar/Image_333.png" />
                                <Avatar alt="Agnes Walker" src="/img/avatar/Image_336.png" />
                                <Avatar alt="Trevor Henderson" src="/img/avatar/Image_332.png" />
                            </AvatarGroup>
                            <p>Get the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AuthorProfileCard = () => {

    const { anchorEl, handleOpen, handleClose } = usePopup();

    return (
        <div className="border rounded-xl bg-[#FFF]">
            <div className="w-full h-48 border-solid border-[3px] border-white rounded-xl bg-[#FFF] relative">
                <div
                    className='h-[148px] w-full rounded-t-lg bg-cover bg-center bg-[url("/img/others/author_card_background.png")]'
                ></div>
                <div className='absolute flex left-0 bottom-0 items-center'>
                    <Image src='/img/avatar/ProfileIcon.svg'
                        alt="Profile Picture"
                        width={96}
                        height={96}
                        className="rounded-full mx-4 border-solid border-[3px] border-white"
                    />
                    <div className="flex mt-4 justify-between px-1 gap-1">
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/facebook.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/twitter.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/instagram.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/youtube.png' />
                        <CustomImgIconButton targetUrl="http://#" imgSrc='/img/icons/linkedin.png' />
                    </div>
                </div>
            </div>
            <div className='mx-6 my-4'>
                <div className='flex flex-row items-center justify-between'>
                    <h3 className='text-gray-700 text-[28px] font-bold'>Jacob Jones</h3>
                    <div className='#ccc'>
                        <IconButton sx={{ border: '1px solid #ccc', marginX: '12px' }} size='small'>
                            <MoreHorizIcon />
                        </IconButton>
                        <IconButton 
                            onClick={handleOpen}
                            sx={{ border: '1px solid #ccc' }} 
                            size='small'
                        >
                            <PersonAddAltOutlinedIcon />
                        </IconButton>
                        <AuthorPlusPopup 
                            anchorEl={anchorEl}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='flex flex-col text-[12px] text-gray-500 w-full md:w-2/3 gap-2'>
                        <p>@JJones • 2k+ Followers • 500+ Followings</p>
                        <p>CNN Politic Reporter</p>
                        <div className='w-full p-4 bg-gray-200 rounded-md'>
                            <div className='flex flex-row items-center gap-4 my-2'>
                                <img
                                    src='/img/logo/source/CNN.png'
                                    className='rounded-md'
                                />
                                <div className='text-black'>
                                    <p className='text-[14px] font-bold'>CNN News</p>
                                    <p>Jacob Jones</p>
                                </div>
                            </div>
                            <p>Jacob Jones is a national security reporter covering Congress for CNN Politics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
