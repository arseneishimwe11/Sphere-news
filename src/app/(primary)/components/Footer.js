'use client';
import './Footer.css';
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
    SentimentSatisfiedOutlined as EmojiIcon
} from '@mui/icons-material';

const menu_list = {
    browse_left: [
        {
            title: 'HBO Max',
            href: '#'
        },
        {
            title: 'Cinemax',
            href: '#'
        },
        {
            title: 'Showtime',
            href: '#'
        },
        {
            title: 'Starz',
            href: '#'
        }
    ],
    browse_right: [
        {
            title: 'Disney Bundle Trio Basic',
            href: '#'
        },
        {
            title: 'Disney Bundle Trio Pro',
            href: '#'
        },
        {
            title: 'Disney Bundle Duo Basic',
            href: '#'
        },
        {
            title: 'Student Discount',
            href: '#'
        }
    ],
    help: [
        {
            title: 'Account & Billing',
            href: '#'
        },
        {
            title: 'Plans & Pricing',
            href: '#'
        },
        {
            title: 'Supported Devices',
            href: '#'
        },
        {
            title: 'Accessibility',
            href: '#'
        }
    ],
    company: [
        {
            title: 'Sphere News',
            href: '#'
        },
        {
            title: 'Press',
            href: '#'
        },
        {
            title: 'Jobs',
            href: '#'
        },
        {
            title: 'Contacts',
            href: '#'
        }
    ]
}

const FooterMenu = (props) => {
    const { menu_list } = props;
    return (
        <ul className={props.className}>
            {
                menu_list.map((items, index) => (
                    <li key={items.title} className='my-2'><a href={items.link}>{items.title}</a></li>
                ))
            }
        </ul>
    );
}

const FooterBrand = (props) => {
    return (
        <button className="flex flex-row items-center justify-center bg-black-color min-w-[142px] px-2 py-1 ml-2 rounded-md">
            <img src={props.brand_img_src} className="w-[24px] mr-2 dark:invert" />
            <div className="flex flex-col text-left">
                <p className="text-[8px] text-black-color-invert mt-[2px]">{props.desc}</p>
                <p className="text-[16px] text-black-color-invert mt-[-4px]">{props.brand}</p>
            </div>
        </button>
    )
}

const IconComponent = ({ children }) => {
    const style = {
        fontSize: "32px",
        mr: 2,
        color: "#0E3E66"
    };

    const modifiedChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { sx: style });
        }
        return child;
    });

    return (
        <a className='hover:cursor-pointer' href='#'>
            {modifiedChildren}
        </a>
    );
}
// Footer for Mobile Screen

const MobileFooterItem = (props) => {
    const { img_src, title, url, isActive, onClick } = props;

    return (
        <div className='flex flex-col py-2 items-center gap-1 relative' onClick={() => onClick({title, url})}>
            <img
                src={img_src}
            />
            <span className='text-[12px] text-[#fff]'>{title}</span>
            {
                isActive && <div className='w-full h-[4px] rounded-t-full bg-[#F9871A] bottom-0 absolute' />
            }
        </div>
    )
}

const mobile_footer = [
    {
        title: 'Stream',
        url: '/Stream',
        img: '/img/icons/mobile/story.svg'
    },
    {
        title: 'Local',
        url: 'PerTopic/Local',
        img: '/img/icons/mobile/fire.svg'
    },
    {
        title: 'Home',
        url: '/',
        img: '/img/icons/mobile/sphere.svg'
    },
    {
        title: 'Following',
        url: '/Following',
        img: '/img/icons/mobile/star.svg'
    },
    {
        title: 'Account',
        url: '/',
        img: '/img/icons/mobile/user.svg'
    }
]

