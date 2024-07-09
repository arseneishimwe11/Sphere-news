import { useState } from "react";

import {
    TabPanel, 
} from "../../common";

import { 
    SummaryTabContent,
} from "../TabContent";

import { Collapse, Fade } from "@mui/material";

const tabData = [
    {
        idx: 0,
        label: 'Summary',
        icon: '/img/icons/tabs/sphere.png',
        position: 'left',
        zIndex: 1,
        render: <SummaryTabContent />
    },
    {
        idx: 1,
        label: 'Full View',
        icon: '/img/icons/tabs/hamburger.png',
        position: 'right',
        zIndex: 2,
        render: <></>
    },
    {
        idx: 2,
        label: 'Chat AI',
        icon: '/img/icons/tabs/sparkling.png',
        position: 'right',
        zIndex: 3,
        render: <></>
    },
    {
        idx: 3,
        label: 'Today',
        icon: '/img/icons/tabs/dark_mode.png',
        position: 'right',
        zIndex: 4,
        render: <></>
    }
];

const MobileFullStory = () => {

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

export default MobileFullStory;