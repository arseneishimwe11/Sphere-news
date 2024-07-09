import TestCarousel from "../components/common/TestCarousel";

const TestCarouselPage = () => {
    return (
        <div className='mt-[50px] sm:mt-[120px]  w-[90%] lg:w-[70%] m-auto mb-[50px]'>
            <TestCarousel propsSliceNum={6} />
        </div>
    );
}

export default TestCarouselPage;