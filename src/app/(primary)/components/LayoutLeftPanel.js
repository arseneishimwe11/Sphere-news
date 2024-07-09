import * as React from "react";
import { useState } from "react";

import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  Popover,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";

import EmojiPicker from "emoji-picker-react";

import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { StreamPropertyModal } from "./modals/StreamProperty";
import { StreamRenameModal } from "./modals/StreamRename";
import { StreamDeleteModal } from "./modals/StreamDelete";
import { StreamUnfollowModal } from "./modals/StreamUnfollow";
import { StreamFilterDuplicate } from "./modals/StreamFilterDuplicate";
import { StreamFilterContent } from "./modals/StreamFilterContent";
import { StreamRssFeedModal } from "./modals/StreamRssFeed";
import { StreamCreateRuleModal } from "./modals/StreamCreateRule";
import { StreamManageModal } from "./modals/StreamManage";

import ThreeDotNews from "@/app/(dashboard)/components/common/ThreeDotNews";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: "#B1D5FA",
  [`& .${treeItemClasses.content}`]: {
    paddingRight: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    popoverType,
    ...other
  } = props;

  const styleProps = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleRightClick = (event) => {
    if (popoverType) {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
    }
  };

  return (
    <StyledTreeItemRoot
      label={
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.5,
              pr: 0,
            }}
            onContextMenu={handleRightClick}
          >
            {LabelIcon && (
              <Box
                component={LabelIcon}
                color="inherit"
                sx={{ mr: 1, fontSize: "16px" }}
              />
            )}
            <Typography
              variant="body2"
              sx={{ fontWeight: "inherit", flexGrow: 1, fontSize: "12px" }}
            >
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
          {popoverType && (
            <PopoverPanel
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              popoverType={popoverType}
              handleOpenModal={other.handleOpenModal}
            />
          )}
        </>
      }
      style={styleProps}
      {...other}
      ref={ref}
    />
  );
});

const PopoverPanel = (props) => {
  const { anchorEl, setAnchorEl, popoverType } = props;
  const { handleOpenModal } = props;

  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isEmojiPanelOpen, setIsEmojiPanelOpen] = useState(false);

  const handleEmojiClick = (emoji) => {
    console.log(emoji.emoji);
  };

  return (
    <>
      {popoverType !== "new_stream" && (
        <Menu
          className="anchormenu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              padding: "0px !important",
              width: "180px",
            },
          }}
        >
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_property")}
          >
            Stream properties
          </MenuItem>
          {popoverType !== "System" && (
            <MenuItem
              sx={{ fontSize: "12px" }}
              onClick={() => handleOpenModal("stream_rename")}
            >
              Rename Stream
            </MenuItem>
          )}
          {popoverType !== "System" && (
            <MenuItem
              sx={{ fontSize: "12px" }}
              onClick={() => handleOpenModal("stream_delete")}
            >
              Delete Stream
            </MenuItem>
          )}
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_unfollow")}
          >
            Unfollow All
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_filter_duplicate")}
          >
            Filter duplicates
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_filter_content")}
          >
            Filter by content
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_create_rule")}
          >
            Create rule
          </MenuItem>
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_rss_feed")}
          >
            Get RSS feed
          </MenuItem>
          <Divider sx={{ marginY: "0px !important" }} />
          <MenuItem
            sx={{ fontSize: "12px" }}
            onClick={() => handleOpenModal("stream_manage")}
          >
            Manage Streams
          </MenuItem>
        </Menu>
      )}
      {popoverType == "new_stream" && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              padding: "0px !important",
            },
          }}
        >
          <div className="p-4">
            <p className="text-[14px] font-bold">Stream Name</p>
            <div className="flex flex-row my-2 items-center rounded-md border border-1 border-gray-300">
              <div
                className="hover:cursor-pointer w-[8px] h-[8px] bg-[#4FBAE9] rounded-full mx-2"
                onClick={() => setIsEmojiPanelOpen(!isEmojiPanelOpen)}
              ></div>
              <input className="w-full outline-none p-2 rounded-xl" />
            </div>
            <div>
              {isEmojiPanelOpen && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}
            </div>
            <div className="flex flex-row gap-2">
              <Button variant="contained" onClick={handleClose}>
                CREATE
              </Button>
              <Button onClick={handleClose}>CANCEL</Button>
            </div>
          </div>
        </Popover>
      )}
    </>
  );
};

export const CustomStreamTree = (props) => {
  const { data } = props;
  const [ isHover, setIsHover ] = useState(undefined);
  return (
    <div className="px-[1rem] py-[0.5rem]">
      {
        data.map((item, idx) => (
          <div 
            key={item}
            className="flex items-center gap-2 text-[14px] my-2 hover:cursor-pointer relative"
            onMouseEnter={() => setIsHover(idx)}
          >
            <FolderOutlinedIcon sx={{ fontSize: 20 }} />
            <p className="flex-grow">{item}</p>
            {
              isHover == idx && <ThreeDotNews />
            }
          </div>
        ))
      }
    </div>
  )
}

export const StreamTree = (props) => {
  return (
    <>
      <TreeView
        aria-label="gmail"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<KeyboardArrowDownOutlinedIcon />}
        defaultExpandIcon={<KeyboardArrowUpOutlinedIcon />}
        defaultEndIcon={<div style={{ width: 12 }} />}
        sx={{
          flexGrow: 1,
        }}
      >
        <StyledTreeItem
          sx={{ paddingY: "4px", color: '#000' }}
          nodeId="1"
          labelText="Business"
          labelIcon={FolderOutlinedIcon}
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: '#000' }}
            nodeId="2"
            labelText="The Verge"
          />
        </StyledTreeItem>
        <StyledTreeItem
          sx={{ paddingY: "4px", color: '#000' }}
          nodeId="3"
          labelText="The Tech"
          labelIcon={FolderOutlinedIcon}
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: '#000' }}
            nodeId="4"
            labelText="The Verge"
          />
        </StyledTreeItem>
      </TreeView>
    </>
  );
}

