import Carousel from "../components/common/Carousel";

const CarouselPage = () => {
    return (
        <div className='mt-[50px] sm:mt-[120px]  w-[90%] lg:w-[70%] m-auto mb-[50px]'>
            <Carousel propsSliceNum={6} />
        </div>
    );
}

export default CarouselPage;