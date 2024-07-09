import { useContext, useState, useRef, useEffect } from "react";

import { MainContext } from "../../layout";

import { LightBulbIcon } from "../common/LightBulbIcon";
import PCArticleAnalyze from "../common/AssessArticle/pc";

import { Box, Grid } from "@mui/material";

import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

// const SmallArticle = (props) => {
//     const { img_src, channel, publisher, title, description, time, emojis, showSources } = props;

//     return (
//         <div className="flex flex-row my-4 items-start gap-4">
//             <img
//                 src={img_src}
//                 className="w-[33.33%] rounded-md"
//             />
//             <div className="flex flex-col gap-2 w-[66.66%] text-black-color">
//                 <p><span className="text-md-blue-color">{channel}</span>
//                     {
//                         showSources &&
//                         <>&nbsp;•&nbsp;<span className="text-gray-light-color">{publisher}</span></>
//                     }
//                 </p>
//                 <p className="text-[12px] md:text-[20px] font-bold">
//                     {
//                         emojis &&
//                         "🌎"
//                     }
//                     {title}
//                 </p>
//                 <p className="text-[12px] md:text-[14px]">{description}</p>
//                 <span className="text-[12px] text-gray-light-color">{time}</span>
//             </div>
//         </div>
//     )
// }

const ListCard = (props) => {
    const { sourceimg, source, time, source_firm, countofsource, title, img_src } = props;
    return (
        <div className="flex flex-row gap-4 p-4 rounded-lg border border-1 border-gray-200">
            <div className="w-2/3 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-1">
                        <img
                            src={sourceimg}
                            className="w-[24px]"
                        />
                        <span>{source}</span>•<span>{time}</span>
                    </div>
                    <p className="bg-[#E7EBEE] px-1 rounded-full">
                        <b>{source_firm}</b>&nbsp;•&nbsp;<span>{countofsource} sources</span>
                    </p>
                </div>
                <p className="text-black text-lg">{title}</p>
                <div className="flex flex-row items-center justify-between">
                    <LightBulbIcon />
                    <PCArticleAnalyze />
                </div>
            </div>
            <div className="w-1/3">
                <img
                    src={img_src}
                    className="w-full rounded-lg"
                />
            </div>
        </div>
    );
}

const GridCard = (props) => {
    const { sourceimg, source, time, countofsource, title, img_src } = props;
    return (
        <div className="flex flex-col gap-1">
            <img
                src={img_src}
                className="w-full rounded-lg"
            />
            <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-1">
                    <img
                        src={sourceimg}
                        className="w-[24px]"
                    />
                    <span>{source}</span>•<span>{time}</span>
                </div>
                <p className="bg-[#E7EBEE] px-1 rounded-full font-bold">
                    {countofsource} sources
                </p>
                <LightBulbIcon />
            </div>
            <p>{title}</p>
            <PCArticleAnalyze />
        </div>
    );
}
const channels = ['Business', 'Science', 'Technology', 'Sports', 'U.S. Politics', 'Finance', 'Food & Drink', 'Podcasts', 'News', 'Films', 'Art & Illustration', 'World'];

const ChannelMenu = () => {
    const [active, setActive] = useState('Business');

    const [offsetX, setOffsetX] = useState(0);
    const [showIndicator, setShowIndicator] = useState(false);
    const [showRightIndicator, setShowRightIndicator] = useState(true);

    const parentRef = useRef(null);
    const childRef = useRef(null);

    useEffect(() => {
        const parentWidth = parentRef.current.offsetWidth;
        const childWidth = childRef.current.scrollWidth;

        childWidth > parentWidth ? setShowIndicator(true) : setShowIndicator(false);
        childWidth + offsetX < parentWidth ? setShowRightIndicator(false) : setShowRightIndicator(true);

    }, [offsetX]);

    return (
        <div className="overflow-x-hidden border-b border-b-1 border-gray-200 relative" ref={parentRef}>
            {
                showIndicator &&

                <div>
                    {
                        offsetX < 0 &&
                        <div className="flex flex-col justify-center absolute z-[101] left-0 top-0 h-full rounded-full hover:cursor-pointer" onClick={() => setOffsetX(0)}>
                            <ArrowBackIosOutlinedIcon sx={{ color: 'white', backgroundColor: '#aaa', borderRadius: '20px', padding: '4px' }} />
                        </div>
                    }
                    {
                        showRightIndicator &&
                        <div className="flex flex-col justify-center absolute z-[101] right-0 top-0 h-full rounded-full hover:cursor-pointer" onClick={() => setOffsetX(offsetX - 180)}>
                            <ArrowForwardIosOutlinedIcon sx={{ color: 'white', backgroundColor: '#aaa', borderRadius: '20px', padding: '4px' }} />
                        </div>
                    }
                </div>
            }
            <div 
                className="flex gap-8 text-xl transition duration-200" 
                ref={childRef}
                style={{
                    transform: `translate(${offsetX}px, 0)`
                }}
            >
                {
                    channels.map((channel, idx) => (
                        <div
                            key={channel}
                            className={`p-4 px-2 hover:cursor-pointer ${channel == active && 'text-[#FF9D28] border-b border-b-1 border-b-[#FF9D28]'}`}
                            onClick={() => setActive(channel)}
                        >
                            <p className="whitespace-nowrap">{channel}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const AllChannels = () => {
    const { emojis, sources } = useContext(MainContext);
    return (
        <div className="my-8">
            <ChannelMenu />
            <br />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <ListCard
                            sourceimg='/img/icons/source/CNBC.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/meeting4.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                        <ListCard
                            sourceimg='/img/icons/source/BBC.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/meeting3.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                        <ListCard
                            sourceimg='/img/icons/source/LiveMint.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/meeting2.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                        <ListCard
                            sourceimg='/img/icons/source/ustoday.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/meeting.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                        <ListCard
                            sourceimg='/img/icons/source/ap.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/Huawei.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <GridCard
                            sourceimg='/img/icons/source/BBC.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/Africa.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                        <GridCard
                            sourceimg='/img/icons/source/CNBC.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/BYD.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3} xl={3}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <GridCard
                            sourceimg='/img/icons/source/LiveMint.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/computer2.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                        <GridCard
                            sourceimg='/img/icons/source/ustoday.png'
                            source='ABC News'
                            source_firm='TechCrunch, Fortune.com'
                            countofsource='16'
                            img_src='img/news/meeting4.png'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'
                            time='2 min read'
                            showSources={sources}
                            emojis={emojis}
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default AllChannels;