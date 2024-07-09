import Button from '@mui/material/Button';

const Recommendations = () => {

    const RecommendationObject = (props) => (
        <div className="flex flex-rows justify-between items-center">
            <div className='flex flex-rows items-center'>
                <img src={props.avatarImgSrc}
                    alt="Profile Picture"
                    className="rounded-full w-[48px] h-[48px] p-1 border border-[#65B3DE]"
                />
                <span className="mx-2 px-1">
                    <h3 className="font-bold text-[12px] text-[#000]">{props.userName}</h3>
                    <p className="text-[10px]">{props.userPosition}</p>
                </span>
            </div>
            <a href={props.profileUrl} rel="noopener noreferrer">
                <Button
                    sx={{
                        fontSize: '12px',
                        border: '1px solid #DDD',
                        borderRadius: '8px',
                        color: '#7CCDF0',
                        textTransform: 'none',
                        padding: '4px 12px',
                        backgroundColor: '#FFF !important'
                    }}
                >
                    View Profile
                </Button>
            </a>
        </div>
    );

    return(
        <div className="" >
            <h2 className="my-2 mb-6 text-[#000] font-bold">Recommendations</h2>
            <div className='flex flex-col gap-6'>
                {[...Array(4)].map((_, index) => (
                    <RecommendationObject avatarImgSrc="/img/avatar/Image_332.png" userName="Countney Henry" userPosition="News Reporter" profileUrl="#" />
                ))}
            </div>
        </div>
    )
}

const AdditionDetails = () => {
    const CategoryButton = (props) => (
        <Button 
            sx={{
                fontSize: '12px',
                border: '1px solid #000',
                color: '#000',
                borderRadius: '20px',
                padding: '4px 8px',
                textTransform: 'none'
            }}
        >
            {props.children}
        </Button>
    )

    const LocationInfoObj = (props) => (
        <>
            <img 
                src={props.locationFlagImg}
                className='w-[24px] h-[24px] rounded-full'
            />
            <span className='text-black text-[14px] font-bold mx-2'>{props.locationName}</span>
        </>
    )

    
    return(
        <div className="text-black">
            <h2 className=" font-bold my-2">Additional Details</h2>
            <h4 className='text-[14px] font-bold py-1'>Categories</h4>
            <div className="flex gap-2">
                <CategoryButton>UX Design</CategoryButton>
                <CategoryButton>Product Design</CategoryButton>
                <CategoryButton>Webflow</CategoryButton>
            </div>
            <h4 className='text-[14px] font-bold mt-4 py-1'>Location</h4>
            <div className="flex flex-row items-center">
                <LocationInfoObj locationName="Melbourne, Australia" locationFlagImg = '/img/flag/medium/england.png' />
            </div>
            <h4 className='text-[14px] font-bold mt-4 py-1'>Website</h4>
            <a href='#' className="flex hover:cursor-pointer">
                <span className=''>minawinkel.com</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                    <path id="Vector" d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="black"/>
                    </g>
                </svg>
            </a>
        </div>
    )
}

export default function AdditionCard() {
    return(
        <>
            <div className="bg-white px-4 py-4 border rounded-xl">
                <AdditionDetails />
            </div>
            <div className="bg-white px-4 py-4 border my-8 rounded-xl">
                <Recommendations />
            </div>
        </>
    )
}