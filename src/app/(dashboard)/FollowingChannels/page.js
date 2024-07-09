'use client'

import { Stack, Pagination } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChannelComponent from '../components/ChannelComponent';
import { useContext, useState, useRef, useEffect } from 'react';
import { UserDashboardContext } from '../layout';
import { Divider } from '@mui/material';
import LangSelect from '../components/common/LangSelect';
import ColorfulSearchBar from '../components/common/ColorfulSearchBar';
import SearchResultPopup from '../components/common/SearchResultPopup';

const FollowingChannels = () => {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Following / Channels');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    const ChannelsValue = [
        {
            imageUrl: 'img/logo/source/bbc.jpg',
            title: 'BBC News',
        },
        {
            imageUrl: 'img/logo/source/CNN.png',
            title: 'USA Today',
        },
        {
            imageUrl: 'img/logo/source/ET.png',
            title: 'South China Morning Post',
        },
        {
            imageUrl: 'img/logo/source/bbc.jpg',
            title: 'BBC News',
        },
        {
            imageUrl: 'img/logo/source/CNN.png',
            title: 'USA Today',
        },
        {
            imageUrl: 'img/logo/source/ET.png',
            title: 'South China Morning Post',
        },
        {
            imageUrl: 'img/logo/source/bbc.jpg',
            title: 'BBC News',
        },
        {
            imageUrl: 'img/logo/source/CNN.png',
            title: 'USA Today',
        },
        {
            imageUrl: 'img/logo/source/ET.png',
            title: 'South China Morning Post',
        },
        {
            imageUrl: 'img/logo/source/bbc.jpg',
            title: 'BBC News',
        },
        {
            imageUrl: 'img/logo/source/CNN.png',
            title: 'USA Today',
        },
        {
            imageUrl: 'img/logo/source/ET.png',
            title: 'South China Morning Post',
        },
    ];
    const [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        setShowSearchResult(true);
    }
    const placeholdertext = "channel";

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
    const ChannelsContainer = () => {
        const ChannelsElement = ChannelsValue.map((item, index) => (
            <ChannelComponent
                imageUrl={item.imageUrl}
                title={item.title}
                entertainment={item.entertainment}
                index={index}
            />
        ));

        return (
            <>
                {ChannelsElement}
            </>
        );
    }
    return (
        <div className="w-full h-full bg-[#F6FBFF]">
            <div className='pt-[50px] sm:pt-[100px] w-[90%] lg:w-[70%] m-auto'>
                <div className='flex text-[20px] sm:text-[32px] font-bold w-full'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='flex flex-row items-center justify-between'>
                            <p>Explore Channels</p>
                            &nbsp;
                            <span className='text-[#808E91]'>
                                <HelpOutlineOutlinedIcon />
                            </span>
                        </div>
                        <div className='h-[5px] bg-[#ACD6E4] hidden xl:block w-[25%]'></div>
                        <div className='h-[5px] bg-[#829BAF] hidden xl:block w-[30%]'></div>
                    </div>
                </div>
                {/* <div className='border border-solid flex flex-row items-center rounded-md w-[90%] sm:w-[50%] my-4 bg-white'>
                    <SearchIcon className='ml-4 text-[#9CA3AF]' />
                    <input placeholder='Search for a Channel' type='search' style={{ outline: 'none' }} className='p-2 flex flex-grow sm:w-[80%]' />
                </div> */}
                <div className="w-fit">
                    <div className="flex flex-row items-center mt-[25px]">
                        <img src="img/icons/categoryIcon.png" width="25px" />
                        <p>Channels</p>
                    </div>
                    <div className="h-[7px] rounded-t-[7px] bg-[#DE8D3B]" />
                </div>
                <Divider sx={{ marginBottom: "30px" }} />
                <div className='border border-solid flex flex-row items-center rounded-md w-full mt-4 bg-white'>
                    <div className="flex-grow">
                        <ColorfulSearchBar searchText={searchText} placeholdertext={placeholdertext} searchInputRef={searchInputRef} handleSearchTextChange={handleSearchTextChange} />
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <LangSelect />
                </div>
                {searchText.length > 0 && showSearchResult && <SearchResultPopup searchText={searchText} searchResultRef={searchResultRef} searchPopupRef={searchPopupRef} />}
                <div className="justify-center flex flex-wrap gap-4">
                    <ChannelsContainer />
                </div>
                <div className='flex justify-end mt-10 pb-[120px]'>
                    <Stack spacing={10}>
                        <Pagination count={229} variant="outlined" color="primary" size='10' />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default FollowingChannels;