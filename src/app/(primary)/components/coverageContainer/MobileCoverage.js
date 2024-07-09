import TollIcon from '@mui/icons-material/Toll';

export const CoverageNewsItem = (props) => {
    const { news_img_src, source_img_src, time, title, text } = props;

    return (
        <div className="flex items-start py-2 border-b border-b-1 border-gray-300">
            <div className="w-[75%]">
                <p className="text-[16px] font-bold">{title}</p>
                {
                    text &&
                    <p className="text-[14px] text-gray-600 dark:text-gray-400">{text}</p>
                }
                <div className="flex flex-row items-center mt-2">
                    <img src={source_img_src} className='dark:invert' />
                    <span className="text-[12px]">• {time}</span>
                </div>
            </div>
            <img
                src={news_img_src}
                className="w-[25%] rounded-md"
            />
        </div>
    )
}

export const MobileCoveragePage = () => {
    return (
        <div className="px-4 py-[76px]">
            <div className='flex gap-2 items-center text-lg py-2'>
                <TollIcon sx={{ fontSize: '32px' }} />
                <p className='font-bold'>News About the Global Warming</p>
            </div>
            <div>
                <CoverageNewsItem
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
                <CoverageNewsItem
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
                <CoverageNewsItem
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
            </div>
        </div>
    )
}