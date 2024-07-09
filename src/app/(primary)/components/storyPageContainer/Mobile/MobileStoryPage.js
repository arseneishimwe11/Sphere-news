import { useState } from "react";

import {
    TabPanel, 
} from "../../common";

import { 
    SummaryTabContent,
    MobileVideoTabContent, 
    MobileSocialTabContent,
    MobileMetricsTabContent,
    TimelineTabContent,
    MobileImageTabContent
} from "../TabContent";

import { Collapse, Fade } from "@mui/material";

const tabData = [
    {
        idx: 0,
        label: 'Summary',
        icon: '/img/icons/tabs/mobile_sphere.svg',
        position: 'left',
        zIndex: 1,
        render: <SummaryTabContent />
    },
    {
        idx: 1,
        label: 'Video',
        icon: '/img/icons/tabs/mobile_video.svg',
        position: 'right',
        zIndex: 2,
        render: <MobileVideoTabContent />
    },
    {
        idx: 2,
        label: 'Social',
        icon: '/img/icons/tabs/mobile_link.svg',
        position: 'right',
        zIndex: 3,
        render: <MobileSocialTabContent />
    },
    {
        idx: 3,
        label: 'Metrics',
        icon: '/img/icons/tabs/mobile_trending.svg',
        position: 'right',
        zIndex: 4,
        render: <MobileMetricsTabContent />
    },
    {
        idx: 4,
        label: 'TimeLine',
        icon: '/img/icons/tabs/mobile_line.svg',
        position: 'right',
        zIndex: 5,
        render: <TimelineTabContent />
    },
    {
        idx: 5,
        label: 'Images',
        icon: '/img/icons/tabs/mobile_image.svg',
        position: 'right',
        zIndex: 6,
        render: <MobileImageTabContent />
    }
];

const MobileStoryPage = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <img 
                src="/img/news/meeting2.png"
                className="w-full"
            />
            <TabPanel
                activeTab = {activeTab}
                setActiveTab = {setActiveTab}
                tabData = {tabData}
                isMobile = {true}
            >
                {
                    tabData.map((item, index) => (
                        <Collapse key={item.idx} in={activeTab == item.idx}>
                            <Fade in={activeTab == item.idx}>
                                <div>
                                    {item.render}
                                </div>
                            </Fade>
                        </Collapse>
                    ))
                }
            </TabPanel>
        </div>
    )
}

export default MobileStoryPage;