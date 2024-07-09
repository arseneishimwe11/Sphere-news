import { useContext } from 'react';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';

import {
    Button,
    Divider
} from '@mui/material';

import MobileArticleAnalyze from '../../common/AssessArticle/mobile';
import { ListNewsCard } from '../../common/MobileNewsContainer/ListNewsCard';
import { BiasRate } from '../../common';

import { MainContext } from '@/app/(primary)/layout';

const LandingNews = (props) => {
    const { img_src, publisher, title, content, time } = props;

    const { emojis, sources, showContentInArticleAsses, biasRate, titlePosition } = useContext(MainContext);
    return (
        <>
            {
                titlePosition === 'above' &&
                <p className="mt-4 text-[18px] font-bold">
                    {emojis && "🌎"}
                    {title}
                </p>
            }
            <img
                src={img_src}
                className="w-full rounded-md"
            />
            {
                titlePosition === 'below' &&
                <p className="mt-4 text-[18px] font-bold">
                    {emojis && "🌎"}
                    {title}
                </p>
            }
            <div className="flex text-[14px] gap-2">
                <span className="font-bold">{publisher}</span>
                &#x2022;
                <span>{time}</span>
                {
                    sources &&
                    <span>&#x2022; 16 sources</span>
                }
            </div>
            {
                biasRate &&
                <BiasRate left={23} center={37} right={5} />
            }
            {
                showContentInArticleAsses &&
                <p>{content}</p>
            }
            <MobileArticleAnalyze hasPreview={true} />
        </>
    )
}

const FavoriteNews = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center my-4">
                <div className="flex gap-2">
                    <div className="min-w-[16px] bg-[#4FBAE9]"></div>
                    <p className="text-[18px] font-bold">Business</p>
                </div>
                <GradeRoundedIcon
                    sx={{
                        color: '#4FBAE9'
                    }}
                />
            </div>
            <LandingNews
                img_src='/img/news/Africa.png'
                publisher='AP'
                title='Lorem ipsum dolor sit amet, consect adipiscing elit.'
                content='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ul sit amet sapien fringilla, mattis ligul trices mauris.'
                time={'1d'}
            />
            <Divider sx={{ marginY: '8px' }} />
            <ListNewsCard
                img_src='/img/news/meeting2.png'
                publisher='img/icons/source/losangeles.png'
                title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
                time='3h ago'
                content='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ul sit amet sapien fringilla, mattis ligul trices mauris.'
            />
            <div className="flex justify-end border-b border-b-1 border-gray-400">
                <Button sx={{ backgroundImage: 'linear-gradient(to right, #57889E, #B18192)', backgroundClip: 'text', color: 'transparent', fontWeight: 'bold' }}>MORE BUSINESS NEWS</Button>
                <Button sx={{ textTransform: 'none', color: '#4FBAE9' }}>{'See 14 articles >'}</Button>
            </div>
            <Divider />
        </>
    )
}

// const GridNewsCard = (props) => {
//     const { img_src, publisher, title, time } = props;

//     return (
//         <div className="flex flex-col items-center border border-1 border-gray-300 rounded-lg overflow-hidden">
//             <img
//                 src={img_src}
//                 className="w-full"
//             />
//             <div className="px-4 py-2 border-b border-b-1 border-gray-300">
//                 <img
//                     src={publisher}
//                 />
//                 <h3 className="text-[16px] font-bold">{title}</h3>
//             </div>
//             <div className="flex flex-row w-full justify-between px-4 py-2">
//                 <span className="text-[12px] text-gray-600">{time}</span>
//                 <img
//                     src="/img/icons/dots.svg"
//                     className="w-[12px]"
//                 />
//             </div>
//         </div>
//     )
// }

