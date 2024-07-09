import { useState } from 'react';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const RecommendCountComponent = () => {
    const [count, setCount] = useState(8);

    return (
        <div className='flex flex-col p-2 gap-2 items-center w-[40px] bg-[#D9E6ED] rounded-full'>
            <ArrowDropUpIcon
                className='bg-[#fff] rounded-full hover:cursor-pointer'
                onClick={() => setCount(count + 1)}
            />
            <span className='text-xl'>{count}</span>
            <ArrowDropDownIcon
                className='bg-[#fff] rounded-full hover:cursor-pointer'
                onClick={() => setCount(count - 1)}
            />
        </div>
    )
}