const MobileFooter = (props) => {
    const router = useRouter();

    const { currentPageStatus } = props;

    const [active, setActive] = useState('Home');

    const handleMenuClick = (item) => {
        setActive(item.title);
        router.push(item.url)
    }
    return (
        <>
            {
                currentPageStatus == 'comment_page' ?
                    <div className='p-2 w-full h-[58px] bg-[rgb(242,242,242)] z-[100] fixed bottom-0'>
                        <div className='flex w-full h-full bg-white rounded-full'>
                            <EmojiIcon sx={{ width: 'auto', height: '100%', padding: '6px' }} />
                            <input className='w-[82%] outline-none' placeholder='Write a comment...' />
                        </div>
                    </div> :
                    <div className='flex flex-row px-8 items-end justify-between bg-[#003E6E] rounded-t-2xl left-0 right-0 bottom-0 fixed z-[100]'>
                        {
                            mobile_footer.map((item, index) => (
                                <MobileFooterItem
                                    key={item.title}
                                    img_src={item.img}
                                    url={item.url}
                                    title={item.title}
                                    isActive={active === item.title}
                                    onClick={handleMenuClick}
                                />
                            ))
                        }
                    </div>
            }
        </>

    )
}

const Footer = (props) => {
    const { isMobile, currentPageStatus } = props;

    return (
        <>
            {
                isMobile && <MobileFooter currentPageStatus={currentPageStatus} />
            }
            {
                !isMobile && (
                    <div id="footerpanel">
                        <div className='footercontainer'>
                            <div className="flex flex-col lg:flex-row lg:justify-between text-[13px]">
                                <div className='flex flex-col sm:flex-row sm:justify-between w-full lg:w-[55%]'>
                                    <div className="flex flex-col w-full md:w-[50%] lg:w-[45%] sm:mr-8 items-center sm:items-start">
                                        <img
                                            src="/img/logo/sphere/main.svg"
                                            className="w-[178px] h-auto text-[transparent] dark:invert"
                                        />
                                        <p className="my-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                        </p>
                                        <div className="flex flex-row text-xl">
                                            <IconComponent><FacebookIcon /></IconComponent>
                                            <IconComponent><TwitterIcon /></IconComponent>
                                            <IconComponent><InstagramIcon /></IconComponent>
                                            <IconComponent><LinkedInIcon /></IconComponent>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full md:w-[50%] lg:w-[55%] mt-8 sm:mt-0 mr-0 lg:mr-8 '>
                                        <h3 className='text-xl text-black-color text-center sm:text-left font-bold'>
                                            Browse
                                        </h3>
                                        <hr className='my-1 lg:my-4 border-1' />
                                        <div className='flex flex-row justify-between'>
                                            <FooterMenu
                                                menu_list={menu_list.browse_left}
                                            />
                                            <FooterMenu
                                                menu_list={menu_list.browse_right}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row justify-between w-full lg:w-[45%]'>
                                    <div className='flex flex-col w-full md:w-[50%] mt-8 sm:mr-8 lg:mt-0 '>
                                        <h3 className='text-xl text-black-color text-center sm:text-left font-bold'>
                                            Help
                                        </h3>
                                        <hr className='my-1 lg:my-4 border-1' />
                                        <FooterMenu
                                            menu_list={menu_list.help}
                                            className='text-center sm:text-left'
                                        />
                                    </div>
                                    <div className='flex flex-col w-full md:w-[50%] mr-0 mt-8 lg:mt-0'>
                                        <h3 className='text-xl text-black-color text-center sm:text-left font-bold'>
                                            Company
                                        </h3>
                                        <hr className='my-1 lg:my-4 border-1' />
                                        <FooterMenu
                                            menu_list={menu_list.company}
                                            className='text-center sm:text-left'
                                        />
                                    </div>
                                </div>
                            </div>
                            <hr className='my-2 lg:my-8 border-1' />
                            <div className='flex flex-col md:flex-row justify-between'>
                                <ul className='flex flex-wrap justify-center items-center text-black-color gap-3 text-[12px]'>
                                    <li>Status</li>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                    <li>Your Privacy Choice</li>
                                    <li>Cookie Preferences</li>
                                    <li>Contact Us</li>
                                    <li className='bg-[red]'>Change Region</li>
                                </ul>
                                <div className='flex flex-row justify-center mt-4 md:mt-0'>
                                    <FooterBrand
                                        desc="Download on the"
                                        brand="App Store"
                                        brand_img_src="/img/icons/Icon_app_store.png"
                                    />
                                    <FooterBrand
                                        desc="GET IT ON"
                                        brand="Google Play"
                                        brand_img_src="/img/icons/Icon_google_play.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Footer;