// const SpecialCard = (props) => {
//     const { img_src, publisher, channel, title } = props;
//     return (
//         <div className="w-full my-2 rounded-lg border border-1 border-gray-300 overflow-hidden">
//             <div className="w-full px-4 py-2 bg-gradient-to-r from-[#1E2A40] to-[#ffffff]">
//                 <span className="text-[#fff] text-[12px] font-bold">ELECTRON 2024</span>
//             </div>
//             <div className="pl-4 pr-[140px] py-2 border-b border-b-1 border-gray-300 relative">
//                 <h5 className="text-[16px] text-[#AA2225] font-bold">{channel}</h5>
//                 <h3 className="text-[16px] font-bold">{title}</h3>
//                 <img
//                     src={img_src}
//                     className="w-[132px] rounded-lg right-2 bottom-2 absolute"
//                 />
//             </div>
//             <div className="flex flex-row w-full justify-between px-4 py-2">
//                 <span className="p-1 bg-[#EDEDED] text-[12px] font-bold rounded-full">More coverage <ArrowForwardIosIcon sx={{ fontSize: '12px' }} /></span>
//                 <img
//                     src="/img/icons/dots.svg"
//                     className="w-[12px]"
//                 />
//             </div>
//         </div>
//     )
// }

// const MobileMainNews = () => {
//     return (
//         <div className="p-4 pb-[92px] bg-[#fff] border border-1 border-gray-300 rounded-t-2xl">
//             <LandingNews 
//                 img_src='/img/news/Africa.png'
//                 publisher='AP'
//                 title='Lorem ipsum dolor sit amet, consect adipiscing elit.'
//                 descrition='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.'
//             />
//             <Divider sx={{marginY: '16px'}}/>
//             <ListNewsCard 
//                 img_src='/img/news/btc.png'
//                 publisher='img/icons/source/losangeles.png'
//                 title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
//                 time='3h ago'
//             />
//             <div className="flex flex-row gap-2 mt-8 items-start">
//                 <div className="w-[50%]">
//                     <GridNewsCard 
//                         img_src='/img/news/discussion.png'
//                         publisher='img/icons/source/losangeles.png'
//                         title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
//                         time='9m ago'
//                     />
//                 </div>
//                 <div className="w-[50%]">
//                     <GridNewsCard 
//                         img_src='/img/news/discussion2.png'
//                         publisher='img/icons/source/losangeles.png'
//                         title='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.'
//                         time='12m ago'
//                     />
//                 </div>
//             </div>
//             <SpecialCard 
//                 img_src='/img/news/computer.png'
//                 channel='POLITICO'
//                 title='Ut et massa mi. Aliq in hendrerit urna. Pellent sit amet sapien.'
//             />
//             <Divider sx={{marginY: '16px'}}/>
//             <ListNewsCard 
//                 img_src='/img/news/btc.png'
//                 publisher='img/icons/source/losangeles.png'
//                 title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
//                 time='3h ago'
//             />
//         </div>
//     )
// }

const MobileMainNews = () => {
    return (
        <div className="p-4 bg-[#fff] border border-1 border-gray-300 rounded-t-2xl pb-[92px]">
            <LandingNews
                img_src='/img/news/Africa.png'
                publisher='AP'
                title='Lorem ipsum dolor sit amet, consect adipiscing elit.'
                content='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ul sit amet sapien fringilla, mattis ligul trices mauris.'
                time={'1d'}
            />
            <Divider sx={{ marginY: '16px' }} />
            <ListNewsCard
                img_src='/img/news/meeting2.png'
                publisher='img/icons/source/losangeles.png'
                title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
                time='3h ago'
                content='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ul sit amet sapien fringilla, mattis ligul trices mauris.'
            />
            <ListNewsCard
                img_src='/img/news/car.png'
                publisher='img/icons/source/losangeles.png'
                title='Lorem ipsum dolor sit amet, consect adipiscing elit m dolor sit am.'
                time='3h ago'
                content='Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ul sit amet sapien fringilla, mattis ligul trices mauris.'
            />
            <div className="my-2 min-h-[4px] bg-gradient-to-r from-[#CBEFFD] to-[#f8E2CA]"></div>
            <FavoriteNews />
        </div>
    )
}

export default MobileMainNews;