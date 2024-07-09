import { useState } from "react";

import { Drawer, IconButton } from "@mui/material";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PushPinIcon from '@mui/icons-material/PushPin';
import CheckIcon from '@mui/icons-material/Check';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

import MobileStreamSettingDialog from "./MobileStreamSettingDialog";
import MobileAppearanceDialog from "./MobileAppearanceDialog";
import MobileLayoutSettingDialog from "./MobileLayoutSettingDialog";

const MobileFollowingOptionsDialog = (props) => {

    const { isOptionsDialogOpen, setIsOptionsDialogOpen } = props;

    const [ isStreamSettingDialogOpen, setIsStreamSettingDialogOpen ] = useState(false);
    const [ isAppearanceDialogOpen, setIsAppearanceDialogOpen ] = useState(false);
    const [ isLayoutSettingDialogOpen, setIsLayoutSettingDialogOpen ] = useState(false);

    return (
        <>
            <Drawer
                anchor='bottom'
                open={isOptionsDialogOpen}
                onClose={() => setIsOptionsDialogOpen(false)}
                PaperProps={{
                    style: {
                        borderRadius: '12px 12px 0 0'
                    }
                }}
            >
                <div className='flex flex-col rounded-t-xl bg-white p-4 gap-4'>
                    <div className='flex w-full justify-between items-start'>
                        <p className="text-[20px] font-bold text-black">Options</p>
                        <IconButton onClick={() => setIsOptionsDialogOpen(false)}>
                            <CloseOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false); setIsStreamSettingDialogOpen(true); }}>
                        <MenuRoundedIcon />
                        <p>Stream Setting</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false); setIsAppearanceDialogOpen(true); }}>
                        <TuneRoundedIcon />
                        <p>Appearance</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false); setIsLayoutSettingDialogOpen(true); }}>
                        <ViewQuiltRoundedIcon />
                        <p>Layout settings</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false);}}>
                        <FavoriteBorderIcon />
                        <p>Favorite</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false);}}>
                        <PushPinIcon />
                        <p>Pin</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false);}}>
                        <CheckIcon />
                        <p>Mark as Read</p>
                    </div>
                    <div className='flex flex-row items-center gap-2' onClick={() => { setIsOptionsDialogOpen(false);}}>
                        <ArchiveOutlinedIcon />
                        <p>Archive</p>
                    </div>
                </div>
            </Drawer>
            <MobileStreamSettingDialog isStreamSettingDialogOpen={isStreamSettingDialogOpen} setIsStreamSettingDialogOpen={setIsStreamSettingDialogOpen}/>
            <MobileAppearanceDialog isAppearanceDialogOpen={isAppearanceDialogOpen} setIsAppearanceDialogOpen={setIsAppearanceDialogOpen}/>
            <MobileLayoutSettingDialog isLayoutSettingDialogOpen={isLayoutSettingDialogOpen} setIsLayoutSettingDialogOpen={setIsLayoutSettingDialogOpen}/>
        </>
    )
}

export default MobileFollowingOptionsDialog;