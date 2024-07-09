import { useState } from "react";
import { IconButton, Divider, } from "@mui/material";

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddIcon from '@mui/icons-material/Add';

import {
  BiasDistribution,
  CoverageDetail,
  ChannelAnalysis,
} from "../storyPageContainer/Widgets";
import { MultiDonutChart } from "../storyPageContainer/Widgets/MultiDonutChat";

import { EnhancedDropdown } from "./EnhacedDropdown";

const TopicItem = () => {
  return (
    <div className="flex flex-row bg-[rgb(0,62,109)] rounded-md">
      <div className="flex flex-row flex-grow p-2 px-4 text-xl text-black-color border-r border-r-1 border-gray-400">
        <h6 className="text-[rgb(234,252,255)] font-bold text-[16px]">
          Related Topics
        </h6>
      </div>
      <IconButton>
        <AddIcon sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
};

export const TopicList = () => {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-black-color font-bold border-b border-1 border-gray-300 pb-2 text-[12px]">
        RELATED TOPICS
      </h5>
      <TopicItem />
    </div>
  );
};

export const ChartGroup = (props) => {
  const { hasUntrackedBias } = props;

  const insightTitle = props.insight ? "# Tag Insights" : "# Topic Insights";

  const ownershipData = [
    {
      label: "Media Conglomerat",
      innerText: "Media Con.",
      value: 241,
    },
    {
      label: "Individual",
      innerText: "Individual",
      value: 536,
    },
    {
      label: "Private Equity",
      innerText: "Private Equ.",
      value: 617,
    },
    {
      label: "Media Conglomerate",
      innerText: "Media Con.",
      value: 532,
    },
    {
      label: "Corporation",
      innerText: "Corporation",
      value: 699,
    },
    {
      label: "Government",
      innerText: "Government",
      value: 337,
    },
    {
      label: "Other",
      innerText: "Other",
      value: 522,
    },
  ];

  const colors = [
    "rgb(141,221,255)",
    "rgb(0,51,81)",
    "rgb(249,136,27)",
    "rgb(108,203,127)",
    "rgb(34,104,159)",
    "rgb(255,189,125)",
    "rgb(79,186,233)",
  ];

  return (
    <div className="p-[1px] bg-gradient-to-b from-[#F8AF64] to-[#69C3E8] rounded-xl">
      <div className="flex flex-col p-4 gap-4 bg-[#EEF2F3] rounded-xl">
        <CoverageDetail />
        <BiasDistribution hasUntrackedBias={hasUntrackedBias} />
        <div className="flex flex-col gap-4 border border-1 border-gray-200 rounded-xl bg-white p-4">
          <p className="p-4 py-2 text-[20px] text-black bg-[rgb(230,241,245)] rounded-lg">
            {insightTitle}
          </p>
          <p className="text-[14px] text-black">
            An interactive chart of the topics and subtopics that you read the
            most about
          </p>
          <MultiDonutChart colors={colors} ownershipData={ownershipData} />
        </div>
      </div>
    </div>
  );
};

export const ChannelDetail = ({ topicLabel }) => {
  return (
    <div className="p-[1px] bg-gradient-to-b from-[#F8AF64] to-[#69C3E8] rounded-xl">
      <div className="p-4 bg-[#EEF2F3] rounded-xl">
        <ChannelAnalysis topicLabel={topicLabel} />
      </div>
    </div>
  );
};

const trending_topics = ["US-China relations", "China's military", "China's economic recovery", "Trending in China", "Trending in China", "Trending in China", 'Taiwan'];
export const TrendingTopics = () => {
	const [trendingTopics, setTrendingTopics] = useState(trending_topics);

	const handleClickExpand = () => {
		setTrendingTopics([...trendingTopics, "US-China relations", "China's military", "China's economic recovery"]);
	}

	return (
		<div className="border border-1 border-gray-300 rounded-xl overflow-hidden">
			<p className="p-4 text-[18px]">TRENDING TOPICS</p>
			<Divider />
			<div className="p-4 flex flex-wrap gap-2">
				{
					trendingTopics.map((item, index) => (
						<p className="p-2 text-[12px] bg-[rgb(229,246,253)] text-[rgb(153,190,196)] rounded-md">
							{item}
						</p>
					))
				}
			</div>
			<div className="w-full text-center bg-gray-200 hover:cursor-pointer hover:bg-white transition-all duration-100" onClick={handleClickExpand}>
				<ExpandMoreOutlinedIcon />
			</div>
		</div>
	)
}

const feeds = [
	{
		feed_img: "/img/logo/feeds/1.png",
		title: "Bitcoin Magazine News, Articles, and Insights",
		url: "bitcoinmagazine.com",
		followers: "11K",
		articles: "131",
		content: <p className="text-[14px]">
			Es Established in 2012, Bitcoin Magazine most established source of trustworthy
		</p>
	},
	{
		feed_img: "/img/logo/feeds/2.png",
		title: "Cointelegraph",
		url: "cointelegraph.com",
		followers: "59K",
		articles: "20",
		content: <>
			<p className="text-[14px]">
				Cc Established in 2012, Bitcoin Magazine most established source of trustworthy
			</p>
			<ul className="ml-4 list-disc">
				<li>"I am a big fan": cantor Bitcoin</li>
				<li>El Salvador expects to end of year</li>
				<li>BlackRock revises for ban...</li>
			</ul>
		</>
	}
]

export const RelatedFeeds = () => {
	const [relatedFeeds, setRelatedFeeds] = useState(feeds);

	const handleClickExpand = () => {
		setRelatedFeeds([
			...relatedFeeds,
			...feeds, ...feeds
		])
	}

	const FeedItem = (props) => {

		const { feed_img, title, url, followers, articles } = props;

		return (
			<div className="flex flex-row items-start gap-4 p-4 border-t border-t-1 border-gray-200">
				<img
					src={feed_img}
				/>
				<div className="flex flex-col gap-4">
					<div className="flex flex-row items-start justify-between">
						<div>
							<p className="text-black font-bold">{title}</p>
							<p className="text-gray-500 text-[12px]">{url}</p>
						</div>
						<EnhancedDropdown />
					</div>
					{props.content}
					<div className="flex flex-row items-start text-[14px]">
						<p className="flex-grow">{followers}<br />followers</p>
						<p className="flex-grow">{articles}<br />articles per week</p>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="w-full border border-1 border-gray-300 rounded-xl overflow-hidden">
			<p className="p-4 text-[18px]">RELATED FEEDS</p>
			{
				relatedFeeds.map((feed) => (
					<FeedItem
						key={feed.title}
						feed_img={feed.feed_img}
						title={feed.title}
						url={feed.url}
						followers={feed.followers}
						articles={feed.articles}
						content={feed.content}
					/>
				))
			}
			<div className="w-full text-center bg-gray-200 hover:cursor-pointer hover:bg-white transition-all duration-100" onClick={handleClickExpand}>
				<ExpandMoreOutlinedIcon />
			</div>
		</div >
	)
}
