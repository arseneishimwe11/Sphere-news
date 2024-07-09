import LightTooltip from "./LightToolTip";
import { useState } from "react";

const ThreeDotNews = () => {
    const [circle, setCircle] = useState(1);
    const handleCircleClick = (whichOne) => {
        setCircle(whichOne);
    }
    return (
        <div className="flex flex-row justify-between">
            <div onClick={() => handleCircleClick(0)} className={`border ${circle === 0 ? 'border-[#013E6D]' : 'border-[#FFF]'} rounded-full w-[20px] h-[20px]`}>
                <LightTooltip title="All">
                    <svg width="12" height="12" className="transform translate-x-[3px] translate-y-[3px]">
                        <circle cx="6" cy="6" r="5" fill="#013E6D" />
                    </svg>
                </LightTooltip>
            </div>
            <div onClick={() => handleCircleClick(1)} className={`border ${circle === 1 ? 'border-[#5DB9E8]' : 'border-[#FFF]'} rounded-full w-[20px] h-[20px]`}>
                <LightTooltip title="Popular">
                    <svg width="12" height="12" className="transform translate-x-[3px] translate-y-[3px]">
                        <circle cx="6" cy="6" r="5" fill="#5DB9E8" />
                    </svg>
                </LightTooltip>
            </div>
            <div onClick={() => handleCircleClick(2)} className={`border ${circle === 2 ? 'border-[#E08F3E]' : 'border-[#FFF]'} rounded-full w-[20px] h-[20px]`}>
                <LightTooltip title="Most Popular">
                    <svg width="12" height="12" className="transform translate-x-[3px] translate-y-[3px]">
                        <circle cx="6" cy="6" r="5" fill="#E08F3E" />
                    </svg>
                </LightTooltip>
            </div>
        </div>
    );
}

export default ThreeDotNews;