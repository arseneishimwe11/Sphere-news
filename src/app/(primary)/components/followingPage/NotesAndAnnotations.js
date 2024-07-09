import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import { useState } from "react";

const NotesAndAnnotations = () => {
  const [viewStatus, setViewStatus] = useState(false);
  return (
    <div className="w-full flex flex-col items-center border border-gray-500 m-1 mt-3 rounded-xl bg-gray-100">
      <div className="w-full flex flex-row items-center">
        <div className="flex flex-row flex-grow items-center gap-2 px-2 text-[12px]">
          <EditNoteIcon />
          <p className="font-bold">Notes & Annotations</p>
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
            <img
              src="img/avatar/Image_332.png"
              width={"35px"}
              style={{ borderRadius: "50%" }}
            />
            <p className="font-bold">You</p>
            <p>Yesterday</p>
          </div>
          <div className="pl-[45px]">
            <p>My first private note.</p>
          </div>
        </div>
        <div className="w-full bg-white p-2 border border-b-gray">
          <div className="flex flex-row items-center gap-2">
            <img
              src="img/avatar/Image_332.png"
              width={"35px"}
              style={{ borderRadius: "50%" }}
            />
            <p className="font-bold">You</p>
            <p>Yesterday</p>
          </div>
          <div className="pl-[45px]">
            <p>My first private note.</p>
          </div>
        </div>
        <div className="w-full bg-white p-2 border border-b-gray">
          <div className="flex flex-row items-center gap-2">
            <img
              src="img/avatar/Image_332.png"
              width={"35px"}
              style={{ borderRadius: "50%" }}
            />
            <p className="font-bold">You</p>
            <p>Yesterday</p>
          </div>
          <div className="pl-[45px]">
            <p>My first private note.</p>
          </div>
        </div>
        <div className="w-full bg-white rounded-b-xl p-2 border border-b-gray">
          <div className="flex flex-row items-center gap-2">
            <img
              src="img/avatar/Image_332.png"
              width={"35px"}
              style={{ borderRadius: "50%" }}
            />
            <p className="font-bold">You</p>
            <p>Yesterday</p>
          </div>
          <div className="pl-[45px]">
            <p>My first private note.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesAndAnnotations;
