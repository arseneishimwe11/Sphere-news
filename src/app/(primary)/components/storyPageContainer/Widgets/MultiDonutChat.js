
import { useState } from 'react';
import DonutChart from 'react-donut-chart';

import './MultiDonutChat.css';

export const MultiDonutChart = (props) => {

    const { colors, ownershipData } = props

    const [activeCat, setActiveCat] = useState(0);

    const buildDisplayData = () => {
        let sum = 0;
        let viewData = [];
        let palette = [];
        ownershipData.forEach((item) => {
            sum += item.value;
        });
        ownershipData.forEach((item, index) => {
            item.Chunks = Math.round(item.value / sum * 16);
            [...Array(item.Chunks)].forEach((t) => {
                viewData.push({
                    label: item.label,
                    value: 1,
                    real_val: item.value
                });
                palette.push(colors[index]);
            })
        });
        return {
            viewData,
            palette,
            sum
        }
    }

    const handleMouseHover = (item) => {
        const idx = ownershipData.findIndex((tmp) => tmp.label === item.label);
        setActiveCat(idx);
    }

    return (
        <div id="multidonutchat">
            <div id="statusarea" >
                <p className='text-2xl font-bold'>{Math.round(ownershipData[activeCat].value * 100 / buildDisplayData().sum)}%</p>
                <p>{ownershipData[activeCat].innerText}</p>
            </div>
            <DonutChart
                legend={false}
                width={168}
                height={168}
                data={buildDisplayData().viewData}
                colors={buildDisplayData().palette}
                strokeColor='#fff'
                innerRadius={0.7}
                outerRadius={1}
                toggledOffset={0}
                selectedOffset={0}
                className='donut-chart first-chart'
                clickToggle={false}
                onMouseEnter={(item) => handleMouseHover(item)}
            />
            <DonutChart
                legend={false}
                width={228}
                height={228}
                data={buildDisplayData().viewData}
                colors={buildDisplayData().palette}
                strokeColor='#fff'
                innerRadius={0.75}
                outerRadius={1}
                toggledOffset={0}
                selectedOffset={0}
                formatValues={(val, tot) => ''}
                className='donut-chart second-chart'
                clickToggle={false}
                onMouseEnter={(item) => handleMouseHover(item)}
            />
            <DonutChart
                legend={false}
                width={288}
                height={288}
                data={buildDisplayData().viewData}
                colors={buildDisplayData().palette}
                strokeColor='#fff'
                innerRadius={0.8}
                outerRadius={1}
                toggledOffset={0}
                selectedOffset={0}
                className='donut-chart third-chart'
                clickToggle={false}
                onMouseEnter={(item) => handleMouseHover(item)}
            />
        </div>
    )
}
