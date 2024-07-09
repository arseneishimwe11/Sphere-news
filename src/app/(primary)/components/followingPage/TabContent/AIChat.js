import { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
    Button,
    IconButton,
    TextField,
    Popover
} from "@mui/material";

import usePopup from '@/app/hooks/usePopupState';

import {
    ControlledAccordions
} from '../../common';

const ChatBox = (props) => {
    const { data } = props;

    const ChatItem = (props) => {
        const { item } = props;

        const [isHover, setIsHover] = useState(false);

        return (
            <div
                className={`w-[90%] p-2 rounded-md hover:cursor-pointer relative ${item.isAI ? 'bg-[#ECECEC]' : 'bg-[#DAEDFC] self-end'}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <p className='text-[12px]'>{item.content}</p>
                {
                    isHover &&
                    <div className='flex gap-2 p-1 rounded-md bg-gray-300 absolute bottom-1 right-1'>
                        <AutoAwesomeIcon sx={{ fontSize: 12 }} />
                        <ExitToAppIcon sx={{ fontSize: 12 }} />
                        <QuestionAnswerIcon sx={{ fontSize: 12 }} />
                    </div>
                }
            </div>
        )
    }

    return (
        <div className='flex flex-col gap-2 bg-white p-2 h-[440px] max-h-[440px] overflow-y-auto'>
            {
                data.map((item) => (
                    <ChatItem item={item} />
                ))
            }
        </div>
    )
}

const AIChatTooltip = (props) => {
    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <>
            <div className='flex items-center gap-1 p-1 bg-gray-300 rounded-md text-[12px] hover:cursor-pointer' onClick={handleOpen}>
                <SettingsEthernetIcon sx={{ fontSize: 14 }} />
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                PaperProps={{
                    style: {
                        borderRadius: '4px',
                        padding: '8px'
                    }
                }}
            >
                <div className='flex flex-col gap-2 text-[12px] hover:cursor-pointer'>
                    <p>Post Text</p>
                    <p>Post Title</p>
                    <p>Post URL</p>
                    <p>Post domain</p>
                    <p>Post language</p>
                    <p>Post author</p>
                    <p>Post private notes</p>
                    <p>Post community</p>
                    <p>Last message</p>
                    <p>Last answer</p>
                    <p>Post trending</p>
                    <p>Post entities</p>
                </div>
            </Popover>
        </>
    );
}

export const SideTabContentChatComponent = () => {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetX1, setOffsetX1] = useState(0);

    const data = [
        {
            isAI: true,
            content: 'How would you like me to rewrite to the text? Pick an option or type instructions.'
        },
        {
            isAI: false,
            content: 'Anyway you want.'
        },
        {
            isAI: true,
            content: 'Ok, I got it. This is updated version'
        },
        {
            isAI: false,
            content: 'Great!'
        },
        {
            isAI: true,
            content: 'Page Summary'
        },
        {
            isAI: true,
            content: 'How would you like me to rewrite this article, I need more additional detailed information about this article.'
        },
    ]

    return (
        <div className="flex flex-col gap-2 justify-between h-full">
            {/* Prompt collapse */}
            <ControlledAccordions headTitle='Hide Prompts'>
                <div className='float-right -mt-[36px]'>
                    <IconButton
                        size="small"
                        onClick={() => setOffsetX(0)}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => setOffsetX(offsetX - 144)}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                    </IconButton>
                </div>
                <div
                    className="w-full overflow-x-hidden relative"
                >
                    <div
                        className="w-full flex gap-2 transition duration-500"
                        style={{
                            transform: `translate(${offsetX}px, 0)`,
                        }}
                    >
                        <div className="flex items-center gap-2 min-w-[136px] p-2 text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">
                            <SearchIcon sx={{ fontSize: 16 }} />
                            <div>
                                <p className='text-black font-bold'>SHORT SUMMARY</p>
                                <p>/summary</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 min-w-[136px] p-2 text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">
                            <SearchIcon sx={{ fontSize: 16 }} />
                            <div>
                                <p className='text-black font-bold'>SHORT SUMMARY</p>
                                <p>/summary</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 min-w-[136px] p-2 text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">
                            <SearchIcon sx={{ fontSize: 16 }} />
                            <div>
                                <p className='text-black font-bold'>SHORT SUMMARY</p>
                                <p>/summary</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 min-w-[136px] p-2 text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">
                            <SearchIcon sx={{ fontSize: 16 }} />
                            <div>
                                <p className='text-black font-bold'>SHORT SUMMARY</p>
                                <p>/summary</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ControlledAccordions>
            <ChatBox data={data} />
            <ControlledAccordions headTitle='History'>
                <div className='float-right -mt-[36px]'>
                    <IconButton
                        size="small"
                        onClick={() => setOffsetX1(0)}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: 12 }} />
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => setOffsetX1(offsetX - 144)}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
                    </IconButton>
                </div>
                <div
                    className="w-full overflow-x-hidden relative"
                >
                    <div
                        className="w-full flex gap-2 transition duration-500"
                        style={{
                            transform: `translate(${offsetX1}px, 0)`,
                        }}
                    >
                        <div className="flex items-center gap-2 min-w-[136px] text-gray-600 text-[10px] rounded-sm">
                            <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm whitespace-nowrap">Write a country about ...</span>
                            <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm whitespace-nowrap">Write a poem about ...</span>
                            <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm whitespace-nowrap">Write a article about ...</span>
                            <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm whitespace-nowrap">Write a blog about ...</span>
                        </div>
                    </div>
                </div>
            </ControlledAccordions>
            <div className="w-full rounded-md relative mt-8">
                <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={1}
                    variant="filled"
                    sx={{
                        width: '92%',
                        '& .MuiInputBase-root.MuiFilledInput-root': {
                            padding: '12px',
                            fontSize: '12px',
                            borderRadius: '8px 0 0 8px',
                            backgroundColor: '#b8e1f3'
                        },
                        '& .MuiInputBase-root.MuiFilledInput-root:before': {
                            border: 0,
                        }
                    }}
                />
                <div className="bg-[#4cbbed] absolute top-0 bottom-0 right-0 p-2 px-4 rounded-r-lg hover:cursor-pointer">
                    <img
                        src="/img/icons/send.svg"
                    />
                </div>
            </div>
            <div className='flex gap-2'>
                <div className='flex items-center gap-1 p-1 bg-gray-300 rounded-md text-[12px] hover:cursor-pointer'>
                    <img
                        src='/img/icons/logo/openai.svg'
                        className='w-[12px]'
                    />
                    <span>CHAT GPT-3.5</span>
                </div>
                <div className='flex items-center gap-1 p-1 bg-gray-300 rounded-md text-[12px] hover:cursor-pointer'>
                    <FindInPageIcon sx={{ fontSize: 14 }} />
                    <span>POST</span>
                </div>
                <div className='flex items-center gap-1 p-1 bg-gray-300 rounded-md text-[12px] hover:cursor-pointer'>
                    <PublicIcon sx={{ fontSize: 14 }} />
                </div>
                <div className='flex items-center gap-1 p-1 bg-gray-300 rounded-md text-[12px] hover:cursor-pointer'>
                    <GpsFixedIcon sx={{ fontSize: 14 }} />
                </div>
                <AIChatTooltip />
            </div>

        </div>
    );
}
