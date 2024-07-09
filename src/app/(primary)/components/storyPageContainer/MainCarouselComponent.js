import { useState } from 'react';

import './MainCarouselComponent.css';

import { ImageSlider } from '../common';

import { Grid } from '@mui/material';
import {
    Add as AddIcon, 
    Info as InfoIcon,
    ExpandMore as ExpandMoreIcon,
    ExpandLess as ExpandLessIcon,
    Close as CloseIcon
} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import TestCarousel from '@/app/(dashboard)/components/common/TestCarousel';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
}));

const TopAuthorsDialog = ({onClose, open}) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const AuthorCard = ({AuthorName, AvatarImgSrc, NumberOfFollowers, description}) => {
        return(
            <Card sx={{ maxWidth: 400 }}>
                <CardHeader
                    avatar={
                        <Avatar alt={AuthorName} variant="rounded" >
                            <img src={AvatarImgSrc} />
                        </Avatar>
                    }
                    action={
                        <Button variant="outlined" size="small">Follow</Button>
                    }
                    title={AuthorName}
                    subheader={NumberOfFollowers + " followers"}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    return(
        <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                maxWidth="lg"
                id="topauthorsdialog"
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <div className="flex flex-row">
                        <img
                            src="/img/icons/grid.svg"
                        />
                        <h3 className="mx-4 text-[24px] text-[#000]">Top Authors</h3>
                    </div>
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <DialogContentText>
                        In total, 347 authors & journalist contributed to this story.
                    </DialogContentText>
                </DialogContent>
                <DialogContent dividers>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Eric Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Jane Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Jane Smith has published 5,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Robert Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Robert Smith has published 9,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Azure Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "On-premises,hybrid,multicloud,or at the edge-build on your terms with best-in-class tools,your..."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Ana Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Dave Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Ode Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "R. Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Ted Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <AuthorCard 
                                AuthorName = "Angelo Smith"
                                AvatarImgSrc = "/img/logo/source/logo_aws.svg"
                                NumberOfFollowers = "21k"
                                description = "Eric Smith has published 21,477 stories in the past 3 months."
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                
            </BootstrapDialog>
    );
}

const UserListRelatedTopic = () => {
    const [showUpdatedInfo, setShowUpdatedInfo] = useState(false);
    const [showTopAuthorsDialog, setShowTopAuthorsDialog] = useState(false);

    const user_list = [
        {
            img: '/img/avatar/Image_332.png',
            name: 'Daniel Lopez',
            location: 'Austin, TX'
        },
        {
            img: '/img/avatar/Image_333.png',
            name: 'Franklin Benton',
            location: 'Newark, DE'
        }
    ]

    const handleClickInfoIcon = () => {
        setShowTopAuthorsDialog(true);
    }

    const handleCloseDialog = () => {
        setShowTopAuthorsDialog(false);
    }

    return (
        <div className="UserListRelatedTopic">
            <TopAuthorsDialog
                onClose={handleCloseDialog}
                open={showTopAuthorsDialog}
            />
             
            <div className="UserAvatarList">
                {
                    user_list.map((item, index) => {
                        const ml = index > 0 ? '-ml-[24px]' : 'ml-0';
                        const zIndex = user_list.length - index;
                        return (
                            <div className={`${ml} z-[${zIndex}]`}>
                                <img src={item.img} />
                            </div>
                        );
                    })
                }
                <IconButton aria-label="top authors" size="small" onClick={handleClickInfoIcon} >
                    <InfoIcon className='text-md text-[#5DB2D2]'/>
                </IconButton>
            </div>
            <div className='w-[40px] h-[6px] bg-[#6CB1CE] my-4'></div>
            <p className="UserInfoList">
                {
                    user_list.map((item, index) => {
                        return (
                            <>
                                {index > 0 ? ', ' : ''}<span className='username'>{item.name}</span>&nbsp;<span className='userlocation'>in {item.location}</span>
                            </>
                        );
                    })
                }
            </p>
            <Stack direction="row" alignItems="center" spacing={1}>
                <p>Published: 12:02pm, Dec 3, 2023</p>
                <IconButton aria-label="last updated time" size="small" onClick={()=>{setShowUpdatedInfo(!showUpdatedInfo)}}>
                    { showUpdatedInfo ? <ExpandLessIcon fontSize="inherit" /> : <ExpandMoreIcon fontSize="inherit" />}
                </IconButton>
            </Stack>
            <Collapse in={showUpdatedInfo}><p>Updated: 12:07pm, Dec 4, 2023</p></Collapse>
        </div>
    )
}

const TopicsComponent = () => {
    return (
        <>
            <div className='TopicsComponent'>
                <div>
                    <h6>Topic</h6>&nbsp;|&nbsp;
                    <span>Semiconductors</span>
                </div>
                <button>
                    <AddIcon sx={{color: '#000'}}/>
                </button>
            </div>
            <UserListRelatedTopic />
        </>
    )
}


const LandingDescriptionComponent = () => {
    return (
        <div id="LandingDescriptionComponent">
            <div className='channeltitle' >
                <div className='flex w-[70%] items-center'>
                    <h4>BUSINESS</h4>
                    <div className='flex-grow h-[4px] mx-4 bg-[#B0D3F1]'></div>
                </div>
                <div className='flex-grow h-[4px] mx-2 ml-16 bg-[#839DA4]'></div>
            </div>
            <div className='channelcontent'>
                <h1>
                    An Overlooked Threat From Climate Change Puts Millions at Risk Right Now
                </h1>
                <p>
                    <span className='font-bold'>Daniel Lopez,</span> Team Lead and his team are developing this outstanding platform.
                </p>
            </div>
            <TopicsComponent/>
        </div>
    )
}

const MainCarouselComponent = () => {
    return (
        <div id="MainCarouselComponent" className='componentcontainer py-12'>
            <Grid container spacing={10} className='pt-[28px] px-4'>
                <Grid item xs={12} lg={7}>
                    <TestCarousel propsSliceNum={6} />
                </Grid>
                <Grid item xs={12} lg={5}>
                    <LandingDescriptionComponent />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainCarouselComponent;