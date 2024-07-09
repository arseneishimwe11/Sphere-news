import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const AssesArticle = ({ showVertIcon, direction }) => {
    const [judgeList, setJudgetList] = useState([425, 236, 185]);
    return (
        <div
            className={`absolute z-[200] flex flex-row items-center justify-between bottom-[10px] left-[5px] ${direction ? 'text-white' : 'text-[#333]'}`}
            style={showVertIcon ? { display: 'flex' } : { display: 'none' }}
        >
            <IconButton>
            <ThumbUpOffAltIcon className={`${direction ? 'text-[white]' : 'text-[#333]'}  cursor-pointer`} />
            </IconButton>
            <span className='text-[13px]'>{judgeList[0]}</span>&nbsp;
            <IconButton>
            <ThumbDownOffAltIcon className={`${direction ? 'text-[white]' : 'text-[#333]'}  cursor-pointer`} />
            </IconButton>
            <span className='text-[13px]'>{judgeList[1]}</span>&nbsp;
            <IconButton>
            <ChatBubbleOutlineOutlinedIcon className={`${direction ? 'text-[white]' : 'text-[#333]'}  cursor-pointer`} />
            </IconButton>
            <span className='text-[13px]'>{judgeList[2]}</span>
        </div>
    );
}

export default AssesArticle;