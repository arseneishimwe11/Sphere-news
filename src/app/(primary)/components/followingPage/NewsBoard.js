import { useState } from "react";

import { BoostMenu } from "../common/BoostMenu";
import { FullReadModal } from "../modals/FullReadModal";
import { ArticleMeta } from "../common";
import { CommunityButton } from "./CommunityButton";
import { ArticleViewContent } from "../modals/FullReadModal";
import { NotesAnnotationPopover } from "./NotesAnnotationPopover";

import {
  IconButton,
  Fade,
  AvatarGroup,
  Avatar,
  Popover,
} from "@mui/material";

import { HeaderToolBar } from "./HeaderToolbar";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdjustIcon from "@mui/icons-material/Adjust";
import DoneIcon from "@mui/icons-material/Done";
import FilterField from "../common/Widgets/FilterField";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ActionsDropdown from "./ActionsDropdown";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import usePopup from "@/app/hooks/usePopupState";
import PCArticleAnalyze from "../common/AssessArticle/pc";

const HeaderComponent = (props) => {
  const {
    setIsShowSidebar,
    setViewMode,
    isShowSidebar,
    topicLabel,
    grouping,
    setGrouping,
  } = props;
  return (
    <div className="flex flex-row gap-2 items-start px-8 py-4 border-b border-1 border-gray-400 bg-[#E1EBEE]">
      <img src="/img/icons/grid.svg" className="mt-3 w-[14px]" />
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap w-full items-center justify-between">
          <h3 className="text-[24px] text-black-color font-bold">
            {topicLabel}
          </h3>
          {!isShowSidebar && (
            <div className="flex flex-grow flex-row items-center gap-3 ml-5">
              <div className="flex flex-row items-center gap-1">
                <AdjustIcon sx={{ color: "red" }} />
                <b>208 Unread</b>
              </div>
              <div className="flex flex-row items-center gap-1">
                <DoneIcon sx={{ color: "green" }} />
                <p>3,087 Read</p>
              </div>
            </div>
          )}
          {!isShowSidebar && (
            <div className="flex flex-row gap-2 mr-2">
              <FilterField index={0} text="System Stream" totalNum={12} />
              <FilterField index={1} text="Emojis" totalNum={22} />
              <FilterField index={2} text="All Tags" totalNum={99} />
            </div>
          )}
          <HeaderToolBar
            setIsShowSidebar={setIsShowSidebar}
            setViewMode={setViewMode}
            isShowSidebar={isShowSidebar}
            grouping={grouping}
            setGrouping={setGrouping}
          />
          {/* <SourceAvatarGroupWithModal /> */}
        </div>
        {/* <p className="mt-4 text-[12px] text-gray-dark-color">
					Stay current with all the latest and breaking news about <b>world</b>. In total, <b>21,477</b> stories have been published about <b>world</b> which Sphere News has aggregated in the past 3 months.
				</p> */}
      </div>
    </div>
  );
};

