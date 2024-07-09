export const MultiLayerImage = (props) => {
    return (
        <div className='relative'>
            <img
                src={props.img_src}
                className='w-full border border-2 border-[#fff] z-[4] rounded-xl relative'
            />
            <div
                className='w-full h-full border border-2 border-[#fff] bg-[#ccc] z-[3] rounded-xl top-0 left-2 absolute'
            />
            <div
                className='w-full h-full border border-2 border-[#fff] bg-[#ccc] z-[2] rounded-xl top-0 left-4 absolute'
            />
            <div
                className='w-full h-full border border-2 border-[#fff] bg-[#ccc] z-[1] rounded-xl top-0 left-6 absolute'
            />
        </div>
    )
}