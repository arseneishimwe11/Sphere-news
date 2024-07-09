import { Paper, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from "next/link";
import CategoryPopOver from "./followingCategory/CategoryPopOver";
import usePopup from "@/app/hooks/usePopupState";

const SearchResultPopup = ({ searchText, searchResultRef, searchPopupRef, labelText }) => {
    const categoryItems = ['Crunch', 'The Comic', 'Machines', 'Novels', 'is doing Great'];
    const globalItems = ['Channels', 'Topics', 'Users & Authors', 'Locations', 'RSS Feeds'];

    const SearchCategoryItem = ({ item, index, searchPopupRef }) => {
        const { anchorEl, handleOpen, handleClose } = usePopup();
        return (
            <>
                <div className="flex flex-grow items-center gap-[20px] mx-3 my-1">
                    <img src={`img/logo/source/${index}.png`} width="30px" />
                    <div className="flex flex-grow gap-[10px]">
                        <p className="font-bold">{`${searchText}`}</p>
                        <p>{` ${item}`}</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p>{`${Math.floor(Math.random() * 5 + 17)} followers`}</p>
                        <IconButton color="primary" onClick={handleOpen}>
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                </div>
                <CategoryPopOver searchPopupRef={searchPopupRef} anchorEl={anchorEl} handleClose={handleClose} />
            </>
        );
    }
    const SearchGlobalItem = ({ item }) => {
        return (
            <Link href={`/Following${item}`}>
                <div className="flex flex-row items-center gap-[20px] m-4">
                    <div className="border-solid border-[1px] border-[#999] rounded-[5px] p-[2px]">
                        <img src="img/icons/colorful_search.png" width="20px" />
                    </div>
                    <p>Search for <span className="font-bold">{searchText}</span> in <span className="font-bold">{item}</span></p>
                </div>
            </Link>
        );
    }
    return (
        <Paper sx={{ paddingY: "10px" }} ref={searchResultRef}>
            <p className="m-2 text-[12px] text-[#999]">
                {labelText ?? "CATEGORIES"}
            </p>
            {categoryItems.map((item, index) => <SearchCategoryItem key={index} item={item} index={index + 1} searchPopupRef={searchPopupRef} />)}
            <p className="m-2 text-[12px] text-[#999]">
                GLOBAL SEARCH
            </p>
            {globalItems.map((item, index) => <SearchGlobalItem key={index} item={item} />)}
        </Paper>
    );
}

export default SearchResultPopup;