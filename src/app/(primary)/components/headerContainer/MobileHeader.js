import React, { useEffect, useState, useContext } from "react";

import { MainContext } from "../../layout";

import { IconButton, Drawer, Box, Typography, Button } from "@mui/material";

import { styled, useTheme } from '@mui/material/styles';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';

import ForumIcon from '@mui/icons-material/Forum';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import usePopup from "@/app/hooks/usePopupState";

import { OrderCriteriaPopup } from "../popups/OrderCriteriaPopup";

import MobileFollowingHeader from "./Mobile/FollowingHeader";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: '#B1D5FA',
    [`& .${treeItemClasses.content}`]: {
        paddingRight: theme.spacing(2),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    '& ul': {
        margin: '0'
    },
    '& .Mui-selected': {
        backgroundColor: 'transparent !important'
    }
}));

const StyledTreeItem = React.forwardRef(function StyledTreeItem(props, ref) {
    const theme = useTheme();
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        colorForDarkMode,
        bgColorForDarkMode,
        ...other
    } = props;

    const styleProps = {
        '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
        '--tree-view-bg-color':
            theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
    };

    return (
        <StyledTreeItemRoot
            label={
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            p: 0.5,
                            pr: 0,
                        }}
                    >
                        {LabelIcon && <Box component={LabelIcon} color="inherit" sx={{ mr: 1, fontSize: '24px', color: 'rgb(160,160,160)' }} />}
                        <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1, fontSize: '16px' }}>
                            {labelText}
                        </Typography>
                        <Typography variant="caption" color="inherit" sx={{ fontSize: '14px' }}>
                            {labelInfo}
                        </Typography>
                    </Box>
                </>
            }
            style={styleProps}
            {...other}
            ref={ref}
        />
    );
});

function MobileSideMenuContent(props) {

    const textColor = '#000';

    return (
        <>
            <TreeView
                aria-label="gmail"
                defaultExpanded={['3']}
                defaultCollapseIcon={<KeyboardArrowDownOutlinedIcon />}
                defaultExpandIcon={<KeyboardArrowUpOutlinedIcon />}
                defaultEndIcon={<div style={{ width: 12 }} />}
                sx={{ height: 264, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                <StyledTreeItem sx={{ paddingY: '4px', paddingTop: '24px', color: textColor, backgroundColor: 'rgb(226,227,229)' }} nodeId="1" labelText="DASHBOARD" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }} nodeId="2" labelText="Recent Read" labelIcon={HistoryOutlinedIcon} labelInfo="2" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }} nodeId="3" labelText="Bookmarkd" labelIcon={BookmarkBorderOutlinedIcon} labelInfo="0" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }} nodeId="4" labelText="Annotated" labelIcon={DriveFileRenameOutlineOutlinedIcon} labelInfo="7" />
                <StyledTreeItem sx={{ paddingY: '4px', paddingTop: '24px', color: textColor, backgroundColor: 'rgb(226,227,229)' }} nodeId="5" labelText="FAVORITES" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                    nodeId="6"
                    labelText="Collections"
                    labelInfo="227"
                >
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="7"
                        labelText="Collection ABC"
                        labelIcon={StarBorderOutlinedIcon}
                    />
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="8"
                        labelText="Collection XYZ"
                        labelIcon={StarBorderOutlinedIcon}
                    />
                </StyledTreeItem>
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                    nodeId="9"
                    labelText="Users"
                    labelInfo="231"
                >
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="10"
                        labelText="Forums"
                        labelIcon={ForumIcon}
                    />
                </StyledTreeItem>
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                    nodeId="11"
                    labelText="Feeds"
                    labelInfo="212"
                >
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="12"
                        labelText="Forums"
                        labelIcon={ForumIcon}
                    />
                </StyledTreeItem>
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                    nodeId="13"
                    labelText="Tags"
                    labelInfo="112"
                >
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="14"
                        labelText="Forums"
                        labelIcon={ForumIcon}
                    />
                </StyledTreeItem>
                <StyledTreeItem sx={{ paddingY: '4px', paddingTop: '24px', color: textColor, backgroundColor: 'rgb(226,227,229)' }} nodeId="15" labelText="TEAM STREAMS" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                    nodeId="16"
                    labelText="Stream1"
                    labelInfo="151"
                >
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="17"
                        labelText="News"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="21"
                    />
                </StyledTreeItem>
                <StyledTreeItem sx={{ paddingY: '4px', paddingTop: '24px', color: textColor, backgroundColor: 'rgb(226,227,229)' }} nodeId="23" labelText="PERSONAL STREAMS" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }} nodeId="24" labelText="New Stream" labelIcon={AddOutlinedIcon} popoverType="new_stream" />
                <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                    nodeId="25"
                    labelText="System Stream"
                    labelInfo="151"
                >
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="26"
                        labelText="News"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="21"
                    />
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="27"
                        labelText="Web"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="27"
                    />
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="28"
                        labelText="Social"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="312"
                    />
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="29"
                        labelText="Gossip"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="31"
                    />
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="30"
                        labelText="Newsletter"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="121"
                    />
                    <StyledTreeItem sx={{ paddingY: '4px', color: textColor }}
                        nodeId="31"
                        labelText="Medea"
                        labelIcon={FolderOutlinedIcon}
                        labelInfo="15"
                    />
                </StyledTreeItem>
            </TreeView>
        </>
    );
}

