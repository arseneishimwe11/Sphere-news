'use client'

import ErrorIcon from '@mui/icons-material/Error';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PricingPlanTable from './PricingPlanTable';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const PricingCardComponent = (props) => {
    const {currentPlan, setCurrentPlan} = props;
    return (
        <div className='mt-[96px] 2xl:bg-[#E7F0F5] rounded-xl relative flex flex-wrap items-center justify-center 2xl:justify-normal gap-5'>
            <div className='min-w-[24%] h-[450px] pt-[50px] pb-[65px] px-[40px] bg-[#E7F0F5] rounded-xl text-black'>
                <p className='text-[36px] font-[500] mb-3'>Build</p>
                <p className='text-[14px] w-[185px]'>Start with our free plan to build your first Search & Discovery Solution</p>
                <p className='text-[45px]'>Free</p>
                <p className='text-[14px]'>10,000 search results/mo</p>
                <p className='mt-[10px] text-[18px]'><span className='text-[25px] text-[#4FBAE9]'>1 Million</span>&nbsp; <span className='text-[18px]'>records</span></p>
                <Link href='/Checkout'>
                    <button className='mt-[52px] 2xl:mt-[9px] py-[10px] px-[54px] text-[14px] w-[191px] h-[43px] rounded-[22px] bg-[#4FBAE9] text-white'>{currentPlan > 0 ? 'Downgrade' : 'Cancel'}</button>
                </Link>
            </div>
            {/* <div className='flex flex-wrap gap-[20px] relative justify-center top-0 2xl:top-[-44px]'> */}
                <div className='2xl:absolute min-w-[24%] h-[450px] bg-[#6CCB7F] left-[25%] top-[-44px] rounded-xl'>
                    <div className='relative'>
                        <img 
                            src='/img/others/pricing_panel_green.png'
                            className='absolute -top-[90px] right-0 rounded-tr-xl'
                        />
                        <p className='mt-[90px] ml-[35px] text-[white] text-[36px] font-[500] mb-[11px]'>Grow</p>
                        <p className='max-w-[210px] ml-[42px] text-[white] text-[14px] mb-[9px]'>Develop your search foundation with simple, usage based pricing</p>
                        <p className='ml-[40px] text-[white] text-[45px] mb-[7px]'><span className='text-[30px]'>$&nbsp;</span>0.50</p>
                        <p className='max-w-[210px] ml-[42px] text-[white] text-[14px] mb-[9px]'>1000 search requests/mo<br />10,000 Records included</p>
                        <Link href='/Checkout'>
                            <button className='mt-[14px] ml-[40px] py-[10px] px-[54px] text-[14px] w-[191px] h-[43px] rounded-[22px] text-white border border-white'>{currentPlan > 1 ? 'Downgrade' : (currentPlan === 1 ? 'Cancel' : 'Upgrade')}</button>
                        </Link>
                    </div>
                </div>
                <div className='2xl:absolute min-w-[24%] h-[450px] bg-[#2F97D2] left-[50%] top-[-44px] rounded-xl'>
                    <div className='relative'>
                        <img 
                            src='/img/others/pricing_panel_blue_light.png'
                            className='absolute -top-[90px] right-0 rounded-tr-xl'
                        />
                        <p className='mt-[90px] ml-[35px] text-[white] text-[36px] font-[500] mb-[11px]'>Grow</p>
                        <p className='max-w-[210px] ml-[42px] text-[white] text-[14px] mb-[9px]'>Develop your search foundation with simple, usage based pricing</p>
                        <p className='ml-[40px] text-[white] text-[45px] mb-[7px]'><span className='text-[30px]'>$&nbsp;</span>0.50</p>
                        <p className='max-w-[210px] ml-[42px] text-[white] text-[14px] mb-[9px]'>1000 search requests/mo<br />10,000 Records included</p>
                        <Link href='/Checkout'>
                            <button
                                className='mt-[14px] ml-[40px] py-[10px] px-[54px] text-[14px] w-[191px] h-[43px] rounded-[22px] text-white border border-white'>{currentPlan > 2 ? 'Downgrade' : (currentPlan === 2 ? 'Cancel' : 'Upgrade')}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='2xl:absolute min-w-[24%] h-[450px] bg-[#006BBC] left-[75%] top-[-44px] rounded-xl'>
                    <div className='relative'>
                        <img 
                            src='/img/others/pricing_panel_blue_dark.png'
                            className='absolute -top-[90px] right-0 rounded-tr-xl'
                        />
                        <p className='mt-[90px] ml-[35px] text-[white] text-[36px] font-[500] mb-[11px]'>Grow</p>
                        <p className='max-w-[210px] ml-[42px] text-[white] text-[14px] mb-[9px]'>Develop your search foundation with simple, usage based pricing</p>
                        <p className='ml-[40px] text-[white] text-[45px] mb-[7px]'><span className='text-[30px]'>$&nbsp;</span>0.50</p>
                        <p className='max-w-[210px] ml-[42px] text-[white] text-[14px] mb-[9px]'>1000 search requests/mo<br />10,000 Records included</p>
                        <Link href='/Checkout'>
                            <button className='mt-[14px] ml-[40px] py-[10px] px-[54px] text-[14px] w-[191px] h-[43px] rounded-[22px] text-white border border-white' disabled={currentPlan === 1}>{currentPlan < 3 ? 'Upgrade' : 'Actived'}</button>
                        </Link>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

const PricingComponent = () => {
    const [currentPlan, setCurrentPlan] = useState(2);
    const router = useRouter();
    const handleReturn = () => {
        router.back();
    }
    return (
        <div className='mt-[70px] sm:mt-[90px] w-[90%] lg:w-[90%] m-auto mb-[50px]'>
            <div className="flex flex-row items-center bg-[#E6F4FD] p-3 rounded-lg">
                <span><ErrorIcon style={{ color: "#016EF0" }} /></span>&nbsp; &nbsp;
                <p>You have 10 more days in trial before your supscription will start.</p>
            </div>
            <div className='mt-5'>
                {/* <Link href="/Billing"> */}
                    <button className='items-center' onClick={handleReturn}>
                        <ArrowBackIcon size="20px" />&nbsp;&nbsp;
                        <span>Billing</span>
                    </button>
                {/* </Link> */}
            </div>
            <div className='mt-6 flex flex-col sm:flex-row sm:items-center'>
                <p className='text-[23px] font-[600] flex-grow'>Choose your plan</p>
                <div className='text-[13px] font-[600] flex gap-1'>
                    <button className='px-3 py-2 bg-black text-white rounded-lg'>Annual</button>
                    <button className='px-3 py-2 border border-solid bg-white text-black rounded-lg'>Monthly</button>
                </div>
            </div>
            <div className='mt-5 text-[13px] text-[darkgray]'>
                <p>Pick the subscription that fits your needs.</p>
            </div>
            <PricingCardComponent 
                currentPlan={currentPlan}
                setCurrentPlan={setCurrentPlan}
            />
            <div className='flex flex-col xl:flex-row mb-[33px] justify-center gap-[20px]'>
                <p className='text-[36px] mb-[7px] mt-[80px]'>Features</p>
                <div className='mb-[7px] xl:mt-[150px] flex flex-col xl:flex-row justify-center gap-[20px]'>
                    <div className='flex flex-col items-center gap-[17px]'>
                        <button className='py-[8px] px-[73px] text-[18px] w-[191px] h-[43px] rounded-[22px] bg-[#D6E8F2] text-[#1C1C1C]'>Build</button>
                        <button className='text-[#4FBAE9] text-[16px]'>Get Started <span><ArrowRightIcon /></span></button>
                    </div>
                    <div className='flex flex-col items-center gap-[17px]'>
                        <button className='py-[8px] px-[73px] text-[18px] w-[191px] h-[43px] rounded-[22px] bg-[#6CCB7F] text-[#FFF]'>Build</button>
                        <button className='text-[#4FBAE9] text-[16px]'>Get Started <span><ArrowRightIcon /></span></button>
                    </div>
                    <div className='flex flex-col items-center gap-[17px]'>
                        <button className='py-[8px] px-[73px] text-[18px] w-[191px] h-[43px] rounded-[22px] bg-[#2F97D2] text-[#FFF]'>Build</button>
                        <button className='text-[#4FBAE9] text-[16px]'>Get Started <span><ArrowRightIcon /></span></button>
                    </div>
                    <div className='flex flex-col items-center gap-[17px]'>
                        <button className='py-[8px] px-[73px] text-[18px] w-[191px] h-[43px] rounded-[22px] bg-[#006BBC] text-[#FFF]'>Build</button>
                        <button className='text-[#4FBAE9] text-[16px]'>Get Started <span><ArrowRightIcon /></span></button>
                    </div>
                </div>
            </div>
            <div className=''>
                <PricingPlanTable />
            </div>
        </div >
    );
}

export default PricingComponent;