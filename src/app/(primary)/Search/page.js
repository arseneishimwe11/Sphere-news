'use client';
import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { XMarkIcon } from '@heroicons/react/24/solid';

import { Checkbox, Pagination, IconButton } from '@mui/material';
import {
    Description as DescriptionIcon,
    Image as ImageIcon,
    Videocam as VideocamIcon,
} from '@mui/icons-material';

import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

import EachFollowingAuthor from '../../(dashboard)/components/followingAuthorsContainer/EachFollowingAuthor';
import { RelatedFeeds, TrendingTopics } from '../components/common/SideComponent';

import './page.css';

const BasicAccodion = (props) => {
    return (
        <Accordion defaultExpanded={true} sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            '& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
                minHeight: '18px'
            },
            '& .MuiButtonBase-root.MuiAccordionSummary-root': {
                padding: '0'
            },
            '& .MuiAccordionSummary-content.Mui-expanded': {
                margin: '6px 0',
            },
            '& .MuiAccordionDetails-root': {
                padding: '0'
            }
        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-[#7DB2C0]' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography sx={{ color: '#7DB2C0' }}>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {props.children}
            </AccordionDetails>
        </Accordion>
    );
}

const FilterByComponent = () => {
    return (
        <div id='searchpanel'>
            <h2>Search Result</h2>
            <h4>Filter By</h4>

            <div className='group'>
                <BasicAccodion title="Category">
                    <ul>
                        <li>All Categories</li>
                        <li>U.S.</li>
                        <li>World</li>
                        <li>Local</li>
                        <li>Business</li>
                        <li>Technology</li>
                        <li>Entertainment</li>
                        <li>Sports</li>
                        <li>Science</li>
                        <li>Health</li>
                    </ul>
                </BasicAccodion>
            </div>
            <div className='group'>
                <BasicAccodion title='Sources'>
                    <ul className='flex flex-col gap-2'>
                        <li className='boxitem'>
                            <span>Yahoo News</span>
                            <XMarkIcon className='w-[20px] bg-[#7DB2C0] text-[#fff] rounded-full' />
                        </li>
                    </ul>
                </BasicAccodion>
            </div>
            <div className='group'>
                <BasicAccodion title='Story Quality'>
                    <ul>
                        <li>
                            <Checkbox />
                            <div>
                                <img src='/img/icons/premium.svg' />
                                <span>Premium</span>
                            </div>
                        </li>
                        <li>
                            <Checkbox />
                            <div>
                                <img src='/img/icons/top_rate.svg' />
                                <span>Top Rated</span>
                            </div>
                        </li>
                        <li>
                            <Checkbox />
                            <div>
                                <img src='/img/icons/trending.svg' />
                                <span>Trending</span>
                            </div>
                        </li>
                    </ul>
                </BasicAccodion>
            </div>
            <div className='group'>
                <BasicAccodion title='Story Quality'>
                    <ul>
                        <li>
                            <Checkbox />
                            <div>
                                <DescriptionIcon sx={{ color: '#003F68' }} />
                                <span>Articles</span>
                            </div>
                        </li>
                        <li>
                            <Checkbox />
                            <div>
                                <VideocamIcon sx={{ color: '#003F68' }} />
                                <span>Videos</span>
                            </div>
                        </li>
                        <li>
                            <Checkbox />
                            <div>
                                <ImageIcon sx={{ color: '#003F68' }} />
                                <span>Images</span>
                            </div>
                        </li>
                    </ul>
                </BasicAccodion>
            </div>
            <div className='group'>
                <BasicAccodion title='Location'>
                    <input placeholder='Search Locations' />
                </BasicAccodion>
            </div>
            <div className='group'>
                <BasicAccodion title='Other Languages'>
                    <ul>
                        <li className='boxitem'>
                            <span>Vietnamese</span>
                            <XMarkIcon className='w-[20px] bg-[#7DB2C0] text-[#fff] rounded-full' />
                        </li>
                    </ul>
                </BasicAccodion>
            </div>
            <div className='group'>
                <BasicAccodion title='Location'>
                    <ul>
                        <li className='boxitem flex flex-row items-center'>
                            <div className='flex flex-wrap flex-grow gap-4'>
                                <div className='flex flex-row items-center text-[12px] gap-1'>
                                    <img
                                        src='img/icons/emotion/angry.png'
                                    />
                                    <span>8</span>
                                </div>
                                <div className='flex flex-row items-center text-[12px] gap-1'>
                                    <img
                                        src='img/icons/emotion/lol.png'
                                    />
                                    <span>13</span>
                                </div>
                                <div className='flex flex-row items-center text-[12px] gap-1'>
                                    <img
                                        src='img/icons/emotion/love.png'
                                    />
                                    <span>11</span>
                                </div>
                                <div className='flex flex-row items-center text-[12px] gap-1'>
                                    <img
                                        src='img/icons/emotion/sad.png'
                                    />
                                    <span>2</span>
                                </div>
                                <div className='flex flex-row items-center text-[12px] gap-1'>
                                    <img
                                        src='img/icons/emotion/surprise.png'
                                    />
                                    <span>5</span>
                                </div>
                            </div>
                            <XMarkIcon className='w-[20px] bg-[#7DB2C0] text-[#fff] rounded-full' />
                        </li>
                    </ul>
                </BasicAccodion>
            </div>
        </div>
    )
}

