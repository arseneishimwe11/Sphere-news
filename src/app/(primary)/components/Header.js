import './Header.css';
import { useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation';

import usePopup from '@/app/hooks/usePopupState';

import { SearchDropdown } from './headerContainer';
import { MobileHeader } from './headerContainer/MobileHeader';

import { SelectBox, InputFileUpload } from './common';

import { QuickAccessSettingModal, SupportModal, AdvancedSearchQuery, NotificationModal, PinEditModal } from './modals';

import { load } from 'cheerio';
import axios from 'axios';

import { Divider, Badge, Button, Collapse, ButtonGroup, Popover, Modal, Box, Autocomplete, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';
import AddIcon from '@mui/icons-material/Add';
// import LanguageIcon from '@mui/icons-material/Language';
// import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
// import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// import CircleIcon from '@mui/icons-material/Circle';

import {
    RocketLaunch as RocketLaunchIcon,
    Tune as TuneIcon,
    SettingsOutlined as SettingsIcon,
} from '@mui/icons-material';

import {
    Dashboard as DashboardIcon,
    Logout as LogoutIcon,
    TrendingUp as TrendingUpIcon,
    CancelRounded as CancelRoundedIcon,
    WhatsApp as WhatsAppIcon,
    Twitter as TwitterIcon,
    FacebookRounded as FacebookIcon,
    Email as EmailIcon,
    LinkedIn as LinkedInIcon,
    Reddit as RedditIcon,
    Link as LinkIcon,
    EastRounded as ArrowForwardIcon,
} from '@mui/icons-material';

import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import PeopleIcon from '@mui/icons-material/People';
import CheckIcon from '@mui/icons-material/Check';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ImageIcon from '@mui/icons-material/Image';

// ------------------------Header Components for Laptop Design-----------------------------

const ThemeButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <IconButton
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
        >
            <img src='/img/icons/contrast_circle.svg' className="dark:invert" />
        </IconButton>
    )
}
const UserMenu = (props) => {
    const [isBoostModalOpen, setIsBoostModalOpen] = useState(false);
    const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
    const [isQuickAccessSettingModalOpen, setIsQuickAccessSettingModalOpen] = useState(false);

    const { handleDrawerOpen } = props;

    const BoostModalContent = () => {

        const [selected, setSelected] = useState('url');

        const URLComponent = () => {
            const [previewItem, setPreviewItem] = useState({});
            const [previewUrl, setPreviewUrl] = useState('');

            const PreviewComponent = (props) => {
                const { img_src, title } = props;
                return (

                    <div className='flex flex-row gap-4'>
                        <div className='w-[25%]'>
                            <img
                                src={img_src}
                                className='w-full rounded-md'
                            />
                        </div>
                        <div className='flex flex-col w-[75%]'>
                            <h6 className='font-bold'>{title}</h6>
                            <span className='text-gray-400 text-[12px]'>Home</span>
                        </div>
                    </div>
                )
            }

            const getLinkPreview = async (url) => {
                try {
                    if (!(url.includes('http://') || url.includes('https://'))) {
                        setPreviewItem({});
                        return null;
                    }
                    /*request url html document*/
                    const { data } = await axios.get(url);
                    //load html document in cheerio
                    const $ = load(data);

                    /*function to get needed values from meta tags to generate preview*/
                    const getMetaTag = (name) => {
                        return (
                            $(`meta[name=${name}]`).attr("content") ||
                            $(`meta[propety="twitter${name}"]`).attr("content") ||
                            $(`meta[property="og:${name}"]`).attr("content")
                        );
                    };

                    /*Fetch values into an object */
                    const preview = {
                        url,
                        title: $("title").first().text(),
                        description: getMetaTag("description"),
                        image: getMetaTag("image"),
                        author: getMetaTag("author"),
                    };

                    setPreviewItem(preview);

                } catch (error) {
                    setPreviewItem({});
                }

            }

            const handleUrlChange = (e) => {
                setPreviewUrl(e.target.value);
                getLinkPreview(e.target.value);
            }

            return (
                <>
                    <div className='my-4'>
                        <h5 className='text-[14px] font-bold'>URL</h5>
                        <input className='w-full p-2 rounded-md border border-1 border-gray-400 outline-none' autoFocus defaultValue={previewUrl} onChange={handleUrlChange} />
                    </div>
                    {
                        Object.keys(previewItem).length > 0 &&
                        <div className='my-4'>
                            <h5 className='text-[14px] font-bold'>Preview</h5>
                            <PreviewComponent
                                img_src={previewItem.image}
                                title={previewItem.title}
                            />
                        </div>
                    }
                    <div className='flex flex-row gap-2 p-4 my-2 border border-1 border-gray-400 rounded-md'>
                        <PeopleIcon />
                        <input
                            className='border border-0 outline-none'
                            placeholder='Add note'
                        />
                    </div>
                </>
            )
        }

        const VideoImageComponent = () => {
            return (
                <div>
                    <h5 className='text-[14px] font-bold'>Video</h5>
                    <InputFileUpload />
                    <div className='my-2'>
                        <p>Title</p>
                        <input className='w-full p-3 text-[12px] rounded-md border border-1 border-gray-400 outline-none' />
                    </div>
                    <div className='my-2'>
                        <p>0/500</p>
                        <textarea
                            className='w-full border border-1 border-gray-300 rounded-md p-2 outline-none'
                            placeholder="Share what's interesting about this video."
                        />
                    </div>
                    <div>
                        <p>Tags</p>
                        <Autocomplete
                            multiple
                            freeSolo
                            id="tags-outlined"
                            options={[]}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    placeholder="Tags"
                                    size='small'
                                    sx={{ borderRadius: 4, marginY: 1 }}
                                />
                            )}
                        />
                    </div>
                </div>
            )
        }

        const CollectionItem = (props) => {
            const { collection_type, img_src, title, number, time } = props;

            return (
                <div className='collectionitem'>
                    <div className='w-[15%] relative'>
                        <div className='w-full h-full bg-[#fff] p-1 border border-1 border-gray-300 rounded-md relative z-[3]'>
                            <img
                                src={img_src}
                                className='w-full'
                            />
                        </div>
                        <div className='w-full h-full bg-[#fff] border border-1 border-gray-300 rounded-md top-1 absolute z-[2]' />
                        <div className='w-full h-full bg-[#fff] border border-1 border-gray-300 rounded-md top-2 absolute z-[1]' />
                    </div>
                    <div className='flex flex-col flex-grow'>
                        <h6 className='text-[12px] font-bold'>{title}</h6>
                        <p className='text-[12px] text-gray-600'>{number} stories</p>
                        <p className='text-[10px] text-gray-400'>{time}</p>
                        <p className='text-[12px] text-gray-600'>
                            {collection_type == 'private' && <LockIcon sx={{ fontSize: '16px' }} />}
                            {collection_type == 'public' && <PublicIcon sx={{ fontSize: '16px' }} />}
                            {collection_type == 'team' && <PeopleIcon sx={{ fontSize: '16px' }} />}
                            {collection_type}
                        </p>
                    </div>
                    {
                        props.isSelect &&
                        <div className='w-[5%]'>
                            <CheckIcon sx={{ color: '#4FBAE9' }} />
                        </div>
                    }
                </div>
            )
        }

        return (
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 560,
                }}
            >
                <div className="boostmodalpanel">
                    <h5 className='text-[18px]'>Save to a Collection</h5>
                    <ButtonGroup size="small">
                        <IconButton onClick={() => setSelected('url')}><LinkIcon /></IconButton>
                        <IconButton onClick={() => setSelected('video')}><PlayCircleFilledIcon /></IconButton>
                        <IconButton onClick={() => setSelected('image')}><ImageIcon /></IconButton>
                    </ButtonGroup>
                    {
                        selected == 'url' &&
                        <URLComponent />
                    }
                    {
                        selected != 'url' &&
                        <VideoImageComponent />
                    }
                    <input className='w-full p-3 text-[12px] rounded-md border border-1 border-gray-400 outline-none' placeholder='Filter Collections' />
                    <div className='flex flex-col gap-2 my-2 w-full max-h-[280px] overflow-y-scroll'>
                        <CollectionItem
                            img_src='/img/news/meeting2.png'
                            title='Collection ABC'
                            number={89}
                            time='updated 8 days ago'
                            collection_type='private'
                            isSelect
                        />
                        <CollectionItem
                            img_src='/img/news/meeting3.png'
                            title='Collection XYZ'
                            number={23}
                            time='updated 9 days ago'
                            collection_type='public'
                        />
                        <CollectionItem
                            img_src='/img/news/meeting4.png'
                            title='Collection CCC'
                            number={11}
                            time='updated 5 days ago'
                            collection_type='private'
                        />
                        <CollectionItem
                            img_src='/img/news/meeting5.png'
                            title='Collection EDF'
                            number={52}
                            time='updated 15 days ago'
                            collection_type='team'
                        />
                        <CollectionItem
                            img_src='/img/news/meeting.png'
                            title='Collection ABC'
                            number={15}
                            time='updated 14 days ago'
                            collection_type='team'
                        />
                    </div>
                    <div className='flex flex-row my-4 gap-2'>
                        <Button variant='contained' className='okbutton'>Save to COLLECTION</Button>
                        <Button variant='outlined' className='cancelbutton' sx={{ color: '#000', borderColor: '#000' }} onClick={() => setIsBoostModalOpen(false)}>Cancel</Button>
                    </div>
                </div>
            </Box>
        )
    }

    const AvatarMenu = (props) => {
        const { anchorEl, handleOpen, handleClose } = usePopup();
        const open = Boolean(anchorEl);
        return (
            <div>
                <IconButton
                    onClick={handleOpen}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={{ width: 24, height: 24 }} src={props.imgSrc}>M</Avatar>
                </IconButton>
                <Popover
                    anchorEl={anchorEl}
                    id="account-menu"
                    className='anchormenu'
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            padding: 2,
                            minWidth: 280,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <div className='my-2'>
                        <p className='font-bold'>Daniel Lopez</p>
                        <p className='text-gray-600 text-sm'>daniellopez@gmail.com</p>
                        {
                            <span className='bg-gray-100 p-1 text-xs rounded-md'>Professional until Apr 30, 2024</span>
                        }
                    </div>
                    <Divider />
                    <Link href="/">
                        <div onClick={handleClose} className='text-gray-600 my-2'>
                            <SettingsOutlinedIcon fontSize="small" />
                            <span className='mx-2 text-black text-sm'>Preferences</span>
                        </div>
                    </Link>
                    <Link href="/Profile">
                        <div onClick={handleClose} className='text-gray-600 my-2'>
                            <PersonAddAltOutlinedIcon fontSize="small" />
                            <span className='mx-2 text-black text-sm'>Public Activities</span>
                        </div>
                    </Link>
                    <Link href="/Billing">
                        <div onClick={handleClose} className='text-gray-600 my-2'>
                            <CreditCardOutlinedIcon fontSize="small" />
                            <span className='mx-2 text-black text-sm'>Subscriptions</span>
                        </div>
                    </Link>
                    <div onClick={handleClose} className='text-gray-600 my-2'>
                        <PhoneAndroidOutlinedIcon fontSize="small" />
                        <span className='mx-2 text-black text-sm'>Apps & Extensions</span>
                    </div>
                    <div
                        onClick={() => {
                            setIsSupportModalOpen(true);
                            handleClose();
                        }}
                        className='text-gray-600 my-2 hover:cursor-pointer'
                    >
                        <ModeCommentOutlinedIcon fontSize="small" />
                        <span className='mx-2 text-black text-sm'>Support</span>
                    </div>
                    <Divider />
                    <div className='flex justify-between'>
                        <Link href="/UserDashboard">
                            <div onClick={handleClose} className='text-gray-600 my-2'>
                                <DashboardIcon fontSize="small" />
                                <span className='mx-2 text-black text-sm'>Dashboard</span>
                            </div>
                        </Link>
                        <div onClick={handleClose} className='text-gray-600 my-2'>
                            <span className='mx-2 text-black text-sm'>Logout</span>
                            <LogoutIcon fontSize="small" />
                        </div>
                    </div>
                </Popover>
            </div>
        );
    }

    const GiftMenu = (props) => {
        const path = usePathname();
        const router = useRouter();

        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            if (!path.startsWith('/Story')) {
                router.push('/Pricing')
                return;
            }
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        const MenuIcon = (props) => {
            return (
                <>
                    <ListItemIcon>
                        <props.icon fontSize="small" />
                    </ListItemIcon>
                    {props.title}
                </>
            )
        }
        return (
            <>
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-label="Gift"
                    aria-controls={open ? 'gift-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    className='buttonmenu'
                >
                    <img src={props.imgSrc} />
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
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
            </>
        );
    }

    const QuickAccessSettingMenu = () => {

        const { anchorEl, handleOpen, handleClose } = usePopup();
        const open = Boolean(anchorEl);

        return (
            <>
                <IconButton
                    onClick={handleOpen}
                    size="small"
                    aria-controls={open ? 'setting-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <SettingsOutlinedIcon sx={{ color: 'white' }} />
                </IconButton>
                <Popover
                    className='anchormenu'
                    anchorEl={anchorEl}
                    id="setting-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                left: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                >
                    <QuickAccessSettingModal />
                </Popover>
            </>
        );
    }

    const NotificationPopup = () => {

        const { anchorEl, handleOpen, handleClose } = usePopup();
        const open = Boolean(anchorEl);

        return (
            <>
                <Badge
                    badgeContent={4}
                    color="secondary"
                    onClick={handleOpen}
                    sx={{
                        '&:hover': {
                            cursor: 'pointer'
                        }
                    }}
                >
                    <img
                        src='/img/icons/ring.png'
                    />
                </Badge>
                <Popover
                    className='anchormenu'
                    anchorEl={anchorEl}
                    id="notification-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1,
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <NotificationModal />
                </Popover>
            </>
        )
    }

    return (
        <>
            <div>
                <IconButton>
                    <img
                        src='/img/icons/hamburger_bar.svg'
                        onClick={handleDrawerOpen}
                        className='hover:cursor-pointer'
                    />
                </IconButton>
                <QuickAccessSettingMenu />
                {/* <IconButton onClick={() => setIsQuickAccessSettingModalOpen(true)}>
                    <SettingsOutlinedIcon sx={{ color: 'white' }} />
                </IconButton> */}
                <SelectBox
                    id="category"
                    name="category"
                    value="usa"
                    passStyle={{ height: '100%', padding: '4px 0' }}
                    iconStyle={{ right: '-16px', color: 'white' }}
                    menuStyle={{ backgroundColor: '#003E6E' }}
                >
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src='/img/flag/small/us.png'
                        />
                        <span className='text-[10px] text-[#FFF]'>US Edition</span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src='/img/flag/small/us.png'
                        />
                        <span className='text-[10px] text-[#FFF]'>US Edition</span>
                    </div>
                </SelectBox>
                <ThemeButton />
                <Button sx={{ textTransform: 'none' }} onClick={() => setIsBoostModalOpen(true)}>
                    <div className='flex flex-row items-center p-1 gap-1 border border-1 border-[#fff] rounded-full hover:cursor-pointer'>
                        <RocketLaunchIcon sx={{ color: '#fff', fontSize: '16px' }} />
                        <span className='text-[10px] text-[#fff] text-[12px]'>AMPLIFY</span>
                    </div>
                </Button>
            </div>
            <div id="rightpart">
                <Link href='/Take5Page'>
                    <IconButton size="small" className="buttonmenu">
                        <img src='/img/icons/coin.png' />
                        <span className='font-bold'>1, 648</span>
                    </IconButton>
                </Link>
                <Link href='/Feed/Stream'>
                    <IconButton size="small" className="buttonmenu">
                        <img src='/img/icons/star.png' />
                        <span className='font-bold'>121</span>
                    </IconButton>
                </Link>
                <GiftMenu imgSrc='/img/icons/gift.png' />
                <NotificationPopup />
                <AvatarMenu imgSrc='/img/avatar/Image_332.png' />
            </div>
            {/* Modal for Amplify Setting */}
            <Modal
                open={isBoostModalOpen}
                onClose={() => setIsBoostModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <BoostModalContent />
            </Modal>

            {/* Modal for User Support */}
            <SupportModal
                modalOpen={isSupportModalOpen}
                setModalOpen={setIsSupportModalOpen}
            />

            {/* Modal for Quick Access Setting */}
            {/* <QuickAccessSettingModal 
                modalOpen={isQuickAccessSettingModalOpen}
                setModalOpen={setIsQuickAccessSettingModalOpen}
            /> */}
        </>
    )
}


const DefaultSearchResultPanel = (props) => {
    const { trending_keyword_list } = props;
    const { setSearchQuery } = props;

    return (
        <div className='w-full p-4 z-[1000] top-12 bg-[#fff] rounded-xl shadow-[1px_2px_2px_4px_rgba(0,0,0,0.1)] absolute'>
            <h6 className='text-gray-600 text-[16px]'>Trending now</h6>
            {
                trending_keyword_list.map((item, index) => (
                    <a key={index} className='flex flex-row gap-4 my-2 hover:cursor-pointer hover:bg-[#eee]' onClick={() => { setSearchQuery(item); }}>
                        <TrendingUpIcon />
                        <span className='text-[#000]'>{item}</span>
                    </a>
                ))
            }
        </div>
    )
}

const ActiveSearchResultPanelHeader = () => {
    const [active, setActive] = useState('All');

    const categories = [
        {
            label: 'All',
            number: '121'
        },
        {
            label: 'Stories',
            number: '15'
        },
        {
            label: 'Topics',
            number: '15'
        },
        {
            label: 'Entities',
            number: '42'
        },
        {
            label: 'Images',
            number: '23'
        },
        {
            label: 'Videos',
            number: '14'
        }
    ]
    return (
        <ul className='flex flex-wrap pl-[40px] text-[#000] gap-4 border-b border-b-2'>
            {
                categories.map((item, index) => (
                    <li key={item.label} className='flex flex-row items-center gap-1 relative hover:cursor-pointer' onClick={() => setActive(item.label)}>
                        <p className='py-2 text-[16px] relative'>
                            {item.label}
                            {
                                active === item.label ?
                                    <div className='w-full h-[5px] rounded-t-full bg-[#F9871A] bottom-0 absolute'></div> :
                                    ''
                            }
                        </p>
                        <span className='px-1 bg-[#99D5E0] rounded-full text-[10px] text-gray-600'>{item.number}</span>
                    </li>
                ))
            }
        </ul>
    )
}

const ActiveSearchResultPanelBodyItem = (props) => {
    const { category, flg_src, isPlus } = props;
    const { setIsFocus } = props;

    return (
        <div className='flex flex-row items-center justify-between cursor-pointer' onClick={() => setIsFocus(false)}>
            <div className='flex flex-row gap-2 items-center'>
                {props.children}
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div className='min-w-[62px] p-2 rounded-md bg-[#D8F0FC] text-[#000] text-[12px] border border-1 border-[#B1D6E6]'>{category}</div>
                {/* {
                    isPlus ?
                        <IconButton>
                            <AddCircleIcon sx={{ color: '#4FBAE9' }} />
                        </IconButton> :
                        ''
                }
                <img
                    src={flg_src}
                    className='w-[24px] h-[24px] rounded-full'
                /> */}
            </div>
        </div>
    )
}

const ActiveSearchResultPanelBody = (props) => {
    const { setIsFocus, q } = props;
    return (
        <div className='flex flex-col gap-4 py-4'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center w-[28px] h-[28px] bg-[#E3EDEF] rounded-full'>
                    <img
                        src='/img/icons/search/story.png'
                        className='mx-auto'
                    />
                </div>
                <span className='text-[12px]'>NEWS</span>
            </div>
            <ActiveSearchResultPanelBodyItem setIsFocus={setIsFocus} category='VIEW STORY' flg_src='/img/flag/small/us.png'>
                <div className='flex flex-row gap-2 items-center'>
                    <img
                        src='/img/news/computer.png'
                        className='w-[64px] h-[64px] rounded-lg'
                    />
                    <div className='flex flex-col justify-content'>
                        <h6 className='text-[14px] text-gray-700'>Microsoft profit pops 27% as Azure growth accelerates</h6>
                        <span className='text-[12px]'>3 Sources • Wed Oct 25, 2023</span>
                    </div>
                </div>
            </ActiveSearchResultPanelBodyItem>
            <Divider />
            <ActiveSearchResultPanelBodyItem setIsFocus={setIsFocus} category='VIEW STORY' isPlus flg_src='/img/flag/medium/spain.png'>
                <div className='flex flex-row gap-2 items-center'>
                    <img
                        src='/img/news/computer.png'
                        className='w-[64px] h-[64px] rounded-lg'
                    />
                    <div className='flex flex-col justify-content'>
                        <h6 className='text-[14px] text-gray-700'>Microsoft profit pops 27% as Azure growth accelerates</h6>
                        <span className='text-[12px]'>3 Sources • Wed Oct 25, 2023</span>
                    </div>
                </div>
            </ActiveSearchResultPanelBodyItem>

            <div className='flex items-center gap-2'>
                <div className='flex items-center w-[28px] h-[28px] bg-[#E3EDEF] rounded-full'>
                    <img
                        src='/img/icons/search/topics.png'
                        className='mx-auto'
                    />
                </div>
                <span className='text-[12px]'>FEEDS</span>
            </div>
            <ActiveSearchResultPanelBodyItem setIsFocus={setIsFocus} category='VIEW FEED' isPlus flg_src='/img/flag/small/us.png'>
                <div className='flex flex-row gap-2 items-center'>
                    <img
                        src='/img/news/computer.png'
                        className='w-[64px] h-[64px] rounded-lg'
                    />
                    <div className='flex flex-col justify-content'>
                        <h6 className='text-[14px] text-gray-700'>Artificial Intelligence</h6>
                        <span className='text-[12px]'>inc.com • 235k Followers • 192 articles/week</span>
                    </div>
                </div>
            </ActiveSearchResultPanelBodyItem>
            <Divider />
            <ActiveSearchResultPanelBodyItem setIsFocus={setIsFocus} category='VIEW FEED' flg_src='/img/flag/small/us.png'>
                <div className='flex flex-row gap-2 items-center'>
                    <img
                        src='/img/news/computer.png'
                        className='w-[64px] h-[64px] rounded-lg'
                    />
                    <div className='flex flex-col justify-content'>
                        <h6 className='text-[14px] text-gray-700'>Image Category</h6>
                        <span className='text-[12px]'>entrepreneur.com • 429K Followers • 136 articles/week</span>
                    </div>
                </div>
            </ActiveSearchResultPanelBodyItem>
            <Divider />
            <ActiveSearchResultPanelBodyItem setIsFocus={setIsFocus} category='VIEW FEED' flg_src='/img/flag/small/us.png'>
                <div className='flex flex-row gap-2 items-center'>
                    <img
                        src='/img/news/computer.png'
                        className='w-[64px] h-[64px] rounded-lg'
                    />
                    <div className='flex flex-col justify-content'>
                        <h6 className='text-[14px] text-gray-700'>EV</h6>
                        <span className='text-[12px]'>fortune.com • 52K Followers • 276 articles/week</span>
                    </div>
                </div>
            </ActiveSearchResultPanelBodyItem>

            <div className='flex items-center gap-2'>
                <div className='flex items-center w-[28px] h-[28px] bg-[#E3EDEF] rounded-full'>
                    <img
                        src='/img/icons/search/entity.png'
                        className='mx-auto'
                    />
                </div>
                <span className='text-[12px]'>TOPICS</span>
            </div>
            <div className='flex flex-wrap gap-2'>
                <div className='p-1 rounded-md bg-[#D8F0FC] text-[#000] text-[12px] border border-1 border-[#B1D6E6]'>
                    US relations
                    <AddCircleIcon sx={{ color: '#4FBAE9', fontSize: 18 }} />
                </div>
                <div className='p-1 rounded-md bg-[#D8F0FC] text-[#000] text-[12px] border border-1 border-[#B1D6E6]'>
                    US relations
                    <AddCircleIcon sx={{ color: '#4FBAE9', fontSize: 18 }} />
                </div>
                <div className='p-1 rounded-md bg-[#D8F0FC] text-[#000] text-[12px] border border-1 border-[#B1D6E6]'>
                    US relations
                    <AddCircleIcon sx={{ color: '#4FBAE9', fontSize: 18 }} />
                </div>
                <div className='p-1 rounded-md bg-[#D8F0FC] text-[#000] text-[12px] border border-1 border-[#B1D6E6]'>
                    US relations
                    <AddCircleIcon sx={{ color: '#4FBAE9', fontSize: 18 }} />
                </div>
            </div>


            <div className='flex items-center gap-2'>
                <p className='text-[12px]'>GLOBAL SEARCH</p>
            </div>
            <div className='flex items-center gap-4'>
                <img className='searchicon' src='/img/icons/colorful_search.png' />
                <p className='text-black'>Search for <b>{q}</b> in <b>News</b></p>
            </div>
        </div>
    )
}

const ActiveSearchResultPanel = (props) => {
    const { setIsFocus, q } = props;
    return (
        <div className='w-full p-4 z-[1000] top-12 bg-[#fff] rounded-xl shadow-[1px_2px_2px_4px_rgba(0,0,0,0.1)] absolute'>
            {/* <ActiveSearchResultPanelHeader /> */}
            <ActiveSearchResultPanelBody setIsFocus={setIsFocus} q={q} />
        </div>
    )
}

const SearchResultPanel = (props) => {
    const { isFocus } = props;
    const { q } = props;
    const { setSearchQuery, setIsFocus } = props;

    const trending_keyword_list = ['Alberto', 'Ruka', 'Benchmark', 'Artificial Intelligence', 'Latest verison of super comuter']

    return (
        <>
            {!isFocus && (<></>)}
            {isFocus && q &&
                <ActiveSearchResultPanel
                    setIsFocus={setIsFocus}
                    q={q}
                ></ActiveSearchResultPanel>
            }
            {isFocus && !q &&
                <DefaultSearchResultPanel
                    trending_keyword_list={trending_keyword_list}
                    setSearchQuery={setSearchQuery}>
                </DefaultSearchResultPanel>
            }
        </>
    )
}

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [expandFilter, setExpandFilter] = useState(false);
    const [openAdvancedSettingModal, setOpenAdvancedSettingModal] = useState(false);

    return (
        <div id="headercontent">
            <section className="my-1">
                <Link href="/">
                    <img
                        src="/img/logo/sphere/main.svg"
                        alt="Vercel Logo"
                        className="dark:invert min-w-[146px]"
                        width={146}
                        height={40}
                    />
                </Link>
            </section>
            <section className='hidden md:flex flex-col flex-grow min-w-[284px]'>
                <div className="searchinputarea">
                    <img className='searchicon' src='/img/icons/colorful_search.png' />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocus(true)}
                        placeholder='Search for Topics, locations & sources...'
                    />
                    <div className='buttonarea'>
                        <div className='actionbuttonarea'>
                            <IconButton onClick={() => { setSearchQuery(''); setIsFocus(false) }} >
                                <CancelRoundedIcon className='closeiconbutton' sx={{ width: '18px', height: '18px' }} />
                            </IconButton>
                        </div>
                        <div className='bg-gray-100 dark:bg-gray-700 rounded-r-md p-[2px]'>
                            <SearchDropdown />
                        </div>
                        <Link href='/Search'>
                            <IconButton onClick={() => { setSearchQuery(''); setIsFocus(false) }} >
                                <ArrowForwardIcon className='searchiconbutton' sx={{ width: '22px', height: '22px' }} />
                            </IconButton>
                        </Link>
                    </div>
                    <SearchResultPanel
                        isFocus={isFocus}
                        q={searchQuery}
                        setSearchQuery={setSearchQuery}
                        setIsFocus={setIsFocus}
                    />
                </div>
                <Collapse in={expandFilter}>
                    <div className="collapsediv" >
                        <h6>Filter & Sort</h6>
                        <div>
                            <IconButton sx={{ backgroundColor: 'transparent !important', fontSize: 12, borderRadius: '0px !important' }}>
                                <FilterAltOffOutlinedIcon sx={{ fontSize: 16 }} />
                                Reset All
                            </IconButton>
                            <select name="language">
                                <option value="all">All Languages</option>
                                <option value="english">English</option>
                            </select>
                            <select name="find_in">
                                <option value="all">Title & Content</option>
                                <option value="title">Title</option>
                                <option value="content">Content</option>
                            </select>
                            <select name="sort_by">
                                <option value="match">Best Match</option>
                                <option value="popularity">Popularity</option>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                            </select>
                            <select name="time">
                                <option value="today">Today</option>
                                <option value="week">Past 7 days</option>
                                <option value="month">Past 30 days</option>
                                <option value="year">Past year</option>
                                <option value="all">All Time</option>
                                <option value="custom">Custom Range</option>
                            </select>
                            <select name="content">
                                <option value="all">Any Content</option>
                                <option value="article">Articles</option>
                                <option value="video">Videos</option>
                                <option value="image">Images</option>
                            </select>
                        </div>
                    </div>
                </Collapse>
            </section>
            <section className="flex items-center justify-between gap-1">
                <IconButton className='settingbutton' onClick={() => { setExpandFilter(!expandFilter); }} >
                    <TuneIcon sx={{ fontSize: '24px' }} />
                </IconButton>
                <IconButton className='settingbutton' onClick={() => { setOpenAdvancedSettingModal(true); }} >
                    <BlurOnIcon sx={{ fontSize: '24px' }} />
                </IconButton>
                <AdvancedSearchQuery modalOpen={openAdvancedSettingModal} setModalOpen={setOpenAdvancedSettingModal} />
            </section>
        </div>
    );
};


const MainMenu = (props) => {
    const { main_criteria_list } = props;
    const { activeCriteria, setActiveCriteria } = props;

    const onClickItem = (index) => {
        setActiveCriteria(index);
    }

    return (
        <ul className="mainmenuul">
            {
                main_criteria_list.map((item, index) => {
                    const mergeClass = index === activeCriteria ? 'bg-[#4FBAE9] text-[#FFF]' : 'bg-[#FFF] text-[#000]';
                    return (
                        <li
                            key={index}
                            className={`${mergeClass}`}
                            onClick={() => onClickItem(index)}
                        >
                            <Link href={item.url}>
                                <img src={item.image_src} />
                                <span className='text-[12px]'>{item.title}</span>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    )
}

const Channels = (props) => {

    const router = useRouter();

    const { channel_list } = props;
    const { activeChannel, setActiveChannel } = props;
    const { setPinEditModalOpen } = props;

    return (
        <ul className="channelsul">
            {
                channel_list.map((item, index) => {
                    const activeClass = activeChannel === item.label ? 'text-[#5490B4] font-bold' : '';
                    return (
                        <li key={item.label} className={`${activeClass} relative`} onClick={() => { setActiveChannel(item.label); router.push(item.url) }} >
                            {item.label}
                            {
                                activeChannel === item.label &&
                                <div className='h-1 w-full absolute bottom-0 left-0 bg-[#FF9D28] rounded-t-lg'></div>
                            }
                        </li>
                    );
                })
            }
            <IconButton sx={{ padding: 0 }} onClick={() => setPinEditModalOpen(true)}>
                <AddIcon />
            </IconButton>
        </ul>
    )
}

const TopNavMenu = () => {

    const [activeCriteria, setActiveCriteria] = useState(0);
    const [activeChannel, setActiveChannel] = useState(null);
    const [pinEditModalOpen, setPinEditModalOpen] = useState(false);
    const [pinnedChannels, setPinnedChannels] = useState(channel_list);

    return (
        <div id='topnavmenucontent' >
            <MainMenu
                main_criteria_list={main_criteria_list}
                activeCriteria={activeCriteria}
                setActiveCriteria={setActiveCriteria}
            />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Channels
                channel_list={pinnedChannels}
                activeChannel={activeChannel}
                setActiveChannel={setActiveChannel}
                setPinEditModalOpen={setPinEditModalOpen}
            />
            <PinEditModal modalOpen={pinEditModalOpen} setModalOpen={setPinEditModalOpen} pinnedChannels={pinnedChannels} setPinnedChannels={setPinnedChannels} />
        </div>
    )
}

const main_criteria_list = [
    {
        image_src: '/img/icons/home.png',
        title: 'Home',
        url: '/'
    },
    {
        image_src: '/img/icons/stream.png',
        title: 'News Stream',
        url: '/Stream'
    },
    {
        image_src: '/img/icons/follow.png',
        title: 'Following',
        url: '/Following'
    },
    {
        image_src: '/img/icons/location.png',
        title: 'Local',
        url: '/Local/'
    }
];

const channel_list = [
    {
        label: 'U.S.',
        url: '/Categories/US'
    },
    {
        label: 'World',
        url: '/Categories/world'
    },
    {
        label: 'Politics',
        url: '/Categories/politics'
    },
    {
        label: 'Business',
        url: '/Categories/business'
    },
    {
        label: 'Technology',
        url: '/Categories/technology'
    },
    {
        label: 'Entertainment',
        url: '/Categories/entertainment'
    },
    {
        label: 'Sports',
        url: '/Categories/sports'
    },
    {
        label: 'Science',
        url: '/Categories/science'
    },
    {
        label: 'Health',
        url: '/Categories/health'
    }
];


const HeaderPanel = (props) => {

    const {
        isMobile,
        currentPageStatus,
        handleDrawerOpen,
        isMobileSideMenuOpen,
        setIsMobileSideMenuOpen
    } = props;

    return (
        <>
            {
                isMobile && <MobileHeader currentPageStatus={currentPageStatus} isMobileSideMenuOpen={isMobileSideMenuOpen} setIsMobileSideMenuOpen={setIsMobileSideMenuOpen} />
            }
            {
                !isMobile && (
                    <>
                        <div className='laptop-header-container'>
                            <div className='bg-[#003E6E] px-4'>
                                <div id='topcontainer'>
                                    <UserMenu handleDrawerOpen={handleDrawerOpen} />
                                </div>
                            </div>
                            <div className='componentcontainer px-4'>
                                <Header />
                                <TopNavMenu />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )

}

export default HeaderPanel;