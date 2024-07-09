'use client'

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import CategoriesContainer from "../components/FollowingCategoriesContainer";
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';
import { useState, useEffect, useRef } from "react";
import { Divider } from "@mui/material";
import LangSelect from "../components/common/LangSelect";
import SearchResultPopup from "../components/common/SearchResultPopup";
import ColorfulSearchBar from "../components/common/ColorfulSearchBar";

const FollowingCategories = () => {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Following / RSS Feeds');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    const placeholdertext = "category";

    const [searchText, setSearchText] = useState("");
    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
        setShowSearchResult(true);
    }

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
    return (
        <div className="w-full h-full bg-[#FFF]">
            <div className='pt-[50px] sm:pt-[100px] w-[90%] lg:w-[70%] m-auto'>
                <div className='flex text-[20px] sm:text-[32px] font-bold w-full'>
                    <div className='flex flex-row items-center justify-between w-full'>
                        <div className='flex flex-row items-center justify-between'>
                            <p>Categories</p>
                            &nbsp;
                            <span className='text-[#808E91]'>
                                <HelpOutlineOutlinedIcon />
                            </span>
                        </div>
                        <div className='h-[5px] bg-[#ACD6E4] hidden xl:block w-[25%]'></div>
                        <div className='h-[5px] bg-[#829BAF] hidden xl:block w-[30%]'></div>
                    </div>
                </div>
                <div className="w-fit">
                    <div className="flex flex-row items-center mt-[25px]">
                        <img src="img/icons/categoryIcon.png" width="25px" />
                        <p>Categories</p>
                    </div>
                    <div className="h-[7px] rounded-t-[7px] bg-[#DE8D3B]" />
                </div>
                <Divider sx={{ marginBottom: "30px" }} />
                <div className='border border-solid flex flex-row items-center rounded-md w-full mt-4 bg-white'>
                    <div className="flex-grow">
                        <ColorfulSearchBar placeholdertext={placeholdertext} searchText={searchText} searchInputRef={searchInputRef} handleSearchTextChange={handleSearchTextChange} />
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <LangSelect />
                </div>
                {searchText.length > 0 && showSearchResult && <SearchResultPopup searchText={searchText} searchResultRef={searchResultRef} searchPopupRef={searchPopupRef} />}
                <div className="justify-center flex flex-wrap gap-4">
                    <CategoriesContainer />
                </div>

                <div className='flex justify-end mt-10 pb-10'>
                    <Stack spacing={10}>
                        <Pagination count={229} variant="outlined" color="primary" size='10' />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default FollowingCategories;