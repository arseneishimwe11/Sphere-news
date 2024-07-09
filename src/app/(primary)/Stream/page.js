'use client';
import { useContext } from "react";
import Link from 'next/link';
import MobileStreamPage from "../components/streamPageContainer/MobileStreamPage";
import { Button } from "@mui/material";

import { MainContext } from "../layout";

import { SourceAvatarGroupWithModal } from "../components/common/SourceAvatarGroupWithModal";
import { ShowLessComponent } from "../components/common/ShowLess";
import { BoostMenu } from "../components/common/BoostMenu";

import { MultiLayerImage } from "../components/common/MultiLayerImage";

const StreamSummaryComponent = () => {

    return (
        <div className="cardcomponent w-full xl:w-[70%] py-4 px-8 ">
            <h5 className="text-[16px] text-[#99D5E0]">Summary</h5>
            <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-[20px] text-black-color">Best performaing sectors in Digital Transformation</h2>
                <SourceAvatarGroupWithModal />
            </div>
            <h6 className="text-[12px] my-1">15 sources</h6>
            <div className="flex flex-row gap-8">
                <div className="flex flex-col w-[40%]">
                    <div className="w-full flex">
                        <div className="w-[24%] h-[10px] bg-[#99D6F2]"></div>
                        <div className="w-[8%] h-[10px] bg-[#39A9D7]"></div>
                        <div className="w-[8%] h-[10px] bg-[#FB8716]"></div>
                        <div className="w-[60%] h-[10px] bg-[#373960]"></div>
                    </div>
                    <h6 className="text-[12px] my-1">62% Media Conglomerate</h6>
                </div>
                <div className="flex flex-col w-[60%]">
                    <div className="w-full h-[10px] bg-[#373960]"></div>
                    <h6 className="text-[12px] my-1">100% High Factuality Rating</h6>
                </div>
            </div>
            <div className='flex flex-row items-start gap-12 my-8'>
                <div className='w-1/3'>
                    <MultiLayerImage 
                        img_src="/img/news/discussion.png"
                    />
                </div>
                <div className='w-2/3'>
                    <p className="text-gray-light-color text-[12px] md:text-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-12 my-4">
                <div className='w-1/3'>
                    <Link href='/Story' className="text-[16px] text-[#99D6F2]">Read More</Link>
                </div>
                <div className='w-2/3 flex flex-wrap gap-2'>
                    <Button variant="outlined" sx={{ textTransform: 'none' }} className="rounded-full border border-1 border-gray-300 text-dark-blue-color">Business</Button>
                    <Button variant="outlined" sx={{ textTransform: 'none' }} className="rounded-full border border-1 border-gray-300 text-dark-blue-color">Science</Button>
                    <Button variant="outlined" sx={{ textTransform: 'none' }} className="rounded-full border border-1 border-gray-300 text-dark-blue-color">Politics</Button>
                </div>
            </div>
            <div className='flex flex-row gap-4'>
                <div className='flex flex-row items-center p-1 border border-1 border-gray-200 rounded-full gap-2'>
                    <img
                        src='/img/icons/chats.svg'
                        className='w-[16px] dark:invert'
                    />
                    <span className='text-gray-400 text-[12px]'>20</span>
                </div>
                <div className='flex flex-row items-center p-1 border border-1 border-gray-200 rounded-full gap-2'>
                    <img
                        src='/img/icons/rocket.svg'
                        className='w-[16px] dark:invert'
                    />
                    <span className='text-gray-400 text-[12px]'>917</span>
                </div>
                <img
                    src='/img/icons/link.svg'
                    className='w-[16px]'
                />
                <img
                    src='/img/icons/flag.svg'
                    className='w-[12px]'
                />
                <img
                    src='/img/icons/dots.svg'
                    className='w-[12px]'
                />
                <div className="flex-grow"></div>
                <ShowLessComponent />
                <BoostMenu />
            </div>
        </div>
    )
}

export default function StreamPageContainer() {
    const { isMobile } = useContext(MainContext);

    return (
        <>
            {
                isMobile &&
                <MobileStreamPage />
            }
            {
                !isMobile &&
                <div className='laptop-extrapage-bodycontainer'>
                    <div className='componentcontainer px-4 py-[148px] flex'>
                        <StreamSummaryComponent />
                    </div>
                </div>
            }

        </>
    )
}