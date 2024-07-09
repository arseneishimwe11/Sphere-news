"use client";

import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
// import CategoriesContainer from "../components/FollowingCategoriesContainer";
import { useContext, useState } from "react";
import { UserDashboardContext } from "../layout";
import CustomSelect from "../components/common/dropdown/Dropdown";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SendIcon from "@mui/icons-material/Send";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ListIcon from "@mui/icons-material/List";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CollectionsContainer from "../components/CollectionsContainer";

import { Menu, MenuItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

import ToggleSwitch from "../components/common/ToggleSwitch";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Collections = () => {
  const content = useContext(UserDashboardContext);

  const setHeaderContent = content.setHeaderContent;
  setHeaderContent("Collections");

  const setDashboardStyle = content.setDashboardStyle;
  setDashboardStyle(false);

  const [val, setVal] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState("card");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [openInvoice, setOpenInvoice] = useState(false);

  const style =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[40%] bg-white border border-white shadow-lg p-4 max-h-[90%] rounded-md overflow-y-auto";

  return (
    <div className="w-full h-full bg-[#F6FBFF]">
      <div className="pt-[80px] sm:pt-[100px] w-[90%] lg:w-[70%] m-auto">
        <div className="flex text-[20px] sm:text-[32px] font-bold w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
            <div className="flex flex-row items-center justify-start">
              <p>Collections</p>
              &nbsp;
              <span className="text-[#808E91]">
                <HelpOutlineOutlinedIcon />
              </span>
            </div>
            {/* <div className='h-[5px] bg-[#ACD6E4] hidden xl:block w-[25%]'></div>
                        <div className='h-[5px] bg-[#829BAF] hidden xl:block w-[30%]'></div> */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Button
                variant="outfilled"
                style={{
                  textTransform: "none",
                  backgroundColor: "#FFF",
                  border: "solid",
                  borderWidth: "1px",
                  borderColor: "#6C6F70",
                  color: "#6C6F70",
                  borderRadius: "7px",
                }}
              >
                + Boost
              </Button>
              <div className="flex flex-row">
                <IconButton>
                  <LanguageIcon />
                </IconButton>
                <IconButton>
                  <SendIcon />
                </IconButton>
                <IconButton>
                  <GroupOutlinedIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton onClick={handleClick}>
                  <ListIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      width: "20ch",
                    },
                  }}
                  disableScrollLock={true}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <FormControl>
                      <FormLabel id="demo-controlled-radio-buttons-group">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="magazine"
                          control={<Radio color="default" />}
                          label="Magazine View"
                        />
                        <FormControlLabel
                          value="card"
                          control={<Radio color="default" />}
                          label="Cards View"
                        />
                      </RadioGroup>
                    </FormControl>
                  </MenuItem>
                </Menu>
                <IconButton>
                  <MoreHorizIcon />
                </IconButton>
              </div>
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  backgroundColor: "#1F232C",
                  borderRadius: "7px",
                }}
                onClick={() => setOpenInvoice(true)}
              >
                Edit Settings
              </Button>
              <Modal
                open={openInvoice}
                onClose={() => setOpenInvoice(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className={style}>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center mt-[20px]">
                      <p className="font-[600] text-[25px]">
                        Create New Collection
                      </p>
                      <IconButton onClick={() => setOpenInvoice(false)}>
                        <CloseIcon />
                      </IconButton>
                    </div>
                    <p className="mt-2 text-[18px] text-[#777]">
                      Save the most important articles you read around your
                      clients, or interests
                    </p>
                    <div className="mt-6 flex flex-row gap-6">
                      <p>Title</p>
                      <p className="text-[#777]">Required</p>
                    </div>
                    <input
                      placeholder="Title"
                      type="text"
                      className="border border-solid p-3 rounded-md mt-2"
                    />
                    <p className="mt-6">Description</p>
                    <textarea
                      name="Text1"
                      cols="40"
                      rows="5"
                      className="border border-solid"
                    />
                    <p className="mt-2 text-[#777] text-[12px]">
                      Example: Monitor trends in 3D printing industry, Discover
                      content to share on LinkedIn, etc.
                    </p>
                    <p className="mt-10 font-[600]">Cover Image</p>
                    <div className="mt-4 rounded-lg h-[200px] border border-dashed border-[gray]">
                      <div className="items-center flex flex-col gap-2 mt-[40px]">
                        <InsertPhotoOutlinedIcon className="text-[40px] text-[#777]" />
                        <p className="text-[#777]">Drag and drop or</p>
                        <input
                          id="input-file-upload"
                          type="file"
                          className="hidden"
                        />
                        <label
                          id="label-file-upload"
                          htmlFor="input-file-upload"
                          className="text-[#777] text-[14px] border border-[gray] rounded-sm p-1 "
                        >
                          UPLOAD IMAGE
                        </label>
                      </div>
                    </div>
                    <p className="text-[12px] text-[#777] mt-2">
                      Drag and drop the image above or browser your computer.
                      Recommended: watata otata
                    </p>
                    <p className="mt-10 font-[600] text-[20px]">Public Board</p>
                    <p className="mt-2 text-[#777]">
                      Would you like to make this board public?
                    </p>
                    <div className="mt-6 flex flex-row gap-2 items-center">
                      <ToggleSwitch />
                      <p className="text-[#777]">Board public</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-10">
                      <p className="font-[600] text-[20px]">Power by AI</p>
                      <LockOutlinedIcon />
                    </div>
                    <p className="mt-2 text-[#777]">
                      Would you like to summarize content of this collection
                      with AI?
                    </p>
                    <div className="mt-6 flex flex-row gap-2 items-center">
                      <ToggleSwitch />
                      <p className="text-[#777]">Enhance with AI</p>
                    </div>
                    <div className="my-20 flex flex-row gap-4 justify-end">
                      <Button variant="contained" className="bg-[#21A5A9]">
                        CREATE
                      </Button>
                      <Button variant="outlined border border-solid border-[#777]">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="border border-solid flex flex-row items-center rounded-xl w-full my-4 bg-white">
          <SearchIcon className="ml-4 text-[#9CA3AF]" />
          <input
            placeholder="Search collection"
            type="search"
            style={{ outline: "none" }}
            className="rounded-xl p-2 flex flex-grow sm:w-[80%]"
          />
        </div>
        <div className="flex flex-row justify-between items-center my-3">
          <p>
            <strong>166</strong> Items
          </p>
          <div className="flex flex-row gap-2 sm:gap-6">
            <div className="flex flex-row">
              <IconButton>
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
            <div className="z-[300]">
              <CustomSelect
                value={val}
                onChange={setVal}
                options={[
                  "Newest",
                  "Oldest",
                  "Recently Updated",
                  "Most Saves",
                  "Most Likes",
                  "A-Z Title",
                  "Z-A Title",
                ]}
                placeholder="Sort: Newest&nbsp;"
                radius="xl"
              />
            </div>
          </div>
        </div>
        <CollectionsContainer />
        <div className="flex justify-end mt-10 pb-10">
          <Stack spacing={10}>
            <Pagination
              count={229}
              variant="outlined"
              color="primary"
              size="10"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Collections;
