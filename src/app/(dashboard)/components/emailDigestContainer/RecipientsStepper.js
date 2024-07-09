import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const SearchField = ({ searchItems }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full flex flex-row border border-solid mt-[20px] p-2 rounded-md">
        <SearchIcon />
        <input
          type="text"
          className="border-none focus:border-none outline-none w-full"
          placeholder="Search"
          onClick={() => setOpen(true)}
        />
      </div>
      <SearchResult searchItems={searchItems} open={open} setOpen={setOpen} />
    </>
  );
};

const SearchResult = ({ open, setOpen, searchItems }) => {
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
          hover ? { backgroundColor: "#E6F7FF" } : { backgroundColor: "#EEE" }
        }
        className="p-2 flex flex-row items-center gap-[10px]"
      >
        <AccountCircleIcon sx={{ color: "#7B1E9D", fontSize: "35px" }} />
        <div className="flex flex-col">
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
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

const GmailListItem = ({ mail }) => {
  return (
    <div className="p-2 flex flex-row items-center justify-between mt-[10px]">
      <div className="flex flex-row items-center gap-[10px]">
        <AccountCircleIcon sx={{ color: "#7B1E9D", fontSize: "35px" }} />
        <div className="flex flex-col">
          <p>{mail}</p>
          <p>Pending...</p>
        </div>
      </div>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

const RecipientsStepper = () => {
  const searchItems = [
    { name: "Joe Smith", email: "joesmith@gmail.com" },
    { name: "Richie Roberts", email: "richroberts@gmail.com" },
  ];
  return (
    <div className="mt-[20px]">
      <div className="mb-[20px]">
        <label className="text-[20px] font-bold">Search Recipients</label>
      </div>
      <SearchField searchItems={searchItems} />
      <div className="mt-[20px]">
        <label className="text-[20px] font-bold">Add Recipients</label>
      </div>
      <div className="flex flex-row mt-[20px] gap-[20px]">
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
      </div>
      <div className="flex flex-row mt-[20px] p-2 rounded-lg border">
        <input
          type="text"
          className="flex-grow outline-none"
          placeholder="e.g. email@gmail.com"
        />
        <button className="p-2 border rounded-xl">Add New</button>
      </div>
      <GmailListItem mail="email1@gmail.com" />
      <GmailListItem mail="email2@gmail.com" />
    </div>
  );
};

export default RecipientsStepper;
