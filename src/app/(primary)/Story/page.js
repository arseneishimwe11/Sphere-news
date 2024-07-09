'use client';
import { useContext, useEffect } from 'react';
import ArticlesComponent from '../components/storyPageContainer/ArticlesComponent';
import MainCarouselComponent from '../components/storyPageContainer/MainCarouselComponent';
import ExploreTrendingStory from '../components/storyPageContainer/ExploreTrendingStory';
import Topics from '../components/landingPageContainer/Topics';
import CreateComment from '../components/storyPageContainer/CreateComment';
import CommentBoard from '../components/storyPageContainer/CommentBoard';
import MobileStoryPage from '../components/storyPageContainer/Mobile/MobileStoryPage';
import { MainContext } from '../layout';

export default function StoryPage() {
    const { isMobile, setCurrentPageStatus } = useContext(MainContext);

    useEffect(() => {
        setCurrentPageStatus('story_page');

        return(() => {
            setCurrentPageStatus('normal');
        })
    }, []);

    return (
        <>
            {
                isMobile && <MobileStoryPage />
            }
            {
                !isMobile && (
                    <>
                        <div className='laptop-extrapage-bodycontainer'>
                            <MainCarouselComponent />
                            <ArticlesComponent />
                            <ExploreTrendingStory />
                            <div className='componentcontainer py-40 px-4'>
                                <Topics />
                                <CreateComment />
                                <CommentBoard />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}