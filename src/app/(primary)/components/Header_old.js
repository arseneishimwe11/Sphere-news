'use client'

import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';

import IconButton from '@mui/material/IconButton';
import { SvgIcon } from '@mui/material';
import Button from '@mui/material/Button';
import DescriptionIcon from '@mui/icons-material/Description';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import PolicyIcon from '@mui/icons-material/Policy';

import { SelectBox } from './common';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const people = [
        {
            imageUrl:'#',
            name: 'name1',
            email: 'email1'
        },
        {
            imageUrl:'#',
            name: 'name2',
            email: 'email2'
        }
    ];
    
    const selectItems = [
        {
            value: 'Articles',
            showComponent: <div className="flex flex-row items-center">
                <DescriptionIcon 
                    sx={{
                        fontSize: 'large',
                        color: '#FFF',
                        backgroundColor: '#08305D',
                        padding: '2px',
                        borderRadius: '2px',
                    }}
                />
                <span className='text-[12px] text-[#333] ml-2'>Articles</span>
            </div>
        },
        {
            value: 'Sports',
            showComponent: <div className="flex flex-row items-center">
                <SportsSoccerIcon 
                    sx={{
                        fontSize: 'large',
                        color: '#FFF',
                        backgroundColor: '#08305D',
                        padding: '2px',
                        borderRadius: '2px'
                    }}
                />
                <span className='text-[12px] text-[#333] ml-2'>Sports</span>
            </div>
        },
        {
            value: 'Politics',
            showComponent: <div className="flex flex-row items-center">
                <PolicyIcon 
                    sx={{
                        fontSize: 'large',
                        color: '#FFF',
                        backgroundColor: '#08305D',
                        padding: '2px',
                        borderRadius: '2px'
                    }}
                />
                <span className='text-[12px] text-[#333] ml-2'>Politics</span>
            </div>
        }
    ];

    return(
        <>
            <div className="flex flex-row items-center justify-between mt-8">
                <section className="w-md px-2 items-center">
                    <img
                        src="/images/Logo.png"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={146}
                        height={40}
                    />
                </section>
                <section className="hidden lg:flex flex-grow items-center h-10 mx-2 border border-sky-600 bg-gray-100 rounded-lg">
                    <MagnifyingGlassIcon className="h-4 w-4 ml-2 text-[#000]" />
                    <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder='Search for news, videos and journalists...' className='w-[65%] px-2 outline-none bg-gray-100 text-gray-500 text-[12px] border-[#206E9E]' />
                    <div className="flex items-center min-w-[240px] h-full ml-auto bg-[#206E9E] rounded-lg">
                        <div className='flex flex-row items-center w-[70%] h-[100%] pl-2 pr-1 bg-gray-100 outline-none rounded-tr-lg rounded-br-lg '>
                            <XMarkIcon onClick={(e) => setSearchQuery('')} className='w-3 mr-4 bg-gray-400 rounded-full text-gray-300 cursor-pointer'/>
                            <SelectBox
                                id="category"
                                name="category"
                                value="Articles"
                                items={selectItems}
                                labelIcon={<DescriptionIcon className="text-[#cbd5e1]" />}
                                passStyle={{width: '100%', height: '100%', padding: '4px 0'}}
                            />
                        </div>
                        <Button 
                            className="dark:invert rounded-x4 bg-[#206E9E]" 
                            component="label" 
                            variant="contained"
                            sx={{
                                height: '100%',
                                borderRadius: '0 4px 4px 0',
                                textTransform: 'none'
                            }} 
                        >
                            <img
                                src="/image/logo/Logo2.png"
                                alt="Vercel Logo"
                                width={24}
                                height={24}
                                className='mr-2'
                            />
                            <span className='text-[12px]'>Search</span>
                        </Button>
                    </div>
                </section>
                <section className="flex items-center justify-between mx-1 xl:mx-3">
                    <Link href="/Login">
                    <div className="flex items-center whitespace-nowrap lg:border border-gray-200 rounded-3xl py-1 hover:cursor-pointer transition duration-300 hover:border-gray-400">
                        <span className='text-[12px] ml-4 mr-2 hidden lg:block'>Sign In</span>
                        <img
                            src="/img/icons/user.png"
                            className='mr-1'
                        />
                    </div>
                    </Link>
                    <div className='flex items-center justify-between'>
                        <IconButton className="text-gray-500 h-6 w-6 mx-2">
                            <SvgIcon>                
                                <path id="Vector" d="M12 16.75C11.6 16.75 11.2 16.72 10.82 16.65C8.7 16.34 6.77 15.12 5.55 13.31C4.7 12.03 4.25 10.54 4.25 9C4.25 4.73 7.73 1.25 12 1.25C16.27 1.25 19.75 4.73 19.75 9C19.75 10.54 19.3 12.03 18.45 13.31C17.22 15.13 15.29 16.34 13.15 16.66C12.8 16.72 12.4 16.75 12 16.75ZM12 2.75C8.55 2.75 5.75 5.55 5.75 9C5.75 10.25 6.11 11.45 6.79 12.47C7.78 13.93 9.33 14.91 11.05 15.16C11.69 15.27 12.32 15.27 12.91 15.16C14.66 14.91 16.21 13.92 17.2 12.46C17.88 11.44 18.24 10.24 18.24 8.98999C18.25 5.54999 15.45 2.75 12 2.75Z" fill="#0F172A"/>
                                <path id="Vector_2" d="M6.46982 22.59C6.32982 22.59 6.19982 22.57 6.05982 22.54C5.40982 22.39 4.90982 21.89 4.75982 21.24L4.40982 19.77C4.38982 19.68 4.31982 19.61 4.21982 19.58L2.56982 19.19C1.94982 19.04 1.45982 18.58 1.28982 17.97C1.11982 17.36 1.28982 16.7 1.73982 16.25L5.63982 12.35C5.79982 12.19 6.01982 12.11 6.23982 12.13C6.45982 12.15 6.65982 12.27 6.78982 12.46C7.77982 13.92 9.32982 14.91 11.0598 15.16C11.6998 15.27 12.3298 15.27 12.9198 15.16C14.6698 14.91 16.2198 13.92 17.2098 12.46C17.3298 12.27 17.5398 12.15 17.7598 12.13C17.9798 12.11 18.1998 12.19 18.3598 12.35L22.2598 16.25C22.7098 16.7 22.8798 17.36 22.7098 17.97C22.5398 18.58 22.0398 19.05 21.4298 19.19L19.7798 19.58C19.6898 19.6 19.6198 19.67 19.5898 19.77L19.2398 21.24C19.0898 21.89 18.5898 22.39 17.9398 22.54C17.2898 22.7 16.6198 22.47 16.1998 21.96L11.9998 17.13L7.79982 21.97C7.45982 22.37 6.97982 22.59 6.46982 22.59ZM6.08982 14.03L2.79982 17.32C2.70982 17.41 2.71982 17.51 2.73982 17.57C2.74982 17.62 2.79982 17.72 2.91982 17.74L4.56982 18.13C5.21982 18.28 5.71982 18.78 5.86982 19.43L6.21982 20.9C6.24982 21.03 6.34982 21.07 6.40982 21.09C6.46982 21.1 6.56982 21.11 6.65982 21.01L10.4898 16.6C8.78982 16.27 7.22982 15.36 6.08982 14.03ZM13.5098 16.59L17.3398 20.99C17.4298 21.1 17.5398 21.1 17.5998 21.08C17.6598 21.07 17.7498 21.02 17.7898 20.89L18.1398 19.42C18.2898 18.77 18.7898 18.27 19.4398 18.12L21.0898 17.73C21.2098 17.7 21.2598 17.61 21.2698 17.56C21.2898 17.51 21.2998 17.4 21.2098 17.31L17.9198 14.02C16.7698 15.35 15.2198 16.26 13.5098 16.59Z" fill="#0F172A"/>
                                <path id="Vector_3" d="M13.8901 12.89C13.6301 12.89 13.3201 12.82 12.9501 12.6L12.0001 12.03L11.0501 12.59C10.1801 13.11 9.61014 12.81 9.40014 12.66C9.19014 12.51 8.74014 12.06 8.97014 11.07L9.21014 10.04L8.41014 9.29999C7.97014 8.85999 7.81014 8.33001 7.96014 7.85001C8.11014 7.37001 8.55014 7.02999 9.17014 6.92999L10.2401 6.75L10.7501 5.63C11.0401 5.06 11.4901 4.73999 12.0001 4.73999C12.5101 4.73999 12.9701 5.07001 13.2501 5.64001L13.8401 6.82001L14.8301 6.94C15.4401 7.04 15.8801 7.37999 16.0401 7.85999C16.1901 8.33999 16.0301 8.87 15.5901 9.31L14.7601 10.14L15.0201 11.07C15.2501 12.06 14.8001 12.51 14.5901 12.66C14.4801 12.75 14.2401 12.89 13.8901 12.89ZM9.61014 8.39001L10.3001 9.07999C10.6201 9.39999 10.7801 9.94 10.6801 10.38L10.4901 11.18L11.2901 10.71C11.7201 10.46 12.3001 10.46 12.7201 10.71L13.5201 11.18L13.3401 10.38C13.2401 9.93001 13.3901 9.39999 13.7101 9.07999L14.4001 8.39001L13.5301 8.23999C13.1101 8.16999 12.6901 7.86001 12.5001 7.48001L12.0001 6.5L11.5001 7.5C11.3201 7.87 10.9001 8.19001 10.4801 8.26001L9.61014 8.39001Z" fill="#0F172A"/>
                            </SvgIcon>
                        </IconButton>
                        <IconButton className="text-gray-500 h-6 w-6 mx-2">
                            <SvgIcon>                
                                <path d="M12 10.52C11.59 10.52 11.25 10.18 11.25 9.77V6.44C11.25 6.03 11.59 5.69 12 5.69C12.41 5.69 12.75 6.03 12.75 6.44V9.77C12.75 10.19 12.41 10.52 12 10.52Z" fill="#0F172A"/>
                                <path d="M12.02 20.35C9.43999 20.35 6.86999 19.94 4.41999 19.12C3.50999 18.82 2.81999 18.17 2.51999 17.35C2.21999 16.53 2.31999 15.59 2.80999 14.77L4.07999 12.65C4.35999 12.18 4.60999 11.3 4.60999 10.75V8.64999C4.60999 4.55999 7.92999 1.23999 12.02 1.23999C16.11 1.23999 19.43 4.55999 19.43 8.64999V10.75C19.43 11.29 19.68 12.18 19.96 12.65L21.23 14.77C21.7 15.55 21.78 16.48 21.47 17.33C21.16 18.18 20.48 18.83 19.62 19.12C17.17 19.95 14.6 20.35 12.02 20.35ZM12.02 2.74999C8.75999 2.74999 6.10999 5.39999 6.10999 8.65999V10.76C6.10999 11.57 5.78999 12.74 5.36999 13.43L4.09999 15.56C3.83999 15.99 3.77999 16.45 3.92999 16.85C4.07999 17.25 4.41999 17.55 4.89999 17.71C9.49999 19.24 14.56 19.24 19.16 17.71C19.59 17.57 19.92 17.25 20.07 16.83C20.23 16.41 20.18 15.95 19.95 15.56L18.68 13.44C18.26 12.75 17.94 11.58 17.94 10.77V8.66999C17.93 5.39999 15.28 2.74999 12.02 2.74999Z" fill="#0F172A"/>
                                <path d="M12 22.9C10.93 22.9 9.87998 22.46 9.11998 21.7C8.35998 20.94 7.91998 19.89 7.91998 18.82H9.41998C9.41998 19.5 9.69998 20.16 10.18 20.64C10.66 21.12 11.32 21.4 12 21.4C13.42 21.4 14.58 20.24 14.58 18.82H16.08C16.08 21.07 14.25 22.9 12 22.9Z" fill="#0F172A"/>
                            </SvgIcon>
                        </IconButton>
                        <IconButton className="text-gray-500 h-6 w-6 mx-2">
                            <SvgIcon>
                                <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill="#0F172A"/>
                                <path d="M15.21 22.19C15 22.19 14.79 22.16 14.58 22.11C13.96 21.94 13.44 21.55 13.11 21L12.99 20.8C12.4 19.78 11.59 19.78 11 20.8L10.89 20.99C10.56 21.55 10.04 21.95 9.42 22.11C8.79 22.28 8.14 22.19 7.59 21.86L5.87 20.87C5.26 20.52 4.82 19.95 4.63 19.26C4.45 18.57 4.54 17.86 4.89 17.25C5.18 16.74 5.26 16.28 5.09 15.99C4.92 15.7 4.49 15.53 3.9 15.53C2.44 15.53 1.25 14.34 1.25 12.88V11.12C1.25 9.65998 2.44 8.46998 3.9 8.46998C4.49 8.46998 4.92 8.29998 5.09 8.00998C5.26 7.71998 5.19 7.25998 4.89 6.74998C4.54 6.13998 4.45 5.41998 4.63 4.73998C4.81 4.04998 5.25 3.47998 5.87 3.12998L7.6 2.13998C8.73 1.46998 10.22 1.85998 10.9 3.00998L11.02 3.20998C11.61 4.22998 12.42 4.22998 13.01 3.20998L13.12 3.01998C13.8 1.85998 15.29 1.46998 16.43 2.14998L18.15 3.13998C18.76 3.48998 19.2 4.05998 19.39 4.74998C19.57 5.43998 19.48 6.14998 19.13 6.75998C18.84 7.26998 18.76 7.72998 18.93 8.01998C19.1 8.30998 19.53 8.47998 20.12 8.47998C21.58 8.47998 22.77 9.66998 22.77 11.13V12.89C22.77 14.35 21.58 15.54 20.12 15.54C19.53 15.54 19.1 15.71 18.93 16C18.76 16.29 18.83 16.75 19.13 17.26C19.48 17.87 19.58 18.59 19.39 19.27C19.21 19.96 18.77 20.53 18.15 20.88L16.42 21.87C16.04 22.08 15.63 22.19 15.21 22.19ZM12 18.49C12.89 18.49 13.72 19.05 14.29 20.04L14.4 20.23C14.52 20.44 14.72 20.59 14.96 20.65C15.2 20.71 15.44 20.68 15.64 20.56L17.37 19.56C17.63 19.41 17.83 19.16 17.91 18.86C17.99 18.56 17.95 18.25 17.8 17.99C17.23 17.01 17.16 16 17.6 15.23C18.04 14.46 18.95 14.02 20.09 14.02C20.73 14.02 21.24 13.51 21.24 12.87V11.11C21.24 10.48 20.73 9.95998 20.09 9.95998C18.95 9.95998 18.04 9.51998 17.6 8.74998C17.16 7.97998 17.23 6.96998 17.8 5.98998C17.95 5.72998 17.99 5.41998 17.91 5.11998C17.83 4.81998 17.64 4.57998 17.38 4.41998L15.65 3.42998C15.22 3.16998 14.65 3.31998 14.39 3.75998L14.28 3.94998C13.71 4.93998 12.88 5.49998 11.99 5.49998C11.1 5.49998 10.27 4.93998 9.7 3.94998L9.59 3.74998C9.34 3.32998 8.78 3.17998 8.35 3.42998L6.62 4.42998C6.36 4.57998 6.16 4.82998 6.08 5.12998C6 5.42998 6.04 5.73998 6.19 5.99998C6.76 6.97998 6.83 7.98998 6.39 8.75998C5.95 9.52998 5.04 9.96998 3.9 9.96998C3.26 9.96998 2.75 10.48 2.75 11.12V12.88C2.75 13.51 3.26 14.03 3.9 14.03C5.04 14.03 5.95 14.47 6.39 15.24C6.83 16.01 6.76 17.02 6.19 18C6.04 18.26 6 18.57 6.08 18.87C6.16 19.17 6.35 19.41 6.61 19.57L8.34 20.56C8.55 20.69 8.8 20.72 9.03 20.66C9.27 20.6 9.47 20.44 9.6 20.23L9.71 20.04C10.28 19.06 11.11 18.49 12 18.49Z" fill="#0F172A"/>
                            </SvgIcon>
                        </IconButton>
                    </div>
                </section>
            </div>
        </>
    )
}

