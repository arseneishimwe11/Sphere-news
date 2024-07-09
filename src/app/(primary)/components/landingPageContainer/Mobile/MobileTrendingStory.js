const MobileTrandingStoryItem = (props) => {
    const {img_src, brand, time, title, number_like, number_dislike, number_reply} = props;
    return (
        <div className="border border-1 border-gray-300 rounded-xl overflow-hidden min-w-[240px] w-[240px]">
            <img 
                src={img_src}
                className="w-full h-[120px]"
            />
            <div className="flex flex-col p-4 pt-2">
                <div className="flex flex-row items-center">
                    <img 
                    />
                    <span className="text-[12px] text-gray-600">{brand.title} • {time}</span>
                </div>
                <h6 className="text-[14px] ">{title}</h6>
                <div className="flex flex-row items-center justify-between mt-4 text-gray-500 text-[12px]">
                    <div className="flex flex-row gap-2 items-center">
                        <div className="flex flex-row gap-1 items-center">
                            <img 
                                src="/img/icons/thumbs_up.svg"
                                className="w-[12px]"
                            />
                            <span className="mt-[1px]">{number_like}</span>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <img 
                                src="/img/icons/thumbs_down.svg"
                                className="w-[12px]"
                            />
                            <span className="mt-[1px]">{number_dislike}</span>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <img 
                                src="/img/icons/chats.svg"
                                className="w-[12px]"
                            />
                            <span className="mt-[1px]">{number_like}</span>
                        </div>
                    </div>
                    <img 
                        src="/img/icons/dots.svg"
                        className="w-[12px]"
                    />
                </div>
            </div>
        </div>
    )
}

const MobileTrendingStory = () => {
    return (
        <div className="py-8">
            <div className="flex flex-row px-4 items-center gap-2">
                <img 
                    src="/img/icons/gift.png"
                />
                <h6 className="mt-1 text-[16px] font-bold">Trending stories</h6>
            </div>
            <div className="flex flex-row mt-4 px-4 gap-4 overflow-auto">
                <MobileTrandingStoryItem 
                    img_src='/img/news/football.png'
                    brand={{title:'Athlon Sports'}}
                    time="17h ago"
                    title='Layout ansient De Passages des Lorem Ipsum erlitt...'
                    number_like={66}
                    number_dislike={129}
                    number_reply={65}                    
                />
                <MobileTrandingStoryItem 
                    img_src='/img/news/BYD.png'
                    brand={{title:'Athlon Sports'}}
                    time="17h ago"
                    title='Layout ansient De Passages des Lorem Ipsum erlitt...'
                    number_like={66}
                    number_dislike={129}
                    number_reply={65}                    
                />
                <MobileTrandingStoryItem 
                    img_src='/img/news/Huawei.png'
                    brand={{title:'Athlon Sports'}}
                    time="17h ago"
                    title='Layout ansient De Passages des Lorem Ipsum erlitt...'
                    number_like={66}
                    number_dislike={129}
                    number_reply={65}                    
                />
                <MobileTrandingStoryItem 
                    img_src='/img/news/gig.png'
                    brand={{title:'Athlon Sports'}}
                    time="17h ago"
                    title='Layout ansient De Passages des Lorem Ipsum erlitt...'
                    number_like={66}
                    number_dislike={129}
                    number_reply={65}                    
                />
            </div>
        </div>
    )
}

export default MobileTrendingStory;