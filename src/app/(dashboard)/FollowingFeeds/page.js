'use client'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useContext, useState, useRef, useEffect } from 'react';
import { UserDashboardContext } from '../layout';
import { Divider, IconButton } from '@mui/material';
import LangSelect from '../components/common/LangSelect';
import ColorfulSearchBar from '../components/common/ColorfulSearchBar';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

import SearchResultPopup from '../components/common/SearchResultPopup';
import FeedSearch from './FeedSearch';
import NewsLetterFeedPage from './NewsLetterFeedPage';
import AiFeedSearch from './AiFeedSearch';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

export default function FollowingFeeds() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Following / Feeds');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    const [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        setShowSearchResult(true);
    }
    const placeholdertext = "topic, website, or RSS link";

    const [showSearchResult, setShowSearchResult] = useState(false);
    const searchInputRef = useRef(null);
    const searchResultRef = useRef(null);
    const searchPopupRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (
            searchInputRef.current &&
            !searchInputRef.current.contains(event.target) &&
            searchResultRef.current &&
            !searchResultRef.current.contains(event.target)
        ) {
            setShowSearchResult(false);
        }
    };

    const [tabSelect, setTabSelect] = useState(0);
    const tabData = [
        { id: 0, icon: <RssFeedIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Website" },
        { id: 1, icon: <NoteAddOutlinedIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "AI Feeds" },
        { id: 2, icon: <GoogleIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Google News" },
        { id: 3, icon: <TwitterIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Twitter" },
        { id: 4, icon: <RedditIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Reddit" },
        { id: 5, icon: <EmailOutlinedIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Newsletters" },
        { id: 6, icon: <FacebookIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Facebook Pages" },
        { id: 7, icon: <TelegramIcon sx={{ color: "#DE8D3B", fontSize: "20px" }} />, label: "Telegram" },
    ]
    const ChannelTab = ({ icon, label, tabStatus, id }) => {
        return (
            <div className="w-fit">
                <div className="flex flex-row items-center mt-[25px]" onClick={() => setTabSelect(id)}>
                    <IconButton sx={{ backgroundColor: "#E4ECEB", margin: "3px" }}>
                        {icon}
                    </IconButton>
                    <p>{label}</p>
                </div>
                {tabStatus === id && <div className="h-[7px] rounded-t-[7px] bg-[#DE8D3B]" />}
            </div>
        );
    }
    return (
        <div className="w-full h-full">
            <div className='pt-[50px] sm:pt-[100px] w-[90%] lg:w-[70%] m-auto'>
                <div className='flex text-[20px] sm:text-[32px] font-bold w-full'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='flex flex-row items-center justify-between'>
                            <p>Feeds</p>
                            &nbsp;
                            <span className='text-[#808E91]'>
                                <HelpOutlineOutlinedIcon />
                            </span>
                        </div>
                        <div className='h-[5px] bg-[#ACD6E4] hidden xl:block w-[25%]'></div>
                        <div className='h-[5px] bg-[#829BAF] hidden xl:block w-[30%]'></div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row gap-5'>
                        {/* <div className="w-fit">
                            <div className="flex flex-row items-center mt-[25px]">
                                <img src="img/icons/categoryIcon.png" width="25px" />
                                <p>Websites</p>
                            </div>
                            <div className="h-[7px] rounded-t-[7px] bg-[#DE8D3B]" />
                        </div>
                        <div className="w-fit">
                            <div className="flex flex-row items-center mt-[25px]">
                                <img src="img/icons/categoryIcon.png" width="25px" />
                                <p>Websites</p>
                            </div>
                            <div className="h-[7px] rounded-t-[7px] bg-[#DE8D3B]" />
                        </div> */}
                        {tabData.map((tab) =>
                            <ChannelTab
                                key={tab.id}
                                icon={tab.icon}
                                label={tab.label}
                                id={tab.id}
                                tabStatus={tabSelect}
                            />
                        )}
                    </div>
                    <Divider sx={{ marginBottom: "30px" }} />
                    {tabSelect !== 5 &&
                        <div className='border border-solid flex flex-row items-center rounded-md w-full mt-4 bg-white'>
                            <div className="flex-grow">
                                <ColorfulSearchBar searchText={searchText} placeholdertext={placeholdertext} searchInputRef={searchInputRef} handleSearchTextChange={handleSearchTextChange} />
                            </div>
                            <Divider orientation="vertical" flexItem />
                            <LangSelect />
                        </div>
                    }
                    {tabSelect === 0 && (searchText.length > 0 && showSearchResult && <SearchResultPopup searchText={searchText} searchResultRef={searchResultRef} searchPopupRef={searchPopupRef} labelText="FEEDS" />)}
                    {tabSelect === 1 && <AiFeedSearch />}
                    {tabSelect === 0 && <FeedSearch />}
                    {tabSelect === 5 && <NewsLetterFeedPage />}
                    <div className='flex justify-end mt-10 pb-[200px]'>
                        <Stack spacing={10}>
                            <Pagination count={229} variant="outlined" color="primary" size='10' />
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
}