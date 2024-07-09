import { useState, useEffect, useContext } from 'react';

import { MainContext } from '../../layout';

import PCArticleAnalyze from '../common/AssessArticle/pc';

import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import { LightBulbIcon } from '../common/LightBulbIcon';

const ExploreItemComponent = (props) => {
    const { channel, countofsource, title, description, reporter, date, avatar, minToRead, newsImg, nowLoading, lightBulb, engagement } = props;

    const [ishover, setIshover] = useState(false);

    const imgPath = newsImg ? newsImg : '/img/news/Plain.png';

    const divStyle = {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className='flex flex-col w-full md:w-1/3 relative' onMouseEnter={() => setIshover(true)} onMouseLeave={() => setIshover(false)}>
            <div 
                className='w-full aspect-[3/2] rounded-xl'
                style={divStyle}
            >
            </div>
            <div className='flex flex-row justify-between items-center my-2'>
                {nowLoading ? (
                    <Skeleton>
                        <h6 className='text-[12px]'><span className='text-gray-light-color'>XXXXXXXXXXX</span></h6>
                    </Skeleton>
                ) : (
                    <>
                        <h6 className='text-[12px]'><span className='text-gray-light-color'>{channel}</span>&nbsp;&#8226;&nbsp;<span>{countofsource} Sources</span></h6>
                        {
                            lightBulb &&
                        <LightBulbIcon />
                    }
                    </>
                )}

            </div>
            {nowLoading ? (
                <Skeleton>
                    <p className='text-black-color text-[14px] font-bold my-2'>
                        XXXXXXXXXXXXXXXXXXXXXXX
                    </p>
                </Skeleton>
            ) : (
                <p className='text-black-color text-[14px] font-bold my-2'>
                    {title}
                </p>
            )}
            {nowLoading ? (
                <Skeleton>
                    <p className='text-black-color text-[12px] font-bold my-2'>
                        XXXXXXXXXXXXXXXXXXXXXXX
                    </p>
                </Skeleton>
            ) : (
                <p className='text-gray-dark-color  text-[12px] font-bold my-2'>
                    {description}
                </p>
            )}
            <div className='flex flex-row items-center my-2 bottom-0'>
                <Avatar src={nowLoading ? '' : avatar} alt='avatar' >
                    <Skeleton />
                </Avatar>
                <div className='flex flex-col ml-2'>
                    {nowLoading ? (
                        <Skeleton >
                            <h6 className='font-bold text-[12px]'>
                                XXXXXXXXXX
                            </h6>
                            <h6 className='text-[10px] text-gray-light-color'>XXXXX&nbsp;&#8226;&nbsp;XX MIN READ</h6>
                        </Skeleton>
                    ) : (
                        <>
                            <h6 className='font-bold text-[12px]'>
                                {reporter}
                            </h6>
                            <h6 className='text-[10px] text-gray-light-color'>{date}&nbsp;&#8226;&nbsp;{minToRead} MIN READ</h6>
                        </>
                    )}

                </div>
            </div>
            {
                (engagement == 0 || (engagement == 2 && ishover)) &&
                <PCArticleAnalyze />
            }
        </div>
    )
}

const ExploreSideMenuComponent = (props) => {
    const subject_list = ['Business', 'Technology', 'Science', 'World', 'Politics'];

    const { activeSubject, setActiveSubject } = props;

    return (
        <ul className='flex flex-wrap md:flex-col justify-start w-full md:w-[30%] my-2 md:my-0 gap-2 text-[12px] md:text-[16px]'>
            {
                subject_list.map((item, index) => {
                    const mergeClass = item === activeSubject ? 'bg-[#4FB9E9] text-[#FFF]' : 'bg-[#fff] text-gray-600'
                    return (
                        <li className='py-4' key={item}>
                            <span
                                onClick={() => setActiveSubject(item)}
                                className={`${mergeClass} border border-1 border-[#4FB9E9] p-4 rounded-lg hover:cursor-pointer transition duration-300 hover:bg-[#4FB9E9] hover:text-[#fff]`}
                            >
                                {item}
                            </span>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default function ExploreBusinessContainer () {

    const { lightBulb, engagement } = useContext(MainContext);

    const [itemContent1, setItemContent1] = useState({});
    const [itemContent2, setItemContent2] = useState({});
    const [itemContent3, setItemContent3] = useState({});
    const [dataLoading, setDataLoading] = useState(true);
    const [activeSubject, setActiveSubject] = useState('Business');

    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            const response = await fetch('/api/landing/explore', {
                method: 'POST',
                body: JSON.stringify({
                    activeSubject: activeSubject,
                    limit: 100,
                }),
            });
            return response.json();
        }

        fetchData().then((data) => {
            const itemContentDatas = JSON.parse(data);
            setItemContent1(itemContentDatas[0]);
            setItemContent2(itemContentDatas[1]);
            setItemContent3(itemContentDatas[2]);
            setDataLoading(false);
        });

    }, [activeSubject])

    return (
        <div className='flex flex-col p-8 my-12 bg-sky-light-color text-black-color'>
            <div className='flex flex-row w-full justify-between items-center gap-12'>
                <h1 className='text-[18px] md:text-[24px] font-bold'>Related Stories</h1>
                <div className='flex flex-row flex-grow gap-[40px]'>
                    <div className='w-[20%] h-[5px] bg-[#A2DAF2]'/>
                    <div className='w-[80%] h-[5px] bg-[#7A9DB2]'/>
                </div>
                <a href='#' className='text-[12px] md:text-[16px] text-[#68C5ED]'>Discover More</a>
            </div>
            <div className='flex flex-col md:flex-row my-8 justify-between'>
                <ExploreSideMenuComponent 
                    activeSubject={activeSubject}
                    setActiveSubject={setActiveSubject}
                />
                <div className='flex flex-col md:flex-row gap-4 w-full md:w-[70%]'>
                    <ExploreItemComponent
                        channel={itemContent1.channel}
                        countofsource={itemContent1.countofsource}
                        title={itemContent1.shortText}
                        description={itemContent1.description}
                        reporter={itemContent1.authorName}
                        avatar={itemContent1.avatar}
                        date={itemContent1.date}
                        minToRead={itemContent1.minToRead}
                        newsImg={itemContent1.newsImg}
                        nowLoading = {dataLoading}
                        lightBulb={lightBulb}
                        engagement={engagement}
                    />
                    <ExploreItemComponent
                        channel={itemContent2.channel}
                        countofsource={itemContent2.countofsource}
                        title={itemContent2.shortText}
                        description={itemContent2.description}
                        reporter={itemContent2.authorName}
                        avatar={itemContent2.avatar}
                        date={itemContent2.date}
                        minToRead={itemContent2.minToRead}
                        newsImg={itemContent2.newsImg}
                        nowLoading = {dataLoading}
                        lightBulb={lightBulb}
                        engagement={engagement}
                    />
                    <ExploreItemComponent
                        channel={itemContent3.channel}
                        countofsource={itemContent3.countofsource}
                        title={itemContent3.shortText}
                        description={itemContent3.description}
                        reporter={itemContent3.authorName}
                        avatar={itemContent3.avatar}
                        date={itemContent3.date}
                        minToRead={itemContent3.minToRead}
                        newsImg={itemContent3.newsImg}
                        nowLoading = {dataLoading}
                        lightBulb={lightBulb}
                        engagement={engagement}
                    />
                </div>
            </div>
        </div>
    );
}