const MainNewsItem = (props) => {
  const {
    img_src,
    organization,
    title,
    description,
    time,
    viewMode,
    isShowSidebar,
    setIsOpenFullRead,
  } = props;

  const { anchorEl, handleOpen, handleClose } = usePopup();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const ColumnView = (props) => {
    const [isOverlay, setIsOverlay] = useState(false);

    return (
      <div className={`w-full ${isShowSidebar ? 'md:w-[32%] lg:w-[32%]' : 'md:w-[48%] lg:w-[19%]'} min-w-[200px] rounded-xl transition-all duration-300`}>
        <div
          className="relative hover:cursor-pointer"
          onMouseEnter={() => setIsOverlay(true)}
          onMouseLeave={() => setIsOverlay(false)}
          onClick={() => setIsOpenFullRead(true)}
        >
          <img src={props.img_src} className="my-2 rounded-lg" />
          <Fade in={isOverlay}>
            <div className="bg-[rgba(0,0,0,0.5)] absolute z-101 w-full h-full top-0 left-0 rounded-xl">
              <div className="w-full absolute left-2 bottom-2 flex flex-row items-center gap-2">
                <p className="flex flex-row items-center text-white">
                  <TextsmsOutlinedIcon />
                  <span className="ml-1">20</span>
                </p>
                <p className="flex flex-row items-center text-white">
                  <RocketLaunchOutlinedIcon />
                  <span className="ml-1">617</span>
                </p>
                <p className="flex flex-row items-center text-white">
                  <ThumbUpAltOutlinedIcon />
                  <span className="ml-1">20</span>
                </p>
              </div>
              <div className="w-full absolute right-2 top-2 flex flex-row items-center justify-end">
                <IconButton>
                  <VisibilityOffIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton>
                  <MoreVertIcon sx={{ color: "white" }} />
                </IconButton>
              </div>
            </div>
          </Fade>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-[16px] font-bold text-black">{props.title}</p>
          <ArticleMeta />
          <p className="text-[12px]">
            Business Insider by Peter Kafka &#8226; {props.time}
          </p>
          <p className="text-[12px]">{props.description}</p>
        </div>
      </div>
    );
  };

  const MagazineView = (props) => {

    const { viewMode } = props;

    if (viewMode == 'magazineright') {
      return (
        <div className="border-b border-b-1 border-gray-300 py-2">
          <div className="flex flex-row items-start gap-8 w-full ">
            <div className="w-[75%]">
              <div className="flex flex-wrap items-center gap-2 text-[12px]">
                <img
                  src="/img/icons/source/bbc.png"
                  className="dark:invert"
                />
                <div className="flex flex-row items-center">
                  <p>TESLA | ELECTREK</p>
                  <KeyboardArrowDownOutlinedIcon />
                </div>
                <div className="flex flex-row items-center">
                  <p>BY EED LAMBERT</p>
                  <KeyboardArrowDownOutlinedIcon />
                </div>
                <p>{time}</p>
              </div>
              <p className="text-[20px] font-bold text-black">{title}</p>
              {description && (
                <p className="my-2 text-[14px] text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              )}
            </div>
            <img
              src={img_src}
              className="w-[25%] rounded-md hover:cursor-pointer"
              onClick={() => setIsOpenFullRead(true)}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
              <ArticleMeta />
              <p className="py-1 px-2 text-[12px] bg-[#e5eaef] rounded-full m-auto float-left">
                Also in <b>TechCrunch, Fortune.com &middot;</b> 16 sources
              </p>
              <PCArticleAnalyze type />
              <BoostMenu />
          </div>
        </div>
      )
    }

    return (
      <div className="border-b border-b-1 border-gray-300 py-2">
        <div className="flex flex-row items-start gap-8 w-full ">
          <img
            src={img_src}
            className="w-[40%] rounded-md hover:cursor-pointer"
            onClick={() => setIsOpenFullRead(true)}
          />
          <div className="w-[60%]">
            <div className="flex flex-wrap items-center gap-2 text-[12px]">
              <img
                src="/img/icons/source/bbc.png"
                className="dark:invert"
              />
              <div className="flex flex-row items-center">
                <p>TESLA | ELECTREK</p>
                <KeyboardArrowDownOutlinedIcon />
              </div>
              <div className="flex flex-row items-center">
                <p>BY EED LAMBERT</p>
                <KeyboardArrowDownOutlinedIcon />
              </div>
              <p>{time}</p>
            </div>
            <p className="text-[20px] font-bold text-black">{title}</p>
            {description && (
              <p className="my-2 text-[14px] text-gray-600 dark:text-gray-400">
                {description}
              </p>
            )}
            <p className="py-1 px-2 text-[12px] bg-[#e5eaef] rounded-full m-auto float-left">
              Also in <b>TechCrunch, Fortune.com &middot;</b> 16 sources
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 mt-8">
          <div className="w-[40%]">
            <ArticleMeta />
          </div>
          <div className="w-[60%] flex flex-row items-center justify-between">
            <PCArticleAnalyze type />
            <BoostMenu />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {viewMode == "expand" && (
        <div className="flex flex-col px-8 pb-8 w-full text-black-color">
          <img
            src={img_src}
            className="ml-[24px] my-2 rounded-lg hover:cursor-pointer hover:opacity-80 transition-all duration-30"
            onClick={() => setIsOpenFullRead(true)}
          />
          <div className="flex flex-row ml-[24px] mt-2 justify-between">
            <div className="flex flex-grow flex-row items-center gap-1">
              <CheckCircleIcon sx={{ fontSize: "15px" }} />
              <span>Elon Musk</span>
              <CheckCircleIcon sx={{ fontSize: "15px" }} />
              <span>Tesla</span>
              <p className="flex flex-row items-center px-1 border border-[#eaeaea] rounded-md">
                <MovingOutlinedIcon />
                <span>Celebrities receive Tesla</span>
              </p>
            </div>
            <p className="py-1 px-2 bg-[#e5eaef] rounded-full m-auto">
              Also in <b>TechCrunch, Fortune.com &middot;</b> 16 sources
            </p>
            <IconButton onClick={handleOpen}>
              <MoreVertOutlinedIcon />
            </IconButton>
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
              <ActionsDropdown />
            </Popover>
          </div>
          <div className="flex flex-row items-start justify-between gap-2">
            <img src="/img/icons/grid.svg" className="mt-2 w-[14px]" />
            <div className="flex flex-col items-start w-full">
              <h3
                className="text-[24px] hover:cursor-pointer hover:underline"
                onClick={() => setIsOpenFullRead(true)}
              >
                {title}
              </h3>
              <h6 className="text-[12px] text-gray-light-color my-1">
                15 sources
              </h6>
              <div className="flex flex-row gap-8 text-gray-light-color">
                <div className="flex flex-col w-[40%]">
                  <div className="w-full flex">
                    <div className="w-[24%] h-[10px] bg-[#99D6F2]"></div>
                    <div className="w-[8%] h-[10px] bg-[#39A9D7]"></div>
                    <div className="w-[8%] h-[10px] bg-[#FB8716]"></div>
                    <div className="w-[60%] h-[10px] bg-[#373960]"></div>
                  </div>
                  <h6 className="text-[12px] my-1">62% Media Conglomerate</h6>
                </div>
                <div className="flex flex-col w-[60%]">
                  <div className="w-full h-[10px] bg-[#373960]"></div>
                  <h6 className="text-[12px] my-1">
                    100% High Factuality Rating
                  </h6>
                </div>
              </div>
              <p className="my-2 text-[16px]">
                {description}{" "}
                <span
                  className="ml-4 text-[#2a98dd] text-[15px] hover:cursor-pointer"
                  onClick={() => setIsOpenFullRead(true)}
                >
                  {" "}
                  SHOW MORE
                </span>
              </p>
              <div className="flex flex-row items-center my-4 justify-between w-full">
                <div className="flex flex-row items-center gap-2 text-[12px]">
                  <p className="border border-[gray] rounded-lg p-1">😊 500</p>
                  <div className="flex flex-row items-center">
                    <p>TESLA | ELECTREK</p>
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                  <div className="flex flex-row items-center">
                    <p>BY EED LAMBERT</p>
                    <KeyboardArrowDownOutlinedIcon />
                  </div>
                  <p>DEC 17, 2023</p>
                </div>
                <div className="flex flex-row items-center gap-2 text-[14px] hover:cursor-pointer">
                  <div className="flex flex-row items-center text-[18px]">
                    <AvatarGroup>
                      <Avatar
                        sx={{ width: 24, height: 24, border: "0px !important" }}
                        src="/img/icons/emotion/thumbs_up.png"
                      />
                      <Avatar
                        sx={{ width: 24, height: 24, border: "0px !important" }}
                        src="/img/icons/emotion/surprise.png"
                      />
                    </AvatarGroup>
                    <p>29</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center bg-[#e7eef0] px-3 py-2 rounded-full">
                    <UploadOutlinedIcon sx={{ color: "#575d5d" }} />
                    <p>116</p>
                    <DownloadOutlinedIcon sx={{ color: "#575d5d" }} />
                  </div>
                  <NotesAnnotationPopover />
                  <CommunityButton py={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewMode == "card" && (
        <div className={`w-full ${isShowSidebar ? "md:w-[48%]" : "md:w-[32%]"} min-w-[200px] p-4 border border-1 border-gray-300 rounded-xl transition-all duration-300`}>
          <div className="flex flex-row gap-2 items-center">
            <img
              src="/img/logo/source/bbc.jpg"
              className="w-[32px] h-[32px] rounded-full"
            />
            <div className="flex flex-col flex-grow text-[12px] items-start gap-1">
              <p>Yahoo</p>
              <div className="flex flex-row items-center gap-1">
                <p className="border border-[gray] rounded-md px-1">😊 500</p>
                <p className="flex flex-row items-center">
                  BY FEED LAMBERT <KeyboardArrowDownOutlinedIcon />
                </p>
                <p>Dec 17, 2023</p>
              </div>
            </div>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
          <img
            src={img_src}
            className="my-2 rounded-lg hover:cursor-pointer"
            onClick={() => setIsOpenFullRead(true)}
          />
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[12px]">7 hour ago</p>
            <h3 className="text-[20px] font-bold text-black">{title}</h3>
            <div className="flex flex-row items-start justify-between text-[12px]">
              <div className="flex flex-col items-start gap-1 w-[50%]">
                <p>
                  <TrendingUpIcon />
                  Celebrities receive Tesla C
                </p>
                <div className="w-full h-[5px] bg-[rgb(183,211,222)]"></div>
                <p>15 Sources</p>
              </div>
              <div className="flex flex-col items-end gap-1 w-[40%]">
                <div className="flex flex-row gap-1">
                  <CheckCircleIcon sx={{ fontSize: "15px" }} />
                  <span>Elon Musk</span>
                  <CheckCircleIcon sx={{ fontSize: "15px" }} />
                  <span>Tesla</span>
                </div>
                <div className="w-full h-[5px] bg-[rgb(135,156,161)]"></div>
              </div>
            </div>
            <p className="text-[16px]">{description}</p>

            <div className="flex flex-row items-center justify-between text-[12px] hover:cursor-pointer">
              <div className="flex flex-row items-center text-[12px]">
                <AvatarGroup>
                  <Avatar
                    sx={{ width: 24, height: 24, border: "0px !important" }}
                    src="/img/icons/emotion/thumbs_up.png"
                  />
                  <Avatar
                    sx={{ width: 24, height: 24, border: "0px !important" }}
                    src="/img/icons/emotion/surprise.png"
                  />
                </AvatarGroup>
                <p>29</p>
              </div>
              <div className="flex flex-row items-center bg-[#e7eef0] px-2 py-1 rounded-full">
                <UploadOutlinedIcon sx={{ color: "#575d5d" }} />
                <p>116</p>
                <DownloadOutlinedIcon sx={{ color: "#575d5d" }} />
              </div>
              <div className="flex flex-row gap-2 items-center bg-[#e7eef0] px-2 py-1 rounded-full">
                <DriveFileRenameOutlineIcon sx={{ color: "#575d5d" }} />
                <p>0</p>
              </div>
              {/* <button className="flex flex-row gap-2 items-center bg-[#e7eef0] px-2 py-1 rounded-full" onClick={() => alert("asdf")}>
                <GroupsIcon sx={{ color: "#2a98dd" }} />
                <p>0</p>
              </button> */}
              <CommunityButton py={1} />
              <div className="flex flex-row gap-2 items-center bg-[#e7eef0] px-2 py-1 rounded-full">
                <RocketLaunchOutlinedIcon sx={{ color: "#2a98dd" }} />
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {viewMode == "column" && <ColumnView {...props} />}
      {viewMode.includes("magazine") && <MagazineView {...props} viewMode={viewMode} />}
      {
        viewMode == "list" && 
        <div className="w-full flex items-center justify-between text-[12px] pb-2 gap-4 border-b border-b-1 border-grey-300">
          <div className="rounded-full border border-1 border-gray-300 px-1 whitespace-nowrap">
            <ArrowUpwardIcon sx={{fontSize: 16}}/>&nbsp;2K
          </div>
          <div className="flex flex-grow gap-2 items-start">
            <div className="rounded-md p-1 bg-gray-200">
              <img src={img_src} className="w-[40px] h-[40px] rounded-md"/>
            </div>
            <div>
              <p>{title}</p>
              <p><b>Engadget</b> published {time}&nbsp;&#8226;&nbsp;<TrendingUpIcon sx={{fontSize: 16}}/> Tesla returns to Facebook&nbsp;&#8226;&nbsp;Also in TechCrunch, Fortune.com&nbsp;&#8226;&nbsp;16 Sources</p>
            </div>
          </div>
          <div className="flex gap-2">
            <IconButton size="small" sx={{backgroundColor: '#ddd'}}>
              <BookmarkBorderOutlinedIcon sx={{fontSize: 16}}/>
            </IconButton>
            <IconButton size="small" sx={{backgroundColor: '#ddd'}}>
              <FileUploadOutlinedIcon sx={{fontSize: 16}}/>
            </IconButton>
            <IconButton size="small" sx={{backgroundColor: '#ddd'}}>
              <MoreHorizOutlinedIcon sx={{fontSize: 16}}/>
            </IconButton>
          </div>
        </div>
      }
    </>
  );
};

export const MainComponent = (props) => {
  const { setIsShowSidebar, setViewMode, isShowSidebar, topicLabel } = props;
  const [isOpenFullRead, setIsOpenFullRead] = useState(false);
  const [grouping, setGrouping] = useState(0);

  return (
    <div className="cardcomponent overflow-hidden h-[100vh] hover:overflow-y-auto">
      <HeaderComponent
        setIsShowSidebar={setIsShowSidebar}
        setViewMode={setViewMode}
        isShowSidebar={isShowSidebar}
        topicLabel={topicLabel}
        grouping={grouping}
        setGrouping={setGrouping}
      />
      <div
        className={`flex flex-wrap justify-start gap-4 ${props.viewMode != "expand" && "p-8"}`}
      >
        <div
          className="flex flex-row items-center justify-between w-full ml-12 mr-8 mt-4 bg-[#E1EBEE] rounded-md"
          style={{ display: grouping === 0 ? "none" : "block" }}
        >
          {grouping === 3 ? (
            <p className="pl-4">TODAY</p>
          ) : grouping === 2 ? (
            <p className="pl-4">BUSINESS</p>
          ) : (
            <div className="flex flex-row ml-1">
              <p className="rounded-md bg-[red] w-[20px] text-center text-[white]">
                P
              </p>
              <p className="pl-1">POLITICO</p>
            </div>
          )}
          <IconButton>
            <ArrowCircleRightIcon />
          </IconButton>
        </div>
        {
          props.viewMode === 'article' &&
          <ArticleViewContent />
        }
        <MainNewsItem
          img_src="/img/news/discussion.png"
          organization="Microsoft"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
          description="Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
          time="2 hour ago"
          viewMode={props.viewMode}
          setIsOpenFullRead={setIsOpenFullRead}
          isShowSidebar={isShowSidebar}
        />
        <MainNewsItem
          img_src="/img/news/Huawei.png"
          organization="Huawei"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
          description="Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
          time="1w ago"
          viewMode={props.viewMode}
          setIsOpenFullRead={setIsOpenFullRead}
          isShowSidebar={isShowSidebar}
        />
        <MainNewsItem
          img_src="/img/news/BYD.png"
          organization="Thailand"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
          description="Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."
          time="28 Oct 2023 - 4:15 AM"
          viewMode={props.viewMode}
          setIsOpenFullRead={setIsOpenFullRead}
          isShowSidebar={isShowSidebar}
        />
      </div>
      <FullReadModal
        modalOpen={isOpenFullRead}
        setModalOpen={setIsOpenFullRead}
      />
    </div>
  );
};
