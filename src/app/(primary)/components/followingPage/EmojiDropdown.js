import { Divider, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

const EmojiDropdown = ({ handleClose }) => {
  const emojis = ["Future", "Rocket", "Inspiration"];
  const items = ["🚀", "🔮", "✨"];
  return (
    <>
      <div className="flex flex-row items-center justify-between min-w-[300px] m-2">
        <b className="pl-2">Emojis</b>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      {emojis.map((emoji, index) => (
        <div key={index}>
          <div className="flex flex-row items-center pb-2 gap-2">
            <Checkbox />
            <p>
              {items[index]} {emoji}
            </p>
          </div>
        </div>
      ))}
      <Divider />
      <Button
        variant="contained"
        sx={{ width: "97%", margin: "5px", textTransform: "none" }}
      >
        Filter
      </Button>
    </>
  );
};

export default EmojiDropdown;
