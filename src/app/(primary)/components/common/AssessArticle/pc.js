import { Avatar, AvatarGroup } from '@mui/material';

import { ThumbsUp, ChatSVG } from '@/app/SVGs';

import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const PCArticleAnalyze = (props) => {

    const { type } = props;

    if (type) {
        return (
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
                    <PublishOutlinedIcon sx={{ fontSize: 18 }} />
                    &nbsp;112
                    <DownloadOutlinedIcon sx={{ fontSize: 18 }} />
                </div>
                <div className='text-gray-600 flex items-center bg-gray-200 rounded-full p-1 px-2'>
                    <EditOutlinedIcon sx={{ fontSize: 16 }} />
                    &nbsp;0
                </div>
                <div className='text-gray-600 flex items-center bg-gray-200 rounded-full p-1 px-2'>
                    <PeopleAltIcon sx={{ fontSize: 16, color: '#3099DB' }} />
                    &nbsp;0
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-row gap-2 items-center text-[14px]'>
            <div className='flex'>
                <AvatarGroup max={4}>
                    <Avatar
                        sx={{ width: 20, height: 20, border: '0px !important' }}
                        src="/img/icons/emotion/thumbs_up.png"
                    />
                    <Avatar
                        sx={{ width: 20, height: 20, border: '0px !important' }}
                        src="/img/icons/emotion/surprise.png"
                    />
                    <Avatar
                        sx={{ width: 20, height: 20, border: '0px !important' }}
                        src="/img/icons/emotion/love.png"
                    />
                </AvatarGroup>
                <p>2.6k</p>
            </div>
            &#8226;
            <div className='text-gray-400 flex items-center'>
                <ThumbsUp />
                <p>66</p>
            </div>
            &#8226;
            <div className='text-gray-400 flex items-center'>
                <ChatSVG />
                <p>65</p>
            </div>
        </div>
    );
}

export default PCArticleAnalyze;