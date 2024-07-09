'use client'

import FollowingTopicsContainer from "../components/FollowingTopicsContainer";
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';
import MobileExploreTopic from "@/app/(primary)/components/landingPageContainer/Mobile/MobileExploreTopic";
import CategoriesContainer from "../components/FollowingCategoriesContainer";

const FollowingTopics = () => {
    const content = useContext(UserDashboardContext);
    const isMobile = content.isMobile;
    return (
        !isMobile ?
            <FollowingTopicsContainer /> :
            <div className='pt-[60px] w-full h-[100vh] bg-[#F4F9FC]'>
                <MobileExploreTopic />
                <div className="p-4 h-[calc(100vh-247px)] flex flex-col">
                    <h3 className="text-[30px] font-[600] py-6">Topics</h3>
                    <div className="flex flex-grow items-center justify-center">
                        <div className="flex flex-row gap-4 overflow-auto">
                            <CategoriesContainer />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default FollowingTopics;
// 'use client'

// import SearchIcon from "@mui/icons-material/Search";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';
// import CategoriesContainer from "../components/FollowingCategoriesContainer";
// import { useContext } from 'react';
// import { UserDashboardContext } from '../layout';

// const FollowingTopics = () => {
//     const content = useContext(UserDashboardContext);

//     const setHeaderContent = content.setHeaderContent;
//     setHeaderContent('Following / Topics');

//     const setDashboardStyle = content.setDashboardStyle;
//     setDashboardStyle(false);

//     return (
//         <div className="w-full h-full bg-[#F6FBFF]">
//             <div className='pt-[50px] sm:pt-[100px] w-[90%] lg:w-[70%] m-auto'>
//                 <div className='flex text-[20px] sm:text-[32px] font-bold w-full'>
//                     <div className='flex flex-row items-center justify-between w-full'>
//                         <div className='flex flex-row items-center justify-between'>
//                             <p>Explore Topics</p>
//                             &nbsp;
//                             <span className='text-[#808E91]'>
//                                 <HelpOutlineOutlinedIcon />
//                             </span>
//                         </div>
//                         <div className='h-[5px] bg-[#ACD6E4] hidden xl:block w-[25%]'></div>
//                         <div className='h-[5px] bg-[#829BAF] hidden xl:block w-[30%]'></div>
//                     </div>
//                 </div>
//                 <div className='border border-solid flex flex-row items-center rounded-md w-[90%] sm:w-[50%] my-4 bg-white'>
//                     <SearchIcon className='ml-4 text-[#9CA3AF]' />
//                     <input placeholder='Search for a Topic' type='search' style={{ outline: 'none' }} className='p-2 flex flex-grow sm:w-[80%]' />
//                 </div>
//                 <div className="justify-center flex flex-wrap gap-4" spacing={2}>
//                     <CategoriesContainer />
//                 </div>
//                 <div className='flex justify-end mt-10 pb-[100px]'>
//                     <Stack spacing={10}>
//                         <Pagination count={229} variant="outlined" color="primary" size='10' />
//                     </Stack>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FollowingTopics;