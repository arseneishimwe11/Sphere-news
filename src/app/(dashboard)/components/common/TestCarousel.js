'use client'
import './TestCarousel.css';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import CarouselUploadImage from "./CarouselUploadImage";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const imageUrlMockUpData = [
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    },
    {
        url: 'img/news/Image3.png',
        textHeader1: 'Glacial outburst flooding from Lake Palcacocha in Peru threatens',
        textHeader2: '&copy; Eric Mack for The New York Times'
    }
];

const TestCarousel = ({ propsSliceNum }) => {
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
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                    className="absolute"
                />
                <label htmlFor="contained-button-file" className="absolute right-[7%] top-[4%]">
                    <CarouselUploadImage />
                </label>
                <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }}
                    className="absolute"
                />
                <label htmlFor="icon-button-file" className="absolute bottom-0 left-0">
                    <Button
                        sx={{ backgroundColor: "#FB8718", minWidth: "50px", height: "50px", borderTopRightRadius: "15px", borderBottomLeftRadius: "15px", zIndex: 300 }}
                        component="span"
                    >
                        <AddRoundedIcon className="m-auto text-[white] text-[30px]" />
                    </Button>
                </label>
                <div className="relative w-full overflow-hidden rounded-[15px]" style={{ height: `${width / 1.77}px` }}>
                    {urlList.map((item, id) => (
                        <div className="transition-transform duration-500 w-[95%] absolute"
                            style={{
                                height: `${width / 1.77}px`,
                                zIndex: `${200 - id}`,
                                transform: `translateX(${(id <= currentImage ? 200 : 1) * (id - currentImage)}%)`
                            }}
                            key={id}
                        >
                            <img
                                src={item.url}
                                key={id}
                                className="w-full h-full rounded-[15px] absolute"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[70px] w-full">
                {urlList.map((item, id) => (
                    <div
                        className="flex flex-row my-4 absolute"
                        key={id}
                        style={{
                            visibility: id === currentImage ? "visible" : "hidden",
                            opacity: id === currentImage ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out"
                        }}
                    >
                        <div className="absolute w-[16px] h-[16px] border-b-2 border-l-2 border-[#EF8A26]" />
                        <div className="flex flex-col items-start ml-8">
                            <h6 >{item.textHeader1}</h6>
                            <h6 className="text-[#888]">{item.textHeader2}</h6>
                        </div>
                    </div>
                ))}
            </div >
            < div
                className="relative overflow-hidden" ref={ref}
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
                            onClick={() => {
                                setCurrentImage(id);
                            }}
                            key={id}
                        >
                            <img
                                src={item.url}
                                key={id}
                                className="rounded-xl"
                            />
                            {id === (0 + step) ?
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%) rotate(180deg)",
                                        backgroundColor: "black",
                                        opacity: 0.8,
                                    }}
                                    onClick={() => id !== 0 && setStep(step - 1)}
                                >
                                    <ArrowForwardIosIcon className="text-white" />
                                </IconButton> : null}
                            {id === (step + sliceNum - 1) ?
                                <IconButton
                                    sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        backgroundColor: "black",
                                        opacity: 0.8,
                                    }}
                                    onClick={() => id !== urlList.length - 1 && setStep(step + 1)}
                                >
                                    <ArrowForwardIosIcon className="text-white" />
                                </IconButton> : null}
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}

export default TestCarousel;