export const MobileHeader = (props) => {

    const {currentPageStatus, isMobileSideMenuOpen, setIsMobileSideMenuOpen} = props;

    const { anchorEl, handleOpen, handleClose } = usePopup();

    return (
        <div className={`flex flex-row w-full items-center justify-between z-[101] top-0 fixed 
            ${currentPageStatus=="story_page" ? "bg-[transparent] p-4" : ""} 
            ${currentPageStatus=="normal" ? "bg-[#003E6E] p-4" : ""}
            ${currentPageStatus=="comment_page" ? "bg-[rgb(242,242,242)] p-4" : ""}
            ${currentPageStatus=="following_page" ? "bg-white px-4 py-2" : ""}
            `}
        >
            {
                currentPageStatus=='landing_page' && null
            }
            {
                // render different mobile header depends on the page(Story page or not)
                currentPageStatus == 'normal' &&
                <>
                    <img
                        src='/img/logo/sphere/mobile_logo.svg'
                    />
                    <div className='flex flex-row'>
                        <IconButton>
                            <img
                                src='/img/icons/refresh_white.svg'
                            />
                        </IconButton>
                        <IconButton>
                            <img
                                src='/img/icons/search.svg'
                            />
                        </IconButton>
                        <IconButton onClick={() => setIsMobileSideMenuOpen(true)}>
                            <img
                                src='/img/icons/hamburger_bar_equal.svg'
                            />
                        </IconButton>
                    </div>
                </>
            }
            {
                currentPageStatus == 'story_page' &&
                <>
                    <IconButton sx={{color: "white", border: '2px solid white', padding: '2px'}} size="small">
                        <KeyboardArrowLeftOutlinedIcon />
                    </IconButton>
                    <div className='flex flex-row gap-2'>
                        <IconButton sx={{color: "white", border: '2px solid white', padding: '2px'}} size="small">
                            <VisibilityOffOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{color: "white", border: '2px solid white', padding: '2px'}} size="small">
                            <StarBorderOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{color: "white", border: '2px solid white', padding: '2px'}} size="small">
                            <MoreHorizIcon />
                        </IconButton>
                    </div>
                </>
            }
            {
                currentPageStatus == 'comment_page' &&
                <>
                    <IconButton sx={{color: "black", padding: '2px'}} size="small">
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <p className="text-black text-[24px] font-bold">
                        Comments
                    </p>
                    <IconButton 
                        sx={{color: "rgb(126,126,126)", backgroundColor: 'rgb(232,232,232) !important', padding: '2px'}} 
                        size="large"
                        onClick={handleOpen}
                    >
                        <SwapVertIcon />
                    </IconButton>
                    <OrderCriteriaPopup 
                        anchorEl={anchorEl}
                        handleClose={handleClose}
                    />
                </>
            }
            {
                currentPageStatus == 'following_page' &&
                    <MobileFollowingHeader setIsMobileSideMenuOpen={setIsMobileSideMenuOpen} />
            }
            <Drawer
                anchor='left'
                open={isMobileSideMenuOpen}
                onClose={() => setIsMobileSideMenuOpen(false)}
                PaperProps={{
                    style: {
                        width: '312px'
                    }
                }}
            >
                <MobileSideMenuContent />
            </Drawer>
        </div>
    )
}
