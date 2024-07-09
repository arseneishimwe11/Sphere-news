import { Switch } from "@mui/material";

const SetDarkMode = () => {
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>Dark Mode</p>
                <p className='text-[14px] text-[gray]'>Automatically enable dark mode at sunset based on your timezone.</p>
            </div>
            <div className='w-full sm:w-[70%] flex flex-row border border-solid p-8 rounded-2xl items-center gap-4 sm:gap-8'>
                <div>
                    <p className='text-[18px] font-[600] mb-3'>Auto enable dark mode</p>
                    <p className='text-[15px] text-[gray]'>&nbsp;We will use the timezone based in your Portfolio to determine sunset in your location</p>
                </div>
                <div>
                    <Switch />
                </div>
            </div>
        </div>
    );
}

export default SetDarkMode;