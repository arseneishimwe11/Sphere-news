import './LandingNewsContainer.css';
import { Divider, Grid } from "@mui/material";

export const CoverageNewsItem = (props) => {
    const {news_img_src, source_img_src, time, title, text} = props;

    return (
        <div className="coveragenewsitem">
            <div className="w-[75%]">
                <div className="flex flex-row items-center">
                    <img src={source_img_src} className='dark:invert'  />
                    <span className="text-[12px]">• {time}</span>
                </div>
                <p className="text-[16px] font-bold">{title}</p>
                {
                    text &&
                        <p className="my-2 text-[14px] text-gray-600 dark:text-gray-400">{text}</p>
                }
            </div>
            <img 
                src={news_img_src}
                className="w-[25%] rounded-md"
            />
        </div>
    )
}

export const LandingNewsContainer = () => {
    return (
        <Grid container id="landingnewscontainer" className='cardcomponent'>
            <Grid item xs={12} md={6} sx={{paddingX: '16px', marginY: '16px'}}>
                <CoverageNewsItem 
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
                <Divider sx={{marginY: '12px'}}/>
                <CoverageNewsItem 
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
                <Divider sx={{marginY: '12px'}}/>
                <CoverageNewsItem 
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
            </Grid>
            <Grid item xs={12} md={6} sx={{paddingX: '16px', marginY: '16px'}} className="md:border-l md:border-l border-gray-300">
                <CoverageNewsItem 
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
                <Divider sx={{marginY: '12px'}}/>
                <CoverageNewsItem 
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
                <Divider sx={{marginY: '12px'}}/>
                <CoverageNewsItem 
                    news_img_src="img/news/computer.png"
                    source_img_src="/img/icons/source/losangeles.png"
                    time='1h'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit... '
                />
            </Grid>
        </Grid>
    )
}