export default function GmailTreeView(props) {
  const { textColor, handleBookmarkClick } = props;
  const initialModalState = {
    stream_property: false,
    stream_rename: false,
    stream_delete: false,
    stream_unfollow: false,
    stream_filter_duplicate: false,
    stream_filter_content: false,
    stream_create_rule: false,
    stream_rss_feed: false,
    stream_manage: false,
  };

  const [modalState, setModalState] = useState(initialModalState);

  const handleOpenModal = (modalName) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const handleCloseModal = (modalName) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  return (
    <>
      <TreeView
        aria-label="gmail"
        defaultExpanded={["3"]}
        defaultCollapseIcon={<KeyboardArrowDownOutlinedIcon />}
        defaultExpandIcon={<KeyboardArrowUpOutlinedIcon />}
        defaultEndIcon={<div style={{ width: 12 }} />}
        sx={{
          height: 264,
          flexGrow: 1,
          maxWidth: 400,
          overflowY: "auto",
          marginTop: "42px",
        }}
      >
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="1"
          labelText="DASHBOARD"
          labelInfo={<BarChartOutlinedIcon sx={{ fontSize: "16px" }} />}
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="2"
          labelText="Recent Read"
          labelIcon={HistoryOutlinedIcon}
          labelInfo="2"
          onClick={() => handleBookmarkClick(0)}
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="3"
          labelText="Bookmarkd"
          labelIcon={BookmarkBorderOutlinedIcon}
          labelInfo="0"
          onClick={() => handleBookmarkClick(1)}
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="4"
          labelText="Annotated"
          labelIcon={DriveFileRenameOutlineOutlinedIcon}
          labelInfo="7"
          onClick={() => handleBookmarkClick(2)}
        />
        <Divider sx={{ paddingY: "8px", borderColor: "transparent" }} />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="5"
          labelText="FAVORITES"
          labelInfo={<SettingsOutlinedIcon sx={{ fontSize: "16px" }} />}
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="6"
          labelText="Collections"
          labelInfo="227"
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="7"
            labelText="Collection ABC"
            labelIcon={StarBorderOutlinedIcon}
          />
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="8"
            labelText="Collection XYZ"
            labelIcon={StarBorderOutlinedIcon}
          />
        </StyledTreeItem>
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="9"
          labelText="Users"
          labelInfo="231"
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="10"
            labelText="Forums"
            labelIcon={ForumIcon}
          />
        </StyledTreeItem>
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="11"
          labelText="Feeds"
          labelInfo="212"
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="12"
            labelText="Forums"
            labelIcon={ForumIcon}
          />
        </StyledTreeItem>
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="13"
          labelText="Tags"
          labelInfo="112"
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="14"
            labelText="Forums"
            labelIcon={ForumIcon}
          />
        </StyledTreeItem>
        <Divider sx={{ paddingY: "8px", borderColor: "transparent" }} />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="15"
          labelText="TEAM STREAMS"
          labelInfo={<SettingsOutlinedIcon sx={{ fontSize: "16px" }} />}
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="16"
          labelText="Stream1"
          labelInfo="151"
          handleOpenModal={handleOpenModal}
          popoverType="Stream"
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="17"
            labelText="News"
            labelIcon={FolderOutlinedIcon}
            labelInfo="21"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
        </StyledTreeItem>
        <Divider sx={{ paddingY: "8px", borderColor: "transparent" }} />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="23"
          labelText="PERSONAL STREAMS"
          labelInfo={<SettingsOutlinedIcon sx={{ fontSize: "16px" }} />}
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="24"
          labelText="New Stream"
          labelIcon={AddOutlinedIcon}
          popoverType="new_stream"
        />
        <StyledTreeItem
          sx={{ paddingY: "4px", color: textColor }}
          nodeId="25"
          labelText="System Stream"
          labelInfo="151"
          handleOpenModal={handleOpenModal}
          popoverType="System"
        >
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="26"
            labelText="News"
            labelIcon={FolderOutlinedIcon}
            labelInfo="21"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="27"
            labelText="Web"
            labelIcon={FolderOutlinedIcon}
            labelInfo="27"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="28"
            labelText="Social"
            labelIcon={FolderOutlinedIcon}
            labelInfo="312"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="29"
            labelText="Gossip"
            labelIcon={FolderOutlinedIcon}
            labelInfo="31"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="30"
            labelText="Newsletter"
            labelIcon={FolderOutlinedIcon}
            labelInfo="121"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
          <StyledTreeItem
            sx={{ paddingY: "4px", color: textColor }}
            nodeId="31"
            labelText="Medea"
            labelIcon={FolderOutlinedIcon}
            labelInfo="15"
            handleOpenModal={handleOpenModal}
            popoverType="Folder"
          />
        </StyledTreeItem>
      </TreeView>
      <StreamPropertyModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_property}
      />
      <StreamRenameModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_rename}
      />
      <StreamDeleteModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_delete}
      />
      <StreamUnfollowModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_unfollow}
      />
      <StreamFilterDuplicate
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_filter_duplicate}
      />
      <StreamFilterContent
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_filter_content}
      />
      <StreamCreateRuleModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_create_rule}
      />
      <StreamRssFeedModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_rss_feed}
      />
      <StreamManageModal
        handleCloseModal={handleCloseModal}
        modalOpen={modalState.stream_manage}
      />
    </>
  );
}
