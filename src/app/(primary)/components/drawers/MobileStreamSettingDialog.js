import { Divider, Drawer, IconButton, Switch } from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import RssFeedOutlinedIcon from '@mui/icons-material/RssFeedOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CloudOffOutlinedIcon from '@mui/icons-material/CloudOffOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const data = [
    {
        icon: <InfoOutlinedIcon />,
        content: 'Feed properties'
    },
    {
        icon: <CreateOutlinedIcon />,
        content: 'Rename feed'
    },
    {
        icon: <RssFeedOutlinedIcon />,
        content: 'Unfollow'
    },
    {
        icon: <FolderOutlinedIcon />,
        content: 'Choose folders'
    },
    {
        icon: <AttachmentOutlinedIcon />,
        content: 'Copy RSS URL'
    },
    {
        icon: <ShareOutlinedIcon />,
        content: 'Share'
    },
    {
        icon: <CloudOffOutlinedIcon />,
        content: 'Make offline'
    },
];

const data_pro = [
    {
        icon: <FilterAltOutlinedIcon />,
        content: 'Filter feed'
    },
    {
        icon: <RuleOutlinedIcon />,
        content: 'Create rule'
    }
];

const MobileStreamSettingDialog = (props) => {

    const { isStreamSettingDialogOpen, setIsStreamSettingDialogOpen } = props;

    return (
        <>
            <Drawer
                anchor='bottom'
                open={isStreamSettingDialogOpen}
                onClose={() => setIsStreamSettingDialogOpen(false)}
                PaperProps={{
                    style: {
                        borderRadius: '12px 12px 0 0'
                    }
                }}
            >
                <div className='flex flex-col rounded-t-xl bg-white p-4 gap-2 text-[12px]'>
                    <div className='flex w-full justify-between items-start'>
                        <div className="flex items-center gap-2">
                            <ExpandCircleDownOutlinedIcon sx={{ fontSize: '28px' }} />
                            <div>
                                <p className="text-[16px] font-bold text-black">NBC News Top Stories</p>
                                <p>1000 UNREAD ARTICLES</p>
                            </div>
                        </div>
                        <IconButton onClick={() => setIsStreamSettingDialogOpen(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-4">
                        {
                            data.map((item, index) => (
                                <div key={index} className='flex flex-row items-center gap-2'>
                                    {item.icon}
                                    <p>{item.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-4">
                        {
                            data_pro.map((item, index) => (
                                <div key={index} className='flex flex-row items-center gap-2'>
                                    {item.icon}
                                    <p>{item.content} <span className="text-[#FFBE62]">PRO</span></p>
                                </div>
                            ))
                        }
                    </div>
                    <Divider />
                    <div className="flex items-center gap-2">
                        <HomeOutlinedIcon />
                        <p className="flex-grow">Set as start screen</p>
                        <Switch />
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default MobileStreamSettingDialog;