'use client';

import './page.css';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'


export default function StreamPage() {
  const MainStory = (props) => {
    const { topic, title, description, time } = props;

    return (
        <div className="flex flex-col">
            <div className="flex flex-row gap-4 items-start">
                <div className="flex items-center min-w-[32px] w-[32px] h-[32px] mt-[16px] bg-[#FDBA6B] rounded-full">
                    <span className='text-[24px] mx-auto -mt-[32px]'>1</span>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-[12px]">{topic}</h6>
                    <h3 className='text-[18px] md:text-[22px]'>{title}</h3>
                    <p className='text-[14px] text-gray-600'>{description}</p>
                    <div className="flex flex-row items-center my-4 justify-between">
                        <div className='flex flex-row items-center gap-2'>
                            <TrendingUpIcon className='text-[20px] p-1 bg-[#003E6E] text-[#fff] rounded-full'/>
                            <span className='text-[12px] text-gray-400'>{time}</span>
                        </div>
                        <img 
                            src='/img/icons/flag.svg'
                            className='w-[12px]'
                        />
                    </div>
                </div>
            </div>
            <img 
                src='/img/news/discussion.png'
                className='w-full rounded-xl'
            />
        </div>
    )
  }
  const SecondStory = (props) => {
    const { index, topic, title, img_src, time } = props;
    return (
        <div className="flex flex-row gap-4 items-start">
            <div className="flex items-center min-w-[32px] w-[32px] h-[32px] mt-[16px] bg-[#FDBA6B] rounded-full">
                <span className='text-[24px] mx-auto -mt-[32px]'>{index}</span>
            </div>
            <div className="flex flex-col">
                <h6 className="text-[12px]">{topic}</h6>
                <h3 className='text-[18px]'>{title}</h3>
                <img 
                    src={img_src}
                    className='w-full rounded-xl'
                />
                <div className="flex flex-row items-start my-4 justify-between">
                    <span className='text-[12px] text-gray-400'>{time}</span>
                    <img 
                        src='/img/icons/flag.svg'
                        className='w-[12px]'
                    />
                </div>
            </div>
        </div>
    )
  }

  const ThirdStory = (props) => {
      const { index, topic, description, title, img_src, time } = props;
      return (
          <div className="flex flex-row gap-4 items-start">
              <div className="flex items-center min-w-[32px] w-[32px] h-[32px] mt-[16px] bg-[#FDBA6B] rounded-full">
                  <span className='text-[24px] mx-auto -mt-[32px]'>{index}</span>
              </div>
              <div className="flex flex-col">
                  <h6 className="text-[12px]">{topic}</h6>
                  <h3 className='text-[18px]'>{title}</h3>
                  <div className='flex flex-row items-start'>
                      <p className='text-[12px] text-gray-500'>{description}</p>
                      <img 
                          src={img_src}
                          className='w-[60px] h-[60px] rounded-xl'
                      />
                  </div>
                  <div className="flex flex-row items-center my-4 justify-between">
                      <div className='flex flex-row items-center gap-2'>
                          <TrendingUpIcon className='text-[20px] p-1 bg-[#003E6E] text-[#fff] rounded-full'/>
                          <span className='text-[12px] text-gray-400'>{time}</span>
                      </div>
                      <img 
                          src='/img/icons/flag.svg'
                          className='w-[12px]'
                      />
                  </div>
              </div>
          </div>
      )
  }

  return(
    <>
        <div className='laptop-extrapage-bodycontainer'>
            <div className='componentcontainer w-full py-[72px] px-4'>
                    <div className="relative">
                        <div className="w-[20px] h-[20px] bg-[#FDBA6B] z-[3] rounded-full -top-[10px] left-[50%] transform translate-x-[-50%] absolute"></div>
                        <div className="w-[50px] h-[50px] bg-[#FFE9D1] z-[1] rounded-full -top-[25px] left-[50%] transform translate-x-[-50%] absolute"></div>
                        <div className="cardcomponent take5component">
                            <h1>My Daily 5</h1>
                            <h3>Five Daily stories, curated for you</h3>
                            <Grid container spacing={2} className='my-4'>
                                <Grid item xs={12} lg={6}>
                                    <MainStory 
                                        topic='Malaysia'
                                        title='Malaysians to pay more for staples as weak Five Daily stories, curated for you'
                                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.'
                                        time='29 Oct 2023 - 11:30 AM'
                                    />
                                </Grid>
                                <Grid container item xs={12} lg={6} spacing={2}>
                                    <Grid item xs={12} md={6} direction="column" className='flex justify-between'>
                                        <SecondStory 
                                            index={2}
                                            topic='Malaysia'
                                            title='Malaysians to pay more for staples as weak Five Daily stories'
                                            img_src='/img/news/discussion2.png'
                                            time='29 Oct 2023 - 11:30 AM'
                                        />
                                        <Divider />
                                        <ThirdStory 
                                            index={4}
                                            topic='Hong Kong economy'
                                            title='Malaysians to pay more for staples as weak Five Daily stories'
                                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.'
                                            img_src='/img/news/sports.png'
                                            time='29 Oct 2023 - 11:30 AM'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} direction="column" className='flex justify-between'>
                                        <ThirdStory 
                                            index={3}
                                            topic='Hong Kong economy'
                                            title='Malaysians to pay more for staples as weak Five Daily stories'
                                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.'
                                            img_src='/img/news/sports.png'
                                            time='29 Oct 2023 - 11:30 AM'
                                        />
                                        <Divider />
                                        <SecondStory 
                                            index={5}
                                            topic='Malaysia'
                                            title='Malaysians to pay more for staples as weak Five Daily stories'
                                            img_src='/img/news/discussion2.png'
                                            time='29 Oct 2023 - 11:30 AM'
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}