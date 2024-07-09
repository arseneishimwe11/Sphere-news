import { useState, useContext } from 'react';
import { usePathname } from "next/navigation";

import { Button, Modal, Box, Divider, Switch } from '@mui/material';
import Link from 'next/link';

import { DarkModeSelector, TripleToggoleSwitch } from '../common';

import { MainContext } from '../../layout';

const modalContentStyle = {
    width: 480,
    p: 0,
};

const CustomSettingSection = (props) => {
    const {
        emojis, setEmojis,
        engagement, setEngagement,
        sources, setSources,
        biasRate, setBiasRate,
        lightBulb, setLightBulb,
        
        showMoreCoverage, setShowMoreCoverage,
        showCoverageDetail, setShowCoverageDetail,
        showBiasDistribution, setShowBiasDistribution,
        showFactuality, setShowFactuality,
        showCountries, setShowCountries,
        showMediaOwnership, setShowMediaOwnership,
        showFAQ, setShowFAQ,
        widgetStatus, setWidgetStatus
    } = useContext(MainContext);

    const { pathname } = props;

    if (pathname === '/') {
        return (
            <>
                <div className='flex w-full justify-between items-center'>
                    <p>Emojis</p>
                    <Switch size='small' checked={emojis} onChange={(e) => setEmojis(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Engagement</p>
                    <TripleToggoleSwitch label={['Visible', 'Hidden', 'Hover']} active={engagement} setActive={setEngagement} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Sources</p>
                    <Switch size='small' checked={sources} onChange={(e) => setSources(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Bias Ratings</p>
                    <TripleToggoleSwitch label={['Visible', 'Hidden', 'Hover']} active={biasRate} setActive={setBiasRate} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Lightbulb</p>
                    <Switch size='small' checked={lightBulb} onChange={(e) => setLightBulb(e.target.checked)} />
                </div>
            </>
        );
    } 
    if (pathname === '/Story') {
        return (
            <>
                <div className='flex w-full justify-between items-center'>
                    <p>More Coverage</p>
                    <Switch size='small' checked={showMoreCoverage} onChange={(e) => setShowMoreCoverage(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Coverage Details</p>
                    <Switch size='small' checked={showCoverageDetail} onChange={(e) => setShowCoverageDetail(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Bias Distribution</p>
                    <Switch size='small' checked={showBiasDistribution} onChange={(e) => setShowBiasDistribution(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Factuality</p>
                    <Switch size='small' checked={showFactuality} onChange={(e) => setShowFactuality(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Countries</p>
                    <Switch size='small' checked={showCountries} onChange={(e) => setShowCountries(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Media Ownership</p>
                    <Switch size='small' checked={showMediaOwnership} onChange={(e) => setShowMediaOwnership(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>FAQ</p>
                    <Switch size='small' checked={showFAQ} onChange={(e) => setShowFAQ(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Widget Display</p>
                    <TripleToggoleSwitch label={['Expanded', 'Collapsed', 'Hidden']} active={widgetStatus} setActive={setWidgetStatus} />
                </div>
            </>
        );
    }
}

export function QuickAccessSettingModal(props) {
    const pathname = usePathname();

    return (
        <Box sx={modalContentStyle}>
            <div className='flex flex-col gap-4 rounded-lg bg-white overflow-hidden'>
                <div className='flex flex-col px-8 py-4'>
                    <div className='flex flex-col mb-2'>
                        <p className='font-bold text-black my-4'>Appearance</p>
                        <DarkModeSelector />
                    </div>
                    <CustomSettingSection pathname={pathname} />
                    <div className='flex w-full justify-between items-center'>
                        <p>Font Size</p>
                        <select>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <p>Font</p>
                        <select>
                            <option value="proxima_nova">Proxima Nova</option>
                        </select>
                    </div>
                    <Divider sx={{ marginY: '10px' }} />
                    <p className="text-black font-bold">General</p>
                    <div className='flex w-full justify-between items-center'>
                        <p>Display Language</p>
                        <select>
                            <option value="">Browser preferences</option>
                        </select>
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <p>Infinite Scroll</p>
                        <Switch size='small' />
                    </div>
                    <div className='flex w-full justify-between items-center'>
                        <p>Open Links in a New Tab</p>
                        <Switch size='small' />
                    </div>
                </div>
                <div className='flex flex-row items-center px-8 py-4 gap-2 bg-gray-100'>
                    <Link href='/#' className='underline text-blue-500'>All Settings</Link>
                </div>
            </div>
        </Box>
    )
}
