"use client";
import { useState, useRef, useEffect, useContext } from "react";

import { Fade, Grid, IconButton } from "@mui/material";

import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Popover from '@mui/material/Popover';

// import { ToolBar } from "../components/followingPage/Toolbar";
// import { HeaderToolBar } from "../components/followingPage/HeaderToolbar";
import { MainComponent } from "../components/followingPage/NewsBoard";

import { ChannelDetail, TopicList } from "../components/common/SideComponent";
import { ChartGroup } from "../components/common/SideComponent";
import { TrendingTopics } from "../components/common/SideComponent";
import { RelatedFeeds } from "../components/common/SideComponent";

import { MobileFollowingPage } from "../components/followingPage/MobileFollowingPage";

import { MainContext } from "../layout";
import FeedsDropDown from "../components/followingPage/FeedsDropDown";

const TopicPageContainer = (props) => {
  const { isShowSidebar, viewMode, setIsShowSidebar, setViewMode, topicLabel } = props;

  if (isShowSidebar == 2) {
    return (
      <div className="w-[75%] mx-auto">
        <MainComponent
          viewMode={viewMode}
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
          setViewMode={setViewMode}
          topicLabel={topicLabel}
        />
      </div>
    )
  }

  return (
    <Grid container spacing={8} sx={{ marginTop: "-32px" }}>
      <Grid
        item
        xs={12}
        lg={isShowSidebar ? 8 : 12}
        sx={{ transition: "all .3s" }}
      >
        <MainComponent
          viewMode={viewMode}
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
          setViewMode={setViewMode}
          topicLabel={topicLabel}
        />
      </Grid>
      {isShowSidebar == 1 && (
        <Grid item lg={4} className="hidden xl:block transition-all">
          <div className="flex flex-col gap-4 h-[100vh] overflow-hidden hover:overflow-y-auto">
            {/* <TopicList /> */}
            <ChannelDetail topicLabel={topicLabel} />
            <ChartGroup hasUntrackedBias={true} />
            <TrendingTopics />
            <RelatedFeeds />
          </div>
        </Grid>
      )}
    </Grid>
  );
};

const StreamItem = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const {
    labelIcon,
    labelText,
    newsAmount,
    addition,
    setTopicLabel,
    topicLabel,
  } = props;
  return (
    <div
      // className={`flex flex-row gap-4 p-2 items-center relative hover:cursor-pointer ${
      //   addition === undefined ? "min-w-[120px]" : "min-w-[250px]"
      // }`}
      className={`flex flex-row gap-4 p-2 items-center relative hover:cursor-pointer whitespace-nowrap`}
      onClick={() => setTopicLabel(labelText)}
    >
      {labelIcon}
      <div className="flex flex-row items-center">
        <div>
          <p className="text-black text-[14px]">
            {labelText}
            {newsAmount && (
              <span className="text-[12px] rounded-full bg-[rgb(167,211,220)] text-white px-1 ml-2">
                {newsAmount} new
              </span>
            )}
          </p>
          {addition && <p className="text-[12px] text-gray-400">{addition}</p>}
        </div>
        {topicLabel === labelText && (
          <IconButton onClick={handleClick} size="small">
            <ArrowDropDownIcon />
          </IconButton>
        )}
      </div>
      {topicLabel === labelText && (
        <div className="w-full h-[3px] bg-[#FF9D28] rounded-t-full absolute bottom-0 left-0"></div>
      )}
      {/* {topicLabel === labelText && <ArrowDropDownIcon />} */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <FeedsDropDown />
      </Popover>
    </div>
  );
};

