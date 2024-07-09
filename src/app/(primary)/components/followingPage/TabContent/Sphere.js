import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import {
    Button,
} from "@mui/material";

const ChatMenuItem = (props) => {
    const { title, message, date } = props;
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

export const SideTabContentSphereComponent = () => {
    return (
        <div className="flex flex-col w-full p-2 bg-[#fff] rounded-lg">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <h6 className="text-sm text-[#000] font-bold">Chats</h6>
                    <span className="px-1 mx-2 text-[12px] text-[#fff] bg-[#5dbbdd] rounded-full">24</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="flex flex-row items-center gap-2 w-full my-4">
                <div className="flex flex-row items-center bg-[#e7f0f5] rounded-sm">
                    <input className="w-full p-1 text-[12px] bg-[#e7f0f5] rounded-l-sm focus:border-0" placeholder="Search Chat" />
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
                <div className="flex flex-col h-[460px] max-h-[460px] overflow-y-auto">
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
                </div>
            </div>
            <Button variant="outlined" className="border-gray-400 text-gray-400 my-4" sx={{ textTransform: 'none' }}>Clear all chats</Button>
        </div>
    );
}
