import './VideoSwiper.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const VideoCard = (props) => {
    return (
        <div className="flex flex-col items-start justify-between w-[15%] min-w-[140px] min-h-[180px] p-4 bg-[#003E6E] rounded-xl">
            <PlayCircleIcon sx={{color: '#fff', fontSize: '32px'}} className='hover:cursor-pointer'/>
            <p className='text-[#fff] text-[12px]'>How DeSantis will shape the Future of the GOP</p>
        </div>
    )
}

export const VideoSwiper = () => {
    return (
        <div id='videoswipercontainer'>
            <p className='title' className2="my-4 text-[18px] md:text-[20px] text-[#000] font-bold">
                Videos
            </p>
            <div className="flex flex-row w-full gap-4 pb-4 overflow-auto">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}