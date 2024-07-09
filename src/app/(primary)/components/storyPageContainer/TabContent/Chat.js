import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import { 
    Button,
    TextField
} from "@mui/material";

import {
    ControlledAccordions
} from '../../common';

const ChatMenuItem = (props) => {
    const {title, message, date} = props;
    return (
        <div className="p-[2px] mt-2 rounded-sm">
            <div className="w-[80%] float-left">
                <h6 className="text-[10px] text-[#000]">{title}</h6>
                <p className="text-[10px] text-gray-500">{message}</p>
            </div>
            <span className="mr-1 text-[10px] float-right">{date}</span>
        </div>
    );
}

export const TabContentChatComponent = () => {
    return (
        <div className="flex flex-row gap-2">
            {/* Left Side Menu of Chat Component */}
            <div className="flex flex-col w-[30%] p-2 bg-[#fff] rounded-lg">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center">
                        <h6 className="text-sm text-[#000] font-bold">Chats</h6>
                        <span className="px-1 mx-2 text-[12px] text-[#fff] bg-[#5dbbdd] rounded-full">24</span>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="flex flex-row items-center gap-2 w-full my-4">
                    <div className="flex flex-row items-center bg-[#e7f0f5] rounded-sm">
                        <input className="w-full p-1 text-[12px] bg-[#e7f0f5] rounded-l-sm focus:border-0" placeholder="Search Chat"/>
                        <SearchIcon 
                            className="p-1 text-[#000]"
                        />
                    </div>
                    <button className="">
                        <BorderColorIcon
                            className="p-1 bg-[#c7f0fa] text-[#50b6e0] w-[24px] h-full rounded-sm"
                        />
                    </button>
                </div>
                <div className="flex flex-col gap-4 overflow-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <img 
                                src="/img/icons/pin.svg"
                            />
                            <span className="text-[10px] mx-2">PINNED</span>
                        </div>
                        <ChatMenuItem 
                            title='How to create glass effect'
                            message='Ungewolten Water stehen, Viele der Generatoren im internet'
                            date='12 Mar'
                        />
                        <div className="p-[2px] mt-2 rounded-sm bg-[#e7f0f5]">
                            <div className="w-[80%] float-left">
                                <h6 className="text-[10px] text-[#000]">Explore NFT Industry</h6>
                                <p className="text-[10px] text-gray-500">Ungewolten Water stehen, Viele der Generatoren im internet</p>
                            </div>
                            <span className="mr-1 text-[10px] float-right">9 Mar</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <img 
                                src="/img/icons/chats.svg"
                            />
                            <span className="text-[10px] mx-2">ALL</span>
                        </div>
                        <ChatMenuItem 
                            title='AI help in the design process'
                            message='Ungewolten Water stehen, Viele der Generatoren im internet'
                            date='12 Jan'
                        />
                        <ChatMenuItem 
                            title='What is a web3 platform'
                            message='Ungewolten Water stehen, Viele der Generatoren im internet'
                            date='5 Jan'
                        />
                        <ChatMenuItem 
                            title='How to create glass effect'
                            message='Generatoren im internet Water stehen'
                            date='11 Feb'
                        />
                    </div>
                </div>
                <Button variant="outlined" className="border-gray-400 text-gray-400 my-4" sx={{textTransform: 'none'}}>Clear all chats</Button>
            </div>

            {/* Main Section of Chat Component */}
            <div className="flex flex-col justify-between w-[70%]">
                <div className="flex flex-col gap-2 items-center">
                    <img 
                        src="/img/icons/chats_box.svg"
                        className="float-left"
                    />
                    <div className="flex flex-row items-center">
                        <h5 className="text-[16px] text-[#000]">Jasper Chat</h5>
                        <span className="px-1 text-[10px] border border-1 border-[#87b7c5] bg-[#e0fdfe] rounded-full mx-4">BETA</span>
                    </div>
                    <p className="w-1/2 text-[10px] text-center text-gray-600">
                        Ungewollten Worter stehen Viele der enerat im Internet
                    </p>
                    <div className="w-full px-4 py-2 bg-[#fff] rounded-lg">
                        <div className="h-[200px] text-[12px] text-[#000] overflow-y-auto">
                            <p className="my-4">
                                Jasper: Vairation der Passages des Lorem Ipsum, Vairation der Passages des Lorem Ipsum 
                                aber der Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem 
                                Ipsum Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem Ipsum 
                            </p>
                            <p className="my-4">
                                Jasper: Vairation der Passages des Lorem Ipsum, Vairation der Passages des Lorem Ipsum 
                                aber der Vairation der Passages des Lorem Ipsum Vairation der Passages des Lorem 
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 items-center float-right">
                            <img 
                                src="/img/icons/trash.svg"
                            />
                            <img 
                                src="/img/icons/thumbs_up.svg"
                            />
                            <img 
                                src="/img/icons/thumbs_down.svg"
                            />
                            <img 
                                src="/img/icons/loading.svg"
                            />
                            <img 
                                src="/img/icons/double_arrow_right.svg"
                            />
                        </div>
                    </div>
                </div>
                {/* Prompt collapse */}
                <ControlledAccordions headTitle='Hide Prompts'>
                    <div className="flex flex-row gap-4">
                        <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">Write a poem about ...</span>
                        <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">Write a blog post about ...</span>
                        <span className="p-[4px] text-gray-600 text-[10px] bg-[#b8e1f3] rounded-sm">Write a poem about ...</span>
                    </div>
                </ControlledAccordions>
                <div className="flex flex-col gap-4">
                    <div className="p-2 px-4 w-full bg-[#eef2f3] rounded-md relative">
                        <span className="text-[10px] text-gray-600">Write a country song about cats in the style of write Neison</span>
                        <img 
                            src="/img/icons/reloading.svg"
                            className="h-full p-3 top-0 right-0 absolute"
                        />
                    </div>
                    <div className="w-full rounded-md relative">
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
                        <div className="bg-[#4cbbed] absolute top-0 bottom-0 right-0 p-2 px-4 rounded-r-lg">
                            <img 
                                src="/img/icons/send.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
