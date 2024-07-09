import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AuthorPopOver from "./AuthorPopOver";
import usePopup from "@/app/hooks/usePopupState";

const EachFollowingAuthor = (props) => {
    const {
        headerColorList,
        authorImage,
        authorName,
        authorDuty,
        authorMajor,
        authorArticlesNumber,
        authorFollowersNumber,
        authorRating,
        followingNumber,
        imageUrlList,
        id
    } = props;

    const FollowingPeopleContainer = () => {
        const imageElements = imageUrlList?.length > 0 && imageUrlList.map((item, index) => (
            <img
                key={index}
                src={item}
                className="w-[42px] h-[42px] rounded-full border border-solid border-blue-300 border-[3px]"
            />
        ));

        return (
            <>
                {imageElements.length > 0 ? imageElements : <button disabled className="text-[14px] text-[#B7B7B7] px-2 py-1 bg-[#E8E8E8] rounded-lg">No Matches</button>}
            </>
        );
    };
    const { anchorEl, handleOpen, handleClose } = usePopup();
    return (
        <div className='w-[22%] min-w-[250px] border border-solid rounded-xl bg-white relative'>
            <div className="w-full h-[70px]"></div>
            <div>
                <div className="absolute top-0 left-0 w-full h-[70px] rounded-t-xl" style={{ backgroundColor: `${headerColorList[2]}` }}></div>
                <div className="absolute top-0 left-0 w-[70%] h-[70px] bg-[#BAE8FF] rounded-tl-xl z-[0]" style={{ backgroundColor: `${headerColorList[1]}` }}></div>
                <svg height="70" width="10" className="absolute top-0 left-[63%]">
                    <ellipse cx="5" cy="35" rx="5" ry="35" fill={`${headerColorList[0]}`} />
                </svg>
                <div className="absolute top-0 left-0 w-[65%] h-[70px] bg-[#7ACAED] rounded-tl-xl" style={{ backgroundColor: `${headerColorList[0]}` }}></div>
            </div>
            <div>
                <img src={authorImage} className='w-[70px] h-[70px] mt-[-35px] ml-[25px] rounded-full border-white border border-solid border-[3px] relative z-[1]' />
            </div>
            <div className='m-4'>
                <p className='text-[#D1AD83] mb-1'>{authorName}</p>
                <p className='text-[17px] mb-1'>{authorDuty}</p>
                {/* <p className='text-[#A7A7A7] mb-1 author-paragraph h-12 overflow-hidden whitespace-nowrap'>{authorMajor}</p> */}
                <div className="author-paragraph h-[72px] overflow-hidden">
                    <p className="text-[#A7A7A7] mb-1">{authorMajor}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between m-3 p-3 text-[13px] rounded-xl bg-[#E7F0F5]'>
                <div className='flex flex-col items-center'>
                    <p className='text-[11px] text-[#7E8689]'>Articles</p>
                    <p className='font-[600]'>{authorArticlesNumber}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[11px] text-[#7E8689]'>Followers</p>
                    <p className='font-[600]'>{authorFollowersNumber}</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-[11px] text-[#7E8689]'>{id % 2 === 0 ? "Collections" : "Topics"}</p>
                    <p className='font-[600]'>{authorRating}</p>
                </div>
            </div>
            <div className='flex flex-row justify-between items-center m-4'>
                <div className="flex flex-row gap-1 min-h-[60px] items-center">
                    <FollowingPeopleContainer />
                </div>
                <button className={`${followingNumber > 0 ? 'block' : 'hidden'} bg-[#51BBEC] px-2 text-[13px] py-1 rounded-lg text-white`}>+{followingNumber}</button>
            </div>
            <div className='flex flex-row mx-6 mt-6 mb-4'>
                <Button variant="outlined" style={{ textTransform: 'none', borderColor: 'lightgray', borderRadius: '7px', width: '100%', color: 'black' }} className="flex flex-row" onClick={handleOpen}><label className="flex-grow">{id % 2 === 0 ? "Following" : "Follow"}</label><KeyboardArrowDownIcon /></Button>
                {/* <button className='border border-solid px-5 py-1 rounded-lg text-[12px] w-full'>+Follow</button> */}
                {/* <button className='border border-solid px-5 py-1 rounded-lg text-[12px]'>Message</button> */}
                <AuthorPopOver anchorEl={anchorEl} handleClose={handleClose} />
            </div>
        </div>
    );
}

export default EachFollowingAuthor;