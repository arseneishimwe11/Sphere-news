"use client";
import { createContext, useEffect, useState } from "react";

import "./primary.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GmailTreeView from "./components/LayoutLeftPanel";

export const MainContext = createContext();

// Left Side Panel Drawer
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function MainLayout({ children }) {
  const [isMobile, setIsMobile] = useState(undefined);
  const [currentPageStatus, setCurrentPageStatus] = useState("normal"); // for tracking current page to change the mobile header and footer accordingly
  const [bookmarkStatus, setBookmarkStatus] = useState(0);
  const [isMobileSideMenuOpen, setIsMobileSideMenuOpen] = useState(false);
  const [showReactionInArticleAsses, setShowReactionInArticleAsses] = useState(true);
  const [showContentInArticleAsses, setShowContentInArticleAsses] = useState(true);
  const [showPreviewButtonInArticleAsses, setShowPreviewButtonInArticleAsses] = useState(true);
  const [titlePosition, setTitlePosition] = useState('below');
  const [listNewsCardViewMode, setListNewsCardViewMode] = useState('card');
  const [mobileNewsListGroupBy, setMobileNewsListGroupBy] = useState(null);
  const [mobileChannelLayout, setMobileChannelLayout] = useState('list');

  // states for setting for home page
  const [emojis, setEmojis] = useState(true);
  const [engagement, setEngagement] = useState(1);
  const [sources, setSources] = useState(false);
  const [biasRate, setBiasRate] = useState(false);
  const [lightBulb, setLightBulb] = useState(true);

  // states for setting for Story page
  const [showMoreCoverage, setShowMoreCoverage] = useState(true);
  const [showCoverageDetail, setShowCoverageDetail] = useState(true);
  const [showBiasDistribution, setShowBiasDistribution] = useState(true);
  const [showFactuality, setShowFactuality] = useState(true);
  const [showCountries, setShowCountries] = useState(true);
  const [showMediaOwnership, setShowMediaOwnership] = useState(true);
  const [showFAQ, setShowFAQ] = useState(true);
  const [widgetStatus, setWidgetStatus] = useState(0);

  const handleBookmarkClick = (item) => {
    setBookmarkStatus(item);
  };

  useEffect(() => {
    window.innerWidth < 442 ? setIsMobile(true) : setIsMobile(false);

    const ResizeListener = () => {
      window.innerWidth < 442 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener("resize", ResizeListener);
    return () => {
      window.removeEventListener("resize", ResizeListener);
    };
  }, []);

  // for left side panel drawer
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const [drawerBgColor, setDrawerBgColor] = useState("#003E6E");
  const [drawerTextColor, setDrawerTextColor] = useState("#FFFFFF");

  const handleChangeDrawerColor = (param) => {
    setDrawerBgColor(param.bgColor);
    setDrawerTextColor(param.textColor);
  };

  if (isMobile === undefined) {
    return null;
  }

  return (
    <>
      {!isMobile && (
        <Box>
          <MainContext.Provider value={{ 
            isMobile, 
            setCurrentPageStatus, 
            bookmarkStatus,
            
            // state for setting of home page
            emojis, setEmojis,
            engagement, setEngagement,
            sources, setSources,
            biasRate, setBiasRate,
            lightBulb, setLightBulb,

            // state for setting of story page
            showMoreCoverage, setShowMoreCoverage,
            showCoverageDetail, setShowCoverageDetail,
            showBiasDistribution, setShowBiasDistribution,
            showFactuality, setShowFactuality,
            showCountries, setShowCountries,
            showMediaOwnership, setShowMediaOwnership,
            showFAQ, setShowFAQ,
            widgetStatus, setWidgetStatus,

            // for article analyze
            showReactionInArticleAsses,
            setShowReactionInArticleAsses,
            showContentInArticleAsses,
            setShowContentInArticleAsses,
            listNewsCardViewMode,
            setListNewsCardViewMode,
            
          }}>
            <AppBar position="relative" open={open} sx={{ boxShadow: "none" }}>
              <Header isMobile={isMobile} handleDrawerOpen={handleDrawerOpen} />
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  border: "0",
                  background: drawerBgColor,
                },
              }}
              className="transition-all duration-300"
              variant="persistent"
              anchor="left"
              open={open}
            >
              <GmailTreeView
                textColor={drawerTextColor}
                handleBookmarkClick={handleBookmarkClick}
              />
              <ul
                className="flex flex-row gap-2 absolute bottom-0 w-full p-2 z-[51]"
                style={{ background: drawerBgColor }}
              >
                <li
                  className="hover:cursor-pointer border border-2 border-gray-300 rounded-full w-[18px] h-[18px] bg-[#003E6E]"
                  onClick={() =>
                    handleChangeDrawerColor({
                      bgColor: "#003E6E",
                      textColor: "#FFFFFF",
                    })
                  }
                ></li>
                <li
                  className="hover:cursor-pointer border border-2 border-gray-300 rounded-full w-[18px] h-[18px] bg-[#FFFFFF]"
                  onClick={() =>
                    handleChangeDrawerColor({
                      bgColor: "#FFFFFF",
                      textColor: "#171717",
                    })
                  }
                ></li>
                <li
                  className="hover:cursor-pointer border border-2 border-gray-300 rounded-full w-[18px] h-[18px] bg-[#171717]"
                  onClick={() =>
                    handleChangeDrawerColor({
                      bgColor: "#171717",
                      textColor: "#FFFFFF",
                    })
                  }
                ></li>
              </ul>
            </Drawer>
            <Main open={open} sx={{ padding: "0 !important" }}>
              {children}
            </Main>
            <Footer isMobile={isMobile} />
          </MainContext.Provider>
        </Box>
      )}
      {isMobile && (
        <>
          <Header isMobile={isMobile} currentPageStatus={currentPageStatus} isMobileSideMenuOpen={isMobileSideMenuOpen} setIsMobileSideMenuOpen={setIsMobileSideMenuOpen} />
          <MainContext.Provider
            value={{
              isMobile,
              currentPageStatus,
              setCurrentPageStatus,
              setIsMobileSideMenuOpen,

              // for article analyze
              showReactionInArticleAsses,
              setShowReactionInArticleAsses,
              showContentInArticleAsses,
              setShowContentInArticleAsses,
              listNewsCardViewMode,
              setListNewsCardViewMode,
              showPreviewButtonInArticleAsses,
              setShowPreviewButtonInArticleAsses,
              biasRate,
              setBiasRate,

              //for setting
              emojis,
              setEmojis,
              sources,
              setSources,

              mobileNewsListGroupBy,
              setMobileNewsListGroupBy,
              mobileChannelLayout,
              setMobileChannelLayout,
              titlePosition, 
              setTitlePosition
            }}
          >
            {children}
          </MainContext.Provider>
          <Footer isMobile={isMobile} currentPageStatus={currentPageStatus} />
        </>
      )}
    </>
  );
}
