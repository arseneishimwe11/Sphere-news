"use client";
import { useEffect, useState } from "react";

import { Stack, Pagination, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ReadingHistoryContainer from "../components/readingHistoryContainer/ReadingHistoryContainer";
import SearchIcon from "@mui/icons-material/Search";

import CustomSelect from "../components/common/dropdown/Dropdown";

const BookmarksAndReadingContainer = ({ bookmarkStatus }) => {
  const [val, setVal] = useState("");
  const [tabSelect, setTabSelect] = useState(0);
  useEffect(() => {
    setTabSelect(bookmarkStatus);
  }, [bookmarkStatus]);
  return (
    <div className="my-12 max-width-1380px px-4 m-auto">
      <div className="flex flex-row items-center">
        <h3 className="text-[20px] md:text-[35px] text-[#000] font-bold">
          {(() => {
            switch (tabSelect) {
              case 0:
                return "Reading History";
              case 1:
                return "Bookmarks";
              case 2:
                return "Annotated";
            }
          })()}
        </h3>
        <span>
          <HelpOutlineIcon />
        </span>
      </div>
      <div className="mt-[20px] border-b border-b-1 border-gray-300 cursor-pointer">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-row items-end gap-4">
            <div
              className="flex flex-row py-2 items-center gap-2 relative"
              onClick={() => setTabSelect(0)}
            >
              <p>Reading History</p>
              <span className="rounded-full px-[5px] bg-[#9AD5D3] text-[12px]">
                85
              </span>
              {tabSelect == 0 && (
                <div className="w-full bottom-0 absolute h-[4px] bg-[#FF9D28]"></div>
              )}
            </div>
            <div
              className="flex flex-row py-2 items-center gap-2 relative"
              onClick={() => setTabSelect(1)}
            >
              <p>Bookmarks</p>
              <span className="rounded-full px-[5px] bg-[#9AD5D3] text-[12px]">
                12
              </span>
              {tabSelect == 1 && (
                <div className="w-full bottom-0 absolute h-[4px] bg-[#FF9D28]"></div>
              )}
            </div>
            <div
              className="flex flex-row py-2 items-center gap-2 relative"
              onClick={() => setTabSelect(2)}
            >
              <p>Annotated</p>
              <span className="rounded-full px-[5px] bg-[#9AD5D3] text-[12px]">
                23
              </span>
              {tabSelect == 2 && (
                <div className="w-full bottom-0 absolute h-[4px] bg-[#FF9D28]"></div>
              )}
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <div className="flex gap-2 p-1 border border-1 border-gray-300 rounded-md">
              <SearchIcon />
              <input placeholder="Search..." className="outline-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center my-3">
        <p>
          <strong>{tabSelect === 0 ? 14 : 85}</strong> Stories
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
          <div className="w-[100%] sm:w-[70%] z-[300]">
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
      <div className="flex flex-wrap gap-4">
        <ReadingHistoryContainer tabSelect={tabSelect} />
      </div>
      <div className="flex justify-end mt-10">
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
  );
};

export default BookmarksAndReadingContainer;
