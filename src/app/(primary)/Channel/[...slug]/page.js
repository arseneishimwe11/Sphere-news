'use client';

import { useState } from 'react';

import { Grid } from '@mui/material';

import { ChannelProfileCard } from '../../components/authorContainer/AuthorProfileContainer';

import { ToolBar } from '../../components/followingPage/Toolbar';
import { MainComponent } from '../../components/followingPage/NewsBoard';

import { TopicList } from "../../components/common/SideComponent";
import { ChartGroup } from "../../components/common/SideComponent";
import { TrendingTopics } from "../../components/common/SideComponent";
import { RelatedFeeds } from "../../components/common/SideComponent";

const AuthorPageContainer = (props) => {

	const { isShowSidebar, viewMode, channel } = props;

	return (
		<Grid container spacing={8} sx={{ marginTop: '-32px' }}>
			<Grid item xs={12} lg={isShowSidebar ? 8 : 12} sx={{ transition: 'all .3s' }}>
                <div className='mb-2'>
                    <ChannelProfileCard />
                </div>
				{/* <MainComponent viewMode={viewMode} /> */}
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

export default function Author({ params }) {

	const [isShowSidebar, setIsShowSidebar] = useState(true);
	const [viewMode, setViewMode] = useState('expand');

    return (
        <div className='laptop-extrapage-bodycontainer'>
            <div className='componentcontainer p-4'>
                <ToolBar
                    isShowSidebar={isShowSidebar}
                    setIsShowSidebar={setIsShowSidebar}
                    setViewMode={setViewMode}
                />
                <AuthorPageContainer isShowSidebar={isShowSidebar} viewMode={viewMode} channel={params.slug} />
            </div>
        </div>
    )
}