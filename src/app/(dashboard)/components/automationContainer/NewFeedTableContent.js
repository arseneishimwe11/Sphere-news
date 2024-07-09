import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { TableRow, TableCell } from "@mui/material";
import ThreeDotPopover from "./ThreeDotPopOverFeed";
import { Button } from "@mui/material";
import StartStop from "./StartStop";
import { useState } from "react";
import Link from "next/link";

function createFeedData(id, feedNum, content, weekNum, running, status) {
  return { id, feedNum, content, weekNum, running, status };
}

const feedRows = [
  createFeedData(
    0,
    "AI Feed 1",
    "Articles related to new IPOs",
    116,
    true,
    true
  ),
  createFeedData(1, "AI Feed 2", "Ariticles related to HR", 116, false, false),
  createFeedData(
    2,
    "AI Feed 3",
    "Articles related to real estate",
    116,
    false,
    false
  ),
  createFeedData(
    3,
    "AI Feed 1",
    "Articles related to new IPOs",
    116,
    true,
    true
  ),
  createFeedData(4, "AI Feed 2", "Ariticles related to HR", 116, false, false),
  createFeedData(
    5,
    "AI Feed 3",
    "Articles related to real estate",
    116,
    false,
    false
  ),
];

const CustomTableCell = ({ value, label, icon }) => {
  return (
    <TableCell align="right">
      <div className="flex flex-col items-center">
        <p>{value}</p>
        <div className="flex flex-row items-center">
          <p>{label}&nbsp;</p>
          {icon}
        </div>
      </div>
    </TableCell>
  );
};

const NewFeedTableContent = () => {
  const [feedData, setFeedData] = useState(feedRows);
  const deleteFeedData = (id) => {
    setFeedData([...feedData].filter((feed) => feed.id !== id));
  };
  return (
    <>
      {feedData.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <PhotoFilterIcon />
          </TableCell>
          <TableCell sx={{ paddingLeft: "0px" }}>
            <p>{row.feedNum}</p>
            <p>{row.content}</p>
          </TableCell>
          <CustomTableCell value={row.weekNum} label="articles/week" />
          <TableCell>
            <Link href="/FollowingFeeds">
              <Button
                variant="outlined"
                sx={{ color: "gray", borderColor: "gray" }}
              >
                <EditOutlinedIcon />
                &nbsp;
                {"Refine"}
              </Button>
            </Link>
          </TableCell>
          <TableCell>
            <StartStop process={row.id % 2 === 0 ? true : false} />
          </TableCell>
          <TableCell align="right">
            <div className="flex flex-row justify-end">
              <p
                className={`p-[7px] rounded-full ${
                  row.status ? "bg-green-200" : "bg-gray-200"
                }`}
              >
                {row.status ? "Active" : "Disabled"}
              </p>
            </div>
          </TableCell>
          <TableCell>
            <ThreeDotPopover index={row.id} deleteFeedData={deleteFeedData} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default NewFeedTableContent;
