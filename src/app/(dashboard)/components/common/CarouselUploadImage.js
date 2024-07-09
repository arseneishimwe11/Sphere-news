import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import { IconButton } from '@mui/material';
const CarouselUploadImage = () => {
    return (
        <IconButton className='z-[300]' component="span">
            <div className='flex flex-col justify-center rounded-full w-[50px] h-[50px] bg-[#56b2db]'>
                <CameraAltIcon className='mx-auto text-[white] text-[30px]' />
                <ArrowCircleUpOutlinedIcon className='text-[#56b2db] text-[20px] absolute bg-[white] rounded-full border border-none right-1 bottom-1' />
            </div>
        </IconButton>
    );
}

export default CarouselUploadImage;