const SearchResultSummary = (props) => {
    const { number, q, filter_list } = props;

    return (
        <div className='searchfilters' >
            <h3><span className='text-[#8DC3CC]'>{number}</span> Search Results For: {q}</h3>
            <div className='flex flex-wrap items-center gap-2 my-2'>
                <ul className='flex flex-wrap gap-2 items-center'>
                    {filter_list.map((item, index) => (
                        <li key={item} >{item}<XMarkIcon /></li>
                    ))}
                </ul>
                <a className='clearalllink' >Clear All</a>
            </div>
        </div>
    )
}

const ViewMode = (props) => {
    const { viewMode, setViewMode } = props;
    return (
        <div id='viewmode' >
            <img
                src='/img/icons/view_list.svg'
                onClick={() => setViewMode('list')}
                className={` ${viewMode === 'list' && 'bg-[#E2F6FF] dark:bg-[#00101D]'}`}
            />
            <img
                src='/img/icons/view_grid.svg'
                onClick={() => setViewMode('grid')}
                className={` ${viewMode === 'grid' && 'bg-[#E2F6FF] dark:bg-[#00101D]'}`}
            />
        </div>
    )
}

const SearchResultItem = (props) => {
    const { viewMode } = props;
    const { img_src, title, topic, description, reporter, time } = props;
    return (
        <>
            {
                viewMode === 'list' &&
                <div className='w-full my-2'>
                    <div className='flex flex-row items-start w-full gap-4 overflow-hidden'>
                        <img
                            src={img_src}
                            className='min-w-[35%] w-[35%] rounded-xl'
                        />
                        <div className='flex flex-col justify-between w-full'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row items-center text-[#000] justify-between'>
                                    <div className='flex flex-row gap-2 rounded-full p-1 px-2 bg-[#E9EBEF] text-[12px] items-center'>
                                        <img
                                            className='w-[16px] h-[16px]'
                                            src='/img/logo/feeds/1.png'
                                        />
                                        <p>Fortune&nbsp;•&nbsp;{time}&nbsp;|&nbsp;{reporter}</p>
                                    </div>
                                    <Toolkit />
                                </div>
                                <h3 className='text-[12px] sm:text-[24px]'>{title}</h3>
                                <p className='text-[12px] sm:text-[18px] text-gray-600'>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                viewMode === 'grid' &&
                <div className='w-full sm:w-[30%] md:w-full lg:w-[32%] min-w-[200px] rounded-xl border border-1 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:cursor-pointer'>
                    <img
                        src={img_src}
                        className='w-full'
                    />
                    <div className='flex flex-col gap-2 px-2 pb-2'>
                        <div className='flex flex-col justify-between w-full mt-2'>
                            <div className='flex flex-row items-center text-[#000] justify-between'>
                                <div className='flex flex-row gap-2 rounded-full p-1 px-2 bg-[#E9EBEF] text-[12px] items-center'>
                                    <img
                                        className='w-[16px] h-[16px]'
                                        src='/img/logo/feeds/1.png'
                                    />
                                    <p>Fortune</p>
                                </div>
                                <Toolkit />
                            </div>
                        </div>
                        <p className='text-[14px] text-black dark:text-white font-bold'>{title}</p>
                        <p className='text-[14px] text-black dark:text-white'>{description}</p>
                        <p className='text-[10px]'>Published in {time} By {reporter}</p>
                    </div>
                </div>
            }
        </>
    )
}

const ArticleItem = (props) => {
    const { img_src, topic, title, reporter, time } = props;
    return (
        <div className='flex flex-col gap-2 w-full sm:w-[30%] md:w-full lg:w-[30%] min-w-[200px]'>
            <img
                src={img_src}
                className='w-full rounded-xl'
            />
            <h6 className='mt-2 text-[14px] text-[#8DC3CC]'>{topic}</h6>
            <h6 className='text-[14px] text-[#000] font-bold'>{title}</h6>
            <div className='flex flex-row'>
                <span className='text-[10px] text-gray-400'>43% Right Coverage: 11 sources</span>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <div className='p-[2px] border-0 bg-gradient-to-r from-[#f5a83e] to-[#3babc9] rounded-full'>
                    <img
                        src={reporter.avartar}
                        className='w-[40px] border border-[2px] border-[#fff] rounded-full'
                    />
                </div>
                <div className='text-[12px]'>
                    <h6 className='text-gray-700'>{reporter.name}</h6>
                    <h6 className='text-gray-400'>{time}</h6>
                </div>
            </div>
        </div>
    )
}

const Toolkit = () => {
    return (
        <div className='flex flex-row gap-1 items-center'>
            <IconButton sx={{ border: '1px solid #ccc' }} size='small'>
                <ThumbUpAltOutlinedIcon sx={{ fontSize: 12 }} />
            </IconButton>
            <IconButton sx={{ border: '1px solid #ccc' }} size='small'>
                <ThumbDownAltOutlinedIcon sx={{ fontSize: 12 }} />
            </IconButton>
            <IconButton sx={{ border: '1px solid #ccc' }} size='small'>
                <BookmarkAddOutlinedIcon sx={{ fontSize: 12 }} />
            </IconButton>
            <IconButton sx={{ border: '1px solid #ccc' }} size='small'>
                <ShareOutlinedIcon sx={{ fontSize: 12 }} />
            </IconButton>
            <IconButton sx={{ border: '1px solid #ccc' }} size='small'>
                <OpenInNewOutlinedIcon sx={{ fontSize: 12 }} />
            </IconButton>
        </div>
    )
}

const ArticlesComponent = () => {
    return (
        <div className='mt-8'>
            <div className='flex flex-wrap p-4 gap-4 justify-between'>
                <ArticleItem
                    img_src='/img/news/discussion.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter={{ avartar: '/img/avatar/Image_332.png', name: 'NICOLNE NGUTYEN' }}
                />
                <ArticleItem
                    img_src='/img/news/discussion.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter={{ avartar: '/img/avatar/Image_332.png', name: 'NICOLNE NGUTYEN' }}
                />
                <ArticleItem
                    img_src='/img/news/discussion.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter={{ avartar: '/img/avatar/Image_332.png', name: 'NICOLNE NGUTYEN' }}
                />
            </div>
        </div>
    )
}

const ProfilesComponent = () => {
    return (
        <div className='mt-8'>
            <div className='flex flex-wrap py-4 gap-4 justify-center'>
                <EachFollowingAuthor
                    headerColorList={[
                        '#7ACAED',
                        '#BAE8FF',
                        '#D4F1FF'
                    ]}
                    authorImage='/img/avatar/5.svg'
                    authorName='Jerome Bell'
                    authorDuty='Production manager'
                    authorMajor='Food & Beverages'
                    authorArticlesNumber={34}
                    authorFollowersNumber={980}
                    authorRating={8.9}
                    followingNumber={2}
                    imageUrlList={[
                        'img/avatar/Image_332.png',
                        'img/avatar/Image_333.png',
                        'img/avatar/Image_336.png'
                    ]}
                />
                <EachFollowingAuthor
                    headerColorList={[
                        '#2F98D2',
                        '#49AAE1',
                        '#6FC1F0'
                    ]}
                    authorImage='/img/avatar/8.png'
                    authorName='Jerome Bell'
                    authorDuty='Production manager'
                    authorMajor='Food & Beverages'
                    authorArticlesNumber={34}
                    authorFollowersNumber={980}
                    authorRating={8.9}
                    followingNumber={0}
                    imageUrlList={[
                        'img/avatar/Image_336.png'
                    ]}
                />
                <EachFollowingAuthor
                    headerColorList={[
                        '#006BBD',
                        '#087CD7',
                        '#1C8CE2'
                    ]}
                    authorImage='/img/avatar/Image_332.png'
                    authorName='Jerome Bell'
                    authorDuty='Production manager'
                    authorMajor='Food & Beverages'
                    authorArticlesNumber={34}
                    authorFollowersNumber={980}
                    authorRating={8.9}
                    followingNumber={2}
                    imageUrlList={[
                        'img/avatar/Image_333.png',
                        'img/avatar/Image_332.png'
                    ]}
                />
            </div>
        </div>
    );
}

const SearchResultPanel = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('list');

    const filter_list = ['Last 7 Days', 'Sienna'];

    return (
        <div id="searchresultpanel" className='cardcomponent'>
            {/* <div className='searchcondition' >
                <div className='searchinputarea flex-grow'>
                    <img src='/img/icons/colorful_search.png' className="searchicon" />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e)=>setSearchQuery(e.target.value)} 
                        placeholder='Search for Topics, locations & sources...' 
                        className='flex-grow w-auto px-2 outline-none bg-gray-100 text-gray-500 text-[16px] border-[#206E9E]' 
                    />
                    <div className='buttonarea'>
                        <div className='actionbuttonarea'>
                            <IconButton onClick={(e) => {}} >
                                <CameraAltOutlinedIcon className='closeiconbutton' sx={{width: '18px', height: '18px'}}/>
                            </IconButton>
                        </div>
                        <IconButton onClick={(e) => {}} >
                            <ArrowForwardIcon className='searchiconbutton' sx={{width: '22px', height: '22px'}}/>
                        </IconButton>
                        
                        
                    </div>
                    
                </div>
                <div className='searchactionarea' >
                    <AntSwitch />
                    <span className='text-gray-600'>US Only</span>
                </div>
            </div> */}
            <div className='searchresultsummaryarea'>
                <SearchResultSummary
                    q='Sienna'
                    number='29'
                    filter_list={filter_list}
                />
                <ViewMode viewMode={viewMode} setViewMode={setViewMode} />
            </div>
            <div className='searchresultlist'>
                <SearchResultItem
                    viewMode={viewMode}
                    img_src='/img/news/BYD.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur dolor sit amet, nsectetur dolor sit amet, cconsectetur dolor sit amet, consectetur'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mass r sit amet, consectetur adipiscing elit. Ut r sit amet, consectetur adipiscing elit. Ut r sit amet, consectetur adipiscing elit. Ut a mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter='NICOLNE'
                />
                <SearchResultItem
                    viewMode={viewMode}
                    img_src='/img/news/discussion.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur dolor sit amet, nsectetur dolor sit amet, cconsectetur dolor sit amet, consectetur'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mass r sit amet, consectetur adipiscing elit. Ut r sit amet, consectetur adipiscing elit. Ut r sit amet, consectetur adipiscing elit. Ut a mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter='NICOLNE'
                />
                <SearchResultItem
                    viewMode={viewMode}
                    img_src='/img/news/meeting3.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur dolor sit amet, nsectetur dolor sit amet, cconsectetur dolor sit amet, consectetur'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et mass r sit amet, consectetur adipiscing elit. Ut r sit amet, consectetur adipiscing elit. Ut r sit amet, consectetur adipiscing elit. Ut a mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter='NICOLNE'
                />
                <SearchResultItem
                    viewMode={viewMode}
                    img_src='/img/news/Paper.png'
                    topic='SCIENCE'
                    title='Lorem ipsum dolor sit amet, consectetur'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.'
                    time='APRIL 4, 2023 • 7 MIN READ'
                    reporter='NICOLNE'
                />
            </div>
            {/* <ArticlesComponent /> */}
            {/* <ProfilesComponent /> */}
            <Pagination count={29} variant="outlined" color="primary" id="pagination" />
        </div>
    )
}

const SearchPageContainer = (props) => {
    return (
        <div className='laptop-extrapage-bodycontainer'>
            <div className='componentcontainer flex flex-row px-4 py-8 items-start justify-between gap-4'>
                <SearchResultPanel />
                <div className='hidden lg:flex flex-col gap-4 lg:w-[30%]'>
                    <RelatedFeeds />
                    <TrendingTopics />
                </div>
            </div>
        </div>
    )
}

export default SearchPageContainer;