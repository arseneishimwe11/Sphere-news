import { useState } from "react";
import { AvatarGroup, Avatar, Popover, IconButton } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";
import StreamsDropdown from "../../followingPage/StreamsDropdown";
import EmojiDropdown from "../../followingPage/EmojiDropdown";
import TagDropdown from "../../followingPage/TagDropdown";

const FilterField = ({ index, text, totalNum }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="flex flex-row items-center justify-between px-2 bg-white rounded-lg">
      <div className="flex flex-row gap-1">
        {index === 0 ? (
          <img src="/img/icons/mobile/story_yellow.svg" />
        ) : index === 1 ? (
          <AvatarGroup>
            <Avatar
              sx={{ width: 24, height: 24, border: "0px !important" }}
              src="/img/icons/emotion/thumbs_up.png"
            />
            <Avatar
              sx={{ width: 24, height: 24, border: "0px !important" }}
              src="/img/icons/emotion/surprise.png"
            />
            <Avatar
              sx={{ width: 24, height: 24, border: "0px !important" }}
              src="/img/icons/emotion/love.png"
            />
          </AvatarGroup>
        ) : (
          <LocalOfferOutlinedIcon />
        )}
        <p>{text}</p>
      </div>
      <div className="flex flex-row items-center">
        <p className="bg-[#E1EBEE] px-1 rounded-xl">{totalNum}</p>
        <IconButton onClick={handleClick}>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
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
        {index === 0 ? (
          <StreamsDropdown handleClose={handleClose} />
        ) : index === 1 ? (
          <EmojiDropdown handleClose={handleClose} />
        ) : (
          <TagDropdown handleClose={handleClose} />
        )}
      </Popover>
    </div>
  );
};

export default FilterField;