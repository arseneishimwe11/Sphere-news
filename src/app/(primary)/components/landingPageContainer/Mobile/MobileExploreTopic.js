const MobileExploreTopicItem = (props) => {
    const {img_src, title} = props;

    return (
        <div className="flex flex-col py-4 min-w-[70px] items-center gap-2">
            <div className="p-[2px] bg-gradient-to-br from-[#f5a83e] to-[#3babc9] rounded-full">
                <img 
                    src={img_src}
                    className="w-[60px] h-[60px] rounded-full border border-[3px] border-[#fff]"
                />
            </div>
            <h6 className="text-[12px] text-gray-600">{title}</h6>
        </div>
    )
}

const MobileExploreTopic = () => {
    return (
        <div className="flex flex-row px-4 bg-[#fff] gap-4 rounded-b-2xl shadow-md overflow-auto">
            <MobileExploreTopicItem 
                img_src='/img/icons/explore_topics/finance.svg'
                title='Finance'
            />
            <MobileExploreTopicItem 
                img_src='/img/icons/explore_topics/lifestyle.svg'
                title='Life Style'
            />
            <MobileExploreTopicItem 
                img_src='/img/icons/explore_topics/health.svg'
                title='Health'
            />
            <MobileExploreTopicItem 
                img_src='/img/icons/explore_topics/science.svg'
                title='Science'
            />
            <MobileExploreTopicItem 
                img_src='/img/icons/explore_topics/entertainment.svg'
                title='Entertainment'
            />
        </div>
    )
}

export default MobileExploreTopic;