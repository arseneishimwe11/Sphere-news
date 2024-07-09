import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import DvrIcon from "@mui/icons-material/Dvr";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const GroupAvatars = () => {
  return (
    <AvatarGroup>
      <Avatar
        sx={{ backgroundColor: "blue" }}
        alt="Aaaa Lllll"
        src="/static/images/avatar/1.jpg"
      />
      <Avatar
        sx={{ backgroundColor: "red" }}
        alt="Naaa Iiiii"
        src="/static/images/avatar/2.jpg"
      />
    </AvatarGroup>
  );
};

const ReviewStepper = () => {
  return (
    <>
      <div className="mt-[20px]">
        <label className="text-5xl font-bold">Weekly Digest: Top News</label>
      </div>
      <div className="mt-[20px]">
        <label className="text-lg">Weekly Digest: Top News</label>
      </div>
      <div className="mt-[20px]">
        <label className="text-lg">Weekly Digest: Top News</label>
      </div>
      <div className="flex flex-row my-[20px]">
        <GroupAvatars />
      </div>
      <Button
        variant="outlined"
        startIcon={<DvrIcon />}
        endIcon={<ArrowForwardIosIcon />}
      >
        Preview email
      </Button>
    </>
  );
};

export default ReviewStepper;
