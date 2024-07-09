import EachNewsLetter from "./newsLetterContainer/EachNewsLetter";

const NewsLetterContainer = ({ newsContents }) => {
    const newsList = newsContents.map((newsContent) => (
        <EachNewsLetter header={newsContent.header} content={newsContent.content} url={newsContent.url} />
    ));
    return newsList;
}

export default NewsLetterContainer;