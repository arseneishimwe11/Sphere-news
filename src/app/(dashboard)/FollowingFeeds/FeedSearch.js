import { Button, Grid } from "@mui/material";
import usePopup from "@/app/hooks/usePopupState";
import FeedPopOver from "../components/common/feedSearchCategory/FeedPopOver";

function createFeedData(
  imgUrl,
  title,
  followingStatus,
  url,
  label,
  bullets,
  followers,
  relevance,
  articlesPerWeek
) {
  return {
    imgUrl,
    title,
    followingStatus,
    url,
    label,
    bullets,
    followers,
    relevance,
    articlesPerWeek,
  };
}
const feeds = [
  createFeedData(
    "img/feedIcon/forbe.png",
    "Forbes.com: Energy News",
    true,
    "forbes.com",
    "Forbes is a leading source for reliable news and updated analysis on Energy. Read the breaking Energy coverage",
    [
      "North Carolina Becomes A Mecca For Green Energy Investments",
      "New Way To Get 700 C Degrees Heat And Electricity From Hydroge...",
      "This Startup Hopes its Nanomaterial Fuel Tanks Will Jumpstart The ...",
    ],
    "23K",
    0.9,
    3
  ),
  createFeedData(
    "img/feedIcon/verge.png",
    "The Verge - Energies",
    false,
    "theverge.com",
    "Forbes is a leading source for reliable news and updated analysis on Energy. Read the breaking Energy coverage",
    [
      "North Carolina Becomes A Mecca For Green Energy Investments",
      "New Way To Get 700 C Degrees Heat And Electricity From Hydroge...",
      "This Startup Hopes its Nanomaterial Fuel Tanks Will Jumpstart The ...",
    ],
    "5K",
    0.8,
    5
  ),
  createFeedData(
    "img/feedIcon/nyt.png",
    "NYT > Business > Energy & Environment",
    false,
    "nytimes.com",
    "Forbes is a leading source for reliable news and updated analysis on Energy. Read the breaking Energy coverage",
    [
      "North Carolina Becomes A Mecca For Green Energy Investments",
      "New Way To Get 700 C Degrees Heat And Electricity From Hydroge...",
      "This Startup Hopes its Nanomaterial Fuel Tanks Will Jumpstart The ...",
    ],
    "11K",
    0.9,
    8
  ),
  createFeedData(
    "img/feedIcon/energy.png",
    "Energy Voice",
    false,
    "energyvoice.com",
    "Forbes is a leading source for reliable news and updated analysis on Energy. Read the breaking Energy coverage",
    [
      "North Carolina Becomes A Mecca For Green Energy Investments",
      "New Way To Get 700 C Degrees Heat And Electricity From Hydroge...",
      "This Startup Hopes its Nanomaterial Fuel Tanks Will Jumpstart The ...",
    ],
    "4K",
    0.9,
    90
  ),
];
const EachFeedSearch = ({
  imgUrl,
  title,
  followingStatus,
  url,
  label,
  bullets,
  followers,
  relevance,
  articlesPerWeek,
}) => {
  const { anchorEl, handleOpen, handleClose } = usePopup();
  return (
    <Grid item xs={6}>
      <div
        className="flex flex-row gap-[20px] m-[10px] p-[20px]"
        style={{
          border: "solid",
          borderColor: "#CCC",
          borderWidth: "1px",
          borderRadius: "5px",
        }}
      >
        <div>
          <img src={imgUrl} width="100px" height="100px" />
        </div>
        <div>
          <div className="flex flex-row items-center gap-[5px] justify-content h-[50px]">
            <p className="font-bold text-[20px] flex-grow">{title}</p>
            <p className="text-[12px]">SIMILAR FEEDS</p>
            {followingStatus ? (
              <Button
                onClick={handleOpen}
                variant="outlined"
                sx={{ borderColor: "#999", color: "#999" }}
              >
                Following
              </Button>
            ) : (
              <Button onClick={handleOpen} variant="outlined">
                Follow
              </Button>
            )}
          </div>
          <p className="mb-[10px]">{url}</p>
          <p className="h-[50px] w-[80%] overflow-hidden mb-[10px]">{label}</p>
          {bullets.map((bullet, index) => (
            <p key={index} className="h-[25px] overflow-hidden">
              &middot;&nbsp;{bullet}
            </p>
          ))}
          <div className="flex flex-row mt-[10px] gap-[30px] items-center">
            <div>
              <p>{followers}</p>
              <p>followers</p>
            </div>
            <div>
              <div className="bg-gray-200 my-[10px] rounded-full">
                <div className="rounded-full h-1 bg-gray-600 w-[90%]"></div>
              </div>
              <p>relevance</p>
            </div>
            <div>
              <p>{articlesPerWeek}</p>
              <p>articles per week</p>
            </div>
          </div>
        </div>
      </div>
      <FeedPopOver anchorEl={anchorEl} handleClose={handleClose} />
    </Grid>
  );
};

const FeedSearch = () => {
  return (
    <Grid container spacing={2}>
      {feeds.map((feed, index) => (
        <EachFeedSearch key={index} {...feed} />
      ))}
    </Grid>
  );
};
export default FeedSearch;
