'use client'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import UserDashboardContainer from '../components/UserDashboardContainer';
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';

export default function UserDashboard() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Dashboard');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(true);
    return (
        <div className='bg-[#F6FBFF]'>
            <div className='pt-[40px] mt-[60px] h-full w-[89%] pb-[20px] m-auto'>
                <div className='flex text-[30px] font-bold'>
                    <p>Dashboard&nbsp;</p>
                    <span>
                        <HelpOutlineIcon />
                    </span>
                </div>
                <UserDashboardContainer />
            </div>
        </div>
    );
}