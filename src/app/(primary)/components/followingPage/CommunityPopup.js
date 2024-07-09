import GroupsIcon from "@mui/icons-material/Groups";
import SouthIcon from "@mui/icons-material/South";
import { IconButton } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const CommunityPopup = () => {
  const SingleNote = ({ noteNum }) => {
    const [view, setView] = useState(false);
    return (
      <div className="w-full bg-white p-2 border border-b-gray">
        <div className="flex flex-row items-center gap-2">
          <IconButton onClick={() => setView(!view)}>
            {!view ? (
              <AddCircleOutlineIcon sx={{fontSize: 16}}/>
            ) : (
              <RemoveCircleOutlineOutlinedIcon sx={{fontSize: 16}}/>
            )}
          </IconButton>
          <p className="text-[14px]">{`Community Note Title ${noteNum}`}</p>
        </div>
        <div style={{ display: view ? "block" : "none" }} className="pl-4 text-[12px]">
          Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div
          style={{ display: view ? "flex" : "none" }}
          className="flex flex-row justify-between items-center px-4"
        >
          <b>Do you find this helpful?</b>
          <div className="flex flex-row gap-2 items-center bg-[#e7eef0] px-2 py-2 rounded-full">
            <UploadOutlinedIcon sx={{ color: "#575d5d", fontSize: 16 }} />
            <p className="text-[12px]">116</p>
            <DownloadOutlinedIcon sx={{ color: "#575d5d", fontSize: 16 }} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-[360px]">
      <div className="w-full flex flex-row items-center p-3 bg-gray-100">
        <div className="flex flex-row flex-grow items-center gap-2 pl-1">
          <GroupsIcon sx={{ color: "#3792bc" }} />
          <p className="font-bold">CommunityNotes</p>
        </div>
      </div>
      <div className="w-full">
        <SingleNote noteNum={1} />
        <SingleNote noteNum={2} />
        <SingleNote noteNum={3} />
      </div>
    </div>
  );
};
export default CommunityPopup;
