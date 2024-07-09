import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

const ChatMenuItem = (props) => {
    const { cat, desc, title, emoji } = props;
    const [isHover, setIsHover] = useState(false);
    return (
        <div
            className={`p-1 mt-2 rounded-md hover:cursor-pointer relative transition-all duration-100 ${isHover ? 'bg-[#1AA2F9]' : 'bg-gray-100'}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <p className={`text-[14px] ${isHover ? 'text-white' : 'text-black'}`}>{emoji}&nbsp;{title}</p>
            <p className={`text-[12px] px-1 rounded-sm ${isHover ? 'text-white' : ''}`}><span className={`${isHover ? 'bg-white text-[#1AA2F9]' : 'bg-gray-200'} px-1`}>{cat}</span> &nbsp;{desc}</p>
            {
                isHover &&
                <div className="flex flex-row gap-2 absolute top-2 right-2">
                    <ContentCopyIcon sx={{ color: 'white', fontSize: 16, backgroundColor: '#5AC2FB', padding: '2px', borderRadius: '2px' }} />
                    <CreateNewFolderIcon sx={{ color: 'white', fontSize: 16, backgroundColor: '#5AC2FB', padding: '2px', borderRadius: '2px' }} />
                    <StarIcon sx={{ color: 'white', fontSize: 16, backgroundColor: '#5AC2FB', padding: '2px', borderRadius: '2px' }} />
                </div>
            }
        </div>
    );
}

export const SideTabContentCommandComponent = () => {
    const [isCreateContent, setIsCreateContent] = useState(false);

    return (
        <>
            {
                isCreateContent ?
                    <div className="flex flex-col w-full p-2 bg-[#fff] rounded-lg">
                        <div className="flex gap-2 items-center">
                            <Button size="small" variant="contained" onClick={() => setIsCreateContent(false)}><CheckIcon sx={{ fontSize: 16 }} />&nbsp;Save</Button>
                            <Button size="small" variant="contained" color="error" onClick={() => setIsCreateContent(false)}>Cancel</Button>
                            <p className="text-[12px] text-gray-400 font-bold ml-auto">NEW COMMAND</p>
                        </div>
                        <div className="flex items-center justify-between text-[14px] mt-2">
                            <div className="w-[85%]">
                                <p className="">Title</p>
                                <input className="p-2 bg-gray-200 outline-none w-full rounded-md" placeholder="Custom title" />
                            </div>
                            <div>
                                <p className="">Emoji</p>
                                <IconButton><EmojiEmotionsOutlinedIcon /></IconButton>
                            </div>
                        </div>
                        <div className="text-[14px] mt-2">
                            <p className="">Description</p>
                            <input className="p-2 bg-gray-200 outline-none w-full rounded-md" placeholder="Enter description" />
                        </div>
                        <div className="text-[14px] mt-2">
                            <p className="">Category</p>
                            <input className="p-2 bg-gray-200 outline-none w-full rounded-md" placeholder="Custom category" />
                        </div>
                        <div className="text-[14px] mt-2">
                            <p className="">steps</p>
                            <p className="p-2 bg-gray-200 font-bold mb-4 rounded-md">🦴 CLEAR</p>
                            <div className="p-2 bg-gray-200 mb-4 rounded-md">
                                <p className="font-bold">🤖 GPT</p>
                                <p>The output must be in language. Act as a Student. Your goal is to Summarize page content in 3 bullet points.</p>
                            </div>
                            <div className="flex gap-1 justify-between text-[12px]">
                                <p className="p-1 px-2 rounded-md bg-gray-200">💬 SAY</p>
                                <p className="p-1 px-2 rounded-md bg-gray-200">❓ ASK</p>
                                <p className="p-1 px-2 rounded-md bg-gray-200">🤖 GPT</p>
                                <p className="p-1 px-2 rounded-md bg-gray-200">🦴 CLEAR</p>
                            </div>
                        </div>
                    </div> :
                    <div className="flex flex-col w-full p-2 bg-[#fff] rounded-lg">
                        <div className="flex flex-wrap gap-2">
                            <p className="rounded-sm text-[12px] px-2 py-[2px] bg-[#1AA2F9] text-white whitespace-nowrap hover:cursor-pointer">🌈&nbsp;ALL</p>
                            <p className="rounded-sm text-[12px] px-2 py-[2px] bg-gray-200 whitespace-nowrap hover:cursor-pointer">⭐&nbsp;FAVORITE</p>
                            <p className="rounded-sm text-[12px] px-2 py-[2px] bg-gray-200 whitespace-nowrap hover:cursor-pointer">⚙️&nbsp;PRODUCTIVITY</p>
                            <p className="rounded-sm text-[12px] px-2 py-[2px] bg-gray-200 whitespace-nowrap hover:cursor-pointer">🎯&nbsp;SEO</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-[12px] text-gray-400 font-bold">ALL COMMANDS</p>
                            <Button size="small" onClick={() => setIsCreateContent(true)}>
                                <AddCircleOutlineIcon sx={{ fontSize: 16 }} /> &nbsp;Create
                            </Button>
                        </div>
                        <div className="flex flex-col h-[620px] max-h-[620px] overflow-y-auto">
                            <ChatMenuItem
                                desc='Condense selected text, article, email into a TLDR for quick understanding and time-saving.'
                                emoji="⚡"
                                cat="Productivity"
                                title="TL;DR"
                            />
                            <ChatMenuItem
                                desc='AI help in the design process'
                                emoji="⭐"
                                cat="Productivity"
                                title="Ask"
                            />
                            <ChatMenuItem
                                desc='What is a web3 platform'
                                emoji="⭐"
                                cat="Productivity"
                                title="Summary"
                            />
                            <ChatMenuItem
                                desc='How to create glass effect'
                                emoji="🤩"
                                cat="Productivity"
                                title="Explain"
                            />
                            <ChatMenuItem
                                desc='AI help in the design process AI help in the design proces'
                                emoji="⭐"
                                cat="Productivity"
                                title="Translate"
                            />
                            <ChatMenuItem
                                desc='What is a web3 platform Extract and research SEO keywords'
                                emoji="🎯"
                                cat="SEO"
                                title="Extract and research SEO keywords "
                            />
                            <ChatMenuItem
                                desc='How to create glass effect Extract and research SEO keywordsExtract and research SEO keywords'
                                emoji="🎯"
                                cat="SEO"
                                title="Keyword report"
                            />
                            <ChatMenuItem
                                desc='AI help in the design process'
                                emoji="🎯"
                                cat="SEO"
                                title="Meta description from text"
                            />
                            <ChatMenuItem
                                desc='What is a web3 platform'
                                emoji="🎯"
                                cat="SEO"
                                title="Content analyzer"
                            />
                        </div>
                    </div>
            }
        </>

    );
}
