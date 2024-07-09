import { useEffect, useState } from "react";

const Tab = (props) => {
    const { tab, isActive, onClick } = props;

    const {isMobile} = props;
    const tab_class = isMobile ? 
        `absolute w-[122px] h-[38px] px-8 py-2 rounded-tr-full bg-cover hover:cursor-pointer ${isActive ? 'bg-[url("/img/others/small_tab_active.png")]' : 'bg-[url("/img/others/small_tab.png")]'}` :
        `absolute w-[188px] h-[58px] px-8 py-2 rounded-tr-full bg-cover hover:cursor-pointer ${isActive ? 'bg-[url("/img/others/tab_active.png")]' : 'bg-[url("/img/others/tab.png")]'}`;
    const tab_label_class = isMobile ? 
        "ml-1 pt-[4px] text-[12px] text-[#000] font-bold" :
        "ml-8 pt-[8px] text-lg text-[#000] font-bold";

    return (
        <div
            className={tab_class}
            style={{ left: `${tab.idx * (isMobile ? 46 : 74)}px`, zIndex: tab.zIndex }}
            onClick={onClick}
        >
            <div className="relative">
                <div 
                    className={`absolute top-1 ${tab.position==='right' ? (isMobile ? 'right-[4px]' : 'right-[20px]') : (isMobile ? '-left-[16px]' : '-left-[8px]')}`}
                >
                    {props.children}
                </div>
                {
                    isActive ? 
                    <div className={tab_label_class}>
                        {tab.label}
                    </div>: ''
                }
            </div>
        </div>
    );
};

export const TabPanel = (props) => {

    const {tabData} = props;
    const {activeTab, setActiveTab} = props;

    const {isSideTab} = props;

    const [tabs, setTabs] = useState(tabData);
 
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const updateZIndex = (activeIndex) => {
        const newTabs = [...tabs];
        for(let i = 0 ; i < Math.max(activeIndex, newTabs.length - activeIndex) ; i++) {
            if(i < activeIndex) newTabs[i].zIndex = i, newTabs[i].position='left';
            if(i < newTabs.length - activeIndex - 1) newTabs[newTabs.length - i - 1].zIndex = i, newTabs[newTabs.length - i - 1].position='right';
        }
        newTabs[activeIndex].zIndex = 100;
        newTabs[activeIndex].position = 'left';
        setTabs(newTabs);
    }

    useEffect(() => {
        updateZIndex(activeTab);
    }, [activeTab]);

    const {isMobile} = props;
    const my_class = isMobile ? "-mt-[58px]" : "";
    const tab_H_class = isMobile ? "relative h-[38px]" : "relative h-[58px]";
 
    const tab_content_class = isMobile ? 
        "min-h-[240px] p-[1px] pt-0 bg-[#fff] rounded-tr-[24px] rounded-b-[24px]" :
        isSideTab ? 
            "min-h-[782px] mx-[1px] p-[1px] pt-0 bg-gradient-to-b from-[#fff] via-[#f5a83e] to-[#3babc9] rounded-tr-[24px] rounded-b-[24px]" :
            "min-h-[360px] mx-[1px] p-[1px] pt-0 bg-gradient-to-b from-[#fff] via-[#f5a83e] to-[#3babc9] rounded-tr-[24px] rounded-b-[24px]";

    return (
        <div className={my_class}>
            <div className={tab_H_class}>
                {tabs.map((tab, index) => (
                    <Tab
                        tab={tab}
                        key={index}
                        onClick={() =>
                            handleTabClick(index)
                        }
                        isActive={index === activeTab}
                        isMobile={isMobile}
                    >
                        <img 
                            src={tab.icon}
                            className={isMobile ? "w-[17px]" : "w-[36px]"}
                        />
                    </Tab>
                ))}
            </div>
            <div className="relative z-[100]">
                <div className={tab_content_class}>
                    <div className={`w-full ${isMobile ? 'bg-[#fff] pb-[72px]' : isSideTab ? 'bg-[#CAEFFF] min-h-[782px]' : 'bg-[#CAEFFF] min-h-[360px]'} p-4 rounded-tr-[24px] rounded-b-[24px]`}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};
