import { useState, useContext } from "react";
import { useRouter } from "next/navigation";

import './ArticlesComponent.css';

import { MainContext } from "../../layout";

import {
    TabPanel,
    TextToSpeech
} from "../common";

import { RecommendCountComponent } from "../common/ArticleRecommendCount";

import {
    Country,
    BiasChatComponent,
    MoreCoverageComponent,
    SubscriberReading,
    Ownership,
} from './Widgets';

import {
    QuoteTabContent,
    TimelineTabContent,
    Metrics,
    Wikipedia,
    HistoryTabContent,
    TabContentChatComponent
} from './TabContent'

import VideoComponent from "../landingPageContainer/VideoComponent";

import {
    Badge,
    Button,
    Collapse,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Fade
} from "@mui/material";
import { WhatsApp as WhatsAppIcon, Twitter as TwitterIcon, FacebookRounded as FacebookIcon, Email as EmailIcon, LinkedIn as LinkedInIcon, Reddit as RedditIcon, Link as LinkIcon } from "@mui/icons-material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ListItemIcon from '@mui/material/ListItemIcon';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import CloseIcon from '@mui/icons-material/Close';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SendIcon from '@mui/icons-material/Send';


import { CircularProgressbar } from 'react-circular-progressbar';

import Link from 'next/link';

import 'react-circular-progressbar/dist/styles.css';
import { Main } from "next/document";
import usePopup from "@/app/hooks/usePopupState";


const CustomIconButton = (props) => {
    const { imgSrc, customClass } = props;
    const className = customClass ? `mx-auto ${customClass}` : 'mx-auto';

    return (
        <div className="hover:cursor-pointer">
            <div className='flex mx-auto items-center w-[42px] h-[42px] bg-[#D9E6ED] rounded-full relative'>
                <img
                    src={imgSrc}
                    className={className}
                />
                <div className='flex w-full top-[-4px] left-[30px] absolute'>
                    {props.children}
                </div>
            </div>
            {
                props.label ?
                    <span>{props.label}</span>
                    : ''
            }
        </div>
    );
}

export const ReactionPopover = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'reaction-popover' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <CustomIconButton
                    imgSrc='/img/icons/smile.svg'
                >
                    <span className='px-1 bg-[#fff] text-[10px] border border-1 border-gray-500 rounded-full'>
                        38
                    </span>
                </CustomIconButton>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="reaction-popover"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    },
                }}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <div className="mx-2 flex flex-row gap-2 text-[12px]">
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <img
                            src="/img/icons/emotion/thumbs_up.png"
                        />
                        <span>8</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <img
                            src="/img/icons/emotion/lol.png"
                        />
                        <span>11</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <img
                            src="/img/icons/emotion/angry.png"
                        />
                        <span>21</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <img
                            src="/img/icons/emotion/sad.png"
                        />
                        <span>11</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <img
                            src="/img/icons/emotion/surprise.png"
                        />
                        <span>3</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <img
                            src="/img/icons/emotion/love.png"
                        />
                        <span>7</span>
                    </div>
                    <div className="flex flex-row items-center gap-1 p-1 bg-[#D8E7EE] rounded-md hover:cursor-pointer">
                        <CloseIcon onClick={() => handleClose()} />
                    </div>
                </div>
            </Menu>
        </div>
    );
}

export const SocialDropdown = () => {
    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);
    return (
        <div>
            <IconButton
                onClick={handleOpen}
                size="small"
                aria-controls={open ? 'reaction-popover' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <CustomIconButton
                    imgSrc='/img/icons/dots.svg'
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="reaction-popover"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    },
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem sx={{ fontSize: 12 }}>
                    Evernote
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    Instapaper
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    OneNote
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    Pocket
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    <LayersOutlinedIcon sx={{ fontSize: 16 }} />&nbsp;Buffer
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    <SendIcon sx={{ fontSize: 16 }} />&nbsp;
                    Custom Sharing
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    <FacebookOutlinedIcon sx={{ fontSize: 16 }} />&nbsp;
                    Facebook
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    <TwitterIcon sx={{ fontSize: 16 }} />&nbsp;
                    Twitter
                </MenuItem>
                <MenuItem sx={{ fontSize: 12 }}>
                    WordPress
                </MenuItem>
            </Menu>
        </div>
    );
}

