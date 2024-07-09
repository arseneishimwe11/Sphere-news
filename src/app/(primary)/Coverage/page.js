'use client';
import { useContext } from 'react';

import './page.css';
import {
	LandingNewsContainer,
	VideoSwiper,
	MoreNews,
	TimelineContainer,
	RelatedTopics,
	MobileCoveragePage
} from '../components/coverageContainer';

import TollIcon from '@mui/icons-material/Toll';

import { MainContext } from '../layout';

export default function Coverage() {

	const { isMobile } = useContext(MainContext);

	return (
		isMobile ?
			<MobileCoveragePage /> :
			<div id='coveragecontainer' className='laptop-extrapage-bodycontainer'>
				<div className='componentcontainer '>
					<div className='newscategorytitle' >
						<TollIcon sx={{ fontSize: '32px' }} />
						<p>News About the Global Warming</p>
					</div>
					<div className='coveragecontent'>
						<div className='flex flex-col w-full lg:w-[70%] gap-4 '>
							<LandingNewsContainer />
							{
								//<VideoSwiper />
							}
							<MoreNews />
						</div>
						<div className='hidden lg:flex flex-col gap-4 w-[30%]'>
							<TimelineContainer />
							<RelatedTopics />
						</div>
					</div>
				</div>
			</div>
	)
}