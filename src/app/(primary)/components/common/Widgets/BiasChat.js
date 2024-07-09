import React, { useEffect, useState } from 'react';
import { ControlledAccordions } from "..";


import { IconButton, Collapse } from "@mui/material";
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";
import { SourceAvatarGroupWithModal } from "../SourceAvatarGroupWithModal";
import Divider from "@mui/material/Divider";
import FilterField from "./FilterField";

export const CoverageDetail = () => {
  return (
    <div className="flex flex-col gap-2 p-4 text-[#000] bg-[#E1EBEE] rounded-xl">
      <h6 className="font-bold">Coverage Details</h6>
      <div className="flex flex-row justify-between">
        <span>Total News Sources</span>
        <span className="font-bold">117</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Leaning Left</span>
        <span className="font-bold">23</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Leaning Right</span>
        <span className="font-bold">12</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Center</span>
        <span className="font-bold">52</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Last Updated</span>
        <span className="font-bold">18 minutes ago</span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Bias Distribution</span>
        <span className="font-bold">60% Center</span>
      </div>
    </div>
  );
};

export const ChannelAnalysis = ({ topicLabel }) => {
  const [articles, unread, read] = [495, 75, 695];
  const NumberInfo = ({ number, label, color }) => {
    const ColorfulDot = ({ color }) => {
      if (!color) {
        return null;
      }
      const dotStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: color,
        display: "inline-block",
      };

      return <span style={dotStyle}></span>;
    };
    return (
      <div>
        <p className="font-bold">{number}</p>
        <div className="flex flex-row items-center gap-1">
          <ColorfulDot color={color} />
          <p>{label}</p>
        </div>
      </div>
    );
  };

  const [emojiParagraph, setEmojiParagraph] = useState(false);
  const handleShowMore = () => {
    setEmojiParagraph(true);
  };
  return (
    <div className="flex flex-col gap-2 p-4 text-[#000] bg-[#E1EBEE] rounded-xl">
      <div className="flex flex-row justify-between items-center">
        <h6 className="font-bold text-[22px]">{topicLabel}</h6>
        <SourceAvatarGroupWithModal />
      </div>
      <div>
        <p className="text-[15px]">
          In total, <b>{articles}</b> articles have been published in{" "}
          <b>{topicLabel}</b>.
        </p>
        <p className="text-[15px]">
          You have <b>{unread} unread</b> articles from <b>19 sources</b>
        </p>
        <p
          className="text-[15px] mt-3"
          style={{ display: emojiParagraph ? "block" : "none" }}
        >
          There are{" "}
          <b>
            242 &#x1F60A; funny, &#128544; 160 angry, &#x1F602; 75 happy,
            &#x1F622; 18 sads
          </b>{" "}
          and <b>&#x2764; 99 loved</b> unread articles.
        </p>
      </div>
      <div className="flex items-center justify-center my-2">
        <button
          className="text-blue-500 w-[90%] py-[10px] rounded-3xl hover:bg-gray-400"
          onClick={handleShowMore}
          style={{ display: emojiParagraph ? "none" : "block" }}
        >
          show more
        </button>
      </div>
      <div className="flex flex-row justify-between">
        <NumberInfo number={articles} label="articles" />
        <NumberInfo number={unread} label="unread" color="red" />
        <NumberInfo number={read} label="read" color="green" />
      </div>
      <Divider sx={{ marginY: "10px" }} />
      <p>FILTER</p>
      <FilterField index={0} text="System Stream" totalNum={12} />
      <FilterField index={1} text="Emojis" totalNum={22} />
      <FilterField index={2} text="All Tags" totalNum={99} />
    </div>
  );
};

const BarChart = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-row w-full my-2 text-[10px] text-center">
      {data.map((item, index) => (
        <span
          key={index}
          className={`p-1 py-2 ${item.w_class} ${item.bg} ${item.text_color}`}
        >
          {item.w > 20 ? `${item.label} ${item.w}%` : `${item.w}%`}
        </span>
      ))}
    </div>
  );
};

