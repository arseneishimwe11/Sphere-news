import { useState, useContext } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import { PreviewArticleModal } from '../../modals/MobileModals/PreviewArticle';

import { MainContext } from '../../../layout';

import { Avatar, AvatarGroup, Button, Drawer, IconButton } from '@mui/material';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import { ThumbsUp, ChatSVG, PlayIconSVG } from '@/app/SVGs';

const MobileArticleAnalyze = (props) => {

    const router = useRouter();
    const pathname = usePathname();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openThreeDotsDrawer, setOpenThreeDotsDrawer] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isVoted, setIsVoted] = useState(false);

    const {
        showReactionInArticleAsses,
        showPreviewButtonInArticleAsses,
        isMobile
    } = useContext(MainContext);

    const handleClickVote = (param) => {
        setIsVoted(true);

        // other functionality
    }

    const { hasPreview } = props;

    return (
        <>
        {
            pathname.startsWith('/Following') ?
            <div className='w-full flex flex-row justify-between items-center text-[14px] mx-1'>
                {
                    showReactionInArticleAsses &&
                    <div className='flex flex-row items-center gap-2 text-[12px]'>
                        <div className='flex items-center'>
                            <AvatarGroup max={4} onClick={() => setOpenDrawer(true)}>
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important' }}
                                    src="/img/icons/emotion/thumbs_up.png"
                                />
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important', marginLeft: '-12px !important' }}
                                    src="/img/icons/emotion/angry.png"
                                />
                            </AvatarGroup>
                            <p>29</p>
                        </div>
                        <div className='text-gray-600 flex items-center bg-gray-200 rounded-full p-1'>
                            <PublishOutlinedIcon sx={{fontSize: 18}}/>
                            &nbsp;112
                            <DownloadOutlinedIcon sx={{fontSize: 18}} />
                        </div>
                        <div className='text-gray-600 flex items-center bg-gray-200 rounded-full p-1 px-2'>
                            <EditOutlinedIcon sx={{fontSize: 16}}/>
                            &nbsp;0
                        </div>
                        <div className='text-gray-600 flex items-center bg-gray-200 rounded-full p-1 px-2'>
                            <PeopleAltIcon sx={{fontSize: 16, color: '#3099DB'}}/>
                            &nbsp;0
                        </div>
                    </div>
                }
            </div> :
            <div className='w-full flex flex-row justify-between items-center text-[14px] mx-1'>
                {
                    showReactionInArticleAsses &&
                    <div className='flex flex-row items-center gap-2'>
                        <div className='flex items-center'>
                            <AvatarGroup max={4} onClick={() => setOpenDrawer(true)}>
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important' }}
                                    src="/img/icons/emotion/thumbs_up.png"
                                />
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important', marginLeft: '-12px !important' }}
                                    src="/img/icons/emotion/surprise.png"
                                />
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important', marginLeft: '-12px !important' }}
                                    src="/img/icons/emotion/love.png"
                                />
                            </AvatarGroup>
                            <p>2.6k</p>
                        </div>
                        &#8226;
                        <div className='text-gray-400 flex items-center gap-1' onClick={() => handleClickVote()}>
                            {
                                isVoted ?
                                    <ThumbsUp style={{ backgroundColor: 'blue', color: 'white', borderRadius: '12px' }} /> :
                                    <ThumbsUp />
                            }
                            <p>66</p>
                        </div>
                        &#8226;
                        <div className='text-gray-400 flex items-center gap-1' onClick={() => router.push('/Story/Comment')}>
                            <ChatSVG />
                            <p>65</p>
                        </div>
                    </div>
                }
                {
                    showPreviewButtonInArticleAsses &&
                    (
                        hasPreview ?
                            <>
                                <Button
                                    sx={{ backgroundColor: '#eee', color: '#555', textTransform: 'none', fontSize: '12px', padding: '0px 4px' }} size='small'
                                    onClick={() => setIsPreviewModalOpen(true)}
                                >
                                    <PlayIconSVG />
                                    &nbsp;Preview
                                </Button>
                                <PreviewArticleModal
                                    isPreviewModalOpen={isPreviewModalOpen}
                                    setIsPreviewModalOpen={setIsPreviewModalOpen}
                                />
                            </> :
                            <p>5 Annotations</p>
                    )
                }
                {/* <IconButton
                    sx={{ padding: '4px' }}
                    onClick={() => setOpenThreeDotsDrawer(true)}
                >
                    <MoreHorizOutlinedIcon
                        className="text-[#000]"
                    />
                </IconButton> */}
            </div>
        }
            <Drawer
                anchor='bottom'
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                PaperProps={{
                    style: {
                        borderRadius: '12px 12px 0 0'
                    }
                }}
            >
                <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                    <div className='flex w-full justify-between items-start'>
                        <p className="text-[20px] font-bold text-black">Reactions</p>
                        <IconButton onClick={() => setOpenDrawer(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/img/icons/emotion/thumbs_up.png"
                        />
                        <p>1.1k likes</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/img/icons/emotion/lol.png"
                        />
                        <p>266 found this funny</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/img/icons/emotion/surprise.png"
                        />
                        <p>141 were surprised</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/img/icons/emotion/love.png"
                        />
                        <p>57 love</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/img/icons/emotion/sad.png"
                        />
                        <p>46 were sad</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <img
                            src="/img/icons/emotion/angry.png"
                        />
                        <p>33 were angry</p>
                    </div>
                </div>
            </Drawer>
            {/* <Drawer
                anchor='bottom'
                open={openThreeDotsDrawer}
                onClose={() => setOpenThreeDotsDrawer(false)}
                PaperProps={{
                    style: {
                        borderRadius: '12px 12px 0 0'
                    }
                }}
            >
                <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                    <div className='flex w-full justify-between items-start'>
                        <p className="text-[20px] font-bold text-black">Actions</p>
                        <IconButton onClick={() => setOpenThreeDotsDrawer(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <AddLinkOutlinedIcon />
                        <p>Copy link</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <IosShareRoundedIcon />
                        <p>Share via ...</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <ContentCopyRoundedIcon />
                        <p>Copy text</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <RemoveRedEyeOutlinedIcon />
                        <p>Read Story</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <InsertLinkRoundedIcon />
                        <p>Go to Channel</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <PersonAddAltOutlinedIcon />
                        <p>Go to Author</p>
                    </div>
                </div>
            </Drawer> */}
        </>
    );
}

export default MobileArticleAnalyze;