'use client'

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import CircleText from './components/common/circleText/CircleText';
import Footer from '../(primary)/components/Footer';
import Header from '../(primary)/components/Header';
import FreeTrialComponent from './components/common/FreeTrialComponent';
import { Grid, Container } from '@mui/material';
import { createContext, useState, useEffect } from 'react';
import Link from 'next/link';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';

import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';

import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';

import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const drawerWidth = 235;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    background: 'white'
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
        background: '#F9FBFA',
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const UserDashboardContext = createContext();

export default function DashboardLayout({ children }) {
    // const [open, setOpen] = useState(false);
    const [open, setOpen] = useState(undefined);
    const [isMobile, setIsMobile] = useState(undefined);
    useEffect(() => {
        const firstWidth = window.innerWidth;
        setIsMobile(firstWidth < 442);
        setOpen(firstWidth > 950);
        const handleMediaChange = () => {
            setOpen(!window.matchMedia("(max-width: 950px)").matches);
            setIsMobile(window.matchMedia("(max-width: 442px)").matches);
        };

        window.addEventListener("resize", handleMediaChange);

        return () => {
            window.removeEventListener("resize", handleMediaChange);
        };
    }, []);

    const [menuStates, setMenuStates] = useState({
        openHome: true,
        openProfile: false,
        openSubscription: false,
        openCollection: false,
        openFollowing: false,
        openNewsLetter: false,
        openSetting: false,
        openAutomation: false,
        openTeam: false
    });
    const handleMenuClick = (menuItem) => {
        setMenuStates((prevState) => ({
            ...Object.fromEntries(Object.entries(prevState).map(([key]) => [key, key === menuItem])),
        }));
    }
    // const [headerContent, setHeaderContent] = useState('Dashboard');
    const [headerContent, setHeaderContent] = useState(undefined);
    // const [dashboardStyle, setDashboardStyle] = useState(true);
    const [dashboardStyle, setDashboardStyle] = useState(undefined);

    const contextContent = {
        headerContent: headerContent,
        setHeaderContent: setHeaderContent,
        dashboardStyle: dashboardStyle,
        setDashboardStyle: setDashboardStyle,
        isMobile: isMobile,
    }

    if (open === undefined) {
        return null;
    }

    return (
        !isMobile ?
            <>
                <ThemeProvider theme={defaultTheme}>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppBar position="absolute" open={open} /*elevation={1}*/ elevation={0} className='border border-white border-b-[#F2F2F2]' >
                            <Toolbar
                                sx={{
                                    p: '0px !important', // keep right padding when drawer closed
                                }}
                            >
                                {/* <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                // onClick={toggleDrawer}
                                sx={{
                                    marginRight: '36px',
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton> */}
                                <div className='flex flex-row items-center justify-between m-auto' style={dashboardStyle ? { width: "89%" } : { width: "70%" }}>
                                    <div>
                                        <Typography
                                            fontSize={18}
                                            color="#645E62"
                                            fontWeight={600}
                                            noWrap
                                            sx={{ flexGrow: 1 }}
                                        >
                                            {headerContent}
                                        </Typography>
                                    </div>
                                    <div className='flex flex-row gap-3 sm:gap-6'>
                                        <IconButton color="black">
                                            <SearchIcon />
                                        </IconButton>
                                        <div>
                                            <CircleText />
                                        </div>
                                    </div>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <Drawer variant="permanent" open={open}>
                            <Toolbar
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    px: [1]
                                }}
                            >
                                <img width="150px" src='img/logo/sphere/logo.svg' />
                                <IconButton
                                // onClick={toggleDrawer}
                                >
                                    <LogoutIcon />
                                </IconButton>
                            </Toolbar>
                            <Divider />
                            <FreeTrialComponent open={open} />
                            <List component="nav" className={menuStates.openFollowing ? 'h-[75vh]' : 'h-[65vh]'}>
                                <div>
                                    <React.Fragment>
                                        <Link href="/UserDashboard">
                                            <ListItemButton onClick={() =>
                                                handleMenuClick('openHome')
                                            }>
                                                <ListItemIcon>
                                                    {menuStates.openHome ? <HomeIcon /> : <HomeOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary="Dashboard" />
                                            </ListItemButton>
                                        </Link>
                                        <Link href="/UserAccount">
                                            <ListItemButton onClick={() => {
                                                handleMenuClick('openProfile');
                                            }}>
                                                <ListItemIcon>
                                                    {menuStates.openProfile ? <AccountCircleIcon /> : <AccountCircleOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary="Profile" />
                                            </ListItemButton>
                                        </Link>
                                        <div className={`flex flex-row ${menuStates.openProfile ? 'block' : 'hidden'}`}>
                                            <div className={`${open ? 'mr-6' : 'mr-0'}`}>
                                            </div>
                                            <div className='border-l-2 flex flex-col'>
                                                <Link href="/UserAccount">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Account Details' : 'AD'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/SignInAndSecurity">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Sign In & Security' : 'SS'}`} />
                                                    </ListItemButton>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link href="/Billing">
                                            <ListItemButton onClick={() => {
                                                handleMenuClick('openSubscription');
                                            }}>
                                                <ListItemIcon>
                                                    {menuStates.openSubscription ? <LoyaltyIcon /> : <LoyaltyOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary="Subscriptions" />
                                            </ListItemButton>
                                        </Link>
                                        <div className={`flex flex-row ${menuStates.openSubscription ? 'block' : 'hidden'}`}>
                                            <div className={`${open ? 'mr-6' : 'mr-0'}`}>
                                            </div>
                                            <div className='border-l-2 flex flex-col w-full'>
                                                <Link href="/Billing">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Billing' : 'Bl'}`} />
                                                    </ListItemButton>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link href="/Collections">
                                            <ListItemButton onClick={() => { handleMenuClick('openCollection') }}>
                                                <ListItemIcon>
                                                    {menuStates.openCollection ? <RocketLaunchIcon /> : <RocketLaunchOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary="Collections" />
                                            </ListItemButton>
                                        </Link>
                                        <Link href="/FollowingCategories">
                                            <ListItemButton onClick={() => {
                                                handleMenuClick('openFollowing');
                                            }}>
                                                <ListItemIcon>
                                                    {menuStates.openFollowing ? <StarIcon /> : <StarBorderOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary="Following" />
                                            </ListItemButton>
                                        </Link>
                                        <div className={`flex flex-row ${menuStates.openFollowing ? 'block' : 'hidden'}`}>
                                            <div className={`${open ? 'mr-6' : 'mr-0'}`}>
                                            </div>
                                            <div className='border-l-2 flex flex-col'>
                                                <Link href="/FollowingCategories">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Categories' : 'CG'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/FollowingTopics">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Topics' : 'TP'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/FollowingChannels">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Channels' : 'CH'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/FollowingAuthors">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Authors' : 'AU'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/FollowingLocations">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Location' : 'LO'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/FollowingFeeds">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Feeds' : 'FD'}`} />
                                                    </ListItemButton>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link href="/NewsLetter">
                                            <ListItemButton onClick={() => {
                                                handleMenuClick('openNewsLetter');
                                            }}>
                                                <ListItemIcon>
                                                    {menuStates.openNewsLetter ? <CampaignIcon /> : <CampaignOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary="Newsletter & Alerts" />
                                            </ListItemButton>
                                        </Link>
                                        <div className={`flex flex-row ${menuStates.openNewsLetter ? 'block' : 'hidden'}`}>
                                            <div className={`${open ? 'mr-6' : 'mr-0'}`}>
                                            </div>
                                            <div className='border-l-2 flex flex-col'>
                                                <Link href="/NewsLetter">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'NewsLetter' : 'NL'}`} />
                                                    </ListItemButton>
                                                </Link>
                                                <Link href="/EmailDigest">
                                                    <ListItemButton>
                                                        <ListItemText primary={`${open ? 'Email Digest' : 'ED'}`} />
                                                    </ListItemButton>
                                                </Link>
                                            </div>
                                        </div>
                                        <Link href="/Automation">
                                            <ListItemButton onClick={() => {
                                                handleMenuClick('automation');
                                            }}>
                                                <ListItemIcon>
                                                    {menuStates.openAutomation ? <SettingsSuggestOutlinedIcon /> : <SettingsSuggestOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <span>Automation</span>
                                                </ListItemText>
                                            </ListItemButton>
                                        </Link>
                                        <Link href="/Team">
                                            <ListItemButton onClick={() => {
                                                handleMenuClick('team');
                                            }}>
                                                <ListItemIcon>
                                                    {menuStates.openTeam ? <GroupOutlinedIcon /> : <GroupOutlinedIcon />}
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <span>Team</span>
                                                </ListItemText>
                                            </ListItemButton>
                                        </Link>
                                    </React.Fragment>
                                </div>
                            </List>
                            <List component="nav">
                                <React.Fragment>
                                    <Link href="/UserSetting">
                                        <ListItemButton onClick={() => {
                                            handleMenuClick('openSetting');
                                        }}>
                                            <ListItemIcon>
                                                {menuStates.openSetting ? <SettingsIcon /> : <SettingsOutlinedIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary="Settings" />
                                        </ListItemButton>
                                    </Link>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <HelpOutlineOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Help & Feedback" />
                                    </ListItemButton>
                                </React.Fragment>
                            </List>
                        </Drawer>
                        <Container /*maxWidth={menuStates.openHome ? 'xl' : 'lg'}*/ maxWidth="false" sx={{ padding: '0px !important' }} >
                            <UserDashboardContext.Provider value={contextContent}>
                                {children}
                            </UserDashboardContext.Provider>
                        </Container>
                    </Box>
                </ThemeProvider>
                <div className='w-full bg-[#EEF3F7] text-[#7F8487] pr-[70px]' style={open ? { paddingLeft: `${drawerWidth}px`, paddingRight: '70px' } : { paddingLeft: '0px', paddingRight: '0px' }}>
                    <Footer isMobile={isMobile} />
                </div>
            </> :
            <>
                <Header isMobile={isMobile} />
                <UserDashboardContext.Provider value={contextContent}>
                    {children}
                </UserDashboardContext.Provider>
                <Footer isMobile={isMobile} />
            </>
    );
}
