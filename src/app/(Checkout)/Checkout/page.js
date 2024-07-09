'use client'
import { useState } from 'react';
import { Button, IconButton, rgbToHex } from "@mui/material";

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GoogleIcon from '@mui/icons-material/Google';

const FormComponent = () => {
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    return (
        <div className="flex flex-col w-full p-4 py-8 gap-4 bg-[#F6F8F7] rounded-md">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2 w-[49%] min-w-[none]">
                    <span className='text-[16px] font-bold'>First name</span>
                    <input placeholder="First name" className='p-2 rounded-lg border border-1 border-gray-300'/>
                </div>
                <div className="flex flex-col gap-2 w-[49%] min-w-[none]">
                    <span className='text-[16px] font-bold'>Last name</span>
                    <input placeholder="Last name" className='p-2 rounded-lg border border-1 border-gray-300'/>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className='text-[16px] font-bold'>Email address</span>
                <input placeholder="Email address" className='p-2 rounded-lg border border-1 border-gray-300'/>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2 w-[49%]">
                    <span className='text-[16px] font-bold'>Create password</span>
                    <input type='password' placeholder="Create password" className='p-2 rounded-lg border border-1 border-gray-300'/>
                </div>
                <div className="flex flex-col gap-2 w-[49%]">
                    <span className='text-[16px] font-bold'>Confirm password</span>
                    <input type='password' placeholder="Confirm password" className='p-2 rounded-lg border border-1 border-gray-300'/>
                </div>
            </div>
        </div>
    );
}

const CreditCardContent = () => {
    return (
        <div className='p-4 rounded-md bg-[#f7f7f7]'>
            <div className='flex flex-row items-center gap-2'>
                <VerifiedUserIcon sx={{color: 'rgb(81,164,6)'}}/>
                <p>Secure Payments by <b>stripe</b></p>
            </div>
            <div className='flex flex-row w-full gap-2 my-4'>
                <div className='flex flex-col p-2 w-[50%] border border-2 rounded-md border-blue-300 text-blue-700'>
                    <CreditCardIcon />
                    <p>Card</p>
                </div>
                <div className='flex flex-col p-2 w-[50%] border border-2 rounded-md border-[rgb(172,198,209)]'>
                    <GoogleIcon />
                    <p>Google Pay</p>
                </div>
            </div>
            <div className='flex flex-row w-full gap-2 my-2'>
                <div className='flex flex-col w-[50%]'>
                    <p>Card number</p>
                    <div className='flex flex-row w-full p-2 border border-1 border-gray-300 bg-white rounded-md'>
                        <input className='w-full border-0 outline-none' placeholder='1234 1234 1234 1234'/>

                    </div>
                </div>
                <div className='flex flex-col w-[25%]'>
                    <p>Expiration</p>
                    <div className='flex flex-row w-full p-2 border border-1 border-gray-300 bg-white  rounded-md'>
                        <input className='w-full border-0 outline-none' placeholder='MM/YY'/>

                    </div>
                </div>
                <div className='flex flex-col w-[25%]'>
                    <p>CVC</p>
                    <div className='flex flex-row w-full p-2 border border-1 border-gray-300 bg-white  rounded-md'>
                        <input className='w-full border-0 outline-none' placeholder='CVC'/>

                    </div>
                </div>
            </div>
        </div>
    )
}

const PaymentMethodSelectComponent = () => {
    const [select, setSelect] = useState('credit');

    return (
        <>
            <div className='flex flex-row w-full gap-2'>
                <div className={`p-2 w-[50%] text-center rounded-lg hover:cursor-pointer ${select === 'credit' ? 'border border-2 border-blue-300' : 'bg-[#efefef]'}`} onClick={() => setSelect('credit')}>
                    Credit Card
                </div>
                <div className={`p-2 w-[50%] text-center rounded-lg hover:cursor-pointer ${select === 'paypal' ? 'border border-2 border-blue-300' : 'bg-[#efefef]'}`} onClick={() => setSelect('paypal')}>
                    Paypal
                </div>
            </div>
            {
                select === 'credit' && 
                    <div>
                        <p className='text-black font-bold my-2'>Credit Card Info</p>
                        <CreditCardContent />
                    </div>
            }
            {
                select === 'paypal' && 
                    <div className='flex flex-col gap-2 my-2'>
                        <Button variant='contained' 
                            sx={{
                                backgroundColor: '#FFC43A !important',
                                width: '100%'
                            }}
                        >
                            Paypal 
                        </Button>
                        <Button variant='contained' 
                            sx={{
                                bgcolor: 'rgb(0, 48, 136) !important',
                                width: '100%'
                            }}
                        >
                            Paypal Credit
                        </Button>
                    </div>
            }
        </>
    )
}

const Checkout = () => {
    return (
        <div className="flex flex-col justify-between w-full h-full p-4 items-center border border-1 border-gray-300 rounded-xl text-[#000]">
            <h3 className="text-[24px] font-bold">Get Your Free Trial</h3>
            <p><b>After 14-Days Free Trial: $12.00/month</b> + applicable taxes</p>
            <div className="flex flex-row items-center my-4 border border-1 border-black rounded-xl overflow-hidden">
                <Button 
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#fff',
                        color: '#000'
                    }} 
                    className="w-[160px]"
                >
                    Premium
                </Button>
                <Button 
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#000 !important',
                        color: '#fff'
                    }} 
                    className="w-[160px]"
                >
                    Premium Plus
                </Button>
            </div>
            <FormComponent />
            <div className='flex flex-col w-full mt-4'>
                <h6 className='text-[16px] font-bold'>Select Payment Method</h6>
                <div className='flex flex-col mt-4 gap-2'>
                    <PaymentMethodSelectComponent />
                </div>
            </div>
            <p className='text-[14px] font-bold my-2'>
                By proceeding, you agree that after your free trial, you will be charged the above price monthly in advance until you cancel, and you agree to The Sphere's <span className='underline text-[#0A4DB0]'>Terms of Service</span>, <span className='underline text-[#0A4DB0]'>Privacy Policy</span>.
                Cancel anytime in your account. Cancellations are effective at the end of the current billing perild.
            </p>
            <Button 
                sx={{
                    textTransform: 'none',
                    backgroundColor: '#000 !important',
                    color: '#fff'
                }} 
                className="w-full my-2 hover:bg-[#ccc] rounded-lg"
            >
                Start Free Trial
            </Button>
            <p>After free trial you can <b>cancel, upgrade or downgrade anytime</b>. Easy and online.</p>
        </div>
    )
}

export default Checkout;