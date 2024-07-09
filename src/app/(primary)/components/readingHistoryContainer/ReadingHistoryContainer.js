import EachReadingHistory from "./EachReadingHistory";

const ReadingHistoryValue = [
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
];

const BookmarksValue = [
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Quantum Mechanics',
        department: "Lifestyle",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
    {
        imageUrl: '/img/news/Paper.png',
        title: 'Finance & Accounting',
        department: "science",
        content: "Albert Einstain is the greatest scienctist in the world,forever.",
        analysis: "43% Right Coverage: 11 sources",
    },
];

const ReadingHistoryContainer = ({tabSelect}) => {
    const ReadingHistoryElement = (tabSelect === 0 ? ReadingHistoryValue : BookmarksValue).map((item) => (
        <EachReadingHistory
            imageUrl={item.imageUrl}
            content={item.content}/*"Albert Einstain is the greatest scienctist in the world,forever."*/
        />
    ));

    return (
        <>
            {ReadingHistoryElement}
        </>
    );
}

export default ReadingHistoryContainer;