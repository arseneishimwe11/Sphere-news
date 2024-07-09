'use client';
import React, { useContext, useEffect } from 'react';
import LandingPosts from './components/landingPageContainer/LandingPosts';
import ExploreBusiness from './components/landingPageContainer/ExploreBusiness';
import TopStories from './components/landingPageContainer/TopStories';
import VideoComponent from './components/landingPageContainer/VideoComponent';
import AllChannels from './components/landingPageContainer/AllChannels';
import Topics from './components/landingPageContainer/Topics';

import MobileLandingPage from './components/landingPageContainer/Mobile/MobileLandingPage';

import { MainContext } from './layout';

export default function Home() {
  const {isMobile, currentPageStatus, setCurrentPageStatus} = useContext(MainContext);

  useEffect(() => {
    setCurrentPageStatus('landing_page');

    return(() => {
        setCurrentPageStatus('normal');
    })
  }, [])
  
  return(
    <>
            {
                isMobile && <MobileLandingPage currentPageStatus={currentPageStatus} />
            }
            {
                !isMobile && 
                    <>
                        <div className='laptop-landingpage-bodycontainer'>
                            <div className='componentcontainer pt-[28px] px-4 '>
                                <LandingPosts />
                                <ExploreBusiness />
                                <TopStories />
                            </div>
                        </div>
                        
                        <div className='laptop-landingpage-videopagecontainer mt-10'>
                            <div className='componentcontainer mt-8 px-4 py-16'>
                                <VideoComponent />
                            </div>
                        </div>

                        <div className='laptop-landingpage-bodycontainer'>
                            <div className='componentcontainer pt-[28px] px-4'>
                                <AllChannels />
                                <Topics />
                            </div>
                        </div>
                    </>
            }
        </>
  )
}