import DoneIcon from "@mui/icons-material/Done";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Checkbox, Divider, IconButton } from "@mui/material";
import { useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const GroupingDropdown = ({ grouping, setGrouping }) => {
  const types = ["SORT", "TIME"];
  const sortItems = ["Best Match", "Most Popular", "Latest", "Oldest"];
  const timeItems = ["All Articles", "Past day", "Past 7 days"];

  const groupingItems = ["None", "By feed", "By topic", "By date"];
  const items = [sortItems, timeItems];

  const settingItems = ["Unread only", "Show muted articles"];

  const handleGroupSelect = (index) => {
    setGrouping(index);
  };
  const TypeSelect = ({ type, items }) => {
    const [selected, setSelected] = useState(0);
    const handleClick = (index) => {
      setSelected(index);
    };
    return (
      <>
        <div className="flex flex-row m-2 min-w-[200px]">
          <b className="text-[gray] text-[12px] pt-2">{type}</b>
        </div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center pl-2 pb-3 gap-2]"
            onClick={() => handleClick(index)}
          >
            <DoneIcon
              sx={{ visibility: selected === index ? "visible" : "hidden" }}
            />
            {item}
          </div>
        ))}
        <Divider />
      </>
    );
  };

  return (
    <div className="text-[12px]">
      {types.map((type, index) => (
        <TypeSelect key={index} type={type} items={items[index]} />
      ))}

      <div className="flex flex-row m-2 min-w-[200px]">
        <b className="text-[gray] text-[12px] pt-2">GROUPING</b>
      </div>
      {groupingItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-row items-center pl-2 pb-3 gap-2"
          onClick={() => handleGroupSelect(index)}
        >
          <DoneIcon
            sx={{ visibility: grouping === index ? "visible" : "hidden" }}
          />
          {item}
        </div>
      ))}
      <Divider />

      {settingItems.map((setting, index) => (
        <div key={index} className="flex flex-row items-center">
          <Checkbox />
          <p>{setting}</p>
        </div>
      ))}
      <Divider />

      <div className="flex flex-row items-center">
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "pink" }} />}
        />
        <p>Favorite</p>
      </div>
      <div className="flex flex-row items-center">
        <Checkbox
          {...label}
          icon={<PushPinOutlinedIcon />}
          checkedIcon={<PushPinIcon sx={{ color: "gray" }} />}
        />
        <p>Pin</p>
      </div>
      <div className="flex flex-row items-center">
        <IconButton>
          <DeleteOutlineIcon sx={{ color: "red" }} />
        </IconButton>
        <p>Unfollow</p>
      </div>
    </div>
  );
};

export default GroupingDropdown;
