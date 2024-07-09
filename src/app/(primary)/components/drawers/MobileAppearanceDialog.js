import { useContext } from "react";
import { usePathname } from "next/navigation";

import { MainContext } from "../../layout";

import { DarkModeSelector } from "../common";

import { Divider, Drawer, IconButton, Switch } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const MobileAppearanceDialog = (props) => {

    const { isAppearanceDialogOpen, setIsAppearanceDialogOpen } = props;

    const pathname = usePathname();

    const {
        emojis, setEmojis,
        showReactionInArticleAsses,
        setShowReactionInArticleAsses,
        sources, setSources,
        biasRate, setBiasRate,
        titlePosition, setTitlePosition,
        showContentInArticleAsses,
        setShowContentInArticleAsses,
        showPreviewButtonInArticleAsses,
        setShowPreviewButtonInArticleAsses
    } = useContext(MainContext);

    return (
        <Drawer
            anchor='bottom'
            open={isAppearanceDialogOpen}
            onClose={() => setIsAppearanceDialogOpen(false)}
            PaperProps={{
                style: {
                    borderRadius: '12px 12px 0 0'
                }
            }}
        >
            <div className='flex flex-col rounded-t-xl bg-white p-4 gap-2'>
                <div className='flex w-full justify-between items-start'>
                    <p className="text-[20px] text-black">Appearance</p>
                    <IconButton onClick={() => setIsAppearanceDialogOpen(false)}>
                        <CloseOutlinedIcon />
                    </IconButton>
                </div>
                <DarkModeSelector />
                <div className='flex w-full justify-between items-center'>
                    <p>Title Placement</p>
                    <select value={titlePosition} onChange={(e) => setTitlePosition(e.target.value)}>
                        <option value="below">Below Image</option>
                        <option value="above">Above Image</option>
                    </select>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Emojis</p>
                    <Switch checked={emojis} onChange={(e) => setEmojis(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Engagement</p>
                    <Switch checked={showReactionInArticleAsses} onChange={(e) => setShowReactionInArticleAsses(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Sources</p>
                    <Switch checked={sources} onChange={(e) => setSources(e.target.checked)} />
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Content</p>
                    <Switch checked={showContentInArticleAsses} onChange={(e) => setShowContentInArticleAsses(e.target.checked)} />
                </div>
                {
                    !pathname.startsWith('/Following') &&
                    <>
                        <div className='flex w-full justify-between items-center'>
                            <p>Bias Rating</p>
                            <Switch checked={biasRate} onChange={(e) => setBiasRate(e.target.checked)} />
                        </div>
                        <div className='flex w-full justify-between items-center'>
                            <p>Preview</p>
                            <Switch checked={showPreviewButtonInArticleAsses} onChange={(e) => setShowPreviewButtonInArticleAsses(e.target.checked)} />
                        </div>
                    </>
                }
                <div className='flex w-full justify-between items-center'>
                    <p>Font Size</p>
                    <select>
                        <option value="Large">Large</option>
                        <option value="Medium">Medium</option>
                        <option value="Small">Small</option>
                    </select>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Font</p>
                    <select>
                        <option value="proxima_nova">Proxima Nova</option>
                    </select>
                </div>
                <Divider />
                <p className="text-[20px]">General</p>
                <div className='flex w-full justify-between items-center'>
                    <p>Display Language</p>
                    <select>
                        <option value="">Browser preferences</option>
                    </select>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <p>Infinite Scroll</p>
                    <Switch />
                </div>
            </div>
        </Drawer>
    )
};

export default MobileAppearanceDialog;