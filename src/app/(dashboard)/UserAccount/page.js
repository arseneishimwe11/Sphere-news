'use client'

import AccountDetail from "../components/accountContainer/AccountDetails";
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';
import { Button } from "@mui/material";

export default function UserAccount() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Profile / Account Details');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    return (
        <div className='mt-[50px] sm:mt-[100px] w-[90%] lg:w-[70%] m-auto'>
            <div className='flex text-[20px] sm:text-[32px] font-bold justify-between'>
                <div className='flex flex-row'>
                    <p>Account Details</p>
                </div>
                <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px'}}>Save</Button>
            </div>
            <div>
                <AccountDetail />
            </div>
            <div className='my-[30px] flex justify-end'>
                <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px'}}>Save</Button>
            </div>
        </div>
    );
}