const StreamGroup = ({ setTopicLabel, topicLabel }) => {
  const [offsetX, setOffsetX] = useState(0);
  const [showIndicator, setShowIndicator] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [showRightIndicator, setShowRightIndicator] = useState(true);

  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const parentWidth = parentRef.current.offsetWidth;
    const childWidth = childRef.current.scrollWidth;

    childWidth > parentWidth ? setShowIndicator(true) : setShowIndicator(false);
    childWidth + offsetX < parentWidth
      ? setShowRightIndicator(false)
      : setShowRightIndicator(true);
  }, [offsetX]);

  return (
    <>
      <div
        className="border-b border-b-1 border-gray-200 my-2 overflow-x-hidden relative"
        ref={parentRef}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => setIsHover(false)}
      >
        <Fade in={showIndicator && isHover}>
          <div>
            {offsetX < 0 && (
              <div
                className="flex flex-col justify-center absolute z-[101] left-0 top-0 w-[28px] h-full bg-[rgb(83,182,222)] hover:bg-[rgb(103,202,242)] hover:cursor-pointer"
                onClick={() => setOffsetX(0)}
              >
                <ArrowBackIosOutlinedIcon sx={{ color: "white" }} />
              </div>
            )}
            {showRightIndicator && (
              <div
                className="flex flex-col justify-center absolute z-[101] right-0 top-0 w-[28px] h-full bg-[rgb(83,182,222)] hover:bg-[rgb(103,202,242)] hover:cursor-pointer"
                onClick={() => setOffsetX(offsetX - 242)}
              >
                <ArrowForwardIosOutlinedIcon sx={{ color: "white" }} />
              </div>
            )}
          </div>
        </Fade>
        <div
          className="flex flex-row gap-4 transition duration-500"
          style={{
            transform: `translate(${offsetX}px, 0)`,
          }}
          ref={childRef}
        >
          <StreamItem
            labelIcon={<NewspaperOutlinedIcon />}
            labelText="News"
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<NoteOutlinedIcon />}
            labelText="Web"
            newsAmount={4}
            addition="Lifehacker, WikiHow, Med..."
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<PeopleOutlinedIcon />}
            labelText="Social"
            newsAmount={7}
            addition="WikiHow, Medium, Faceb..."
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<ChatOutlinedIcon />}
            labelText="Gossip"
            newsAmount={3}
            addition="TMZ.com, POPSUGAR..."
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<EmailOutlinedIcon />}
            labelText="Newsletter"
            newsAmount={1}
            addition="Exponential View"
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<VideocamOutlinedIcon />}
            labelText="Media"
            newsAmount={2}
            addition="Podnews, YouTube"
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<EmailOutlinedIcon />}
            labelText="Newsletter New"
            newsAmount={1}
            addition="Exponential View"
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
          <StreamItem
            labelIcon={<VideocamOutlinedIcon />}
            labelText="Media New"
            newsAmount={2}
            addition="Podnews, YouTube"
            setTopicLabel={setTopicLabel}
            topicLabel={topicLabel}
          />
        </div>
      </div>
    </>
  );
};

const FolderGroup = () => {
  const folder_list = [
    "community",
    "Audiovisual",
    "Business",
    "Career",
    "Coaching",
    "Design",
    "Education",
    "Events",
    "Finances",
    "Gardening",
    "Health",
  ];
  return (
    <div className="flex flex-row gap-8 p-2 mt-4 border-b border-b-1 border-gray-200 my-2 overflow-x-hidden relative">
      {folder_list.map((item, index) => (
        <div className="flex flex-row items-center gap-1 text-[12px]">
          <FolderOutlinedIcon />
          {item}
          <ExpandMoreOutlinedIcon sx={{ fontSize: "16px" }} />
        </div>
      ))}
    </div>
  );
};

export default function TopicPage() {
  const [isShowSidebar, setIsShowSidebar] = useState(1);
  const [viewMode, setViewMode] = useState("expand");

  const [topicLabel, setTopicLabel] = useState("News");
  const { isMobile } = useContext(MainContext);

  return !isMobile ? (
    <div className="laptop-extrapage-bodycontainer">
      <div className="componentcontainer p-4">
        {/* <HeaderToolBar
					isShowSidebar={isShowSidebar}
					setIsShowSidebar={setIsShowSidebar}
					setViewMode={setViewMode}
				/> */}
        {
          isShowSidebar == 2 ?
            <div className="w-[75%] mx-auto">
              <StreamGroup setTopicLabel={setTopicLabel} topicLabel={topicLabel} />
            </div> :
            <StreamGroup setTopicLabel={setTopicLabel} topicLabel={topicLabel} />
        }
        {/* <FolderGroup /> */}
        <TopicPageContainer
          isShowSidebar={isShowSidebar}
          viewMode={viewMode}
          setIsShowSidebar={setIsShowSidebar}
          setViewMode={setViewMode}
          topicLabel={topicLabel}
        />
      </div>
    </div>
  ) : (
    <MobileFollowingPage />
  );
}
