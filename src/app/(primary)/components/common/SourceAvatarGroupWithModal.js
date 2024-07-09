import { useState } from "react";
import { Modal, Box, Divider } from "@mui/material";

import PublicIcon from '@mui/icons-material/Public';

const sources = {
    'NBC': {
        img_src: '/img/icons/channels/NBC.png',
        domain: 'news.yahoo.com'
    },
    'G': {
        img_src: '/img/icons/channels/G.png',
        domain: 'news.NBC.com'
    },
    'HuffPost': {
        img_src: '/img/icons/channels/HuffPost.png',
        domain: 'news.HuffPost.com'
    },
    'Human': {
        img_src: '/img/icons/channels/Human.png',
        domain: 'news.human.com'
    },
    'Fox': {
        img_src: '/img/icons/channels/Fox.png',
        domain: 'news.FoxNews.com'
    }
}

const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 560,
    p: 0,
};

const SourceModalContent = ({ source }) => {

    return (
        <Box sx={modalContentStyle}>
            <div className="border rounded-xl bg-[#FFF]">
                <div className="w-full h-48 relative">
                    <img
                        src="/img/others/rectanglebg.png"
                        alt="cover pic"
                        className='h-[148px] w-full rounded-t-xl'
                    />
                    <img
                        src={sources[source]['img_src']}
                        className="w-[80px] border border-4 border-white rounded-full absolute bottom-2 left-4"
                    />
                </div>
                <div className='mx-6'>
                    <div className='flex flex-row items-center gap-2'>
                        <h3 className='text-[#000] text-[24px] font-bold'>{sources[source]['domain']}</h3>
                        <a href="#">
                            <img
                                src='/img/icons/logout.svg'
                                className="w-[16px]"
                            />
                        </a>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[16px] text-gray-400'>News and Media</p>
                        <p className='text-[16px] mt-1 text-gray-600'>Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className="flex flex-row gap-4 my-4">
                        <div>
                            <p>Global Rank</p>
                            <p className="text-[20px]">190</p>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div>
                            <p>Country Rank</p>
                            <div className="flex flex-row items-center">
                                <img
                                    src="/img/flag/small/us.png"
                                    className="rounded-full"
                                />
                                <p className="text-[20px]">117</p>
                            </div>
                        </div>
                        <Divider orientation="vertical" flexItem />
                        <div>
                            <p>Last Month Visits</p>
                            <div className="flex flex-row items-center">
                                <PublicIcon sx={{ color: 'gray' }} />
                                <p className="text-[20px]">247.3M</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export const SourceAvatarGroupWithModal = () => {

    const [sourceModal, setSourceModal] = useState(false);
    const [activeSource, setActiveSource] = useState(undefined);

    const viewSourceDetail = (param) => {
        setSourceModal(true);
        setActiveSource(param);
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center relative hover:cursor-pointer">
                <div className="hover:mt-[-4px] transition-all duration-50 w-[40px] h-[40px] mr-24 rounded-full" onClick={() => viewSourceDetail('NBC')}>
                    <img
                        src="/img/icons/channels/NBC.png"
                    />
                </div>
                <div className="hover:mt-[-4px] transition-all duration-50 w-[40px] h-[40px] rounded-full absolute top-1 left-[20px]" onClick={() => viewSourceDetail('HuffPost')}>
                    <img
                        src="/img/icons/channels/HuffPost.png"
                        className="w-full"
                    />
                </div>
                <div className="hover:mt-[-4px] transition-all duration-50 w-[40px] h-[40px] rounded-full absolute top-1 left-[40px]" onClick={() => viewSourceDetail('G')}>
                    <img
                        src="/img/icons/channels/G.png"
                        className="w-full"
                    />
                </div>
                <div className="hover:mt-[-4px] transition-all duration-50 w-[40px] h-[40px] rounded-full absolute top-1 left-[60px]" onClick={() => viewSourceDetail('Fox')}>
                    <img
                        src="/img/icons/channels/Fox.png"
                        className="w-full"
                    />
                </div>
                <div className="hover:mt-[-4px] transition-all duration-50 w-[40px] h-[40px] rounded-full absolute top-1 left-[80px]" onClick={() => viewSourceDetail('Human')}>
                    <img
                        src="/img/icons/channels/Human.png"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-black-color font-bold">+59</span><span>Sources</span>
                </div>
            </div>
            <Modal
                open={sourceModal}
                onClose={() => setSourceModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <SourceModalContent source={activeSource} />
            </Modal>
        </>
    )
}