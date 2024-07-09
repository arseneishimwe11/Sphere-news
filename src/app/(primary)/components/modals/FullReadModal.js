import { useState } from "react";

import {
  Button,
  Modal,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from "@mui/material";

import { RecommendCountComponent } from "../common/ArticleRecommendCount";

import { ReactionPopover, SocialDropdown } from "../storyPageContainer/ArticlesComponent";

import TextSelectionPopup from "../popups/TextSelectionPopup";
import { TabPanel } from "../common";
import { SideTabContentChatComponent } from "../followingPage/TabContent/AIChat";
import { SideTabContentSphereComponent } from "../followingPage/TabContent/Sphere";
import { SideTabContentCommandComponent } from "../followingPage/TabContent/Command";

import { Collapse, Fade } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import NotesAndAnnotations from "../followingPage/NotesAndAnnotations";
import CommunityNotes from "../followingPage/CommunityNotes";
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import GroupsIcon from "@mui/icons-material/Groups";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ViewHeadlineOutlinedIcon from '@mui/icons-material/ViewHeadlineOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LeftSideBar = (props) => {
  const { isShowCitation, setIsShowCitation } = props;
  const { isShowSideTab, setIsShowSideTab } = props;
  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <div className="flex flex-col items-center bg-gray-200 rounded-full">
        <IconButton>
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownOutlinedIcon />
        </IconButton>
      </div>
      <IconButton sx={{ backgroundColor: "rgb(229,231,235)" }}>
        <HeadphonesOutlinedIcon />
      </IconButton>
      <IconButton 
        sx={{ backgroundColor: "rgb(229,231,235)" }}
        onClick={() => setIsShowSideTab(!isShowSideTab)}
      >
        <img src="/img/icons/tabs/sparkling.png" className="w-[24px]" />
      </IconButton>
      <IconButton
        sx={{ backgroundColor: "rgb(229,231,235)" }}
        onClick={() => setIsShowCitation(!isShowCitation)}
      >
        <FormatListBulletedOutlinedIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "rgb(229,231,235)" }}>
        <RocketLaunchOutlinedIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "rgb(229,231,235)" }}>
        <LogoutOutlinedIcon />
      </IconButton>
      <SocialDropdown />
      <IconButton sx={{ backgroundColor: "rgb(229,231,235)" }}>
        <TurnedInNotOutlinedIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "rgb(229,231,235)" }}>
        <EditOutlinedIcon />
      </IconButton>
      <IconButton sx={{ backgroundColor: "rgb(229,231,235)" }}>
        <GroupsIcon sx={{ color: "#3792bc" }} />
      </IconButton>
      <ReactionPopover />
      <RecommendCountComponent />
    </div>
  );
};

const ContentHeader = (props) => {
  const { reads, source, author, date } = props;

  const SourceDropdown = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <div onClick={handleClick} className="text-[10px] hover:cursor-pointer">
          {props.source}
          <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "12px" }} />
        </div>
        <Menu
          className="anchormenu"
          anchorEl={anchorEl}
          id="source-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Feed properties
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Rename feed
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Unfollow
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Create rule
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Filter feed
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Set as a start page
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Add to bundle
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            More like this
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Set team folders
          </MenuItem>
          <Divider />
          <p className="text-[12px] px-2">FOLDERS</p>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Assign to new folder
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            My Folder 1
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            My Folder 2
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Manage feeds
          </MenuItem>
        </Menu>
      </>
    );
  };

  const AuthorDropdown = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <>
        <div onClick={handleClick} className="text-[10px] hover:cursor-pointer">
          {props.author}
          <KeyboardArrowDownOutlinedIcon sx={{ fontSize: "12px" }} />
        </div>
        <Menu
          className="anchormenu"
          anchorEl={anchorEl}
          id="author-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{ paddingY: "0", fontSize: "12px" }}
          >
            Create rule
          </MenuItem>
        </Menu>
      </>
    );
  };

  return (
    <div className="flex flex-row items-center gap-4">
      <div className="border border-1 border-[#FA9330] rounded-[4px] px-1 text-[12px]">
        <TrendingUpOutlinedIcon sx={{ fontSize: "16px" }} />
        <span>{reads}</span>
      </div>
      <SourceDropdown source={source} />
      <AuthorDropdown author={author} />
      <p className="text-[10px]">{date}</p>
    </div>
  );
};

