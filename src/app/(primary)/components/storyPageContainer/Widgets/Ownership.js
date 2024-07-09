import React, { useState, useEffect } from 'react';
import { MultiDonutChart } from './MultiDonutChat';

import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import AddIcon from '@mui/icons-material/Add';

import { 
    IconButton,
    Collapse
} from '@mui/material';

import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from '@mui/icons-material';

import './Ownership.css';

const ownershipData = [{
    label: 'Media Conglomerat',
    innerText: 'Media Con.',
    value: 241,
}, {
    label: 'Individual',
    innerText: 'Individual',
    value: 536,
}, {
    label: 'Private Equity',
    innerText: 'Private Equ.',
    value: 617,
}, {
    label: 'Media Conglomerate',
    innerText: 'Media Con.',
    value: 532,
}, {
    label: 'Corporation',
    innerText: 'Corporation',
    value: 699,
}, {
    label: 'Government',
    innerText: 'Government',
    value: 337,
}, {
    label: 'Other',
    innerText: 'Other',
    value: 522,
}];

const colors = ['rgb(141,221,255)', 'rgb(0,51,81)', 'rgb(249,136,27)', 'rgb(108,203,127)', 'rgb(34,104,159)', 'rgb(255,189,125)', 'rgb(79,186,233)'];

const calcSum = () => {
    let sum = 0;
    ownershipData.forEach((item) => {
        sum += item.value;
    });
    return sum;
}

const CategoryDescription = () => {
    return (
        <div id="categorydescription" className=''>
            <p className='font-bold my-2'>Category Description</p>
            {ownershipData.map((item, index) => (
                <div className='descriptionitem'>
                    <div className='w-[8px] h-[8px] rounded-full' style={{backgroundColor: colors[index]}}></div>
                    <p className='flex-grow'>{item.label}</p>
                    <IconButton>
                        <AddIcon sx={{fontSize: 'medium', color: 'rgb(159,205,227)'}}/>
                    </IconButton>
                </div>
            ))}
        </div>
    )
}

export const Ownership = (props) => {
    const {widgetStatus} = props;

    const [showDetail, setShowDetail] = useState(widgetStatus === 0);

    useEffect(() => {
        setShowDetail(widgetStatus == 0);
    }, [widgetStatus]);

    return (
        <div id="ownership" className='cardcomponent'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <PieChartOutlineIcon />
                    <h6 className='text-[24px]'>Media Ownership</h6>
                </div>
                <IconButton aria-label="last updated time" size="small" onClick={()=>{setShowDetail(!showDetail)}}>
                    { showDetail ? <ArrowDropUpIcon fontSize="inherit" /> : <ArrowDropDownIcon fontSize="inherit" />}
                </IconButton>
            </div>
            <div className='flex flex-row w-full h-[16px] mt-2'>
                {ownershipData.map((item, index) => (
                    <div style={{width:`${item.value * 100 / calcSum()}%`, backgroundColor: colors[index]}}></div>
                ))}
            </div>
            <p>7% of sources are <b>Independent News</b></p>
            <Collapse in={showDetail}>
                <div className='my-4'>
                    <MultiDonutChart colors={colors} ownershipData={ownershipData}/>
                </div>
                {
                //<CategoryDescription />
                }
            </Collapse>
        </div>
    )
}