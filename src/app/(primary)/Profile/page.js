'use client'
import { useState } from "react";

import { MultiLayerImage } from "../components/common/MultiLayerImage";

import { Grid, Button, IconButton, Fade, Collapse } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProfileCard = () => {
    return (
        <Grid container className="p-8 rounded-lg bg-[#2F98D2]">
            <Grid item xs={12} lg={2}>
                <div className="w-full p-4">
                    <img
                        src="/img/avatar/5.svg"
                        className="w-full max-w-[160px] mx-auto border border-8 border-[#47B2DB] rounded-full"
                    />
                </div>
            </Grid>
            <Grid item xs={12} lg={10}>
                <div className="flex flex-col h-full px-4 justify-between text-[#fff]">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center">
                            <h6 className="text-[20px] mr-8">Ahmed Aldoori</h6>
                            <div className="flex flex-row gap-2">
                                <YouTubeIcon />
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <LinkedInIcon />
                            </div>
                        </div>
                        <div className="flex flex-row -ml-[6px] gap-4">
                            <div className="flex flex-row gap-1">
                                <LocationOnIcon />
                                <span>Earch</span>
                            </div>
                            <div className="flex flex-row gap-1">
                                <PublicIcon />
                                <span>ahmedaidoori.com</span>
                            </div>
                        </div>
                        <p className="text-[12px] md:text-[16px]">Art is the conveyance of fundamental human truth, regs attempting to canceal it.</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="flex flex-wrap text-[12px] md:text-[16px] my-2">
                            <div className="flex flex-col border-r border-r-1 border-[#fff] pr-4">
                                <span>12</span>
                                <span>Collections</span>
                            </div>
                            <div className="flex flex-col border-r border-r-1 border-[#fff] px-4">
                                <span>213</span>
                                <span>Posts</span>
                            </div>
                            <div className="flex flex-col border-r border-r-1 border-[#fff] px-4">
                                <span>25k</span>
                                <span>Followers</span>
                            </div>
                            <div className="flex flex-col px-4">
                                <span>2</span>
                                <span>Followings</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Button variant="contained" sx={{ textTransform: 'none' }} className="bg-[#fff] hover:bg-[#ccc] text-[#000]">Follows</Button>
                            <Button variant="contained" sx={{ textTransform: 'none' }} className="bg-[#fff] hover:bg-[#ccc] text-[#000]">Favorite</Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'none',
                                    color: '#fff',
                                    border: '1px solid #fff',
                                    '&:hover': {
                                        border: '1px solid #ccc'
                                    }
                                }}
                            >
                                Share
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'none',
                                    color: '#fff',
                                    border: '1px solid #fff',
                                    '&:hover': {
                                        border: '1px solid #ccc'
                                    }
                                }}
                            >
                                Amplify
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

