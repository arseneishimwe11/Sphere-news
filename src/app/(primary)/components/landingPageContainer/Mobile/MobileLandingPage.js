import MobileMainNews from './MobileMainNews.js';
import MobileLandingHeader from './MobileHeader.js';
import MobileLandingChannel from './MobileLandingChannel.js';

const MobileLandingPage = (props) => {

    const {currentPageStatus} = props;

    return (
        <div className={`${currentPageStatus!='landing_page' ? 'mt-[60px]' : ''} bg-[#F4F9FC]`}>
            <MobileLandingHeader />
            <MobileLandingChannel />
            <MobileMainNews />
        </div>
    );
}

export default MobileLandingPage;