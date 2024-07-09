import GroupsIcon from "@mui/icons-material/Groups";
import usePopup from "@/app/hooks/usePopupState";
import { Popover } from "@mui/material";
import CommunityPopup from "./CommunityPopup";

export const CommunityButton = ({py}) => {
  const { anchorEl, handleOpen, handleClose } = usePopup();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <button
        className={`flex flex-row gap-2 items-center bg-[#e7eef0] px-2 py-${py} rounded-full`}
        onClick={handleOpen}
      >
        <GroupsIcon sx={{ color: "#2a98dd" }} />
        <p>0</p>
      </button>
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
      >
        <CommunityPopup />
      </Popover>
    </>
  );
};
