'use client'

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BillingContainer from "../components/BillingContainer";
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';
import { Button } from "@mui/material";

const BillingSub = () => {

    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Subscriptions / Billing');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);

    return (
        <>
            <div className='mt-[50px] sm:mt-[120px]  w-[90%] lg:w-[70%] m-auto mb-[50px]'>
                <div className='flex text-[20px] sm:text-[32px] font-bold justify-between'>
                    <div className='flex flex-row items-center'>
                        <p>Billing</p>
                        <span>
                            <HelpOutlineIcon />
                        </span>
                    </div>
                    <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px' }}>Save</Button>
                </div>
                <BillingContainer />
                <div className='mt-[50px] flex justify-end'>
                    <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px' }}>Save</Button>
                </div>
            </div>
        </>
    );
}

export default BillingSub;