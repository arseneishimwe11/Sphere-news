import './Country.css';
import React, { useState, useEffect } from 'react';
import WorldMap from "react-svg-worldmap";
import { CountryContext } from 'react-svg-worldmap';

import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';

import { 
    IconButton,
    Collapse
} from '@mui/material';
import {
    ArrowDropDown as ArrowDropDownIcon,
    ArrowDropUp as ArrowDropUpIcon,
} from '@mui/icons-material';

const data = [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
];

const getStyle = ({
    countryValue,
    countryCode,
    minValue,
    maxValue,
    color,
  }) => ({
    fill: countryCode === "US" ? "blue" : color,
    fillOpacity: countryValue
      ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
      : 0,
    stroke: "green",
    strokeWidth: 1,
    strokeOpacity: 0.2,
    cursor: "pointer",
  });

export const Country = (props) => {
    const {widgetStatus} = props;
    
    const [showDetail, setShowDetail] = useState(widgetStatus === 0);

    useEffect(() => {
        setShowDetail(widgetStatus == 0);
    }, [widgetStatus]);

    return (
        <div id="countrysection" className="cardcomponent">
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    <PieChartOutlineIcon />
                    <h6>Countries you've read news about</h6>
                </div>
                <IconButton aria-label="last updated time" size="small" onClick={()=>{setShowDetail(!showDetail)}}>
                    { showDetail ? <ArrowDropUpIcon fontSize="inherit" /> : <ArrowDropDownIcon fontSize="inherit" />}
                </IconButton>
            </div>
            <p>
                You've read <span className='text-[#FEBD7D]'>44</span>/179 countries
            </p>
            <Collapse in={showDetail}>
                <WorldMap 
                    color="red"
                    title=""
                    value-suffix="people"
                    size="md"
                    data={data}
                    styleFunction={getStyle}
                />
            </Collapse>
            <div>USA Today broke the news 15 hours ago on Wednesday, December 20, 2023</div>
        </div>
    )
}