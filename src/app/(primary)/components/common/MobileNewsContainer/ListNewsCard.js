import { useContext } from "react";
import MobileArticleAnalyze from "../AssessArticle/mobile";
import { BiasRate } from "../BiasRate";

import { MainContext } from "@/app/(primary)/layout";

import { Divider } from "@mui/material";

export const ListNewsCard = (props) => {
    const { img_src, publisher, title, time, content } = props;

    const {
        listNewsCardViewMode,
        emojis,
        sources,
        showContentInArticleAsses,
        biasRate,
        titlePosition
    } = useContext(MainContext);

    return (
        <>
            {
                listNewsCardViewMode === 'card' &&
                <>
                    <div className="w-full my-2 rounded-lg border border-1 border-gray-300 overflow-hidden">
                        <div className="w-full px-4 py-2 bg-gradient-to-r from-[#1E2A40] to-[#ffffff]">
                            <span className="text-[#fff] text-[12px] font-bold">ELECTRON 2024</span>
                        </div>
                        <div className="pl-4 pr-[140px] py-2 relative">
                            <img
                                src={publisher}
                                className=""
                            />
                            <h3 className="text-[16px] font-bold">{title}</h3>
                            <img
                                src={img_src}
                                className="w-[132px] rounded-lg right-2 bottom-2 absolute"
                            />
                        </div>
                        <div className="p-2">
                            <MobileArticleAnalyze hasPreview={true} />
                        </div>
                    </div>
                </>
            }
            {
                listNewsCardViewMode.includes('magazine') &&
                <>
                    <div className="flex flex-row gap-4 items-start">
                        {
                            listNewsCardViewMode == 'magazineleft' &&
                            <img
                                src={img_src}
                                className="w-[40%] rounded-lg"
                            />
                        }
                        <div className="flex flex-col items-start w-[60%] justify-between gap-2">
                            <img
                                src={publisher}
                            />
                            <p className="text-[16px] font-bold leading-[1]">
                                {emojis && "🌎"}
                                {title}
                            </p>
                            <p className="text-[12px] text-gray-500">
                                {time}
                                {
                                    sources &&
                                    <span>&#x2022;33 sources</span>
                                }
                            </p>
                        </div>
                        {
                            listNewsCardViewMode == 'magazineright' &&
                            <img
                                src={img_src}
                                className="w-[40%] rounded-lg"
                            />
                        }
                    </div>
                    {
                        biasRate &&
                        <BiasRate left={23} center={37} right={5} />
                    }
                    {
                        showContentInArticleAsses &&
                        <p>{content}</p>
                    }
                    <MobileArticleAnalyze hasPreview={true} />
                </>
            }
            {
                listNewsCardViewMode === 'expanded1' &&
                <div className="w-full my-2 rounded-lg border border-1 border-gray-300 overflow-hidden">
                    <img
                        src={img_src}
                        className="w-full rounded-t-lg"
                    />
                    <div className="w-full px-4 py-2 bg-gradient-to-r from-[#1E2A40] to-[#ffffff]">
                        <span className="text-[#fff] text-[12px] font-bold">ELECTRON 2024</span>
                    </div>
                    <div className="px-4 py-2 relative">
                        <img
                            src={publisher}
                            className=""
                        />
                        <h3 className="text-[16px] font-bold">{title}</h3>
                        {
                            biasRate &&
                            <BiasRate left={23} center={37} right={5} />
                        }
                        {
                            showContentInArticleAsses &&
                            <p>{content}</p>
                        }
                    </div>
                    <Divider />
                    <div className="p-2">
                        <MobileArticleAnalyze hasPreview={true} />
                    </div>
                </div>
            }
            {
                listNewsCardViewMode === 'expanded2' &&
                <div className="flex flex-col gap-2">
                    {
                        titlePosition == 'above' &&
                        <p className="text-[16px] font-bold leading-[1]">{title}</p>
                    }
                    <img
                        src={img_src}
                        className="w-full rounded-lg"
                    />
                    <div className="flex items-center">
                        <img
                            src={publisher}
                        />
                        &#8226;
                        <p className="text-[12px] text-gray-500">
                            {time}
                            {
                                sources &&
                                <span>&#x2022;33 sources</span>
                            }
                        </p>
                    </div>
                    {
                        titlePosition == 'below' &&
                        <p className="text-[16px] font-bold leading-[1]">{title}</p>
                    }
                    {
                        biasRate &&
                        <BiasRate left={23} center={37} right={5} />
                    }
                    {
                        showContentInArticleAsses &&
                        <p>{content}</p>
                    }
                    <MobileArticleAnalyze hasPreview={true} />
                </div>
            }
            {
                listNewsCardViewMode === 'expanded3' &&
                <div className="flex flex-col gap-2">
                    {
                        titlePosition == 'above' &&
                        <div className="flex items-center gap-1">
                            <img src="/img/icons/grid.svg" />
                            <p className="text-[16px] font-bold leading-[1]">{title}</p>
                        </div>
                    }
                    <div className="pl-5">
                        <img
                            src={img_src}
                            className="w-full rounded-lg"
                        />
                        <div className="flex items-center">
                            <img
                                src={publisher}
                            />
                            &#8226;
                            <p className="text-[12px] text-gray-500">
                                {time}
                                {
                                    sources &&
                                    <span>&#x2022;33 sources</span>
                                }
                            </p>
                        </div>
                    </div>
                    {
                        titlePosition == 'below' &&
                        <div className="flex items-center gap-1">
                            <img src="/img/icons/grid.svg" />
                            <p className="text-[16px] font-bold leading-[1]">{title}</p>
                        </div>
                    }
                    <div className="pl-5">
                        {
                            biasRate &&
                            <BiasRate left={23} center={37} right={5} />
                        }
                        {
                            showContentInArticleAsses &&
                            <p>{content}</p>
                        }
                        <MobileArticleAnalyze hasPreview={true} />
                    </div>
                </div>
            }
            <Divider sx={{ marginY: '12px' }} />
        </>
    )
}