const Note = (props) => {
  const { avatar, name, time, notes } = props;
  return (
    <div className="flex flex-row gap-4 p-4 border border-1 border-gray-400 rounded-md">
      <Avatar src={avatar} />
      <div>
        <p className="flex flex-row gap-2 text-[12px]">
          <span className="font-bold">{name}</span>
          <span>{time}</span>
        </p>
        <p className="text-[14px]">{notes}</p>
      </div>
    </div>
  );
};

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1280,
  p: 0,
};

const Entity = (props) => {
  return (
    <span className="rounded-full bg-[#F6F7FA] text-[#54B6DC] text-[14px] px-2">{props.entity}</span>
  )
}

const Source = (props) => {
  return (
    <span className="rounded-full text-[12px] px-1 mx-1 bg-[#F6F7FA] hover:bg-[#54B6DC] hover:text-white hover:cursor-pointer transition-all duration-100">{props.source}</span>
  )
}

const CitationCard = (props) => {
  const { content, source, source_img, count, url } = props;

  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="w-[160px] min-w-[160px] bg-[#E8F6FF] rounded-md p-2 text-[12px] hover:cursor-pointer hover:bg-[#B0DBF2]"
      onClick={() => window.open(url, '_blank')}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p>{content}</p>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1">
          <img
            src={source_img}
            className="w-[16px] h-[16px]"
          />
          <span>{source}</span>
          &#8226;
          <span>{count}</span>
        </div>
        <div className="min-h-[26px]">
          {
            isHover &&
            <IconButton size="small" sx={{ backgroundColor: '#C1EEFB' }}>
              <DeleteOutlineOutlinedIcon sx={{ fontSize: 16, color: '#498CA6' }} />
            </IconButton>
          }
        </div>
      </div>
    </div>
  )
}

const Citation = (props) => {
  const [offsetX, setOffsetX] = useState(0);

  return (
    <div className="w-full">
      <div
        className="w-full flex justify-between mb-2"
      >
        <div className="flex gap-2 items-center">
          <ViewHeadlineOutlinedIcon />
          <p className="font-bold">Sources</p>
        </div>
        <div>
          <IconButton
            size="small"
            onClick={() => setOffsetX(0)}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => setOffsetX(offsetX - 168)}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </div>
      </div>
      <div
        className="w-full overflow-x-hidden relative"
      >
        <div
          className="w-full flex gap-2 transition duration-500"
          style={{
            transform: `translate(${offsetX}px, 0)`,
          }}
        >
          <CitationCard
            content="An Overlooked Threat From Climate Change..."
            source="cnet"
            source_img="/img/logo/source/CNN.png"
            url="https://www.google.com/"
            count={1}
          />
          <CitationCard
            content="An Overlooked Threat From Climate Change..."
            source="BBC"
            source_img="/img/logo/source/bbc.jpg"
            url="https://www.google.com/"
            count={2}
          />
          <CitationCard
            content="An Overlooked Threat From Climate Change..."
            source="audio"
            source_img="/img/logo/source/audio.png"
            url="https://www.google.com/"
            count={3}
          />
          <CitationCard
            content="An Overlooked Threat From Climate Change..."
            source="cnet"
            source_img="/img/logo/source/CNN.png"
            url="https://www.google.com/"
            count={1}
          />
          <CitationCard
            content="An Overlooked Threat From Climate Change..."
            source="well"
            source_img="/img/logo/source/well.png"
            url="https://www.google.com/"
            count={1}
          />
        </div>
      </div>
    </div>
  )
}

