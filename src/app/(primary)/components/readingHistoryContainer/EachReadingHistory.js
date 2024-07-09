import { useState } from "react";
import MobileArticleAnalyze from "../common/AssessArticle/mobile";
import VertDelectIconButton from "../common/VertDeleteIconButton";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { Button } from "@mui/material";

const EachReadingHistory = (props) => {
    const { imageUrl, content } = props;
    const [showVertIcon, setShowVertIcon] = useState(false);
    const [removed, setRemoved] = useState(false);

    return (
        !removed && <div
            className="flex flex-col w-[23%] min-w-[250px] relative"
            onMouseOver={() => setShowVertIcon(true)}
            onMouseOut={() => setShowVertIcon(false)}
        >
            <div
                className="relative filter"
            >
                <MobileArticleAnalyze showVertIcon={showVertIcon} direction={true} />
                <img
                    src={imageUrl}
                    className={`rounded-lg ${showVertIcon ? "brightness-[0.4]" : ""}`}
                />
                <VertDelectIconButton
                    removed={removed}
                    setRemoved={setRemoved}
                    showVertIcon={showVertIcon}
                    setShowVertIcon={setShowVertIcon}
                    direction = {true}
                />
            </div>
            <div className="font-[600]">
                {content}
            </div>
            <p className="text-gray-400">Investors involved In the fundraising round have been included in preliminary discussions, according to the people, who asked not to be identified..</p>
            <div className="flex gap-2 items-center text-[12px]">
                <div className="w-4 h-2 bg-[#234976]"/>
                <p>11 sources • Fortune / 2h</p>
            </div>
            <div className="flex gap-2 items-center text-[12px]">
                <div className="w-4 h-2 bg-[#5DB3D4]"/>
                <div className="flex gap-2">
                    <Button sx={{textTransform: 'none', fontSize: '12px', paddingX: 0}}>
                        <p><StarBorderIcon sx={{fontSize: '18px'}}/>My First Board</p>
                    </Button>
                    <Button sx={{textTransform: 'none', fontSize: '12px', paddingX: 0}}>
                        <p><BookmarkBorderIcon sx={{fontSize: '18px'}}/>Read Later</p>
                    </Button>
                </div>
            </div>
            <div className="flex gap-2 items-center text-[12px]">
                <div className="w-4 h-2 bg-[#E88B2C]"/>
                <p>My private Note</p>
            </div>
        </div >
    )
}

export default EachReadingHistory;