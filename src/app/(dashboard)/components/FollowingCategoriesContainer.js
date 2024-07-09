import TopicComponent from "./common/TopicComponent";

const CategoriesValue = [
    {
        imageUrl: 'img/icons/explore_topics/finance.png',
        title: 'Finance & Account',
    },
    {
        imageUrl: 'img/icons/explore_topics/lifestyle.png',
        title: 'Lifestyle',
    },
    {
        imageUrl: 'img/icons/explore_topics/entertainment.png',
        title: 'Entertainment',
    },
    {
        imageUrl: 'img/icons/explore_topics/science.png',
        title: 'Science',
    },
    {
        imageUrl: 'img/icons/explore_topics/health.png',
        title: 'Health',
    },
    {
        imageUrl: 'img/icons/explore_topics/finance.png',
        title: 'Finance & Account',
    },
    {
        imageUrl: 'img/icons/explore_topics/lifestyle.png',
        title: 'Lifestyle',
    },
    {
        imageUrl: 'img/icons/explore_topics/entertainment.png',
        title: 'Entertainment',
    },
    {
        imageUrl: 'img/icons/explore_topics/science.png',
        title: 'Science',
    },
    {
        imageUrl: 'img/icons/explore_topics/health.png',
        title: 'Health',
    }
];

const CategoriesContainer = () => {
    const CategoriesElement = CategoriesValue.map((item, id) => (
        <TopicComponent
            key={id}
            imageUrl={item.imageUrl}
            title={item.title}
            index={id}
        />
    ));

    return (
        <>
            {CategoriesElement}
        </>
    );
}

export default CategoriesContainer;