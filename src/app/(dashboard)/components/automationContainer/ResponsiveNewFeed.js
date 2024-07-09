import { Button } from "@mui/material";
import Link from "next/link";

const ResponsiveNewFeed = () => {
  return (
    <Link href="/FollowingFeeds">
      <Button
        variant="contained"
        className="px-4 py-2 text-[20px] font-bold"
        style={{
          textTransform: "none",
          backgroundColor: "#1F232C",
          borderRadius: "7px",
        }}
      >
        + New AI Feed
      </Button>
    </Link>
  );
};

export default ResponsiveNewFeed;
