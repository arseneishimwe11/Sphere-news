import { useState } from "react";
import MobileArticleAnalyze from "../common/AssessArticle/mobile";

const EachReadingHistoryListView = (props) => {
    const { imageUrl, department, content, analysis } = props;
    const [removed, setRemoved] = useState(false);
    return (
        !removed &&
        <div className="w-full border border-1 border-gray-400 rounded-lg bg-white my-5">
            <div className="flex flex-row">
                <div className="w-[62%] flex flex-col relative">
                    <div className="flex flex-row px-3 py-2 gap-1 items-center">
                        <p className="rounded-sm text-center font-[600] w-[20px] h-[20px] bg-[#A8E7DC] text-[#37C39E]">R</p>
                        <p>Reuters • 6h ago</p>
                    </div>
                    <div className="px-3 py-1">
                        <h1 className="font-[700]">
                            The middle dot is called a bullet point. It is a typographical symbal.
                        </h1>
                    </div>
                </div>
                <div className="w-[38%]">
                    <img src={imageUrl} className="w-full rounded-xl py-4 px-2" />
                </div>
            </div>
            <div className="text-[12px] px-1 flex flex-row relative">
                <MobileArticleAnalyze 
                    removed={removed}
                    setRemoved={setRemoved}
                />
            </div>
        </div>
    )
}

export default EachReadingHistoryListView;