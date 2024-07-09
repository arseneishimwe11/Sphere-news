import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

export const MobileImageTabContent = () => {

    const title = "What is this Image tab for?";
    const content = "I think this image tab is for displaying images for each articles. Each article might have several images and all of them can be displayed in this tab.";

    return (
        <div className='text-black'>
            <p className='text-[20px] font-bold'>{title}</p>
            <div className='w-[40px] h-[4px] bg-[rgb(255,72,60)]'></div>
            <img 
                src='/img/News/meeting3.png' 
                className='w-full rounded-md mt-12'    
            />
            <p className='my-4 text-[rgb(195,161,115)] text-[16px]'><ImageOutlinedIcon /> 3 of 8</p>
            <p>{content}</p>
        </div>
    )
}