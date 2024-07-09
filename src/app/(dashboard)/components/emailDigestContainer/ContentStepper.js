import { TextField, Divider, IconButton, Paper, Button } from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Popover from "@mui/material/Popover";
import usePopup from "@/app/hooks/usePopupState";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";

const AddContentPopOver = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [favourite, setFavourite] = useState(false);
  const handleFavourite = () => {
    setFavourite(!favourite);
  };
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
    >
      <div className="min-w-[300px]">
        <div className="p-2">
          <TextField
            placeholder="Search"
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-notchedOutline": {
                width: "100%",
              },
            }}
          />
        </div>
        <Divider
          sx={{
            marginBottom: "10px",
          }}
        />
        <div className="flex flex-row gap-[5px] items-center">
          <IconButton onClick={handleFavourite} sx={{ paddingLeft: "8px" }}>
            {/* <StarBorderIcon />
             */}
            {favourite ? (
              <StarIcon sx={{ color: "gold" }} />
            ) : (
              <StarBorderIcon />
            )}
          </IconButton>
          <p className="text-[17px]">Favourite Newsletter Content</p>
        </div>
        <div className="flex flex-col px-[8px]">
          <p className="text-[13px] mt-[5px]">COLLECTIONS</p>
          <div className="mt-[10px] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-[10px]">
              <FolderOpenIcon sx={{ color: "#59BCE8" }} />
              <p>Competitors</p>
            </div>
            <DoneIcon
              sx={{
                borderRadius: "100%",
                backgroundColor: "#59BCE8",
                color: "white",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col px-[8px] mt-[5px]">
          <p className="text-[13px] mt-[5px]">STREAMS</p>
          <div className="mt-[10px] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-[10px]">
              <FolderOpenIcon />
              <p>Competitors</p>
            </div>
          </div>
          <div className="my-[10px] flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-[10px] pl-[30px]">
              <FolderOpenIcon sx={{ color: "#59BCE8" }} />
              <p>Competitors</p>
            </div>
            <DoneIcon
              sx={{
                borderRadius: "100%",
                backgroundColor: "#59BCE8",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </Popover>
  );
};

const FolderContent = ({ title }) => {
  return (
    <Paper
      elevation="2"
      sx={{ padding: 1, width: "auto !important" }}
      className="flex flex-row gap-[5px] items-center justify-content"
    >
      <FolderOpenIcon />
      <label className="font-bold">{title}</label>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};

const ContentStepper = () => {
  const contents = [["Competitors", "Technologies"], []];
  const { anchorEl, handleOpen, handleClose } = usePopup();
  return (
    <div className="mt-[20px]">
      <div>
        <label className="text-[23px] font-bold">Add Content</label>
      </div>
      {contents.map((sectionContent, index) => (
        <>
          <div className="flex flex-row mt-[12px] items-center justify-between">
            <label className="text-[18px] font-bold text-[#777]">
              {`SECTION ${index + 1}`}
            </label>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="flex flex-col mt-[3px]">
            <label className="font-bold text-[18px] mb-[5px]">
              Section Name: <span className="text-[#777]">Optional</span>
            </label>
            <TextField />
          </div>
          <div className="flex flex-col mt-[15px]">
            <label className="font-bold text-[18px] mb-[5px]">
              Description Name: <span className="text-[#777]">Optional</span>
            </label>
            <textarea
              placeholder="Will be displayed in each email above the articles.
              Maximum 500 characters."
              style={{
                borderWidth: "1px",
                minHeight: "100px",
                padding: "10px",
              }}
            />
          </div>
          <div className="font-bold text-[18px] mt-[15px]">
            <label className="font-">Content</label>
          </div>
          <div className="flex flex-wrap gap-[5px] mt-[15px]">
            {sectionContent.map((content) => (
              <FolderContent title={content} />
            ))}
          </div>
          <Button
            sx={{ color: "#87BFD4", marginTop: "15px", fontSize: "17px" }}
            onClick={handleOpen}
          >
            + Add collections, streams & folders
          </Button>
        </>
      ))}
      <Divider sx={{ marginY: "30px" }} />
      <div className="w-full flex">
        <Button
          sx={{
            textTransform: "none",
            color: "blue",
            marginX: "auto",
            fontSize: "18px",
          }}
        >
          + Add new section
        </Button>
      </div>
      <AddContentPopOver anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
};

export default ContentStepper;
