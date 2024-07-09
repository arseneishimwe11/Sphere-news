'use client'

import NewsLetterContainer from '../components/NewsLetterContainer';
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';
import { Button } from '@mui/material';

export default function Newsletter() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Newsletter and Alerts');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);

    const freeNewsContent = [
        {
            header: "The Morning",
            content: "Make sense of the day's news and ideas. Davinci Leonhardt and Times journalists guide you through what's happening - and why it matters.",
            url: "img/logo/source/morning.png"
        },
        {
            header: "The Evening",
            content: "Catch up on the biggest news, and wind down to end your day.",
            url: "img/logo/source/evening.png"
        },
        {
            header: "From the sphere",
            content: "Stories handpicked by out editors, just for you.",
            url: "img/logo/source/fromthesphere.png"
        },
        {
            header: "Breaking News",
            content: "Get informed as important news breaks around the world.",
            url: "img/logo/source/breakingnews.png"
        },
        {
            header: "Your Places: Extreme Weather",
            content: "Get notified about extreme weather before it happends with custom alerts for places in U.S. you choose.",
            url: "img/logo/source/extremeweather.png"
        },
        {
            header: "Your Places: Global Update",
            content: "All the latest news for any part of the world you select.",
            url: "img/logo/source/globalupdate.png"
        }
    ];
    const premiumNewsContent = [
        {
            header: "Audio",
            content: "Our editors share their favourite listeners from The Sphere audio.",
            url: "img/logo/source/audio.png"
        },
        {
            header: "Well",
            content: "Essential news and guidance to live your healthiest life.",
            url: "img/logo/source/well.png"
        },
        {
            header: "The Interpreter",
            content: "Original analysis on the week's biggest gloabl stories.",
            url: "img/logo/source/interpreter.png"
        },
    ];
    const miscNewsContent = [
        {
            header: "Marketing and Promotions",
            content: "Receiving marketing and promotion emails from Sphere News.",
            url: "img/icons/logo/sphere/logo3.png"
        }
    ]
    return (
        <div className='mt-[50px] sm:mt-[100px]   w-[90%] lg:w-[70%] m-auto'>
            <div className='flex text-[20px] sm:text-[30px] font-bold justify-between'>
                <div className='flex flex-row'>
                    <p>Email NewsLetter</p>
                </div>
                {/* <button className=' text-[#FFF] text-[14px] bg-[#1F232C] px-4 py-2 rounded-lg'>Save</button> */}
                <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px'}}>Save</Button>
            </div>
            <div className='mt-5 text-[15px] font-[600]'>
                <p>Get the best Sphere News in your box</p>
            </div>
            <div className="border border-solid rounded-2xl p-4 mt-8">
                <div>
                    <p className='font-[600] text-[18px] py-4 pl-6'>
                        Free Newsletters
                    </p>
                    <NewsLetterContainer newsContents={freeNewsContent} />
                </div>
                <div>
                    <p className='font-[600] text-[18px] py-4 pl-6'>
                        Premium Newsletters
                    </p>
                    <NewsLetterContainer newsContents={premiumNewsContent} />
                </div>
                <div>
                    <p className='font-[600] text-[18px] py-4 pl-6'>
                        Misc
                    </p>
                    <NewsLetterContainer newsContents={miscNewsContent} />
                </div>
            </div>
            <div className='mt-[50px] flex justify-end mb-[20px]'>
                <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px'}}>Save</Button>
                {/* <button className='font-bold text-[#FFF] text-[14px] bg-[#1F232C] px-4 py-3 rounded-lg'>Save</button> */}
            </div>
        </div>
    );
}