const SideTab = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      idx: 0,
      label: 'Chat',
      icon: '/img/icons/tabs/sphere.png',
      position: 'left',
      zIndex: 1,
      render: <SideTabContentSphereComponent />
    },
    {
      idx: 1,
      label: 'Chat',
      icon: '/img/icons/tabs/sparkling.png',
      position: 'right',
      zIndex: 2,
      render: <SideTabContentChatComponent />
    },
    {
      idx: 2,
      label: 'Chat',
      icon: '/img/icons/tabs/dark_mode.png',
      position: 'right',
      zIndex: 3,
      render: <SideTabContentCommandComponent />
    },
  ];

  return (
    <TabPanel
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      tabData={tabData}
      isMobile={false}
      isSideTab
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
  )
}

export const ArticleViewContent = (props) => {
  const { setModalOpen, isModal } = props;

  const [isShowCitation, setIsShowCitation] = useState(false);
  const [isShowSideTab, setIsShowSideTab] = useState(false);

  return (
    <div className="flex">
      <div className="w-full flex flex-col rounded-lg bg-white">
        {
          isModal &&
          <div className="flex flex-row justify-between items-center p-4 pb-2 border-b border-b-1 border-gray-300">
            <div className="w-[25%]">
              <IconButton onClick={() => setModalOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="w-[75%] flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 items-center">
                <IconButton>
                  <LabelOutlinedIcon />
                </IconButton>
                <IconButton>
                  <GroupOutlinedIcon />
                </IconButton>
                <IconButton>
                  <CircleOutlinedIcon />
                </IconButton>
                <IconButton>
                  <FreeBreakfastOutlinedIcon />
                </IconButton>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Button
                  variant="contained"
                  sx={{ borderRadius: "40px", textTransform: "none" }}
                >
                  <AddOutlinedIcon />
                  Visit Website
                </Button>
                <IconButton>
                  <MoreHorizOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </div>
        }
        <div
          className="flex flex-row items-start mb-2 overflow-y-auto h-[768px]"
          style={{ maxHeight: `${isModal ? '768px' : ''}`, height: `${isModal ? '768px' : 'auto'}` }}
        >
          <div className="w-[25%] p-4 sticky top-0">
            <LeftSideBar 
              isShowCitation={isShowCitation} 
              setIsShowCitation={setIsShowCitation} 
              isShowSideTab={isShowSideTab}
              setIsShowSideTab={setIsShowSideTab}  
            />
          </div>
          <div className={`${isModal ? 'w-[60%]' : 'w-[75%]'} p-8`}>
            <ContentHeader
              reads={500}
              source="TESLA | ELECTREK"
              author="BY FEED LAMBERT"
              date="DEC 17, 2023"
            />
            <p className="py-4 text-[24px] text-black font-bold">
              Tesla unveils Optimus Gen 2: its next generation humanoid robot
            </p>
            <Divider sx={{ marginY: 1 }} />
            {
              isShowCitation &&
              <Citation />
            }
            <CommunityNotes />
            <NotesAndAnnotations />

            <div className="py-4 border-b border-b-1 border-gray-200">
              <p className="mb-4 text-[12px]">NOTES</p>
              <Note
                avatar="/img/avatar/Image_332.png"
                name="You"
                time="1 minute ago"
                notes="Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris."
              />
            </div>
            <div className="py-4 flex flex-col gap-4 text-container">
              <img src="/img/news/robot.png" className="w-full" />
              <p>
                Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                <Source source={1} />
                <Source source={2} />
              </p>
              <p>
                <mark style={{ backgroundColor: "rgb(225,241,231)" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  et massa mi.
                </mark>
              </p>
              <p>
                Pellentesque sit amet sapien fringilla, mattis ligula
                consectetur, ultrices mauris. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut et massa mi. Aliquam in
                hendrerit urna.<Entity entity="Tesla" />
              </p>
              <p>
                Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
              </p>
              {
                isModal &&
                <TextSelectionPopup setIsShowSideTab={setIsShowSideTab}/>
              }
            </div>
          </div>
        </div>
      </div>
      {
        isShowSideTab &&
        <div className="w-[28%] max-w-[28%]">
          <SideTab />
        </div>
      }
    </div>
  )
}

export function FullReadModal(props) {
  const { modalOpen, setModalOpen } = props;

  return (
    <Modal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalContentStyle}>
        <ArticleViewContent {...props} isModal />
      </Box>
    </Modal>
  );
}