const CollectionGroup = () => {

    const Collection = (props) => {
        const { img_src, title, number, views, time } = props;

        return (
            <div className="flex flex-row items-start gap-2">
                <div className="w-[40%]">
                    <img
                        src={img_src}
                        className="w-full rounded-md"
                    />
                </div>
                <div className="w-[60%]">
                    <h6 className="text-[#000] text-[14px]">{title}</h6>
                    <div className="flex flex-row gap-4">
                        <p className="flex flex-row items-center text-[12px]">
                            <VisibilityIcon sx={{ fontSize: '14px' }} />
                            {views}
                        </p>
                        <p className="flex flex-row items-center text-[12px]">
                            <TimelapseIcon sx={{ fontSize: '14px' }} />
                            {time} ({number} items)
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-2">
                        <IconButton sx={{ padding: '2px' }}>
                            <ShareOutlinedIcon sx={{ fontSize: '16px' }} />
                        </IconButton>
                        <IconButton sx={{ padding: '2px' }}>
                            <FileUploadOutlinedIcon sx={{ fontSize: '16px' }} />
                        </IconButton>
                        <IconButton sx={{ borderRadius: '24px', border: '1px solid #ccc', padding: '2px' }}>
                            <RocketLaunchOutlinedIcon sx={{ fontSize: '16px' }} />
                            <p className="text-[10px]">917</p>
                        </IconButton>
                        <IconButton sx={{ borderRadius: '24px', border: '1px solid #ccc', padding: '2px' }}>
                            <BookmarkAddOutlinedIcon sx={{ fontSize: '16px' }} />
                            <p className="text-[10px]">63</p>
                        </IconButton>
                        <IconButton sx={{ backgroundColor: '#2F98D2', borderRadius: '4px', padding: '2px' }}>
                            <PersonAddAltOutlinedIcon sx={{ fontSize: '16px', color: 'white' }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 p-6 bg-[#fff] rounded-lg shadow-lg">
            <div className="flex flex-row items-center justify-between">
                <h6 className="text-[12px] text-[#000] mt-[2px]">COLLECTIONS</h6>
                <IconButton>
                    <ArrowForwardIcon sx={{ fontSize: '16px' }} />
                </IconButton>
            </div>
            <Collection
                img_src='/img/news/books.png'
                title='Collection ABC'
                reporter='Ahmed Aidoori'
                number='196'
                views='4.8M'
                time='36h 39m'
            />
            <Collection
                img_src='/img/news/car.png'
                title='Collection XYZ'
                reporter='Ahmed Aidoori'
                number='23'
                views='4.8M'
                time='36h 39m'
            />
        </div>
    )
}

const ReactionGroup = () => {

    const Reaction = (props) => {
        const { img_src, title, reporter, reaction_number, views, time } = props;

        return (
            <div className="flex flex-row items-start gap-2">
                <div className="w-[40%]">
                    <img
                        src={img_src}
                        className="w-full rounded-md"
                    />
                </div>
                <div className="w-[60%] text-[12px]">
                    <h6 className="text-[#000] text-[14px]">{title}</h6>
                    <p className="text-gray-400">By <span className="text-[#F9871A]">{reporter}</span></p>
                    <p className="text-gray-400">{reaction_number} Reactions</p>
                    <div className="flex flex-row gap-4">
                        <p className="flex flex-row items-center text-[12px]">
                            <VisibilityIcon sx={{ fontSize: '14px' }} />
                            {views}
                        </p>
                        <p className="flex flex-row items-center text-[12px]">
                            <TimelapseIcon sx={{ fontSize: '14px' }} />
                            {time}
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 p-6 bg-[#fff] rounded-lg shadow-lg">
            <div className="flex flex-row items-center justify-between">
                <h6 className="text-[12px] text-[#000] mt-[2px]">REACTIONS</h6>
                <IconButton>
                    <ArrowForwardIcon sx={{ fontSize: '16px' }} />
                </IconButton>
            </div>
            <Reaction
                img_src='/img/news/art2.png'
                title='Proko OLO Markers'
                reporter='Stan Prokopenko'
                reaction_number='196'
                views='1.8M'
                time='39m'
            />
            <Reaction
                img_src='/img/news/art.png'
                title='Poses for Artists - Ethan'
                reporter='Stan Prokopenko'
                reaction_number='196'
                views='1.8M'
                time='39m'
            />
            <Reaction
                img_src='/img/news/art2.png'
                title='Proko OLO Markers'
                reporter='Stan Prokopenko'
                reaction_number='196'
                views='1.8M'
                time='39m'
            />
        </div>
    )
}

const FollowerGroup = () => {

    const Follower = (props) => {
        const { img_src, name, follower_number } = props;
        return (
            <div className="relative text-[12px]">
                <img
                    src={img_src}
                    className="w-full rounded-md"
                />
                <p className="absolute left-2 top-2 text-white font-bold">{follower_number} Followers</p>
                <p className="absolute left-2 bottom-2 text-white font-bold">{name}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-wrap gap-4 p-6 bg-[#fff] rounded-lg shadow-lg">
            <div className="w-full flex flex-row items-center justify-between">
                <h6 className="text-[12px] text-[#000] mt-[2px]">FOLLOWERS</h6>
                <IconButton>
                    <ArrowForwardIcon sx={{ fontSize: '16px' }} />
                </IconButton>
            </div>
            <div className="w-[45%]">
                <Follower
                    img_src="/img/news/meeting4.png"
                    name="Donald Smith"
                    follower_number="344"
                />
            </div>
            <div className="w-[45%]">
                <Follower
                    img_src="/img/news/meeting2.png"
                    name="Robert Smith"
                    follower_number="15"
                />
            </div>
            <div className="w-[45%]">
                <Follower
                    img_src="/img/news/swiper.png"
                    name="Albert Smith"
                    follower_number="64"
                />
            </div>
        </div>
    )
}

const LeftSidePanel = (props) => {

    return (
        <div className="flex flex-col sticky top-4">
            <Collapse in={(props.activeLeftItem == 'all' || props.activeLeftItem == 'collection')}>
                <div className="mb-4">
                    <CollectionGroup />
                </div>
            </Collapse>
            <Collapse in={(props.activeLeftItem == 'all' || props.activeLeftItem == 'reaction')}>
                <div className="mb-4">
                    <ReactionGroup />
                </div>
            </Collapse>
            <Collapse in={(props.activeLeftItem == 'all' || props.activeLeftItem == 'follow')}>
                <div className="mb-4">
                    <FollowerGroup />
                </div>
            </Collapse>
        </div>
    )
}

const MainPanelItem = (props) => {
    const { action_type, avatar, name, action, time, news } = props;

    return (
        <div className="p-6 mb-4 bg-[#fff] rounded-lg shadow-lg">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-row gap-2">
                    <img
                        src={avatar}
                        className="w-[40px] h-[40px] border border-2 border-[#2F98D2] rounded-full"
                    />
                    <div>
                        <h6 className="font-bold text-[#2F98D2]">{name}</h6>
                        <p className="text-[12px]">{action}</p>
                    </div>
                </div>
                <p>{time}</p>
            </div>
            <p className="text-[18px] text-black my-4">{news.title}</p>
            <div className='flex flex-row items-start gap-12 '>
                <div className='w-1/3'>
                    <MultiLayerImage
                        img_src="/img/news/discussion.png"
                    />
                </div>
                <div className='w-2/3'>
                    <p className="text-gray-light-color text-[12px] md:text-[16px]">
                        {news.content}
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap items-center mt-2">
                <div className="flex flex-row flex-grow gap-2">
                    <IconButton>
                        <ShareOutlinedIcon />
                    </IconButton>
                    <IconButton sx={{ borderRadius: '24px', padding: '2px' }}>
                        <SmsOutlinedIcon />
                        <p className="text-[12px]">20</p>
                    </IconButton>
                    <IconButton sx={{ borderRadius: '24px', padding: '2px' }}>
                        <RocketLaunchOutlinedIcon />
                        <p className="text-[12px]">913</p>
                    </IconButton>
                    <IconButton sx={{ borderRadius: '24px', padding: '2px' }}>
                        <ThumbUpAltOutlinedIcon />
                        <p className="text-[12px]">211</p>
                    </IconButton>
                </div>
                <div className="flex flex-row gap-2">
                    <IconButton>
                        <VisibilityOffIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

const ActionBoardContainer = () => {
    const [activeLeftItem, setActiveLeftItem] = useState('all');
    return (
        <div className="my-8">
            <ul className="flex flex-row gap-4 my-4 text-[12px] hover:cursor-pointer">
                <li className={activeLeftItem == 'all' && 'bg-[#2F98D2] text-white rounded-md'} style={{ padding: '0 4px' }} onClick={() => setActiveLeftItem('all')}>ALL</li>
                <li className={activeLeftItem == 'collection' && 'bg-[#2F98D2] text-white rounded-md'} style={{ padding: '0 4px' }} onClick={() => setActiveLeftItem('collection')}>COLLECTIONS</li>
                <li className={activeLeftItem == 'reaction' && 'bg-[#2F98D2] text-white rounded-md'} style={{ padding: '0 4px' }} onClick={() => setActiveLeftItem('reaction')}>REACTIONS</li>
                <li className={activeLeftItem == 'follow' && 'bg-[#2F98D2] text-white rounded-md'} style={{ padding: '0 4px' }} onClick={() => setActiveLeftItem('follow')}>FOLLOWS</li>
            </ul>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3.5}>
                    <LeftSidePanel activeLeftItem={activeLeftItem} />
                </Grid>
                <Grid item xs={12} md={8.5}>
                    <MainPanelItem
                        avatar='/img/avatar/Image_332.png'
                        name='Ahmed Aldoori'
                        action='added a new item to collection'
                        time='1yr'
                        news={{
                            title: "Pellentesque sit amet sapien fringilla",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
                        }}
                    />
                    <MainPanelItem
                        avatar='/img/avatar/Image_332.png'
                        name='Ahmed Aldoori'
                        action='added a new item to collection'
                        time='1yr'
                        news={{
                            title: "Pellentesque sit amet sapien fringilla",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
                        }}
                    />
                    <MainPanelItem
                        avatar='/img/avatar/Image_336.png'
                        name='Marco Bucci'
                        action='added comment to The Coming AI Revolution'
                        time='1yr'
                        news={{
                            title: "Pellentesque sit amet sapien fringilla",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
                        }}
                    />
                    <MainPanelItem
                        avatar='/img/avatar/Image_336.png'
                        name='Marco Bucci'
                        action='added reaction to The Coming AI Revolution'
                        time='1yr'
                        news={{
                            title: "Pellentesque sit amet sapien fringilla",
                            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}


export default function PublicUserProfie() {

    return (
        <div className='laptop-extrapage-bodycontainer'>
            <div className='componentcontainer py-12 px-4'>
                <ProfileCard />
                <ActionBoardContainer />
            </div>
        </div>
    )
}