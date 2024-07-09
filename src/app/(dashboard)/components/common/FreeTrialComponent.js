import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react';

export default function FreeTrialComponent(props) {
    const [activeStep, setActiveStep] = useState(0);
    const { open } = props;
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep == 2) {
            setActiveStep(0);
        }
    };

    return (
        <>
            {open ? <div className="flex-col items-center bg-[#0071F0] rounded-md m-1 text-white">
                <div className='flex justify-between p-1 text-[12px]'>
                    <p>Sphere News+</p>
                    <p>{activeStep}/2</p>
                </div>
                <div className='px-1 pb-1'>
                    <p>Start your free trial <button onClick={handleNext} >{activeStep !== 2 ? <ArrowForwardIcon /> : <RefreshIcon />}</button></p>
                </div>
                <div className='px-1 pb-2'>
                    <div className="w-[100%] mx-auto bg-[#FFFFFF] rounded-full h-[4.5px]">
                        {/* <div className={`bg-[#FFFFFF] h-1.5 rounded-full transition-width duration-500 ease-in-out w-[${activeStep*50}%]`}></div> */}
                        <div
                            style={{
                                backgroundColor: '#000000',
                                height: '4.5px',
                                borderRadius: '9999px',
                                transition: 'width 500ms ease-in-out',
                                width: `${50 * activeStep}%`,
                            }}
                        >
                    </div>
                </div>
            </div>
            </div > : null
}
        </>
    );
}