const HeaderContainer = (props) => {
    const { header_menu_list, channel_list } = props;
    const { activeMenu, setActiveMenu } = props;
    const { activeChannel, setActiveChannel } = props;

    return(
        <div className="flex flex-row w-full justify-between items-center">
            <ul className="flex flex-row mr-8 justify-between whitespace-nowrap mt-4 w-[50%] lg:w-[30%]">
                {
                    header_menu_list.map((item, index) => {
                        const activeClass = activeMenu === item ? 'text-[#5490B4] border-b-4 border-[#FF9D28] font-bold' : '';
                        return (
                            <li 
                                key={item}
                                className={`${activeClass} hover:cursor-pointer text-[12px] px-1 py-2 transition duration-300 hover:bg-[#EFEFEF]`}
                                onClick={()=>setActiveMenu(item)}
                            >
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
            <span className="hidden lg:block mt-2">|</span>
            <ul className="hidden lg:flex flex-row ml-8 justify-between whitespace-nowrap mt-4 w-[70%]">
                {
                    channel_list.map((item, index) => {
                        const activeClass = activeChannel === item ? 'text-[#5490B4] border-b-4 border-[#FF9D28] font-bold' : '';
                        return (
                            <li 
                                key={item}
                                className={`${activeClass} hover:cursor-pointer text-[12px] px-1 py-2 transition duration-300 hover:bg-[#EFEFEF]`}
                                onClick={()=>setActiveChannel(item)}
                            >
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}


const header_menu_list = [
    'Home', 'News Stream', 'Following', 'Local'
  ];
  const channel_list = [
    'U.S.', 'World', 'Politics', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'
  ];

const HeaderPanel = () => {
    const [activeMenu, setActiveMenu] = useState('Home');
    const [activeChannel, setActiveChannel] = useState('U.S.');

    return(
        <>
            <Header/>
            <HeaderContainer 
                header_menu_list={header_menu_list} 
                channel_list={channel_list}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}  
                activeChannel={activeChannel}
                setActiveChannel={setActiveChannel}  
            />
        </>
    )
}

export default HeaderPanel;