import Popover from "@mui/material/Popover";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const FolderPopOver = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      PaperProps={{
        style: {
          maxHeight: "450px", // Set the desired fixed height
          overflowY: "auto", // Enable vertical scrolling
        },
      }}
    >
      <div className="min-w-[200px] p-[10px]">
        <label className="text-[13px]">FOLDERS</label>
        <div className="flex flex-row items-center gap-[10px] mt-[10px]">
          <FolderOutlinedIcon />
          <p>My Stream 1</p>
        </div>
        <div className="flex flex-row items-center gap-[10px] mt-[10px] ml-[30px]">
          <FolderOutlinedIcon />
          <p>My Folder 1</p>
        </div>
        <div className="flex flex-row items-center gap-[10px] mt-[10px] ml-[30px]">
          <FolderOutlinedIcon />
          <p>My Folder 2</p>
        </div>
        <div className="flex flex-row items-center gap-[10px] mt-[20px]">
          <FolderOutlinedIcon />
          <p>My Stream 2</p>
        </div>
      </div>
    </Popover>
  );
};

export default FolderPopOver;
