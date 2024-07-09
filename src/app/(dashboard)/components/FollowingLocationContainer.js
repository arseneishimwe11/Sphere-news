import LocationComponent from "./followingLocationContainer/LocationComponent";

const LocationsValue = [
    {
        imageUrl: 'img/city/chicago.jpg',
        title: 'Chicago'
    },
    {
        imageUrl: 'img/city/california.jpg',
        title: 'California City'
    },
    {
        imageUrl: 'img/city/newyork.jpg',
        title: 'New York'
    },
    {
        imageUrl: 'img/city/chicago.jpg',
        title: 'Chicago'
    },
    {
        imageUrl: 'img/city/california.jpg',
        title: 'California City'
    },
    {
        imageUrl: 'img/city/newyork.jpg',
        title: 'New York'
    },
];
const LocationsContainer = () => {
    const LocationsElement = LocationsValue.map((item, id) => (
        <LocationComponent
            key={id}
            imageUrl={item.imageUrl}
            index={id}
            title={item.title}
        />
    ));

    return (
        <>
            {LocationsElement}
        </>
    );
}

export default LocationsContainer;