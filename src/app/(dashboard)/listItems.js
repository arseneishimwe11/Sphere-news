import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <div className='flex flex-row'>
      <div className='mr-6'>
      </div>
      <div className='border-l-2 flex flex-col p-2'>
      <ListItemButton>
        <ListItemText primary="Account Details" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Sign In & Security" />
      </ListItemButton>
      </div>
    </div>
    <ListItemButton>
      <ListItemIcon>
        <LoyaltyOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Subscriptions" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RocketLaunchOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Collections" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <StarBorderOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Following" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CampaignOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Newsletter & Alerts" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <SettingsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpOutlineOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Help & Feedback" />
    </ListItemButton>
  </React.Fragment>
);
