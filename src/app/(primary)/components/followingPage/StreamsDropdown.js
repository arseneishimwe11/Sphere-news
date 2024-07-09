import { Divider, IconButton } from "@mui/material";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

const StreamsDropdown = ({ handleClose }) => {
  const [streamId, setStreamId] = useState(0);
  const streams = ["red", "blue", "gray", "lightblue", "pink"];
  const handleStreamId = (index) => {
    setStreamId(index);
  };
  return (
    <>
      <div className="flex flex-row items-center justify-between min-w-[300px] m-3">
        <b>Streams</b>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <TextField
        variant="outlined"
        sx={{
          padding: "10px",
          width: "100%",
        }}
      />
      <Divider />
      {streams.map((item, index) => (
        <div key={index} onClick={() => handleStreamId(index)}>
          <div className="flex flex-row items-center p-4 gap-2">
            <DoneIcon
              sx={{
                visibility: index === streamId ? "visible" : "hidden",
                color: "lightblue",
              }}
            />
            <span
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: item,
                display: "inline-block",
              }}
            ></span>
            <p>Stream {index + 1}</p>
          </div>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default StreamsDropdown;
