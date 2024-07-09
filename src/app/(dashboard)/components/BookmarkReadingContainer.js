'use client'

import { Stack, Pagination, IconButton } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomSelect from '../components/common/dropdown/Dropdown';
import { useState } from 'react';
import ReadingHistoryContainer from '../components/readingHistoryContainer/ReadingHistoryContainer';
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';

const BookmarksAndReadingContainer = () => {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Following / Bookmarks & Reading History');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);

    const [val, setVal] = useState("");
    const [tabSelect, setTabSelect] = useState(0);
    return (
        <div className="my-12  w-[90%] lg:w-[70%] m-auto">
            <div className="flex flex-row items-center mt-[100px]">
                <h3 className="text-[20px] md:text-[35px] text-[#000] font-bold">{tabSelect === 0 ? 'Reading History' : 'Bookmarks'}</h3>
                <span>
                    <HelpOutlineIcon />
                </span>
            </div>
            <div className='mt-[20px]'>
                <div className='flex flex-row items-center gap-4'>
                    <div className='flex flex-row items-center gap-2 cursor-pointer'
                        onClick={() => setTabSelect(0)}
                    >
                        <p>Reading History</p><span className='rounded-full px-[5px] bg-[#9AD5D3] text-[12px]'>85</span>
                    </div>
                    <div className='flex flex-row items-center gap-2 cursor-pointer'
                        onClick={() => setTabSelect(1)}
                    >
                        <p>Bookmarks</p><span className='rounded-full px-[5px] bg-[#9AD5D3] text-[12px]'>12</span>
                    </div>
                </div>
                <hr className={`border border-t-[6px] rounded-t-lg border-[#FA871B] transition-all duration-300 ${tabSelect === 0 ? 'w-[160px]' : 'ml-[165px] w-[125px]'}`} />
                <hr className='border border-t-1' />
            </div>
            <div className='flex flex-row justify-between items-center my-3'>
                <p><strong>{tabSelect === 0 ? 14 : 85}</strong> Stories</p>
                <div className='flex flex-row gap-2 sm:gap-6'>
                    <div className='flex flex-row'>
                    <IconButton>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosIcon />
                    </IconButton>
                    </div>
                    <div className='w-[100%] sm:w-[70%] z-[300]'>
                        <CustomSelect
                            value={val}
                            onChange={setVal}
                            options={['Newest', 'Oldest', 'Recently Updated', 'Most Saves', 'Most Likes', 'A-Z Title', 'Z-A Title']}
                            placeholder="Sort: Newest&nbsp;"
                            radius="xl"
                        />
                    </div>
                </div>
            </div>
            <div className="justify-center flex flex-wrap gap-4">
                <ReadingHistoryContainer tabSelect={tabSelect} />
            </div>
            <div className='flex justify-end mt-10'>
                <Stack spacing={10}>
                    <Pagination count={229} variant="outlined" color="primary" size='10' />
                </Stack>
            </div>
        </div>
    )
}

export default BookmarksAndReadingContainer;