const VerticalCylinder = (props) => {
  const { brand_list } = props;
  return (
    <div className="bg-[#fff] rounded-full">
      <div className="flex flex-col w-[42px] bg-[#ADDAEE] rounded-full">
        {brand_list.map((item, index) => (
          <img
            key={index}
            src={item}
            className="w-[36px] h-[36px] mx-auto my-1 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

const VerticalCylinderGroup = () => {
  const brand_list1 = [
    "/img/icons/source/Mask Group 202.png",
    "/img/icons/source/Mask Group 203.png",
    "/img/icons/source/Mask Group 204.png",
    "/img/icons/source/Mask Group 205.png",
    "/img/icons/source/Mask Group 206.png",
    "/img/icons/source/Mask Group 207.png",
  ];
  const brand_list2 = [
    "/img/icons/source/Mask Group 207.png",
    "/img/icons/source/Mask Group 206.png",
  ];
  const brand_list3 = [
    "/img/icons/source/Mask Group 205.png",
    "/img/icons/source/Mask Group 203.png",
    "/img/icons/source/Mask Group 202.png",
    "/img/icons/source/Mask Group 206.png",
    "/img/icons/source/Mask Group 204.png",
    "/img/icons/source/Mask Group 207.png",
  ];
  return (
    <div className="flex flex-row justify-between my-2">
      <VerticalCylinder brand_list={[]} />
      <VerticalCylinder brand_list={brand_list2} />
      <VerticalCylinder brand_list={brand_list1} />
      <VerticalCylinder brand_list={brand_list3} />
      <VerticalCylinder brand_list={brand_list1} />
      <VerticalCylinder brand_list={[]} />
      <VerticalCylinder brand_list={[]} />
    </div>
  );
};

const HorizontalCylinder = (props) => {
  const brand_list = [
    [
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 202.png",
      "/img/icons/source/Mask Group 203.png",
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 203.png",
      "/img/icons/source/Mask Group 205.png",
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 207.png",
    ],
    [
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 205.png",
      "/img/icons/source/Mask Group 202.png",
      "/img/icons/source/Mask Group 205.png",
      "/img/icons/source/Mask Group 203.png",
      "/img/icons/source/Mask Group 207.png",
    ],
    [
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 205.png",
      "/img/icons/source/Mask Group 207.png",
    ],
    [
      "/img/icons/source/Mask Group 203.png",
      "/img/icons/source/Mask Group 202.png",
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 203.png",
      "/img/icons/source/Mask Group 205.png",
      "/img/icons/source/Mask Group 204.png",
      "/img/icons/source/Mask Group 207.png",
    ],
  ];
  // const { brand_list } = props;
  return (
    <div className="w-full h-[42px] bg-[#fff] rounded-full relative">
      <div className="flex flex-row gap-1 p-1 h-[42px] bg-[#ADDAEE] rounded-full absolute">
        {brand_list[Math.floor(Math.random() * 4)].map((item, index) => (
          <img
            key={index}
            src={item}
            className="w-[36px] h-[36px] my-auto rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export const BiasDistribution = (props) => {
    const { hasUntrackedBias, widgetStatus } = props;

    const [ showDetail, setShowDetail ] = useState(widgetStatus == 0);

    useEffect(() => {
        setShowDetail(widgetStatus == 0);
    }, [widgetStatus]);

  const data = [
    {
      label: "L",
      w_class: "w-[26%]",
      w: 26,
      bg: "bg-[#58BFEC]",
      text_color: "text-[#fff]",
    },
    {
      label: "C",
      w_class: "w-[60%]",
      w: 60,
      bg: "bg-[#ffffff]",
      text_color: "text-[#000]",
    },
    {
      label: "R",
      w_class: "w-[14%]",
      w: 14,
      bg: "bg-[#FA9330]",
      text_color: "text-[#fff]",
    },
  ];

  return (
    <div className="p-4 pt-4 bg-[#E1EBEE] rounded-xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <h6>Bias Distribution</h6>
        </div>
        <IconButton
          aria-label="last updated time"
          size="small"
          onClick={() => {
            setShowDetail(!showDetail);
          }}
        >
          {showDetail ? (
            <ArrowDropUpIcon fontSize="inherit" />
          ) : (
            <ArrowDropDownIcon fontSize="inherit" />
          )}
        </IconButton>
      </div>
      <div className="flex flex-col pt-4">
        <span className="text-gray-600 text-[12px]">
          • 60% of the sources are Center
        </span>
        <BarChart data={data} />
        <Collapse in={showDetail}>
          <VerticalCylinderGroup />
          {hasUntrackedBias && (
            <>
              <h6 className="mt-4 text-[12px] text-[#000] font-bold">
                Untracked bias
              </h6>
              <HorizontalCylinder />
            </>
          )}
        </Collapse>
      </div>
    </div>
  );
};


const Factuality = (props) => {
    const {widgetStatus} = props;
    
    const [showDetail, setShowDetail] = useState(widgetStatus === 0);

    useEffect(() => {
        setShowDetail(widgetStatus == 0);
    }, [widgetStatus]);

  const data = [
    {
      label: "Low",
      w_class: "w-[10%]",
      w: 10,
      bg: "bg-[#204986]",
      text_color: "text-[#fff]",
    },
    {
      label: "Mixed",
      w_class: "w-[38%]",
      w: 38,
      bg: "bg-[#4FBAE9]",
      text_color: "text-[#fff]",
    },
    {
      label: "High",
      w_class: "w-[52%]",
      w: 52,
      bg: "bg-[#F9871A]",
      text_color: "text-[#fff]",
    },
  ];

  return (
    <div className="gap-2 p-4 pt-4 bg-[#E1EBEE] rounded-xl">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <h6>Factuality</h6>
        </div>
        <IconButton
          aria-label="last updated time"
          size="small"
          onClick={() => {
            setShowDetail(!showDetail);
          }}
        >
          {showDetail ? (
            <ArrowDropUpIcon fontSize="inherit" />
          ) : (
            <ArrowDropDownIcon fontSize="inherit" />
          )}
        </IconButton>
      </div>
      <div className="flex flex-col pt-4">
        <span className="text-gray-600 text-[12px]">
          • 3% of the sources are Low Factuality
        </span>
        <BarChart data={data} />
        <Collapse in={showDetail}>
          <div className="flex flex-col gap-1">
            <HorizontalCylinder />
            <HorizontalCylinder />
            <HorizontalCylinder />
          </div>
          <h6 className="mt-4 text-[12px] text-gray-600 font-bold">
            Untracked Factuality
          </h6>
          <HorizontalCylinder />
        </Collapse>
      </div>
    </div>
  );
};

export const BiasChatComponent = (props) => {
    const {
        showCoverageDetail,
        showBiasDistribution,
        showFactuality,
        widgetStatus
    } = props;

    return (
        <div className="mt-16 p-[1px] bg-gradient-to-b from-[#F8AF64] to-[#69C3E8] rounded-xl">
            <div className="flex flex-col p-4 gap-4 bg-[#EEF2F3] rounded-xl">
                {
                    showCoverageDetail &&
                    <CoverageDetail />
                }
                {
                    showBiasDistribution &&
                    <BiasDistribution widgetStatus={widgetStatus}/>
                }
                {
                    showFactuality &&
                    <Factuality widgetStatus={widgetStatus}/>
                }
            </div>
        </div>
    )
}
