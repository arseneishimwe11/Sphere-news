import React from "react";
import Link from "next/link";
import styles from "./TrendingVids.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";

const TrendingVideos = () => {
  const posts = [
    {
      url: "/video/1",
      title: "What the fed’s latest hike could mean",
      duration: "2:43",
    },
    {
      url: "/video/2",
      title: "What the fed’s latest hike could mean",
      duration: "2:43",
    },
    {
      url: "/video/3",
      title: "What the fed’s latest hike could mean",
      duration: "2:43",
    },
    {
      url: "/video/4",
      title: "What the fed’s latest hike could mean",
      duration: "2:43",
    },
  ];

  return (
    <div className={styles.trendingVideos}>
      {posts.map((post, index) => (
        <div key={index} className={styles.videoItem}>
          <div className={styles.thumbnail}>
            <img src="/img/news/discussion.png" alt="Video Thumbnail" />
          </div>
          <div className={styles.videoInfo}>
            <Link href={post.url}>
              <span className={styles.videoTitle}>{post.title}</span>
            </Link>
            <span className={styles.videoDuration}>
              <YouTubeIcon
                style={{
                  fontSize: "32px",
                  paddingRight: "5px",
                  color: "#003e6e",
                }}
              />{" "}
              {post.duration}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingVideos;
