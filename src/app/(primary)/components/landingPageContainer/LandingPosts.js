import React, { useState, useEffect, useContext } from 'react';
import './LandingPosts.css';
import { Grid, Skeleton } from '@mui/material';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import {
    Notes as NotesIcon
} from '@mui/icons-material';

import { LightBulbIcon } from '../common/LightBulbIcon';
import { ShareIcon } from '../common/ShareIcon';

import Link from 'next/link';

import { MainContext } from '../../layout';

import PCArticleAnalyze from '../common/AssessArticle/pc';
import { BiasRate } from '../common';
import TrendingVideos from '../../../../../pages/api/landing/TrendingVideos.jsx';

const MainPost = (props) => {

    const {
        emojis,
        lightBulb
    } = props

    const [dataLoading, setDataLoading] = useState(true);
    const [content, setContent] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            const response = await fetch('/api/landing/mainpost', {
                method: 'POST',
                body: JSON.stringify({
                    limit: 100,
                }),
            });
            return response.json();
        }

        fetchData().then((data) => {
            const contentResult = JSON.parse(data);
            setContent(contentResult);
            setDataLoading(false);
        });
    }, [])

    return (
        <div id='landingpostcontainer'>
            <div className='w-[60%] bg-[url("/img/news/swiper.png")] bg-cover bg-center bg-no-repeat rounded-tl-xl rounded-bl-xl' />
            <div className='w-[40%] p-2 sm:p-4 md:p-8 text-black-color bg-gray-light-color rounded-tr-xl rounded-br-xl'>
                <div className='flex flex-col'>
                    {dataLoading ? (
                        <>
                            <Skeleton>
                                <h2 className='my-2 text-[12px] md:text-[16px] md:text-[24px] font-bold'>
                                    XXXXXXXXXXXXXXXX
                                </h2>
                            </Skeleton>
                            <Skeleton>
                                <p className='hidden md:block my-2'>
                                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                                </p>
                            </Skeleton>
                        </>
                    ) : (
                        <>
                            <p className='my-2 text-[12px] md:text-[16px] md:text-[24px] font-bold'>
                                {
                                    emojis &&
                                    content.emoji_char
                                }
                                {content.title}
                            </p>
                            <p className='hidden md:block my-2'>
                                {content.content}
                            </p>
                            <Link href='/Story' className='flex flex-row items-center text-[12px] my-2 hover:cursor-pointer'><span>Read more</span><KeyboardDoubleArrowRightIcon /></Link>
                            <div className='flex flex-row justify-between items-center mt-10'>
                                <ShareIcon />
                                {
                                    lightBulb &&
                                    <LightBulbIcon />
                                }
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

const SubArticle = (props) => {

    const { subject, countofsource, desc, nowLoading, emojis, lightBulb, engagement, sources, biasRate } = props;

    const [ishover, setIshover] = useState(false);

    return (
        <div className='flex flex-col w-full sm:w-[45%] md:w-[22%] min-w-[160px]' onMouseEnter={() => setIshover(true)} onMouseLeave={() => setIshover(false)}>
            <div
                className='w-full aspect-[2/1] rounded-xl bg-[url("/img/news/sky_small3.png")] bg-cover bg-center bg-no-repeat'
            />
            <div className='flex flex-row justify-between items-center my-2'>
                <h6 className='text-[12px]'>
                    {nowLoading ? (
                        <Skeleton>
                            <span className='text-[#68C5ED]'>XXXXX</span>&nbsp;&#8226;&nbsp;<span>XXXXXXX</span>
                        </Skeleton>
                    ) : (
                        <>
                            <span className='text-[#68C5ED]'>{subject}</span>
                            {
                                sources &&
                                <>&nbsp;&#8226;&nbsp;<span>{countofsource} Sources</span></>
                            }
                        </>
                    )}
                </h6>
                {
                    lightBulb &&
                    <LightBulbIcon />
                }
            </div>
            {nowLoading ? (
                <Skeleton>
                    <p className='text-black-color text-[12px] font-bold'>
                        XXXXXXXXXXXX
                    </p>
                </Skeleton>
            ) : (
                <>
                    <p className='text-black-color text-[12px] font-bold'>
                        {
                            emojis &&
                            "🌎"
                        }
                        {desc}
                    </p>
                </>
            )}
            {
                (engagement == 0 || (engagement == 2 && ishover)) &&
                <div className='my-2'>
                    <PCArticleAnalyze />
                </div>
            }
            {
                (biasRate == 0 || (biasRate == 2 && ishover)) &&
                <BiasRate left={54} center={32} right={66} />
            }
        </div>
    )
}

const FeaturedPosts = (props) => {

    const { emojis, lightBulb } = props;

    const [dataLoading, setDataLoading] = useState(true);
    const [featuredPost, setFeaturedPost] = useState({});
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            const response = await fetch('/api/landing/featuredposts', {
                method: 'POST',
                body: JSON.stringify({
                    limit: 100,
                }),
            });
            return response.json();
        }

        fetchData().then((data) => {
            const contentResult = JSON.parse(data);
            setFeaturedPost(contentResult.featuredPost);
            setRelatedPosts(contentResult.relatedPosts);
            setDataLoading(false);
        });
    }, [])

    return (
        <div className='flex flex-col'>
            <h3 className='text-2xl text-black-color font-bold'>
                Featured Posts
            </h3>
            <hr className='border-b-[1px] border-[#FF9D28] my-2' />
            <div className='flex flex-col my-2 text-black-color'>
                <div className='w-full aspect-[2/1] rounded-xl bg-[url("/img/news/BYD.png")] bg-cover bg-center bg-no-repeat relative' />
                {dataLoading ? (
                    <Skeleton>
                        <h4 className='my-2 text-[18px] font-bold'>
                            XXXXXXXXXX
                        </h4>
                    </Skeleton>
                ) : (
                    <p className='my-2 text-[18px] font-bold'>
                        {
                            emojis &&
                            "🌎"
                        }
                        {featuredPost.title}
                    </p>
                )}

                {dataLoading ? (
                    <Skeleton>
                        <p className='my-2 text-[14px]'>
                            XXXXXXXXXXXXXXXXXXXXXXX
                        </p>
                    </Skeleton>
                ) : (
                    <p className='my-2 text-[14px]'>
                        {featuredPost.content}
                    </p>
                )}

                <div className='flex flex-row justify-between my-2'>
                    {dataLoading ? (
                        <Skeleton>
                            <h6 className='text-[12px] text-gray-500'><span>XXXXXXX</span>&nbsp;&#8226;&nbsp;<span>YYYYYYYYYYYY</span></h6>
                        </Skeleton>
                    ) : (
                        <>
                            <h6 className='text-[12px] text-gray-500'><span>By {featuredPost.poster}</span>&nbsp;&#8226;&nbsp;<span>{featuredPost.hourToRead} hours ago</span></h6>
                            {
                                lightBulb &&
                                <LightBulbIcon />
                            }
                        </>
                    )}
                </div>
                <div className='flex flex-col my-2'>
                    <div className='flex flex-row justify-between items-center border-b-2 border-gray-300'>
                        <h4 className="text-[13px] font-bold text-gray-800 mb-2 px-2 py-1 bg-blue-100 ">TRENDING VIDEOS</h4>
                    </div>
                    <div className='flex flex-col mt-4 gap-2'>
                        {dataLoading ? (
                            <Skeleton>
                                <TrendingVideos />
                            </Skeleton>
                        ) : (
                            <TrendingVideos />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const LandingPosts = () => {

    const {
        emojis,
        lightBulb,
        engagement,
        sources,
        biasRate
    } = useContext(MainContext)

    const [content, setContent] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setDataLoading(true);
            const response = await fetch('/api/landing/mainpostsubarticles', {
                method: 'POST',
                body: JSON.stringify({
                    limit: 100,
                }),
            });
            return response.json();
        }

        fetchData().then((data) => {
            const contentResult = JSON.parse(data);
            setContent(contentResult);
            console.log('landingposts:', contentResult);
            setDataLoading(false);
        });
    }, [])

    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12} lg={8.4}>
                    <div className='flex flex-col'>
                        <MainPost emojis={emojis} lightBulb={lightBulb} />
                        <div className='flex flex-wrap justify-center md:justify-between my-6 gap-4'>
                            <SubArticle
                                subject='POLITICS'
                                countofsource='15'
                                desc='In the example above, the dot will be inserted into the element.'
                                nowLoading={dataLoading}
                                emojis={emojis}
                                lightBulb={lightBulb}
                                engagement={engagement}
                                sources={sources}
                                biasRate={biasRate}
                            />
                            <SubArticle
                                subject='WORLD'
                                countofsource='12'
                                desc='In the example above, the dot will be inserted into the element.'
                                nowLoading={dataLoading}
                                emojis={emojis}
                                lightBulb={lightBulb}
                                engagement={engagement}
                                sources={sources}
                                biasRate={biasRate}
                            />
                            <SubArticle
                                subject='WORLD'
                                countofsource='25'
                                desc='In the example above, the dot will be inserted into the element.'
                                nowLoading={dataLoading}
                                emojis={emojis}
                                lightBulb={lightBulb}
                                engagement={engagement}
                                sources={sources}
                                biasRate={biasRate}
                            />
                            <SubArticle
                                subject='WORLD'
                                countofsource='13'
                                desc='In the example above, the dot will be inserted into the element.'
                                nowLoading={dataLoading}
                                emojis={emojis}
                                lightBulb={lightBulb}
                                engagement={engagement}
                                sources={sources}
                                biasRate={biasRate}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item lg={3.6} className='hidden xl:block'>
                    <div className='pl-8'>
                        <FeaturedPosts
                            emojis={emojis}
                            lightBulb={lightBulb}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default LandingPosts;
