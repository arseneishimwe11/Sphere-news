import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Switch } from "@mui/material";
import { useState } from "react";

const CustomField = () => {
  return (
    <div className="border border-solid border-[#777] rounded-lg">
      <div className="flex flex-row items-center justify-between px-2 border-b border-solid border-[#777]">
        <div className="flex flex-row items-center gap-[10px]">
          <IconButton>
            <DragIndicatorIcon />
          </IconButton>
          <label>
            <span className="font-bold">Title</span>
            <span> (required)</span>
          </label>
        </div>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="flex flex-row items-center justify-between px-2 border-b border-solid border-[#777]">
        <div className="flex flex-row items-center gap-[10px]">
          <IconButton>
            <DragIndicatorIcon />
          </IconButton>
          <label>
            <span className="font-bold">Primary Image</span>
            <span> (required)</span>
          </label>
        </div>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="flex flex-row items-center justify-between px-2">
        <div className="flex flex-row items-center gap-[10px]">
          <IconButton>
            <DragIndicatorIcon />
          </IconButton>
          <label>
            <span className="font-bold">Author</span>
            <span> (required)</span>
          </label>
        </div>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};

const SearchField = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-row border border-solid mt-[20px] p-2 rounded-md">
        <SearchIcon />
        <input
          type="text"
          className="border-none focus:border-none outline-none w-full"
          onClick={() => setOpen(true)}
        />
      </div>
      <SearchResult open={open} setOpen={setOpen} />
    </>
  );
};

const SearchResult = ({ open, setOpen }) => {
  const searchItems = ["Author", "Publish Time", "Source", "Snippet"];
  const handleClose = () => {
    setOpen(false);
  };
  const SearchItem = ({ item, handleClose }) => {
    const [hover, setHover] = useState(false);
    const handleHoverItems = () => {
      setHover(true);
    };
    const handleLeaveItems = () => {
      setHover(false);
    };
    return (
      <div
        onMouseOver={handleHoverItems}
        onMouseLeave={handleLeaveItems}
        onClick={handleClose}
        style={
          hover
            ? { borderLeft: "solid", borderColor: "blue" }
            : { backgroundColor: "#EEE" }
        }
        className="p-2"
      >
        {item}
      </div>
    );
  };
  return (
    open && (
      <>
        {searchItems.map((item) => (
          <SearchItem item={item} handleClose={handleClose} />
        ))}
      </>
    )
  );
};

const AiSwitch = () => {
    return (
        <div className="mt-[20px] flex flex-row justify-between items-center">
            <label className="font-bold text-[25px]">Summarize with AI</label>
            <Switch />
        </div>
    )
}
const FieldStepper = () => {
  return (
    <div className="mt-[20px]">
      <div className="mb-[20px]">
        <label className="text-[20px] font-bold">Customzie Fields</label>
      </div>
      <CustomField />
      <SearchField />
      <AiSwitch />
    </div>
  );
};

export default FieldStepper;
