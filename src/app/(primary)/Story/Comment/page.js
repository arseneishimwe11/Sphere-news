'use client'
import { useEffect, useContext } from "react";

import { MainContext } from "../../layout";
import { Button, IconButton } from "@mui/material";

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const MobileComment = (props) => {
    const { avatar, name, location, time, content, agree, disagree, isHot, replies } = props;
    return (
        <div className="flex flex-row items-start gap-2 py-2">
            <img
                src={avatar}
                className="w-[10%] rounded-full"
            />
            <div className="relative text-black border-b border-b-1 border-gray-200">
                <p className="font-bold">{name}</p>
                <p className="text-gray-600 text-[12px]"><span>{location}</span> • <span>{time}</span></p>
                <p className="text-[15px]">{content}</p>
                <div className="flex flex-row items-center justify-between my-2">
                    <div className="flex flex-row">
                        <Button size="small" sx={{color: 'black'}}>
                            <ChatBubbleOutlineOutlinedIcon sx={{fontSize: '16px'}}/>
                            Reply
                        </Button>
                        <Button size="small" sx={{color: 'black'}}>
                            <NavigationOutlinedIcon sx={{fontSize: '16px'}}/>
                            {agree}
                        </Button>
                    </div>
                    <div className="flex">
                        <IconButton size="small" sx={{color: 'black'}}>
                            <NavigationOutlinedIcon sx={{fontSize: '20px', transform:'rotate(180deg)'}}/>
                        </IconButton>
                        <IconButton size="small" sx={{color: 'black'}}>
                            <MoreHorizOutlinedIcon sx={{fontSize: '20px'}}/>
                        </IconButton>
                    </div>
                </div>
                <Button sx={{textTransform: 'none'}}>
                    Show Replies({replies})
                </Button>
                {
                    isHot && 
                        <span className="px-1 top-0 right-0 bg-red-100 text-[red] text-[12px] absolute">HOT</span>
                }
            </div>
        </div>
    )
}

const data = [
    {
        avatar: '/img/avatar/Image_332.png',
        name: 'Judi Boone',
        location: 'Clairton, PA',
        time: '21h',
        content: 'they made trouble everywhere they went, she gossiped and backstabbed and was her usual self, he was ragdoll and snubbed his own family for her. what would they expect? they need to go sit under a tree and cry and leave everyone else alone',
        agree: 181,
        isHot: true,
        replies: 9
    },
    {
        avatar: '/img/avatar/Image_333.png',
        name: 'Sheery Praveet',
        location: 'Clairton, PA',
        time: '20h',
        content: 'Whose fault is it the Royals want no part of them? Their own so they should just celebrate alone with each other. After all thats what they wanted.',
        agree: 99,
        isHot: true,
        replies: 0
    },
    {
        avatar: '/img/avatar/Image_336.png',
        name: 'Ron Taritas',
        location: 'Clairton, PA',
        time: '18h',
        content: 'they made trouble everywhere they went, she gossiped and backstabbed and was her usual self, he was ragdoll and snubbed his own family for her. what would they expect? they need to go sit under a tree and cry and leave everyone else alone',
        agree: 42,
        isHot: true,
        replies: 2
    }
]

export default function CommentPage() {

    const { setCurrentPageStatus } = useContext(MainContext);

    useEffect(() => {
        setCurrentPageStatus && setCurrentPageStatus('comment_page');
        return (() => {
            setCurrentPageStatus && setCurrentPageStatus('normal');
        })
    }, []);

    return (
        <div className="pt-[74px] pb-[48px] p-4">
            {
                data.map((item, index) => (
                    <MobileComment
                        key={index}
                        avatar={item.avatar}
                        location={item.location}
                        name={item.name}
                        time={item.time}
                        content={item.content}
                        agree={item.agree}
                        isHot={item.isHot}
                        replies={item.replies}
                    />
                ))
            }
        </div>
    )
}