import { useRouter } from 'next/navigation'

import { Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TopicComponent = (props) => {
    const router = useRouter();

    const { imageUrl, title } = props;

    return (
        <Grid item lg={2.2}>
            <div className="flex flex-col min-w-[214px] items-center w-full rounded-xl border border-[#50BFED] my-2 transition-all duration hover:shadow-lg hover:mt-1 hover:cursor-pointer" onClick={() => router.push('/PerTopic/Topic')}>
                <div className="p-8 my-12 max-h-[130px] bg-[#E2F6FF] rounded-full">
                    <img 
                        src={imageUrl}
                        className=''
                    />
                </div>
                <div className="flex flex-row w-full items-center justify-between p-4 text-black-color bg-gray-extra-light-color border-t border-t-1 border-[#50BFED] rounded-b-xl">
                    <h5 className='mt-1'>{title}</h5>
                    <ArrowForwardIcon className='hover:cursor-pointer'/>
                </div>
            </div>
        </Grid>
    )
}

const Topics = () => {
    return (
        <div className="my-12">
            <div className="flex flex-row gap-8 items-center justify-between my-4">
                <h3 className="text-[16px] md:text-[24px] text-black-color font-bold">Explore Trending Topics</h3>
                <div className='hidden md:flex flex-row flex-grow gap-[40px]'>
                    <div className='w-[20%] h-[5px] bg-[#A2DAF2]'/>
                    <div className='w-[80%] h-[5px] bg-[#7A9DB2]'/>
                </div>
                <h4 className="text-[12px] md:text-[16px] text-[#50BFED]">See More Trending Topics</h4>
            </div>
            <Grid container className="justify-center xl:justify-between" spacing={2}>
                <TopicComponent 
                    imageUrl="img/icons/explore_topics/finance.png"
                    title='Finance'
                />
                <TopicComponent 
                    imageUrl="img/icons/explore_topics/lifestyle.png"
                    title='Lifestyle'
                />
                <TopicComponent 
                    imageUrl="img/icons/explore_topics/entertainment.png"
                    title='Entertainment'
                />
                <TopicComponent 
                    imageUrl="img/icons/explore_topics/science.png"
                    title='Science'
                />
                <TopicComponent 
                    imageUrl="img/icons/explore_topics/health.png"
                    title='Health'
                />
            </Grid>
        </div>
    )
}

export default Topics;