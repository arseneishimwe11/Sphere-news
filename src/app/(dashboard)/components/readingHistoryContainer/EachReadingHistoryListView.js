import { useState } from "react";
import AssesArticle from "../common/AssessArticle";
import VertDelectIconButton from "../common/VertDeleteIconButton";

const EachReadingHistoryListView = (props) => {
    const { imageUrl, department, content, analysis } = props;
    const [showVertIcon, setShowVertIcon] = useState(true);
    const [removed, setRemoved] = useState(false);
    return (
        !removed &&
        <div
            className="w-full flex flex-row rounded-xl bg-white mt-5"
        >
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
                <div className="text-[13px] min-h-[50px] px-1 flex flex-row">
                    <div className="w-[85%]">
                        <AssesArticle showVertIcon={true} />
                    </div>
                    <div className="w-[15%] relative">
                        <VertDelectIconButton
                            removed={removed}
                            setRemoved={setRemoved}
                            showVertIcon={showVertIcon}
                            setShowVertIcon={setShowVertIcon}
                            direction = {false}
                        />
                    </div>
                </div>
            </div>
            <div className="w-[38%]">
                <img src={imageUrl} className="w-full rounded-lg py-4 px-2" />
            </div>
        </div>
    )
}

export default EachReadingHistoryListView;