import CollectionComponent from "./common/CollectionComponent";

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

const CollectionsContainer = () => {
    const CategoriesElement = CategoriesValue.map((item, id) => (
        <CollectionComponent
            key={id}
            imageUrl={item.imageUrl}
            title={item.title}
        />
    ));
    return (
        <div className="justify-center flex flex-wrap gap-4">
            {CategoriesElement}
        </div>
    );
}

export default CollectionsContainer;