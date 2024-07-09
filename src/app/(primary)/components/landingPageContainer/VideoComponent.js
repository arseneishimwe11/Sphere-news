import { useContext } from "react";
import { useRouter } from "next/navigation";

import { MainContext } from "../../layout";

import { Grid, Button, Divider } from "@mui/material";
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';

const VideoItem = (props) => {
    const { isSmallSize, img_src, title, duration } = props;

    return (
        <Grid item md={6} sm={6} xs={12}>
            <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex flex-col">
                <div className="w-full relative">
                    <img
                        src={img_src}
                        className="w-full rounded-lg"
                    />
                    <SlideshowOutlinedIcon 
                        sx={{
                            color: '#fff',
                            backgroundColor: 'rgba(137,192,219,0.5)',
                            borderRadius: '8px',
                            fontSize: '32px'
                        }}
                        className="top-[50%] left-[50%] hover:cursor-pointer transform translate-x-[-50%] translate-y-[-50%] absolute"
                    />
                </div>
                <h4 className={`${isSmallSize ? "text-[12px]" : ""}  my-2`}>
                    {title}
                </h4>
                <span className={`${isSmallSize ? "text-[12px]" : "text-[16px]"} my-2 text-gray-light-color`}>{duration}</span>
            </div>
        </Grid>
    )
}

const VideoComponent = (props) => {
    const {isSmallSize} = props;

    const {emojis} = useContext(MainContext);

    const router = useRouter();
    return (
        <div className="text-black-color">
            <Grid container spacing={3}>
                <Grid item container>
                    <Grid item xs={12}>
                        <h4 className={`${isSmallSize ? "text-[12px]" : "text-[18px]"}`}>VIDEOS</h4>
                    </Grid>
                    <Grid item xs={8}>
                        <p className={`${isSmallSize ? "text-[14px]" : "text-[24px]"} font-bold`}>
                            {
                                emojis &&
                                "🌎"
                            }
                            Mittlerweile Lorem Ipsum Standar auch Mittlerweile Ipsum Standar auch neigen dazu vorge
                        </p>
                    </Grid>
                    <Grid item xs={4} className="text-right">
                        <Button
                            sx={{
                                textTransform: 'none',
                                border: '2px solid #FFF',
                                color: '#333',
                                fontSize: '14px',
                                padding: '4px 12px',
                                borderRadius: '100px',
                                backgroundColor: '#fff'
                            }}
                            onClick={() => router.push('/Video')}
                        >
                            See More Video
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className="flex flex-row justify-between gap-2 my-2">
                            <p className={`${isSmallSize ? "text-[12px]" : "text-[12px] sm:text-[14px] md:text-[16px]"} text-gray-light-color`}>Oct 11, 2023<br/>3 min read</p>
                            <Divider orientation="vertical" flexItem />
                            <p className={`${isSmallSize ? "text-[12px]" : "text-[16px]"} w-[80%]`}>Standar auch Mittlerweile Ipsum Standar auch neigen dazu vorge Mittlerweile Lorem Ipsum </p>                            
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className="flex flex-row justify-between items-center gap-2 my-2">
                            <div className="flex flex-row gap-2 items-center">
                                <img 
                                    src="/img/avatar/5.svg"
                                    className="w-[54px] h-[54px] rounded-full"
                                />
                                <div>
                                    <h6>Daniel Navarro</h6>
                                    <h6 className="text-gray-light-color">Google for Startups</h6>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 hover:cursor-pointer">
                                <img 
                                    src="/img/icons/link.svg"
                                    className="w-[20px]"
                                />
                                <span className="text-gray-light-color">Share</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item lg={8} md={12} xs={12}>
                    <div className="w-full relative">
                        <img
                            src="/img/news/sky_small1.png"
                            className="w-full rounded-xl"
                        />
                        <SlideshowOutlinedIcon 
                            sx={{
                                color: '#fff',
                                backgroundColor: 'rgba(137,192,219,0.5)',
                                borderRadius: '8px',
                                fontSize: '52px'
                            }}
                            className="top-[50%] left-[50%] hover:cursor-pointer transform translate-x-[-50%] translate-y-[-50%] absolute"
                        />
                        <div className="hidden sm:flex flex-row p-2 px-4 bg-[rgba(0,0,0,0.5)] text-white left-8 bottom-8 rounded-full absolute">
                            <span>The New York Times</span>
                            &nbsp;•&nbsp;
                            <span>2 Days Ago</span>
                            &nbsp;•&nbsp;
                            <span>1.2M Views</span>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={4} md={12} sm={12} container spacing={3}>
                    <VideoItem
                        img_src='img/news/sky_small1.png'
                        title='Desktop Publisher Lorem Ipsum titler et same ter.'
                        duration='2.51 Mins'
                        isSmallSize={isSmallSize}
                    />
                    <VideoItem
                        img_src='img/news/sky_small2.png'
                        title='Desktop Publisher Lorem Ipsum titler et same ter.'
                        duration='2.51 Mins'
                        isSmallSize={isSmallSize}
                    />
                    <VideoItem
                        img_src='img/news/sky_small3.png'
                        title='Desktop Publisher Lorem Ipsum titler et same ter.'
                        duration='2.51 Mins'
                        isSmallSize={isSmallSize}
                    />
                    <VideoItem
                        img_src='img/news/sky_small3.png'
                        title='Desktop Publisher Lorem Ipsum titler et same ter.'
                        duration='2.51 Mins'
                        isSmallSize={isSmallSize}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default VideoComponent;