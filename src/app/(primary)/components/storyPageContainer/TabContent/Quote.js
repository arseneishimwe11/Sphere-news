export const QuoteTabContent = () => {
    return (
        <div className="flex flex-wrap items-center w-full rounded-lg overflow-hidden bg-[#fff]">
            <div className="flex flex-col items-center gap-4 mx-auto p-8 w-full md:w-[40%] h-[100%] text-center">
                <img 
                    src='/img/icons/tabs/quote_blue.svg'
                />
                <p className='text-[12px] md:text-[20px] text-[#000] font-bold'>
                    The likely winners of the generative AI gold rush
                </p>
                <p className='text-[10px] md:text-[12px] text-[#000]'>
                    Jasper: Aufpassen dass in der sidetrack enimal taske y andeicen terrience addadreecen. Viele co en direen yi.
                </p>
                <div className='flex flex-row items-center gap-2'>
                    <img 
                        src='/img/avatar/5.svg'
                        className='w-[40px] h-[40px] rounded-full'
                    />
                    <span className='text-[12px] text-[#000]'>Devid Willams</span>
                </div>
            </div>
            <div className="w-full md:w-[60%] mx-auto">
                <img 
                    src="/img/news/quote.png"
                    className="w-full"
                />
            </div>
        </div>
    )
}