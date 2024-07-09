import { useState } from "react";

import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import DoneIcon from "@mui/icons-material/Done";

import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { MagazineLeftLayoutSVG, ArticleViewSVG } from "@/app/SVGs";

import { Popover } from "@mui/material";

import CheckmarkDropdown from "./CheckmarkDropdown";
import GroupingDropdown from "./GroupingDropdown";
import usePopup from "@/app/hooks/usePopupState";

export const HeaderToolBar = (props) => {
  const { isShowSidebar, setIsShowSidebar, grouping, setGrouping } = props;
  const { setViewMode } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [anchorEl1, setAnchorEl1] = useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;

  const ExpandView = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClickItem = (mode) => {
      setViewMode(mode);
      setAnchorEl(null);
    };
    return (
      <div>
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "expandview-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <FormatListBulletedOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="expandview-menu"
          className="anchormenu"
          open={open}
          onClose={() => setAnchorEl(null)}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          sx={{
            fontSize: "12px",
          }}
        >
          <p className="px-4">Layout</p>
          <MenuItem
            onClick={() => handleClickItem("expand")}
            sx={{ fontSize: "12px" }}
          >
            <ViewDayOutlinedIcon sx={{ fontSize: "16px" }} />
            Expanded View
          </MenuItem>
          <MenuItem
            onClick={() => handleClickItem("card")}
            sx={{ fontSize: "12px" }}
          >
            <GridViewOutlinedIcon sx={{ fontSize: "16px" }} />
            Card View
          </MenuItem>
          <MenuItem
            onClick={() => handleClickItem("magazineleft")}
            sx={{ fontSize: "12px" }}
          >
            <MagazineLeftLayoutSVG width={16} />
            Magazine Left
          </MenuItem>
          <MenuItem
            onClick={() => handleClickItem("magazineright")}
            sx={{ fontSize: "12px" }}
          >
            <MagazineLeftLayoutSVG width={16} style={{ transform: 'rotate(180deg)' }} />
            Magazine Right
          </MenuItem>
          <MenuItem
            onClick={() => handleClickItem("article")}
            sx={{ fontSize: "12px" }}
          >
            <ArticleViewSVG width={16} />
            Article View
          </MenuItem>
          <MenuItem
            onClick={() => handleClickItem("column")}
            sx={{ fontSize: "12px" }}
          >
            <ViewSidebarOutlinedIcon sx={{ fontSize: "16px" }} />
            Column View
          </MenuItem>
          <MenuItem
            onClick={() => handleClickItem("list")}
            sx={{ fontSize: "12px" }}
          >
            <ViewAgendaOutlinedIcon sx={{ fontSize: "16px" }} />
            List View
          </MenuItem>
        </Menu>
      </div>
    );
  };

  const LayoutMode = (props) => {
    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);

    const { setIsShowSidebar } = props;

    return (
      <div>
        <IconButton
          onClick={handleOpen}
          size="small"
        >
          <ViewSidebarOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="expandview-menu"
          className="anchormenu"
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          sx={{
            fontSize: "12px",
          }}
        >
          <MenuItem
            onClick={() => setIsShowSidebar(1)}
            sx={{ fontSize: "12px" }}
          >
            Sidebar Mode
          </MenuItem>
          <MenuItem
            onClick={() => setIsShowSidebar(0)}
            sx={{ fontSize: "12px" }}
          >
            Expand Mode
          </MenuItem>
          <MenuItem
            onClick={() => setIsShowSidebar(2)}
            sx={{ fontSize: "12px" }}
          >
            Focus Mode
          </MenuItem>
        </Menu>
      </div>
    )
  }

  return (
    <div className="flex flex-row items-center justify-end">
      <IconButton
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onClick={handleClick}
      >
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            fontSize: "13px",
          }}
        >
          1K+
        </Typography>
        <DoneIcon />
      </IconButton>
      <ExpandView />
      <IconButton>
        <ReplayOutlinedIcon />
      </IconButton>
      <IconButton onClick={handleClick1}>
        <MoreHorizOutlinedIcon />
      </IconButton>
      <LayoutMode setIsShowSidebar={setIsShowSidebar}/>
      <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <GroupingDropdown grouping={grouping} setGrouping={setGrouping} />
      </Popover>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <CheckmarkDropdown />
      </Popover>
    </div>
  );
};
