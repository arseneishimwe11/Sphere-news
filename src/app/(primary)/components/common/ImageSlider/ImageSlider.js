import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageSlider.css";
import { Carousel } from 'react-responsive-carousel';

export const ImageSlider = () => {
    return (
        <div>
            <Carousel
                interval="3000"
                transitionTime="500"
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
            >
                <div>
                    <img 
                        src="/img/news/Image3.png" 
                        loading="lazy"
                    />
                    <div className="flex flex-row mt-4 relative">
                        <div className="absolute w-[16px] h-[16px] border-b-2 border-l-2 border-[#EF8A26]" />
                        <div className="flex flex-col items-start ml-8">
                            <h6 className="text-[#000] text-left">Glacial outburst flooding from Lake Palcacocha in Peru threatens</h6>
                            <h6>&copy; Eric Mack for The New York Times</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        src="/img/news/Image3.png" 
                        loading="lazy"
                    />
                    <div className="flex flex-row mt-4 relative">
                        <div className="absolute w-[16px] h-[16px] border-b-2 border-l-2 border-[#EF8A26]" />
                        <div className="flex flex-col items-start ml-8">
                            <h6 className="text-[#000]">Glacial outburst flooding from Lake Palcacocha in Peru threatens</h6>
                            <h6>&copy; Eric Mack for The New York Times</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        src="/img/news/Image3.png" 
                        loading="lazy"
                    />
                    <div className="flex flex-row mt-4 relative">
                        <div className="absolute w-[16px] h-[16px] border-b-2 border-l-2 border-[#EF8A26]" />
                        <div className="flex flex-col items-start ml-8">
                            <h6 className="text-[#000]">Glacial outburst flooding from Lake Palcacocha in Peru threatens</h6>
                            <h6>&copy; Eric Mack for The New York Times</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <img 
                        src="/img/news/Image3.png" 
                        loading="lazy"
                    />
                    <div className="flex flex-row mt-4 relative">
                        <div className="absolute w-[16px] h-[16px] border-b-2 border-l-2 border-[#EF8A26]" />
                        <div className="flex flex-col items-start ml-8">
                            <h6 className="text-[#000]">Glacial outburst flooding from Lake Palcacocha in Peru threatens</h6>
                            <h6>&copy; Eric Mack for The New York Times</h6>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img 
                        src="/img/news/Image3.png" 
                        loading="lazy"
                    />
                    <div className="flex flex-row mt-4 relative">
                        <div className="absolute w-[16px] h-[16px] border-b-2 border-l-2 border-[#EF8A26]" />
                        <div className="flex flex-col items-start ml-8">
                            <h6 className="text-[#000]">Glacial outburst flooding from Lake Palcacocha in Peru threatens</h6>
                            <h6>&copy; Eric Mack for The New York Times</h6>
                        </div>
                    </div>
                </div>
                
            </Carousel>
        </div>
    );
}