'use client'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingContainer from '../components/SettingContainer';
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';
import { Button } from '@mui/material';

export default function UserDashboard() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('User Settings');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    return (
        <div className='mt-[50px] sm:mt-[100px] w-[90%] lg:w-[70%] m-auto'>
            <div className='flex text-[20px] sm:text-[32px] font-bold justify-between'>
                <div className='flex flex-row'>
                    <p>Settings&nbsp;</p>
                    <span className='text-[gray]'>
                        <HelpOutlineIcon />
                    </span>
                </div>
                {/* <button className=' text-[#FFF] text-[14px] bg-[#1F232C] px-4 py-2 rounded-lg'>Save</button> */}
                <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px'}}>Save</Button>
            </div>
            <SettingContainer />
            <div className='mt-[50px] flex justify-end mb-[50px]'>
                {/* <button className='font-bold text-[#FFF] text-[14px] bg-[#1F232C] px-4 py-3 rounded-lg'>Save</button> */}
                <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px'}}>Save</Button>
            </div>
        </div>
    );
}