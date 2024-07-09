import { Button, Divider } from "@mui/material";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const VideoPage = () => {
    const MainVideoComponent = () => {
        return (
            <>
                <video autoPlay="" controls="" className="w-full bg-[rgba(0,0,0,0.5)]">
                </video>
                <p className="my-2 text-[14px] font-bold">SOUTHEAST ASIA</p>
                <p className="my-2 text-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
                <p className="my-2 text-gray-600"><span>Ayman Ragab, </span><span>Bryan Wood, </span><span>Elverina Hidayati</span></p>
                <div className="flex flex-row items-center gap-4">
                    <Button variant="contained" sx={{backgroundColor: 'black'}}>
                        0 Shares   
                    </Button>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </div>
                <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>
            </>
        )
    }
    const VideoCard = (props) => {
        const {title, description, date} = props;
        return (
            <div className="flex flex-col flex-grow w-full md:w-[45%] lg:w-[20%]">
                <img 
                    src="/img/news/sky_small3.png"
                    className="w-full min-w-full"
                />
                <div className="flex-grow p-4 text-white bg-[rgb(28,32,41)]">
                    <p className="text-[12px] font-bold">{title}</p>
                    <p className="text-[14px]">{description}</p>
                    <p className="text-[10px] text-gray-500">{date}</p>
                </div>
            </div>
        )
    }

    const SideVideoItem = (props) => {

        const {img_src, country, title} = props;
    
        return (
            <div className="flex flex-row items-start gap-2">
                <img 
                    src={img_src}
                    className="min-w-[40%] w-[40%]"
                />
                <div className="flex flex-col gap-2">
                   <p className="text-[14px] text-gray-600 font-bold">{country}</p> 
                   <p className="text-[16px] text-gray-900">{title}</p> 
                </div>
            </div> 
        )
    }

    const VideoCategoryContainer = (props) => {
        const {category} = props;
        return(
            <div className="flex flex-col">
                <div className="w-[120px] h-[2px] bg-black dark:bg-white"></div>
                <div className="flex flex-row items-end my-4">
                    <p className="text-[20px]">{category}</p>
                    <p className="text-[16px] text-gray-600">&nbsp;/&nbsp;more +</p>
                </div>
                <div className="flex flex-wrap gap-4">
                    <VideoCard 
                        title='TODAY LIFE'
                        description='Consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur'
                        date='November 8, 2023'
                    />
                    <VideoCard 
                        title='PUBLIC HEALTH'
                        description='Football team on mission'
                        date='November 8, 2023'
                    />
                    <VideoCard 
                        title='Hong Kong 2023'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.'
                        date='November 8, 2023'
                    />
                    <VideoCard 
                        title='PUBLIC HEALTH'
                        description='Football team on mission'
                        date='November 8, 2023'
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='laptop-extrapage-bodycontainer'>
                <div className='componentcontainer flex gap-4 py-[32px] px-4'>
                    <div className="w-full lg:w-[70%] text-black dark:text-white">
                        <MainVideoComponent />
                    </div>
                    <div className="hidden lg:flex flex-col gap-4 w-[30%]">
                        <div className="w-full h-[300px] border border-1 border-gray-400">
                            Advertise
                        </div>
                        <Divider/>
                        <div className="w-full">
                            <div className="flex flex-row justify-between my-4">
                                <p className="text-black font-bold">UP NEXT</p>
                                <p className="text-[14px] text-gray-600 font-bold">AUTO PLAY ON</p>
                            </div>
                            <SideVideoItem 
                                img_src='/img/news/sky_small1.png'
                                country='Japan'
                                title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            />
                        </div>
                        <Divider/>
                        <SideVideoItem 
                            img_src='/img/news/sky_small2.png'
                            country='SOCIETY'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        />
                        <SideVideoItem 
                            img_src='/img/news/sky_small3.png'
                            country='EAST ASIA'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        />
                        <SideVideoItem 
                            img_src='/img/news/sky_small4.png'
                            country='SOUTHEAST ASIA'
                            title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        />
                    </div>
                </div>
            </div>
            <div className='laptop-landingpage-videopagecontainer'>
                <div className='componentcontainer px-4 py-20 flex flex-col gap-12'>
                    <VideoCategoryContainer category="BUSINESS" />
                    <VideoCategoryContainer category="LIFESTYLE" />
                    <VideoCategoryContainer category="SCIENCE" />
                </div>
            </div>
        </>
    )
}

export default VideoPage;