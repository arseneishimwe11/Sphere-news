import TopicComponent from "./common/TopicComponent";

const CountriesValue = [
    {
        imageUrl: 'img/icons/country/AU.png',
        title: 'Australia',
    },
    {
        imageUrl: 'img/icons/country/BR.png',
        title: 'Brazil',
    },
    {
        imageUrl: 'img/icons/country/CA.png',
        title: 'Canada',
    },
    {
        imageUrl: 'img/icons/country/CH.png',
        title: 'China',
    },
    {
        imageUrl: 'img/icons/country/EG.png',
        title: 'Egypt',
    },
    {
        imageUrl: 'img/icons/country/FR.png',
        title: 'France',
    },
    {
        imageUrl: 'img/icons/country/GE.png',
        title: 'Germany',
    },
    {
        imageUrl: 'img/icons/country/IR.png',
        title: 'Iran',
    },
    {
        imageUrl: 'img/icons/country/IT.png',
        title: 'Italy',
    },
    {
        imageUrl: 'img/icons/country/RU.png',
        title: 'Russia',
    }
];

const CountriesCategory = () => {
    const CategoriesElement = CountriesValue.map((item, id) => (
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

export default CountriesCategory;