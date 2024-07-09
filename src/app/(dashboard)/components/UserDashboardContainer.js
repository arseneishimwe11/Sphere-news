import ReadingHabit from "./userDashboardContainer/readingHabit/ReadingHabit";
import Analysis from "./userDashboardContainer/analysis/Analysis";
import TopPeople from "./userDashboardContainer/topPeople/TopPeople";
import TopTopics from "./userDashboardContainer/topTopics/TopTopics";
import TopCountries from "./userDashboardContainer/topCountries/TopCountries";
import ArticleBias from "./userDashboardContainer/articleBias/ArticleBias";

const UserDashboardContainer = () => {
    return (
        <>
            <ReadingHabit />
            <Analysis />
            <TopPeople />
            <TopTopics />
            <TopCountries />
            <ArticleBias />
        </>
    );
}

export default UserDashboardContainer;