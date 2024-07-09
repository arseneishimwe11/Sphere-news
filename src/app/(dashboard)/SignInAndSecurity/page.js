'use client'

import SignInAndSecurityContainer from "../components/SignInAndSecurityContainer";
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';

export default function SignInAndSecurity() {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Profile / Sign In & Security');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(false);
    return (
        <div className='mt-[50px] sm:mt-[100px]  w-[90%] lg:w-[70%] m-auto mb-[100px]'>
            <div className='flex text-[20px] sm:text-[32px] font-bold justify-between'>
                <div className='flex flex-row'>
                    <p>Sign In & Security</p>
                </div>
            </div>
            <SignInAndSecurityContainer />
        </div>
    );
}