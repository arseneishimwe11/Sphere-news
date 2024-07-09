'use client'

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import CarouselUploadImage from "./CarouselUploadImage";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const imageUrlMockUpData = [
    {
        url: 'img/news/carousel/1.png',
        // text: 'watatata'
    },
    {
        url: 'img/news/carousel/4.png',
        // text: 'asdfasdfasdf'
    },
    {
        url: 'img/news/carousel/3.png',
        // text: 'watatata'
    },
    {
        url: 'img/news/carousel/2.png',
        // text: 'watatata'
    },
    {
        url: 'img/news/carousel/3.png',
        // text: 'watatata'
    },
    {
        url: 'img/news/carousel/2.png',
        // text: 'watatata'
    },
    {
        url: 'img/news/carousel/3.png',
        // text: 'watatata'
    },
    {
        url: 'img/news/carousel/3.png',
        // text: 'watatata'
    }
];

const Carousel = ({ propsSliceNum }) => {
    const [urlList, setUrlList] = useState(imageUrlMockUpData);
    const [currentImage, setCurrentImage] = useState(0);
    const [width, setWidth] = useState(0);
    const [sliceNum, setSliceNum] = useState(propsSliceNum ?? 6);

    const [step, setStep] = useState(0);

    const ref = useRef();
    const handleResize = () => {
        setWidth(ref.current.getBoundingClientRect().width);
    };

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setWidth(ref.current.getBoundingClientRect().width);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (selectedImage !== null) {
            setUrlList([...urlList, { url: URL.createObjectURL(selectedImage), text: "hello" }]);
        }
    }, [selectedImage]);

    console.log(selectedImage !== null ? URL.createObjectURL(selectedImage) : "???");
    return (
        <>
            <div
                className="relative overflow-hidden" ref={ref}
            >
                <div
                    className="transition-transform duration-500 w-full"
                    style={{
                        transform: `translateX(${-currentImage * 100}%)`,
                        height: `${width / 1.77}px`
                    }}
                >
                    {urlList.map((item, id) => (
                        <img
                            src={item.url}
                            key={id}
                            className="w-full h-full rounded-2xl absolute"
                            style={{ marginLeft: `${id * 100}%` }}
                        />
                    ))}
                </div>
            </div>
            {/* <div>
                <p>{urlList[currentImage].text}</p>
            </div> */}
            <div
                className="relative overflow-hidden mt-[10px]" ref={ref}
            >
                <div
                    className="transition-transform duration-500 w-full"
                    style={{
                        transform: `translateX(${-step * 100 / sliceNum}%)`,
                        height: `${width / 1.77 / sliceNum}px`
                    }}
                >
                    {urlList.map((item, id) => (
                        <div className="h-full overflow-hidden rounded-xl absolute px-1"
                            style={{
                                marginLeft: `${id * 100 / sliceNum}%`,
                                width: `${1 / sliceNum * 100}%`
                            }}
                            onClick={() => setCurrentImage(id)}
                            key={id}
                        >
                            <img
                                src={item.url}
                                key={id}
                                className="rounded-xl"
                            />
                            {id === (0 + step) ?
                                <IconButton
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-[0.8]"
                                    onClick={() => id !== 0 && setStep(step - 1)}
                                >
                                    <ArrowBackIosIcon className="text-white" />
                                </IconButton> : null}
                            {id === (step + sliceNum - 1) ?
                                <IconButton
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-[0.8]"
                                    onClick={() => id !== urlList.length - 1 && setStep(step + 1)}
                                >
                                    <ArrowForwardIosIcon className="text-white" />
                                </IconButton> : null}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Carousel;