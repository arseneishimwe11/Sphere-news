
const SubscriberReadingItem = (props) => {
    const { index, supporter_logo, supporter_name, title, time, reporter } = props;

    return (
        <div className="flex flex-row gap-4 items-start">
            <div className="p-2 px-4 subscriber-background text-[18px] text-black-color-invert font-bold rounded-full">
                {index}
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex flex-row items-center">
                    <img 
                        src={supporter_logo} className="dark:invert"
                    />
                    <h6 className="mx-2 text-[14px] text-gray-light-color">{supporter_name}</h6>
                </div>
                <h6 className="my-2 text-[16px] font-bold">{title}</h6>
                <span className="text-gray-light-color">{time} • {reporter}</span>
            </div>
        </div>
    )
}

export const SubscriberReading = (props) => {
    const {subscriber_reading_list} = props;
    return (
        <div className="flex flex-col h-full justify-between gap-4 p-4 bg-yellow-light-color border border-1 border-yellow-light-color rounded-xl text-black-color text-[12px]">
            <div className="flex flex-row items-center">
                <div className="flex flex-row flex-grow items-center">
                    <img 
                        src="/img/icons/s+.png" className='dark:invert'
                    />
                    <h6 className="mx-2">SUBSCRIBERS ARE READING</h6>
                </div>
            </div>
            {
                subscriber_reading_list.map((item, index) => (
                    <>
                        {
                            index > 0 && 
                                <hr className="border-gray-400" />
                        }
                        <SubscriberReadingItem 
                            key={index}
                            index={index + 1}
                            supporter_logo={item.supporter_logo}
                            supporter_name={item.supporter_name}
                            title={item.title}
                            time={item.time}
                            reporter={item.reporter}
                        />
                    </>
                ))
            }
        </div>
    )
}
