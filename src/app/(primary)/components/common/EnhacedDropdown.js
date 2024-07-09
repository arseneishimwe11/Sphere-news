import { useState } from "react";
import usePopup from "@/app/hooks/usePopupState";
import { Button, Popover } from "@mui/material";
import { FeedFollowPopup } from "../popups/FeedFollowPopup";
import { CreateFolderOrStreamPopup } from "../popups/CreateFolderOrStreamPopup";

export const EnhancedDropdown = () => {

    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);

    const [ popoverContent, setPopoverContent ] = useState(0);

    return (
        <>
            <Button variant="outlined" size="small" onClick={handleOpen}>
                FOLLOW
            </Button>
            <Popover
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        maxHeight: 420,
                        overflowY: 'auto',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {
                    popoverContent == 0 ?
                        <FeedFollowPopup setPopoverContent={setPopoverContent}/> :
                        <CreateFolderOrStreamPopup popoverContent={popoverContent} setPopoverContent={setPopoverContent}/>
                }
            </Popover>
        </>
    )
}