import EachFollowingAuthor from "./followingAuthorsContainer/EachFollowingAuthor";

const FollowingAuthorsContainer = () => {
    const AuthorData = [
        {
            headerColorList: [
                '#7ACAED',
                '#BAE8FF',
                '#D4F1FF'
            ],
            authorImage: 'img/avatar/Image_336.png',
            authorName: 'Eleanor Pena',
            authorDuty: 'Production Manager',
            authorMajor: 'Computer science is a rapidly evolving field that encompasses the study of algorithms, data structures, and the design and development of software and hardware systems.',
            authorArticlesNumber: 34,
            authorFollowersNumber: 980,
            authorRating: 8,
            followingNumber: 6,
            imageUrlList: [
                'img/avatar/Image_332.png',
                'img/avatar/Image_333.png',
                'img/avatar/Image_336.png',
                'img/avatar/Image_333.png'
            ],
        },
        {
            headerColorList: [
                '#F6A556',
                '#FBBB7D',
                '#FFCD9E'
            ],
            authorImage: 'img/avatar/Image_332.png',
            authorName: 'Jerome Bell',
            authorDuty: 'Production Manager',
            authorMajor: 'One of the fundamental concepts in computer science is the efficient management and processing of data. This includes the development of databases, data mining techniques, and algorithms for analyzing and interpreting large datasets.',
            authorArticlesNumber: 34,
            authorFollowersNumber: 980,
            authorRating: 12,
            followingNumber: 4,
            imageUrlList: [
                'img/avatar/Image_333.png',
                'img/avatar/Image_332.png',
                'img/avatar/Image_336.png',
                'img/avatar/Image_332.png'
            ],
        },
        {
            headerColorList: [
                '#2F98D2',
                '#49AAE1',
                '#6FC1F0'
            ],
            authorImage: 'img/avatar/Image_336.png',
            authorName: 'Jenny Wilcom',
            authorDuty: 'Production Manager',
            authorMajor: 'The impact of computer science extends beyond technical domains and has profound implications for society as a whole.',
            authorArticlesNumber: 34,
            authorFollowersNumber: 980,
            authorRating: 22,
            followingNumber: 0,
            imageUrlList: [],
        },
        {
            headerColorList: [
                '#006BBD',
                '#087CD7',
                '#1C8CE2'
            ],
            authorImage: 'img/avatar/Image_333.png',
            authorName: 'Jacob Jones',
            authorDuty: 'Production Manager',
            authorMajor: 'Computer science also plays a pivotal role in the field of cybersecurity. As technology becomes more integrated into our daily lives, the need to protect sensitive information and infrastructure from cyber threats has never been greater.',
            authorArticlesNumber: 34,
            authorFollowersNumber: 980,
            authorRating: 40,
            followingNumber: 2,
            imageUrlList: [
                'img/avatar/Image_332.png',
                'img/avatar/Image_336.png',
            ],
        },
    ];

    const AuthorsContainer = () => {
        const AuthorElements = AuthorData.map((item, index) => (
            <EachFollowingAuthor
                key={index}
                headerColorList={item.headerColorList}
                authorImage={item.authorImage}
                authorName={item.authorName}
                authorDuty={item.authorDuty}
                authorMajor={item.authorMajor}
                authorArticlesNumber={item.authorArticlesNumber}
                authorFollowersNumber={item.authorFollowersNumber}
                authorRating={item.authorRating}
                followingNumber={item.followingNumber}
                imageUrlList={item.imageUrlList}
                id = {index}
            />
        ));
        return (
            <>
                {AuthorElements}
            </>
        );
    };

    return (
        <>
            <AuthorsContainer />
        </>
    );
}

export default FollowingAuthorsContainer;