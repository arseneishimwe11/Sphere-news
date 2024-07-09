import { useState } from "react";
import usePopup from "@/app/hooks/usePopupState";
import { Button, Popover } from "@mui/material";
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const NoteItem = (props) => {
    const { img_src, name, time, notes } = props;

    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="w-[320px] p-2 m-4 border border-1 border-gray-200 rounded-md relative"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img
                className="float-left rounded-full w-[24px] h-[24px] mx-2"
                src={img_src}
            />
            <div>
                <p className="text-gray-800"><b>{name}</b>&nbsp;<span className="text-[12px] text-gray-600">{time}</span></p>
                <p className="text-[12px]">{notes}</p>
            </div>
            {
                isHover &&
                <div className="flex gap-2 absolute right-0 top-0">
                    <Button size="small">EDIT</Button>
                    <Button size="small">DELETE</Button>
                </div>
            }
        </div>
    )
}
const NotesAnnotationContent = () => {
    const [ newNotes, setNewNotes ] = useState('');
    return (
        <div className="rounded-xl border border-1 border-gray-40 overflow-hidden">
            <div className="bg-gray-200 p-2 text-[12px] text-black font-bold">
                <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: 20, color: '#555' }} />
                &nbsp;Notes & Annotations
            </div>
            <div className="max-h-[320px] overflow-y-auto">
                <NoteItem
                    img_src="/img/avatar/Image_332.png"
                    time="Yesterday"
                    name="You"
                    notes="My first private Notes"
                />
                <NoteItem
                    img_src="/img/avatar/Image_332.png"
                    time="Yesterday"
                    name="Joe Smith"
                    notes="My first private Notes"
                />
                <div
                    className="w-[320px] p-2 m-4 border border-1 border-gray-200 rounded-md relative"
                >
                    <img
                        className="float-left rounded-full w-[24px] h-[24px] mx-2"
                        src="/img/avatar/Image_332.png"
                    />
                    <textarea className="px-2 outline-none" placeholder="Add notes..." value={newNotes} onChange={(e) => setNewNotes(e.target.value)}/>
                    {
                        newNotes.length > 0 &&
                        <div className="flex gap-2 mt-2">
                            <Button size="small" sx={{fontSize:12}} variant="contained">ADD NOTE</Button>
                            <Button size="small" sx={{fontSize:12}} variant="outlined" color="error" >CANCEL</Button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export const NotesAnnotationPopover = () => {
    const { anchorEl, handleOpen, handleClose } = usePopup();
    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
        <>
            <div className="flex flex-row gap-2 items-center bg-[#e7eef0] px-3 py-2 rounded-full" onClick={handleOpen}>
                <DriveFileRenameOutlineIcon sx={{ color: "#575d5d" }} />
                <p>0</p>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                PaperProps={{
                    style: {
                        borderRadius: '12px'
                    }
                }}
            >
                <NotesAnnotationContent />
            </Popover>
        </>
    );
};
