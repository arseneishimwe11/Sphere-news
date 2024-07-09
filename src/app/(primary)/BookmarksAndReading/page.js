'use client'
import { useContext } from 'react';

import BookmarksAndReadingContainer from "../components/BookmarkReadingContainer";
import { MainContext } from '../layout';
import BookmarksAndReadingHeader from "../components/readingHistoryContainer/BookmarksAndReadingHeader";
import ReadingHistoryContainer from "../components/readingHistoryContainer/ReadingHistoryContainer";
import EachReadingHistoryListView from "../components/readingHistoryContainer/EachReadingHistoryListView";

export default function BookmarksAndReading() {
    const { isMobile, bookmarkStatus } = useContext(MainContext);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        !isMobile ?
            <BookmarksAndReadingContainer bookmarkStatus={bookmarkStatus} /> :
            <div className='pt-[60px] h-[100vh] bg-[#F4F9FC] relative'>
                <div className="py-8 px-4 h-[calc(100vh-160px)] flex flex-col">
                    <BookmarksAndReadingHeader />
                    <div className="overflow-auto mt-4">
                    {numbers.map((number) => (
                        <EachReadingHistoryListView key={number} imageUrl={`img/logo/source/${number}.png`} />
                    ))}
                    </div>
                </div>
                <div className="absolute w-full h-1 bottom-[100px]">
                    <div className="mx-4 h-full bg-gradient-to-r from-red-500 to-blue-500"></div>
                </div>
            </div>
    )
}