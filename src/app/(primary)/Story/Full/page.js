'use client';
import { useContext, useEffect } from 'react';
import MobileFullStory from '../../components/storyPageContainer/Mobile/MobileFullStory';
import { MainContext } from '../../layout';

export default function StoryPage() {
    const { isMobile, setCurrentPageStatus } = useContext(MainContext);

    useEffect(() => {
        setCurrentPageStatus('story_page');

        return (() => {
            setCurrentPageStatus('normal');
        })
    }, []);

    return (
        <>
            {
                isMobile && <MobileFullStory />
            }
        </>
    )
}