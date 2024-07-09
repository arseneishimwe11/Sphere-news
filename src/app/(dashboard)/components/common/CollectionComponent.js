"use client";

import ThreeDotNews from "./ThreeDotNews";
import { useState } from "react";
import Link from "next/link";
import VertDelectIconButton from "./VertDeleteIconButton";
import { IconButton } from "@mui/material";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Carousel from "./Carousel";

const CollectionComponent = (props) => {
  const { imageUrl, title } = props;
  const [showVertIcon, setShowVertIcon] = useState(false);
  const [removed, setRemoved] = useState(false);
  return (
    !removed && (
      <>
        <div
          className="relative flex flex-col w-[30%] rounded-xl min-w-[300px] min-h-[90px] border border-solid my-2 bg-white"
          onMouseOver={() => setShowVertIcon(true)}
          onMouseOut={() => setShowVertIcon(false)}
        >
          <VertDelectIconButton
            removed={removed}
            setRemoved={setRemoved}
            showVertIcon={showVertIcon}
            setShowVertIcon={setShowVertIcon}
          />
          {/* <div className='flex flex-row ml-5 gap-3 mt-5'>
                    <img src='img/icons/source/CNBC.png' className='h-full' />
                    <div className='flex-grow'>
                        <div className='flex flex-col text-[14px]'>
                            <p>Hareetz</p>
                            <p>amplied into <strong>Israel</strong></p>
                        </div>
                    </div>
                </div> */}
          <div className="m-3">
            <Carousel propsSliceNum={3} />
          </div>
          <p className="ml-5 mt-2 font-bold">COLLECTION X</p>
          {/* <div className='mx-5'>
                    <p><strong>Journey of the Enigmatic Moonlight: Unveiling Secrets in the Shadows.</strong></p>
                    <p className='my-3'>Hareetz - Ben Samuels, Amir Tibon</p>
                    <p>In the age of technology, the rapid advancements in artificial intelligence have revolutionized various industries, paving the way for unprecedented opportunities and challenges.</p>
                </div> */}
          <p className="ml-5 mt-2 text-[#777] text-[13px]">
            165 Items&middot;27 Channels
          </p>
          <div className="flex flex-row justify-between items-center mx-5 mb-5">
            <div className="items-center flex flex-row">
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <p>6</p>
            </div>
            <div className="items-center flex flex-row">
              <IconButton>
                <ThumbUpOffAltIcon />
              </IconButton>
              <p>24</p>
            </div>
            <div className="items-center flex flex-row">
              <IconButton>
                <RocketLaunchOutlinedIcon />
              </IconButton>
              <p>75</p>
            </div>
            <IconButton>
              <FileUploadOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </>
    )
  );
};

export default CollectionComponent;
