export const TripleToggoleSwitch = (props) => {
    const { label } = props;

    const {active, setActive} = props;

    return (
        <div className='flex p-[1px] gap-2 items-center bg-[#464259] text-white rounded-full'>
            {[0, 1, 2].map((item) => (
                <p 
                    className={`${item === active ? 'text-[#464259] bg-white rounded-full' : ''} px-1 text-sm hover:cursor-pointer`}
                    onClick={() => setActive(item)}
                >
                    {label[item]}
                </p>
            ))}
        </div>
    )
}