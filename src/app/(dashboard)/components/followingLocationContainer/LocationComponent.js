import { useState } from "react";
import VertDelectIconButton from "../common/VertDeleteIconButton";
import { IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CategoryPopOver from "../common/followingCategory/CategoryPopOver";
import usePopup from "@/app/hooks/usePopupState";

const LocationComponent = (props) => {
    const { imageUrl, title } = props;
    const [showVertIcon, setShowVertIcon] = useState(false);
    const [removed, setRemoved] = useState(false);
    const { anchorEl, handleOpen, handleClose } = usePopup();

    return (
        !removed &&
        <div
            className="relative flex flex-row w-[30%] rounded-xl min-w-[320px] min-h-[90px] border border-solid my-2 items-center bg-white"
            onMouseOver={() => setShowVertIcon(true)}
            onMouseOut={() => setShowVertIcon(false)}
        >
            <div className="rounded-lg p-4" style={{ position: 'relative' }}>
                <img
                    src={imageUrl}
                    className="rounded-lg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton style={{ position: 'absolute', bottom: 3, right: 0 }} onClick={handleOpen}>
                    {props.index % 2 === 0 ? <CheckCircleIcon sx={{ fontSize: "20px", color: "black" }} /> : <ControlPointIcon sx={{ fontSize: "20px", color: "black" }} />}
                </IconButton>
            </div>
            <div className="flex flex-col flex-1 h-full py-4 relative">
                <p className="text-[14px] h-[50%] transform transition-transform translate-y-[30%]">{title}</p>
            </div>
            <VertDelectIconButton
                removed={removed}
                setRemoved={setRemoved}
                showVertIcon={showVertIcon}
                setShowVertIcon={setShowVertIcon}
            />
            <CategoryPopOver anchorEl={anchorEl} handleClose={handleClose} />
        </div >
    );
}

export default LocationComponent;