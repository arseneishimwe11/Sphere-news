import './CommentBoard.css';
import { Button, Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { ControlledAccordions } from "../common";

const ReplierWrapper = (props) => {
    const { avartar, number } = props;

    return (
        <div className="flex flex-row gap-2">
            <div className="flex flex-row items-center gap-1 p-1 px-2 rounded-md bg-[#EBF5FB]">
                {
                    avartar.map((item, index) => (
                        <img 
                            src={item}
                            className="rounded-full w-[24px] h-[24px]"
                        />
                    ))
                }
                <span className="text-[16px] text-[#73C8ED]">{number} replies</span>
            </div>
            <Button variant="outlined" sx={{textTransform: 'none'}} className="border border-gray-400 text-gray-400 rounded-lg">Reply</Button>
        </div>
    )
}

const MessageComponent = (props) => {
    const {deep, img_src, name, property, time, authority} = props;
    const {hasWidget, showFullMessage} = props;

    return (
        <div className="flex flex-row items-start gap-4" style={{paddingLeft: `${deep*48}px`}}>
            {
                showFullMessage ?
                <>
                    <img 
                        src={img_src}
                        className="w-[40px] rounded-full"
                    />
                    <div className="flex flex-col gap-1 py-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[#000] text-[16px] font-bold">{name}</span>
                            <span className="p-1 bg-[#4FBAE9] text-[#fff] text-[10px] rounded-md">{authority}</span>
                            <img 
                                src="/img/icons/smile_yellow.png"
                            />
                            <span className="text-[12px]">{time}</span>
                        </div>
                        <span className="text-gray-400 text-[12px]">Visible team only</span>
                        <a className="text-[#A4DBF4] text-[12px] hover:cursor-pointer">@ Factory Toor SAS</a>
                        <div className="my-2 text-gray-600">
                            {props.children}
                        </div>
                        {
                            hasWidget ?
                            <div className="flex flex-wrap justify-between">
                                <ReplierWrapper 
                                    avartar={['img/avatar/Image_332.png', 'img/avatar/Image_333.png', 'img/avatar/Image_336.png']}
                                    number='3'
                                />
                                <div className="flex flex-row gap-2">

                                </div>
                            </div> : ''
                        }
                    </div>
                </>
                :
                <div className="flex flex-row items-center">
                    <img 
                        src="/img/icons/reply.svg"
                    />
                    <span className="text-[12px] text-gray-500">40 Replies</span>
                </div>
            }
        </div>
    )
}

const SideBarCommentItem = (props) => {
    const { img_src, name, time } = props;

    return (
        <div className="flex flex-row gap-4">
            <img 
                src={img_src}
                className="w-[40px] h-[40px] rounded-md"
            />
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row items-center">
                    <h6 className="my-2 text-[#000] text-[16px] font-bold">{name}&nbsp;</h6>
                    <span className="text-[12px]">{time}</span>
                </div>
                {props.children}
            </div>
        </div>
    )
}
const SidebarComment = () => {
    return (
        <div className="flex flex-col mt-[102px] p-4 border border-1 border-gray-400 bg-[#fff] rounded-2xl">
            <div className="flex flex-col gap-4">
                <SideBarCommentItem 
                    img_src='/img/avatar/Image_332.png'
                    name="Earling Highlang"
                    time='2d'
                >
                    <div className="text-[12px]">
                        <p className="text-gray-600">Ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorge fertigte Stücke zu wied erholen - was es nötig machte einen richtigen Generator zu entwickeln.</p>
                        <div className="flex flex-row gap-4 my-2">
                            <a>Like</a>
                            <a>Reply</a>
                        </div>
                    </div>
                </SideBarCommentItem>
                <SideBarCommentItem 
                    img_src='/img/avatar/Image_332.png'
                    name="Earling Highlang"
                    time='2d'
                >
                    <div className="text-[12px]">
                        <p className="text-gray-600">Ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorge fertigte Stücke zu wied erholen - was es nötig machte einen richtigen Generator zu entwickeln.</p>
                        <div className="flex flex-row gap-4 my-2">
                            <a>Like</a>
                            <a>Reply</a>
                        </div>
                    </div>
                </SideBarCommentItem>
                <SideBarCommentItem 
                    img_src='/img/avatar/Image_332.png'
                    name="Earling Highlang"
                    time='2d'
                >
                    <div className="text-[12px]">
                        <p className="text-gray-600">Ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu.</p>
                    </div>
                </SideBarCommentItem>
                <div className="flex flex-col bg-[#E7F0F5] rounded-xl">
                    <textarea className="p-4 bg-[#E7F0F5] rounded-t-xl" placeholder="Type a comment..."/>
                    <div className="flex flex-row items-center px-4 py-2 gap-4 rounded-b-xl">
                        <img 
                            src="/img/icons/image_blue.png"
                            className="hover:cursor-pointer"
                        />
                        <img 
                            src="/img/icons/gif_blue.png"
                            className="hover:cursor-pointer"
                        />
                        <img 
                            src="/img/icons/smile_blue.png"
                            className="hover:cursor-pointer"
                        />
                        <img 
                            src="/img/icons/@_blue.png"
                            className="hover:cursor-pointer"
                        />
                        <img 
                            src="/img/icons/pinner_blue.png"
                            className="hover:cursor-pointer"
                        />
                        <img 
                            src="/img/icons/send.png"
                            className="hover:cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const CommentBoard = () => {
    return (
        <div id="CommentBoard">
            <div className2="leftpart" className="flex flex-col w-full xl:w-[70%]">
                <div className="flex flex-wrap items-center">
                    <Button variant="outlined" className="py-2 border-gray-400 text-[#78CAEE] rounded-full">
                        View 20 New Comments
                    </Button>
                    <span className="flex-grow mx-4 text-gray-800 font-bold">
                        •••20 People Typing
                    </span>
                    <Select
                        value={1}
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 0,
                            }
                        }}
                        // onChange={handleChange}
                    >
                        <MenuItem value={1}>Sort By Top</MenuItem>
                        <MenuItem value={22}>Sort By Top</MenuItem>
                    </Select>
                </div>
                <div className="flex flex-col mt-12 gap-4 p-8 border border-1 border-gray-400 bg-[#fff] rounded-2xl">
                    <MessageComponent 
                        deep={0}
                        img_src='img/avatar/8.png'
                        authority='ADMIN'
                        name='Karen Wasmund'
                        time='8 days ago'
                        showFullMessage={true}
                        hasWidget={true}
                    >
                        <p>
                            Ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorge fertigte Stücke zu wied erholen - was es nötig machte einen richtigen Generator zu entwickeln. Ungewollten Wörter stehen. Viele der Generatoren im Internet neige Ungewollten Wörter stehen. Viele der Gener atoren im Internet neigen dazu, vorge fertigte Stücke zu wieder.
                        </p>
                    </MessageComponent>
                    <MessageComponent 
                        deep={1}
                        img_src='img/avatar/8.png'
                        authority='ADMIN'
                        name='Karen Wasmund'
                        time='8 days ago'
                        showFullMessage={true}
                        hasWidget={true}
                    >
                        <p className="p-2 bg-[#EBF5FB] rounded-lg">
                            Ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorge fertigte Stücke zu wied erholen - was es nötig.
                        </p>
                    </MessageComponent>
                    <MessageComponent 
                        deep={2}
                        showFullMessage={false}
                    />
                    <MessageComponent 
                        deep={0}
                        img_src='img/avatar/8.png'
                        authority='ADMIN'
                        name='Karen Wasmund'
                        time='8 days ago'
                        showFullMessage={true}
                    >
                        <ControlledAccordions headTitle='image.png'>
                            <div className="flex flex-col">
                                <img 
                                    src="img/news/Paper.png"
                                />
                                <div className="flex flex-row text-gray-600">
                                    <div className="flex flex-grow gap-2">
                                        <a className="hover:cursor-pointer">Like</a>
                                        <a className="hover:cursor-pointer">Reply</a>
                                    </div>
                                    <span>4 Likes</span>
                                </div>
                            </div>
                        </ControlledAccordions>
                    </MessageComponent>
                </div>
            </div>
            <div className="w-[28%] hidden xl:block">
                <SidebarComment />
            </div>
        </div>
    );
}

export default CommentBoard;
