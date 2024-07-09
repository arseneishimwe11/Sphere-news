import { useState, useContext } from 'react';

import { useRouter } from 'next/navigation';

import { PreviewArticleModal } from '../modals/MobileModals/PreviewArticle';

import { MainContext } from '../../layout';

import { Avatar, AvatarGroup, Button, Drawer, IconButton } from '@mui/material';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InsertLinkRoundedIcon from '@mui/icons-material/InsertLinkRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const ArticleAnalyze = (props) => {

    const router = useRouter();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [openThreeDotsDrawer, setOpenThreeDotsDrawer] = useState(false);
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    const [isVoted, setIsVoted] = useState(false);

    const {
        showReactionInArticleAsses,
        showCommentInArticleAsses,
        showUpvoteInArticleAsses,
        showContentInArticleAsses
    } = useContext(MainContext);

    const handleClickVote = (param) => {
        setIsVoted(true);

        // other functionality
    }

    const { hasPreview } = props;

    return (
        <>
            <div className='w-full flex flex-row justify-between items-center text-[14px] mx-1'>
                {
                    showReactionInArticleAsses &&
                    <>
                        <div className='flex'>
                            <AvatarGroup max={4} onClick={() => setOpenDrawer(true)}>
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important' }}
                                    src="/img/icons/emotion/thumbs_up.png"
                                />
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important' }}
                                    src="/img/icons/emotion/surprise.png"
                                />
                                <Avatar
                                    sx={{ width: 24, height: 24, border: '0px !important' }}
                                    src="/img/icons/emotion/love.png"
                                />
                            </AvatarGroup>
                            <p>2.6k</p>
                        </div>
                        &#8226;
                    </>
                }
                {
                    showUpvoteInArticleAsses &&
                    <>
                        <div className='text-gray-400 flex items-center' onClick={() => handleClickVote()}>
                            {
                                isVoted ?
                                    <img
                                        src="/img/icons/emotion/thumbs_up.png"
                                    /> :
                                    <ThumbUpOffAltIcon />
                            }
                            <p>66</p>
                        </div>
                    </>
                }
                {
                    showCommentInArticleAsses &&
                    <>
                        <div className='text-gray-400 flex items-center' onClick={() => router.push('/Story/Comment')}>
                            <ChatBubbleOutlineOutlinedIcon />
                            <p>65</p>
                        </div>
                        &#8226;
                    </>
                }
                {
                    hasPreview ?
                        <>
                            <Button
                                sx={{ color: '#555', textTransform: 'none', fontSize: '12px' }} size='small'
                                onClick={() => setIsPreviewModalOpen(true)}
                            >
                                <PlayArrowIcon />
                                Preview
                            </Button>
                            <PreviewArticleModal
                                isPreviewModalOpen={isPreviewModalOpen}
                                setIsPreviewModalOpen={setIsPreviewModalOpen}
                            />
                        </> :
                        <p>5 Annotations</p>
                }
                <IconButton
                    sx={{ padding: '4px' }}
                    onClick={() => setOpenThreeDotsDrawer(true)}
                >
                    <MoreHorizOutlinedIcon
                        className="text-[#000]"
                    />
                </IconButton>
            </div>
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
            <Drawer
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
            </Drawer>
        </>
    );
}

export default ArticleAnalyze;