const ArticlesLeftSideBarComponent = () => {

    const [article, setArticle] = useState('6 practical tips for amazon shoppers this Earth Month and beyond');

    const collection_list = ["My First Collection", "My Second Collection"]

    const BoostMenu = () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        return (
            <div>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'boost-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <CustomIconButton
                        imgSrc='/img/icons/rocket.svg'
                    />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    id="boost-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        },
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem>
                        <input className="border border-1 border-gray-300 rounded-md p-2" placeholder="Find collection" />
                    </MenuItem>
                    <Divider />
                    {
                        collection_list.map((item, index) => (
                            <MenuItem key={item} onClick={handleClose}>
                                {item}
                            </MenuItem>
                        ))
                    }
                    <Divider />
                    <MenuItem sx={{ color: 'rgb(81, 161, 101)' }}>
                        Create a collection
                    </MenuItem>
                </Menu>

            </div>
        );
    }
    const ReactiveMenu = () => {
        const { anchorEl, handleOpen, handleClose } = usePopup();
        const open = Boolean(anchorEl);
        const MenuIcon = ({ icon: IconComponent, title }) => {
            return (
                <>
                    <ListItemIcon>
                        <IconComponent fontSize="small" />
                    </ListItemIcon>
                    {title}
                </>
            );
        };

        return (
            <div>
                <IconButton
                    onClick={handleOpen}
                    size="small"
                    aria-label="Gift"
                    aria-controls={open ? 'gift-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    className='buttonmenu'
                >
                    <CustomIconButton
                        imgSrc='/img/icons/box.svg'

                    />
                </IconButton>
                <Menu
                    className='anchormenu'
                    anchorEl={anchorEl}
                    id="gift-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 315,
                                left: 0,
                                width: 20,
                                height: 20,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <div className="p-4 text-[#000]">
                        <div className="flex flex-row justify-between mb-2 text-xl">
                            <b>Send this article</b>
                            <p>10/10</p>
                        </div>
                        <div>You have <b>10 gift articles</b> available<br />to share this month. <Link href='#'>Learn more</Link>.<br />&nbsp;</div>
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={LinkIcon} title="Get link" />
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={FacebookIcon} title="Share On Facebook" />
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={TwitterIcon} title="Share On Twitter" />
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={EmailIcon} title="Email" />
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={LinkedInIcon} title="Share On LinkedIn" />
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={WhatsAppIcon} title="Share On WhatsApp" />
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <MenuIcon icon={RedditIcon} title="Share On Reddit" />
                        </MenuItem>
                    </div>
                </Menu>
            </div>
        )
    }

    return (
        <div id='leftsidebarcontainer'>
            <div id='leftsidebarpanel' >
                <div className='panelgroup'>
                    <div className="w-[60px] h-[60px] z-[100]">
                        <CircularProgressbar value={66} text={'2 Min'} />
                    </div>
                    <h6 className='hidden 2xl:block text-sm font-bold my-2'>Reading:</h6>
                    <p className='hidden 2xl:block text-sm text-center'>6 practical tips for amazon shoppers this Earth Month and beyond</p>
                </div>
                <div className='panelgroup my-8 gap-4 '>
                    <CustomIconButton
                        imgSrc='/img/icons/earphone.svg'
                    >
                        <TextToSpeech
                            text={article}
                        />
                    </CustomIconButton>
                    <BoostMenu />
                    <CustomIconButton
                        imgSrc='/img/icons/logout.svg'
                    />
                    <CustomIconButton
                        imgSrc='/img/icons/dots.svg'
                    />
                    <CustomIconButton
                        imgSrc='/img/icons/flag.svg'
                    />
                    <ReactiveMenu />
                    <RecommendCountComponent />
                    <ReactionPopover />
                    <div className='w-[60px] h-[2px] bg-[#000]'></div>
                    <CustomIconButton
                        imgSrc='/img/avatar/5.svg'
                        customClass='w-[60%]'
                        label='Joe Biden'
                    />
                    <CustomIconButton
                        imgSrc='/img/icons/flower.png'
                        customClass='rounded-full w-[60%]'
                    >
                        <span className='flex flex-row items-center h-[20px] pr-1 bg-[#fff] text-[10px] text-[#339469] border border-1 border-gray-300 rounded-full'>
                            <ArrowDropUpIcon />+0.27%
                        </span>
                    </CustomIconButton>
                </div>
            </div>
        </div>
    );
}

