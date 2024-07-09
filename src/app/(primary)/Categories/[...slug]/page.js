'use client';
import { useState, useContext } from "react";

import { Grid } from "@mui/material";

import { ToolBar } from "../../components/followingPage/Toolbar";
import { MainComponent } from "../../components/followingPage/NewsBoard";

import { TopicList } from "../../components/common/SideComponent";
import { ChartGroup } from "../../components/common/SideComponent";
import { TrendingTopics } from "../../components/common/SideComponent";
import { RelatedFeeds } from "../../components/common/SideComponent";

import { MobileFollowingPage } from "../../components/followingPage/MobileFollowingPage";

import { MainContext } from "../../layout";

const TopicPageContainer = (props) => {

	const { isShowSidebar, viewMode } = props;

	return (
		<Grid container spacing={8} sx={{ marginTop: '-32px' }}>
			<Grid item xs={12} lg={isShowSidebar ? 8 : 12} sx={{ transition: 'all .3s' }}>
				<MainComponent viewMode={viewMode} />
			</Grid>
			{
				isShowSidebar &&
				<Grid item lg={4} className="hidden xl:block transition-all">
					<div className="flex flex-col gap-4">
						<TopicList />
						<ChartGroup />
						<TrendingTopics />
						<RelatedFeeds />
					</div>
				</Grid>
			}
		</Grid>
	);
}

export default function CategoryPage() {

	const [isShowSidebar, setIsShowSidebar] = useState(true);
	const [viewMode, setViewMode] = useState('expand');

    const { isMobile } = useContext(MainContext);

	return (
        !isMobile ? 
		<div className='laptop-extrapage-bodycontainer'>
			<div className='componentcontainer p-4'>
				<ToolBar
					isShowSidebar={isShowSidebar}
					setIsShowSidebar={setIsShowSidebar}
					setViewMode={setViewMode}
				/>
				<TopicPageContainer isShowSidebar={isShowSidebar} viewMode={viewMode} />
			</div>
		</div> :
        <MobileFollowingPage />
	)
}