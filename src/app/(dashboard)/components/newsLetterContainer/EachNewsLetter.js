import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Switch } from "@mui/material";

const EachNewsLetter = ({header, content, url}) => {
    return (
        <div className='flex flex-col sm:flex-row border border-solid m-3 sm:m-6 rounded-xl'>
            <div className='m-5 min-w-[120px]'>
                <img src={url} className='rounded-lg w-auto sm:w-full' />
            </div>
            <div className='m-5 my-auto flex-grow'>
                <p className='text-[18px] font-[600]'>{header}</p>
                <p className='pt-4 text-[13px] text-[gray]'>{content}</p>
                <div className='flex flex-row pt-3 text-[16px] font-[600] cursor-pointer gap-2'>
                    <p>See the latest</p>
                    <OpenInNewIcon />
                </div>
            </div>
            <div className='flex flex-col m-3'>
                <Switch />
                <div className='h-full'></div>
            </div>
        </div>
    );
};

export default EachNewsLetter;