import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DoneIcon from "@mui/icons-material/Done";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PushPinIcon from "@mui/icons-material/PushPin";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

const ActionsDropdown = () => {
  const actions = [
    "Bookmark",
    "Amplify",
    "Mark As Read",
    "Mark Above As Read",
    "Mark Below As Read",
    "Share",
    "Favorite",
    "Pin",
    "Archive",
  ];
  const icons = [
    <BookmarkBorderOutlinedIcon />,
    <RocketLaunchOutlinedIcon />,
    <DoneIcon />,
    <DoneIcon />,
    <DoneIcon />,
    <IosShareIcon />,
    <FavoriteBorderIcon />,
    <PushPinIcon />,
    <ArchiveOutlinedIcon />,
  ];
  return (
    <>
      <div className="flex flex-row m-2">
        <b className="text-[gray] text-[12px] pt-2">Actions</b>
      </div>
      {actions.map((action, index) => (
        <div key={index}>
          <div className="flex flex-row items-center pl-2 pb-3 gap-2">
            {icons[index]}
            <p className="pr-2">{action}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ActionsDropdown;
