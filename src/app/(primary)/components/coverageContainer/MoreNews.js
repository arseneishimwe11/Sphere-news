import './MoreNews.css';
import { CoverageNewsItem } from "./LandingNewsContainer"

export const MoreNews = () => {
    return (
        <div id='morenews'>
            <p className='title'>MoreNews</p>
            <div className="flex flex-col w-full gap-2">
                <div className='cardcomponent p-4'>
                    <CoverageNewsItem 
                        news_img_src="img/news/sky_small4.png"
                        source_img_src="img/icons/source/losangeles.png"
                        time='1h'
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit consectetur adipiscing elit. Ut et massa mi.consectetur elit'
                        text='Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  sapien fringilla, mattis ligula consectetur, ultrices mauris.'
                    />
                </div>
                <div className='cardcomponent p-4'>
                    <CoverageNewsItem 
                        news_img_src="img/news/BYD.png"
                        source_img_src="img/icons/source/losangeles.png"
                        time='1h'
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit consectetur adipiscing elit. Ut et massa mi.consectetur elit'
                        text='Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  sapien fringilla, mattis ligula consectetur, ultrices mauris.'
                    />
                </div>
                <div className='cardcomponent p-4'>
                    <CoverageNewsItem 
                        news_img_src="img/news/sky_small2.png"
                        source_img_src="img/icons/source/losangeles.png"
                        time='1h'
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit consectetur adipiscing elit. Ut et massa mi.consectetur elit'
                        text='Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  sapien fringilla, mattis ligula consectetur, ultrices mauris.'
                    />
                </div>
                <div className='cardcomponent p-4'>
                    <CoverageNewsItem 
                        news_img_src="img/news/Huawei.png"
                        source_img_src="img/icons/source/losangeles.png"
                        time='1h'
                        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.consectetur elit consectetur adipiscing elit. Ut et massa mi.consectetur elit'
                        text='Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  sapien fringilla, mattis ligula consectetur, ultrices mauris.'
                    />
                </div>
            </div>
        </div>
    )
}