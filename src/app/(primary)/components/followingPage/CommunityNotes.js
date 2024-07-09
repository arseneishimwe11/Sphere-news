import GroupsIcon from "@mui/icons-material/Groups";
import SouthIcon from "@mui/icons-material/South";
import { IconButton } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CommunityNotes = () => {
  const [viewStatus, setViewStatus] = useState(false);
  return (
    <div className="w-full flex flex-col items-center border border-gray-500 m-1 mt-3 rounded-xl bg-gray-100">
      <div className="w-full flex flex-row items-center">
        <div className="flex flex-row flex-grow items-center gap-2 px-2 text-[12px]">
          <GroupsIcon sx={{ color: "#3792bc" }} />
          <p className="font-bold">CommunityNotes</p>
          <span className="px-1 bg-[rgb(167,211,220)] rounded-full text-[12px]">15</span>
        </div>
        <IconButton
          onClick={() => {
            setViewStatus(!viewStatus);
          }}
        >
          <SouthIcon sx={{fontSize: 16}}/>
        </IconButton>
      </div>
      <div
        className="w-full text-[12px]"
        style={{ display: viewStatus ? "block" : "none" }}
      >
        <div className="w-full bg-white p-2 border border-b-gray">
          <div className="flex flex-row items-center gap-2">
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
            <p className="font-bold">Community Note Title 1</p>
          </div>
        </div>
        <div className="w-full bg-white p-2 border border-b-gray">
          <div className="flex flex-row items-center gap-2">
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>{" "}
            <p className="font-bold">Community Note Title 1</p>
          </div>
        </div>
        <div className="w-full bg-white p-2 rounded-b-xl border border-b-gray">
          <div className="flex flex-row items-center gap-2">
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>{" "}
            <p className="font-bold">Community Note Title 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityNotes;
