
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';

export const MobileVideoTabContent = () => {

    const VideoItem = (props) => {

        const { img_src } = props;

        return (
            <div className='min-w-[102px] relative'>
                <img 
                    src={img_src}
                    className='w-full rounded-md'
                />
                <SlideshowOutlinedIcon
                    sx={{
                        color: '#fff',
                        backgroundColor: 'rgba(137,192,219,0.5)',
                        borderRadius: '8px',
                        fontSize: '24px'
                    }}
                    className="top-[50%] left-[50%] hover:cursor-pointer transform translate-x-[-50%] translate-y-[-50%] absolute"
                />
            </div>
        )
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center gap-2 my-2">
                <div className="flex flex-row gap-2 items-center">
                    <img
                        src="/img/avatar/5.svg"
                        className="w-[36px] h-[36px] rounded-full"
                    />
                    <div className='text-[12px]'>
                        <p>Daniel Navarro</p>
                        <p className="text-gray-light-color">Google for Startups</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2 hover:cursor-pointer">
                    <img
                        src="/img/icons/link.svg"
                        className="w-[16px]"
                    />
                    <span className="text-gray-light-color text-[12px]">Share</span>
                </div>
            </div>
            <div className="w-full relative">
                <img
                    src="/img/news/sky_small1.png"
                    className="w-full rounded-md"
                />
                <SlideshowOutlinedIcon
                    sx={{
                        color: '#fff',
                        backgroundColor: 'rgba(137,192,219,0.5)',
                        borderRadius: '8px',
                        fontSize: '42px'
                    }}
                    className="top-[50%] left-[50%] hover:cursor-pointer transform translate-x-[-50%] translate-y-[-50%] absolute"
                />
                <div className="w-[90%] flex flex-row p-2 px-4 bg-[rgba(0,0,0,0.5)] text-[12px] text-white left-[50%] transform translate-x-[-50%] bottom-2 rounded-full absolute">
                    <span>The New York Times</span>
                    &nbsp;•&nbsp;
                    <span>2 Days Ago</span>
                    &nbsp;•&nbsp;
                    <span>1.2M Views</span>
                </div>
            </div>
            <div className='w-full my-2 flex flex-row gap-2 overflow-auto'>
                <VideoItem img_src='/img/news/sky_small2.png'/>
                <VideoItem img_src='/img/news/sky_small2.png'/>
                <VideoItem img_src='/img/news/sky_small2.png'/>
                <VideoItem img_src='/img/news/sky_small2.png'/>
            </div>
        </>
    )
}