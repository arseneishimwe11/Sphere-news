import { useState } from "react";

const data = [
    {
        bgcolor: 'bg-[rgb(255,127,50)]',
        title: 'Top',
        color: 'rgb(255,127,50)'
    },
    {
        bgcolor: 'bg-[rgb(247,177,27)]',
        title: 'SmartTake',
        color: 'rgb(247,177,27)'
    },
    {
        bgcolor: 'bg-[rgb(96,132,228)]',
        title: 'Califonia City',
        color: 'rgb(96,132,228)'
    },
    {
        bgcolor: 'bg-[rgb(47,193,186)]',
        title: 'Following',
        color: 'rgb(47,193,186)'
    },
    {
        bgcolor: 'bg-[rgb(108,20,220)]',
        title: 'Entertainment',
        color: 'rgb(108,20,220)'
    }
];

const MobileHeaderItem = (props) => {

    const {
        key,
        index,
        bgcolor,
        title,
        isActive,
        setActive
    } = props;

    return (
        <div
            key={key}
            className={`${bgcolor} ${isActive ? '-mt-1' : ''} px-4 py-2 flex-shrink-0 text-center whitespace-nowrap text-white font-bold min-w-[92px] rounded-t-lg`}
            onClick={() => { setActive(index) }}
        >
            {title}
        </div>
    )
}

const MobileLandingHeader = () => {

    const [active, setActive] = useState(0);

    return (
        <>
            <div 
                className="flex overflow-auto pt-2"
                style={{ borderBottom: `2px solid ${data[active].color}`}}
            >
                {
                    data.map((item, index) => (
                        <MobileHeaderItem
                            key={item.title}
                            index={index}
                            bgcolor={item.bgcolor}
                            title={item.title}
                            isActive={active === index}
                            setActive={setActive}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default MobileLandingHeader;