const ArticlesMainComponentMenu = () => {
    const [active, setActive] = useState('All');

    const leaning_bias = [
        {
            label: 'All',
            amount: 143,
            activeColor: '#063144'
        },
        {
            label: 'Left',
            amount: 45,
            activeColor: '#93B3C9'
        },
        {
            label: 'Centre',
            amount: 12,
            activeColor: '#AED6EC'
        },
        {
            label: 'Right',
            amount: 23,
            activeColor: '#E4C6A5'
        }
    ];

    return (
        <>
            <ul>
                <li className='w-full p-2 text-left hover:cursor-pointer text-2xl'>
                    256 Articles
                </li>
                {
                    leaning_bias.map((item, index) => (
                        <li
                            className='w-full min-h-[51px] p-2 text-center hover:cursor-pointer'
                            style={active === item.label ? { borderBottom: `6px solid ${item.activeColor}` } : {}}
                            onClick={() => setActive(item.label)}
                        >
                            <Badge badgeContent={item.amount} color="primary">
                                <span className="pr-2">{item.label}</span>
                            </Badge>
                        </li>
                    ))
                }
            </ul>
            <div className="flex flex-row my-2 gap-1 float-right">
                {
                    leaning_bias.map((item, index) => (
                        <div
                            key={item.label}
                            className='p-[2px] rounded-full hover:cursor-pointer'
                            onClick={() => setActive(item.label)}
                            style={active === item.label ? { border: `1px solid ${item.activeColor}` } : { border: "1px solid transparent" }}
                        >
                            <div
                                className={`w-[12px] h-[12px] rounded-full bg-[${item.activeColor}]`}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

const MembershipItem = (props) => {
    const router = useRouter();

    const { period, price, isRecommend } = props;

    const border_color_class = isRecommend ? 'border-[#4BB9EB]' : 'border-gray-300';
    return (
        <div className="membershipitem" className2={`${border_color_class}`}>
            {
                isRecommend &&
                <>
                    <div className="px-4 py-1 text-[10px] font-bold bg-[#4BB9EB] rounded-full absolute top-0 left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
                        RECOMMEND
                    </div>
                    <div className="p-1 px-2 bg-[#016AB9] text-[10px] text-[#fff] font-bold absolute top-2 right-0">
                        SAVE 27%
                    </div>
                </>
            }
            <div className="flex flex-col flex-grow items-start gap-2">
                <p className="text-[16px] font-bold">{period}</p>
                <div className="flex flex-row gap-1 items-center">
                    <p>USD</p>
                    <p className="flex flex-row gap-1 items-end">
                        <span className="text-[32px]">{price}</span>
                        <span className="mb-1">/month</span>
                    </p>
                </div>
                {
                    isRecommend &&
                    <p className="text-[12px]">Billed as <del>USD120</del> <b>USD96</b> for the first year</p>
                }
                {
                    !isRecommend &&
                    <p className="text-[12px]">Billed monthly as <b>USD11</b> after the first month</p>
                }
            </div>
            {
                isRecommend &&
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#FE8618',
                        color: '#000',
                        '&:hover': {
                            backgroundColor: '#FEA838',
                        }
                    }}
                    onClick={() => router.push('/Checkout')}
                >
                    SUBSCRIBE
                </Button>
            }
            {
                !isRecommend &&
                <Button
                    variant="outlined"
                    sx={{
                        borderColor: '#CCC',
                        color: '#000',
                        '&:hover': {
                            borderColor: '#AAA',
                        }
                    }}
                    onClick={() => router.push('/Checkout')}
                >
                    SUBSCRIBE
                </Button>
            }
        </div>
    )
}

const MembershipOverlay = () => {

    return (
        <div className="membershipoverlay">
            <div className="startarea" />
            <div className="mainarea" className2="flex flex-col gap-4 items-center w-full px-4 md:px-[15%] py-12 text-center bg-white dark:bg-black">
                <div className="w-[2px] h-[72px] bg-gray-300" />
                <HttpsOutlinedIcon />
                <p>You have reached your free article limit</p>
                <p className="px-12 mb-8 text-[24px]">Subscribe to Sphere for unlimited access to award-winning journalism</p>
                <MembershipItem
                    period='1-YEAR'
                    price='8'
                    isRecommend={true}
                />
                <MembershipItem
                    period='1-MONTH'
                    price='11'
                    isRecommend={false}
                />
                <Button>EXPLORE OUR PLANS</Button>
                <div className="w-[2px] h-[72px] bg-gray-300" />
            </div>
        </div>
    )
}

const MainArticleSection = () => {

    return (
        <div id="mainarticlesection">
            <div className="w-[80px] h-[3px] bg-gray-500 my-2"></div>
            <h2 className="text-3xl font-bold my-4">Scale business operations with a centrialized operational hub</h2>
            <p className="mt-4">
                Passages des Lorem Ipsum VairatVairation der Passages des Lorem Ipsum, Vairation der Passages des Lorem Ipsum
                aber der Vairation der ion der Passages des Lorem Ipsum
                Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum
                aber der Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum
                Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum
            </p>
            <MembershipOverlay />
        </div>
    )
}

export const SocialCardComponent = (props) => {
    const { img, reporter_img, reporter_name, date, description, site, time } = props;

    return (
        <div className="flex flex-col w-full min-w-[240px] border border-1 border-gray-300 rounded-2xl">
            <div>
                <img
                    src={img}
                    className="w-full"
                />
            </div>
            <div className="flex flex-col flex-grow -mt-4 p-4  bg-[#fff] relative z-1 rounded-l-2xl rounded-br-2xl relative">
                <div className="flex flex-row items-end absolute -top-4 text-[10px]">
                    <img
                        src={reporter_img}
                        className="bottom-0 shadow-xl rounded-lg"
                    />
                    <span className="ml-2">@{reporter_name} • {date}</span>
                </div>
                <p className="mt-4 text-[12px] text-[#000]">
                    {description}
                </p>
                <div className="my-4">
                    <h4 className="text-[#000] font-bold">{site}</h4>
                    <span className="text-sm">{time}</span>
                </div>
                <a className="text-[#86bdba]">Full tweet here</a>
            </div>
        </div>
    )
}

const VideoCardsSwiper = () => {

    const card_info = [
        {
            img: '/img/news/blue.png',
            reporter_img: '/img/avatar/6.png',
            reporter_name: 'Akahan',
            date: 'Aug 20, 2021',
            description: 'Ungewollten Worter stehen. Viele der Generation im internet neigen dazu, vorge ferigte Stuke zu wiederholen - was es notig',
            site: 'Twiter',
            time: '6:25 AM'
        },
        {
            img: '/img/news/football.png',
            reporter_img: '/img/avatar/7.png',
            reporter_name: 'Akahan',
            date: 'Aug 20, 2021',
            description: 'Ungewollten Worter stehen. Viele der Generation im internet neigen dazu, vorge ferigte Stuke zu wiederholen - was es notig',
            site: 'Twiter',
            time: '6:25 AM'
        },
        {
            img: '/img/news/meeting.png',
            reporter_img: '/img/avatar/7.png',
            reporter_name: 'Akahan',
            date: 'Aug 20, 2021',
            description: 'Ungewollten Worter stehen. Viele der Generation im internet neigen dazu, vorge ferigte Stuke zu wiederholen - was es notig',
            site: 'Twiter',
            time: '6:25 AM'
        }
    ]

    return (
        <>
            <div className="flex flex-row justify-between gap-8 my-4">
                {
                    card_info.map((item, index) => (
                        <SocialCardComponent
                            key={index}
                            img={item.img}
                            reporter_img={item.reporter_img}
                            reporter_name={item.reporter_name}
                            date={item.date}
                            description={item.description}
                            site={item.site}
                            time={item.time}
                        />
                    ))
                }
            </div>
            <div className="flex flex-row float-right gap-4">
                <span className="p-2 bg-[#fff] hover:cursor-pointer rounded-full border border-1 border-gray-300">
                    <ArrowBackIosNewIcon />
                </span>
                <span className="p-2 bg-[#fff] hover:cursor-pointer rounded-full border border-1 border-gray-300">
                    <ArrowForwardIosIcon />
                </span>
            </div>
            <div className="clear-both"></div>
        </>
    );
}

const ReviewComponent = () => {
    return (
        <div className="my-4 py-6 px-8 flex flex-row bg-gradient-to-r from-[#CBEFFD] to-[#f8E2CA] items-center justify-between rounded-lg">
            <h4 className="text-gray-600">Did you enjoy this story?</h4>
            <div className="flex flex-row gap-2">
                <Button className="text-[#000] bg-[#fff] hover:bg-[#eee] rounded-full px-4 py-2" sx={{ textTransform: 'none' }}>I did</Button>
                <Button className="text-[#000] bg-[#fff] hover:bg-[#eee] rounded-full px-4 py-2" sx={{ textTransform: 'none' }}>I did not</Button>
            </div>
        </div>
    )
}

const FAQItem = (props) => {
    const { title, date, brand_img, brand_title, brand_description, followers } = props;

    return (
        <div className='faqItem' >
            <h6 className="title">{title}</h6>
            <p className="description">
                {props.children}
            </p>
            <div className='extradescription'>
                <img
                    src={brand_img}
                />
                <div className="flex flex-col gap-1">
                    <h6>{brand_title}</h6>
                    <p className="text-[12px]">{brand_description}</p>
                    <span className="text-[12px]">{date}</span>
                    <span className="text-[12px]">{followers} followers</span>
                </div>
            </div>
        </div>
    )
}

const FAQComponent = () => {
    return (
        <div id="faqcomponentcontainer" >
            <div className="flex flex-row pt-[108px] border-b-2 border-gray-400 justify-between relative">
                <h3 className='title' >Frequently Asked Question</h3>
                <img
                    src="/img/others/faq.png"
                    className="right-4 -bottom-4 absolute"
                />
            </div>
            <div className="flex flex-row w-full pr-4 py-8 gap-8 overflow-auto">
                <FAQItem
                    title='Ungewollten Worter stehen. Viele der Generation im interne'
                    date='Yesterday'
                    brand_img='/img/logo/source/ET.png'
                    brand_title='The Economic Times'
                    brand_description='Sons of forest: will it be on Xbox, PS4...'
                    followers='742'
                >
                    Vairation der Passages des Lorem Ipsum, Vairation der Passages des Lorem Ipsum aber der Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum
                </FAQItem>
                <FAQItem
                    title='Ungewollten Worter stehen. Viele der Generation im interne'
                    date='Yesterday'
                    brand_img='/img/logo/source/escapist.png'
                    brand_title='Escapist'
                    brand_description='Who Do You Play As in Sons of the Forest?'
                    followers='52'
                >
                    Vairation der Passages des Lorem Ipsum, Vairation der Passages des Lorem Ipsum aber der Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum
                </FAQItem>
                <FAQItem
                    title='Ungewollten Worter stehen. Viele der Generation im interne'
                    date='Yesterday'
                    brand_img='/img/logo/source/ET.png'
                    brand_title='The Economic Times'
                    brand_description='Sons of forest: will it be on Xbox, PS4...'
                    followers='742'
                >
                    Vairation der Passages des Lorem Ipsum, Vairation der Passages des Lorem Ipsum aber der Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum
                </FAQItem>
            </div>
        </div>
    )
}

const ContributorItem_old = (props) => {
    const { avartar_url, name, desc } = props;
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <div className="w-full h-full bg-[#4FBAE9] absolute z-1 -top-2 -left-2 rounded-lg"></div>
                <img
                    src={avartar_url}
                    className="z-2 relative rounded-lg"
                />
            </div>
            <h6 className="my-1 text-[18px] text-[#000] font-bold">{name}</h6>
            <span className="text-[10px] text-[#9AD7F2]">{desc}</span>
        </div>
    )
}

const ContributorItem = (props) => {
    const { avartar_url, logo_url, name, desc } = props;
    return (
        <div className="flex flex-row items-center min-w-[25%]">
            <div className="relative m-2">
                <img
                    src={avartar_url}
                    className="w-[40px] h-[40px] z-2 relative rounded-full"
                />
            </div>
            <div className="flex flex-col">
                <h6 className="my-1 text-[14px] text-[#000] font-bold">{name}</h6>
                <span className="text-[14px] text-gray-400">{desc}</span>
            </div>
        </div>
    )
}

const ContributorsComponent = () => {
    return (
        <div className="flex flex-col my-16 bg-[#fff] border border-1 border-gray-400 rounded-xl">
            <div className="px-8 py-4 border-b border-1 border-gray-400">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row">
                        <img
                            src="/img/icons/grid.svg"
                        />
                        <h3 className="mx-4 text-[24px] text-[#000]">Contributors</h3>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div>
                            <Link href="/Coverage">
                                <Button variant="contained" size="small" sx={{ textTransform: 'none', borderRadius: '8px', backgroundColor: 'rgb(79 186 233)' }}>Full Coverage</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-gray-600 ">In total, 23 authors & journalists from 19 sources contributed to this story.</p>
            </div>
            <div className="p-4 flex flex-wrap">
                <ContributorItem
                    avartar_url='/img/avatar/Image_332.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Malik Abimanyu'
                    desc='CNN News'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_336.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Amy Adams'
                    desc='Fox News'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_333.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Malik Abimanyu'
                    desc='The New York Times'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_333.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Malik Abimanyu'
                    desc='The New York Times'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_333.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Malik Abimanyu'
                    desc='The New York Times'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_333.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Malik Abimanyu'
                    desc='The New York Times'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_332.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Malik Abimanyu'
                    desc='CNN News'
                />
                <ContributorItem
                    avartar_url='/img/avatar/Image_336.png'
                    logo_url='/img/logo/source/CNN.png'
                    name='Amy Adams'
                    desc='Fox News'
                />
            </div>
        </div>
    )
}

const ArticlesMainComponentCenterComponent = () => {
    const { showFAQ } = useContext(MainContext);
    const [activeTab, setActiveTab] = useState(1);
    const tabData = [
        {
            idx: 0,
            label: 'Sphere',
            icon: '/img/icons/tabs/sphere.png',
            position: 'left',
            zIndex: 1,
            render: <></>
        },
        {
            idx: 1,
            label: 'Chat',
            icon: '/img/icons/tabs/sparkling.png',
            position: 'right',
            zIndex: 2,
            render: <TabContentChatComponent />
        },
        {
            idx: 2,
            label: 'Video',
            icon: '/img/icons/tabs/play.png',
            position: 'right',
            zIndex: 3,
            render: <VideoComponent isSmallSize={true} />
        },
        {
            idx: 3,
            label: 'Quote',
            icon: '/img/icons/tabs/quote.png',
            position: 'right',
            zIndex: 4,
            render: <QuoteTabContent />
        },
        {
            idx: 4,
            label: 'TimeLine',
            icon: '/img/icons/tabs/line.png',
            position: 'right',
            zIndex: 5,
            render: <TimelineTabContent />
        },
        {
            idx: 5,
            label: 'Metrics',
            icon: '/img/icons/tabs/hamburger.png',
            position: 'right',
            zIndex: 6,
            render: <Metrics />
        },
        {
            idx: 6,
            label: 'Wikipedia',
            icon: '/img/icons/tabs/word.png',
            position: 'right',
            zIndex: 7,
            render: <Wikipedia />
        },
        {
            idx: 7,
            label: 'History',
            icon: '/img/icons/tabs/dark_mode.png',
            position: 'right',
            zIndex: 8,
            render: <HistoryTabContent />
        }
    ];

    return (
        <div className="xl:w-[70%] w-full p-8">
            <MainArticleSection />
            <TabPanel
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabData={tabData}
                isMobile={false}
            >
                {
                    tabData.map((item, index) => (
                        <Collapse key={item.idx} in={activeTab == item.idx}>
                            <Fade in={activeTab == item.idx}>
                                <div>
                                    {item.render}
                                </div>
                            </Fade>
                        </Collapse>
                    ))
                }
            </TabPanel>
            <VideoCardsSwiper />
            <ReviewComponent />
            {
                showFAQ &&
                <FAQComponent />
            }
            <ContributorsComponent />
        </div>
    );
}

const ArticlesMainComponentRightSideBarComponent = () => {
    const {
        showMoreCoverage,
        showCoverageDetail,
        showBiasDistribution,
        showFactuality,
        showCountries,
        showMediaOwnership,
        widgetStatus
    } = useContext(MainContext);

    const subscriber_reading_list = [
        {
            index: '1',
            supporter_logo: '/img/icons/R1.png',
            supporter_name: 'Reuters',
            title: 'See the first five lego sets designer in a competition anyone can enter lego sets designer',
            time: '6h ago',
            reporter: 'Heather Bien'
        },
        {
            index: '2',
            supporter_logo: '/img/icons/R1.png',
            supporter_name: 'Reuters',
            title: 'See the first five lego sets designer in a competition anyone can enter lego sets designer',
            time: '3h ago',
            reporter: 'Joe Dicro'
        },
        {
            index: '3',
            supporter_logo: '/img/icons/R1.png',
            supporter_name: 'Reuters',
            title: 'See the first five lego sets designer in a competition anyone can enter lego sets designer',
            time: '1h ago',
            reporter: 'John Doe'
        }
    ];

    return (
        <div className="rightsidebar">
            {
                showMoreCoverage &&
                <MoreCoverageComponent />
            }
            <SubscriberReading
                subscriber_reading_list={subscriber_reading_list}
            />
            {
                (showCoverageDetail || showBiasDistribution || showFactuality) && widgetStatus != 2 &&
                <BiasChatComponent
                    showCoverageDetail={showCoverageDetail}
                    showBiasDistribution={showBiasDistribution}
                    showFactuality={showFactuality}
                    widgetStatus={widgetStatus}
                />
            }
            {
                showCountries && widgetStatus != 2 &&
                <Country
                    widgetStatus={widgetStatus}
                />
            }
            {
                showMediaOwnership && widgetStatus != 2 &&
                <Ownership
                    widgetStatus={widgetStatus}
                />
            }
        </div>
    )
}

const ArticlesMainComponentBody = () => {
    return (
        <div id="articlesmaincomponentbody" >
            <ArticlesMainComponentCenterComponent />
            <ArticlesMainComponentRightSideBarComponent />
        </div>
    )
}

const ArticlesMainComponent = () => {

    return (
        <div className='componentcontainer px-4'>
            <ArticlesMainComponentMenu />
            <ArticlesMainComponentBody />
        </div>
    );
}

const ArticlesComponent = () => {
    return (
        <div id="articlescomponent">
            <ArticlesLeftSideBarComponent />
            <ArticlesMainComponent />
        </div>
    );
}

export default ArticlesComponent;
