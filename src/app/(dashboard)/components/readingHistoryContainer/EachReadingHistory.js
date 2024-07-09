import { useState } from "react";
import AssesArticle from "../common/AssessArticle";
import VertDelectIconButton from "../common/VertDeleteIconButton";

const EachReadingHistory = (props) => {
    const { imageUrl, department, content, analysis } = props;
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
                <AssesArticle showVertIcon={showVertIcon} direction={true} />
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
            <div className="py-2">
                <p className="text-[18px] uppercase text-[#95BDCF]">{department}</p>
            </div>
            <div className="font-[600] py-1">
                {content}
            </div>
            <div className="flex flex-row items-center">
                <hr style={{ width: "10px", height: "10px" }} color="#234976" />
                <hr style={{ width: "15px", height: "10px" }} color="#5DB3D4" />
                <hr style={{ width: "25px", height: "10px" }} color="#E88B2C" />
                &nbsp;&nbsp;&nbsp;
                <p className="text-[12px] text-gray-400">
                    {analysis}
                </p>
            </div>
        </div >
    )
}

export default EachReadingHistory;