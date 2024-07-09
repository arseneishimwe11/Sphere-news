import { useState } from "react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const DarkModeSelector = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className="flex flex-row gap-2">
            <div 
                className="w-[50%] py-8 px-4 border border-1 border-gray-300 rounded-md relative"
                onClick={() => setIsDarkMode(false)}
            >
                <div className="w-full h-[6px] bg-[#392FA6] rounded-full"></div>
                <div className="my-1 w-[80%] h-[6px] bg-[#222123] rounded-full"></div>
                <div className="w-full h-[6px] bg-[#4D4D4D] rounded-full"></div>
                {
                    !isDarkMode &&
                        <CheckCircleIcon
                            sx={{
                                position: 'absolute !important',
                                bottom: '0px',
                                right: '0px',
                                color: '#5379DB'
                            }}
                        />
                }
            </div>
            <div 
                className="w-[50%] py-8 px-4 border border-1 border-black bg-black rounded-md relative" 
                onClick={() => setIsDarkMode(true)}
            >
                <div className="w-full h-[6px] bg-[#B2B2B2] rounded-full"></div>
                <div className="my-1 w-[80%] h-[6px] bg-[#EEEEEE] rounded-full"></div>
                <div className="w-full h-[6px] bg-[#A8A8A8] rounded-full"></div>
                {
                    isDarkMode &&
                        <CheckCircleIcon
                            sx={{
                                position: 'absolute',
                                bottom: '0px',
                                right: '0px',
                                color: '#5379DB'
                            }}
                        />
                }
            </div>
        </div>
    )
}
